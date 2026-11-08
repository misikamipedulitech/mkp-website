"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { SiteContainer } from "@/components/layout/site-container";
import type { PastTeam, PastTeamMember } from "@/lib/team";
import { MemberPhoto } from "../../_components/member-photo";

const DIRECTORS = "Co-Project Directors";
const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const initials = (name: string) => name.split(" ").slice(0, 2).map((word) => word[0]).join("");

// Groups members by division, keeping the order they appear in the data.
function divisionsOf(team: PastTeam) {
  const groups = new Map<string, PastTeamMember[]>();
  for (const member of team.members) groups.set(member.division, [...(groups.get(member.division) ?? []), member]);
  return [...groups].map(([division, members]) => ({ division, members }));
}

export function TeamArchive({ teams }: { teams: PastTeam[] }) {
  const [selected, setSelected] = useState(teams[0].year);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const archive = useRef<HTMLElement | null>(null);

  function selectYear(index: number) {
    setSelected(teams[index].year);
    archive.current?.scrollIntoView({ block: "start" });
  }

  function navigateYears(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % teams.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + teams.length) % teams.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = teams.length - 1;
    else return;
    event.preventDefault();
    selectYear(next);
    tabs.current[next]?.focus();
  }

  return (
    <section ref={archive} id="team-archive" aria-label="Past teams by year" className="scroll-mt-16 lg:scroll-mt-20">
      <div className="sticky top-16 z-20 border-y border-border bg-background lg:top-20">
        <SiteContainer>
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
            <p className="hidden text-xs font-medium text-muted-foreground md:block">Explore past teams</p>
            <div role="tablist" aria-label="Team year" className="flex min-w-0 flex-1 md:flex-none">
              {teams.map((team, index) => (
                <button key={team.year} ref={(element) => { tabs.current[index] = element; }} id={`team-tab-${team.year}`} type="button" role="tab" aria-selected={selected === team.year} aria-controls={`team-${team.year}`} tabIndex={selected === team.year ? 0 : -1} onClick={() => selectYear(index)} onKeyDown={(event) => navigateYears(event, index)} className={`min-h-14 min-w-0 flex-1 border-b-2 px-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-ring sm:px-5 sm:text-sm ${selected === team.year ? "border-primary text-secondary-text" : "border-transparent text-muted-foreground hover:text-secondary-text"}`}>{team.year}</button>
              ))}
            </div>
          </div>
        </SiteContainer>
      </div>

      <SiteContainer>
        <div className="mx-auto max-w-5xl">
          {teams.map((team) => (
            <div key={team.year} id={`team-${team.year}`} role="tabpanel" aria-labelledby={`team-tab-${team.year}`} hidden={selected !== team.year} tabIndex={0} className="py-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
              <header className="mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-3xl italic text-secondary-text sm:text-4xl">{team.year} team</h3>
                <p className="text-sm text-muted-foreground">{team.members.length} members</p>
              </header>
              <div className="space-y-10">
                {divisionsOf(team).map(({ division, members }) => (
                  <section key={division} aria-labelledby={`division-${team.year}-${slugify(division)}`}>
                    <h4 id={`division-${team.year}-${slugify(division)}`} className="border-b border-border pb-2 font-sans text-sm font-semibold text-secondary-text">{division}</h4>
                    <ul className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                      {members.map((member) => {
                        const lead = division === DIRECTORS;
                        return (
                          <li key={member.name} className="flex items-center gap-4">
                            <div className={`relative shrink-0 overflow-hidden rounded-full bg-muted ${lead ? "size-24" : "size-16"}`}>
                              {member.image ? (
                                <MemberPhoto member={{ ...member, image: member.image }} alt={`Portrait of ${member.name}`} size={lead ? 96 : 64} />
                              ) : (
                                <span aria-hidden className="absolute inset-0 flex items-center justify-center text-sm font-medium text-muted-foreground">{initials(member.name)}</span>
                              )}
                            </div>
                            <div className="min-w-0">
                              <h5 className={`font-semibold leading-snug text-secondary-text ${lead ? "text-base" : "text-sm"}`}>{member.name}</h5>
                              <p className="text-sm leading-5 text-foreground/85">{member.role}</p>
                              <p className="text-xs leading-5 text-muted-foreground">{member.study}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
