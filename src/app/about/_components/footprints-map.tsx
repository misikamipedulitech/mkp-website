"use client";

import { ArrowRight, MapPin, Minus, Plus, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  KeepScale,
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";
import { twMerge } from "tailwind-merge";
import { Program, pastPrograms } from "@/lib/programs";
import {
  MAP_BOUNDS,
  MAP_HEIGHT,
  MAP_WIDTH,
  contextPaths,
  landPaths,
} from "./footprints-map-data";

type Coordinates = Pick<Program["location"], "lat" | "lng">;

// Zoom is capped so the closest pins (Karo and Samosir, North Sumatra) can be
// tapped separately on a phone without zooming in endlessly.
const MIN_ZOOM = 1;
const MAX_ZOOM = 8;
// Pins don't start a pan or a double-click zoom, so tapping one always selects it.
const PIN_CLASS = "footprints-pin";

function pinId(year: number) {
  return `footprints-pin-${year}`;
}

function isOnMap({ lat, lng }: Coordinates) {
  const { west, east, north, south } = MAP_BOUNDS;
  return lng >= west && lng <= east && lat <= north && lat >= south;
}

// Same projection the land outline was generated with, as CSS percentages.
function toMapPosition({ lat, lng }: Coordinates) {
  const { west, east, north, south } = MAP_BOUNDS;
  return {
    left: `${((lng - west) / (east - west)) * 100}%`,
    top: `${((north - lat) / (north - south)) * 100}%`,
  };
}

function placeName({ title, location }: Program) {
  return title === location.name ? title : `${title}, ${location.name}`;
}

for (const { title, location } of pastPrograms) {
  if (!isOnMap(location)) {
    const message = `${title} (${location.lat}, ${location.lng}) is outside the footprints map; widen BOUNDS in scripts/generate-footprints-map.mjs and re-run it.`;
    if (process.env.NODE_ENV === "development") throw new Error(message);
    console.warn(message);
  }
}

const mappedPrograms = pastPrograms.filter((program) =>
  isOnMap(program.location),
);

export function FootprintsMap() {
  const [selectedYear, setSelectedYear] = useState(pastPrograms[0].year);
  const selected =
    pastPrograms.find((program) => program.year === selectedYear) ??
    pastPrograms[0];

  const mapRef = useRef<ReactZoomPanPinchRef>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMaxZoom, setIsMaxZoom] = useState(false);

  // When zoomed in, choosing a program from the list pans the map to its pin.
  function showProgram(year: number) {
    setSelectedYear(year);
    const map = mapRef.current;
    if (map && map.state.scale > MIN_ZOOM) {
      map.zoomToElement(pinId(year), {
        scale: map.state.scale,
        animationTime: 300,
      });
    }
  }

  return (
    <div className="mt-10">
      <div className="relative rounded-2xl bg-muted p-4 sm:p-8">
        <div
          role="group"
          aria-label="Map of Indonesia and Singapore"
          className="relative overflow-hidden rounded-lg"
        >
          <TransformWrapper
            ref={mapRef}
            minScale={MIN_ZOOM}
            maxScale={MAX_ZOOM}
            limitToBounds
            // Panning stays off until zoomed in, so swiping over the map
            // still scrolls the page on mobile.
            panning={{ disabled: !isZoomed, excluded: [PIN_CLASS] }}
            // Wheel and trackpad scrolling keep scrolling the page.
            wheel={{ disabled: true }}
            trackPadPanning={{ disabled: true }}
            doubleClick={{ mode: "zoomIn", excluded: [PIN_CLASS] }}
            onTransform={(_, { scale }) => {
              setIsZoomed(scale > MIN_ZOOM + 0.01);
              setIsMaxZoom(scale >= MAX_ZOOM - 0.01);
            }}
          >
            <TransformComponent
              wrapperStyle={{ width: "100%" }}
              contentStyle={{ width: "100%" }}
            >
              <div
                className="relative w-full"
                style={{ aspectRatio: `${MAP_WIDTH} / ${MAP_HEIGHT}` }}
              >
                <svg
                  aria-hidden
                  viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
                  className="absolute inset-0 size-full"
                >
                  <g className="fill-secondary-text/15">
                    {contextPaths.map((d, index) => (
                      <path key={index} d={d} />
                    ))}
                  </g>
                  {/* The stroke thickens small islands (and Singapore) enough to see. */}
                  <g className="fill-secondary-text stroke-secondary-text opacity-80">
                    {landPaths.map((d, index) => (
                      <path
                        key={index}
                        d={d}
                        strokeWidth={1.5}
                        strokeLinejoin="round"
                      />
                    ))}
                  </g>
                </svg>

                {mappedPrograms.map((program) => {
                  const isSelected = program.year === selected.year;
                  return (
                    // Zero-size anchor on the coordinates; KeepScale counter-scales
                    // the pin around it so dots stay the same size when zoomed.
                    <div
                      key={program.year}
                      style={toMapPosition(program.location)}
                      className={twMerge("absolute", isSelected && "z-10")}
                    >
                      <KeepScale>
                        <button
                          id={pinId(program.year)}
                          type="button"
                          aria-pressed={isSelected}
                          aria-label={`${program.year}: ${placeName(program)}`}
                          title={`${program.year} · ${program.title}`}
                          onClick={() => setSelectedYear(program.year)}
                          className={twMerge(
                            PIN_CLASS,
                            "absolute flex size-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          )}
                        >
                          {isSelected && (
                            <span
                              aria-hidden
                              className="absolute size-4 animate-ping rounded-full bg-primary/60"
                            />
                          )}
                          <span
                            aria-hidden
                            className={twMerge(
                              "relative rounded-full bg-primary ring-2 ring-white transition-all",
                              isSelected ? "size-4" : "size-2.5 hover:size-3.5",
                            )}
                          />
                        </button>
                      </KeepScale>
                    </div>
                  );
                })}
              </div>
            </TransformComponent>

            <ZoomControls isZoomed={isZoomed} isMaxZoom={isMaxZoom} />
          </TransformWrapper>
        </div>

        <div
          aria-live="polite"
          className="mt-6 rounded-xl bg-card p-4 text-left text-card-foreground shadow-md sm:flex sm:gap-8 sm:p-6"
        >
          <div className="sm:w-64 sm:shrink-0">
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
              MKP {selected.year}
            </p>
            <h3 className="mt-1 text-lg font-bold text-secondary-text">
              {selected.title}
            </h3>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin aria-hidden className="size-3.5" />
              {selected.location.name}
            </p>
          </div>
          <div className="mt-3 sm:mt-0">
            <p className="text-sm leading-relaxed">{selected.description}</p>
            <Link
              href="/programs/past"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-secondary-text hover:underline"
            >
              View past programs
              <ArrowRight aria-hidden className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <ul className="-mx-4 mt-6 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {pastPrograms.map((program) => {
          const isSelected = program.year === selected.year;
          return (
            <li key={program.year} className="shrink-0 snap-start">
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => showProgram(program.year)}
                className={twMerge(
                  "cursor-pointer rounded-full border px-4 py-1.5 text-xs whitespace-nowrap transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isSelected
                    ? "border-secondary bg-secondary text-secondary-foreground"
                    : "border-border bg-background hover:border-secondary-text/40",
                )}
              >
                <span className="font-bold">{program.year}</span>{" "}
                {program.title}
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-center text-xs text-muted-foreground sm:hidden">
        Swipe for all {pastPrograms.length} programs · tap one to see it on the
        map
      </p>
    </div>
  );
}

const zoomButtonClass = twMerge(
  "flex size-8 cursor-pointer items-center justify-center bg-white text-secondary transition-colors hover:bg-muted",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
  "disabled:cursor-default disabled:text-muted-foreground disabled:hover:bg-white",
);

function ZoomControls({
  isZoomed,
  isMaxZoom,
}: {
  isZoomed: boolean;
  isMaxZoom: boolean;
}) {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="absolute top-2 right-2 z-20 flex flex-col overflow-hidden rounded-md shadow-md divide-y divide-border">
      <button
        type="button"
        aria-label="Zoom in"
        disabled={isMaxZoom}
        onClick={() => zoomIn()}
        className={zoomButtonClass}
      >
        <Plus aria-hidden className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Zoom out"
        disabled={!isZoomed}
        onClick={() => zoomOut()}
        className={zoomButtonClass}
      >
        <Minus aria-hidden className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Reset zoom"
        disabled={!isZoomed}
        onClick={() => resetTransform()}
        className={zoomButtonClass}
      >
        <RotateCcw aria-hidden className="size-3.5" />
      </button>
    </div>
  );
}
