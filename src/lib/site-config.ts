export const siteConfig = {
  name: "Misi Kami Peduli",
  shortName: "MKP",
  description:
    "Misi Kami Peduli (MKP), or Mission: We Care, is a social initiative by Indonesian students at the National University of Singapore. We are motivated by an awareness of the socio-economic challenges in Indonesia and a desire to give back to our home country.",
  // Unused while donations are paused; "Support us" opens the contact form instead.
  donateUrl: "https://kitabisa.com/campaign/misikamipeduli2024",
  instagramUrl: "https://www.instagram.com/misikamipeduli/",
  contactEmail: "directors.mkp@gmail.com",
};

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Past Sponsors", href: "/about/past-sponsors" },
      { label: "Our Team", href: "/about/our-team" },
    ],
  },
  {
    label: "What We Do",
    href: "/programs",
    children: [
      { label: "Current Programs", href: "/programs/current" },
      { label: "Past Programs", href: "/programs/past" },
    ],
  },
];
