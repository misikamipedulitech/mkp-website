import Image from "next/image";
import type { PastTeamMember } from "@/lib/team";

type MemberPhotoProps = {
  member: PastTeamMember & { image: string };
  alt: string;
  // Rendered width in CSS pixels, used to request enough resolution for the zoom.
  size: number;
};

// Fills a positioned, overflow-hidden parent. Sharing imagePosition as the zoom's
// origin lets the crop reach any part of the photo, including its edges.
export function MemberPhoto({ member, alt, size }: MemberPhotoProps) {
  const scale = member.imageScale ?? 1;
  return (
    <Image
      src={member.image}
      alt={alt}
      fill
      sizes={`${Math.ceil(size * scale)}px`}
      className="object-cover"
      style={{
        objectPosition: member.imagePosition,
        transform: scale === 1 ? undefined : `scale(${scale})`,
        transformOrigin: member.imagePosition,
      }}
    />
  );
}
