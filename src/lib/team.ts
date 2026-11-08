export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

// TODO: temporary data, replace with the real MKP 2027 team
export const teamMembers: TeamMember[] = Array.from({ length: 12 }, (_, i) => ({
  name: `Person ${i + 1}`,
  role: "Role",
  image: "/images/team/placeholder.jpg",
}));

export type PastTeamMember = {
  name: string;
  role: string;
  // Programme division, or "Co-Project Directors" for the leadership group.
  division: string;
  study: string;
  // null when the source reused another member’s photo; shown as initials.
  image: string | null;
  // Crop framing each head at the centre of its circle at a similar size:
  // where the crop sits within the photo, and how far it zooms in.
  imagePosition?: string;
  imageScale?: number;
};

export type PastTeam = {
  year: number;
  members: PastTeamMember[];
};

// Past teams from every slide of the original Wix archive, directors first and
// then each division (head before members). Study programme and graduation
// year (’26 etc.) are as listed at the time of each programme.
export const pastTeams: PastTeam[] = [
  {
    "year": 2027,
    "members": [
      {
        "name": "Grace Tiffany",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Materials Science and Engineering ’29",
        "image": "/images/team/2027/Grace Tiffany-Materials Science and Engineering 29'.jpg",
        "imagePosition": "50.5% 50.9%",
        "imageScale": 2.84
      },
      {
        "name": "Nadhira Shafa Utami",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Data Science and Analytics ’28",
        "image": "/images/team/2027/Nadhira Shafa Utami-Data Science and Analytics 28'.jpg",
        "imagePosition": "58.9% 30.3%",
        "imageScale": 2.03
      },
      {
        "name": "Novenda Ermina Fatra",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Chemical Engineering ’27",
        "image": "/images/team/2027/Novenda Ermina Fatra-Chemical Engineering 27'.jpg",
        "imagePosition": "51.4% 50.9%",
        "imageScale": 2.62
      },
      {
        "name": "Christopher Clement Sukardi",
        "role": "Head of Department",
        "division": "Technology",
        "study": "Biomedical Engineering ’27",
        "image": "/images/team/2027/Christopher Clement Sukardi-Biomedical Engineering 27'.jpg",
        "imagePosition": "59.9% 50.0%"
      },
      {
        "name": "Glory Charity Lion",
        "role": "Executive Member",
        "division": "Technology",
        "study": "Computer Science ’29",
        "image": "/images/team/2027/Glory Charity Lion-Computer Science 29'.jpg",
        "imagePosition": "47.0% 52.2%",
        "imageScale": 2.46
      },
      {
        "name": "Rebecca Cheryl",
        "role": "Head of Department",
        "division": "Education",
        "study": "Life Sciences ’28",
        "image": "/images/team/2027/Rebecca Cheryl-Life Sciences 28'.jpg",
        "imagePosition": "46.9% 39.9%",
        "imageScale": 2.81
      },
      {
        "name": "Alzena Mahirah Hadinata",
        "role": "Head of Department",
        "division": "Media & Publications",
        "study": "Industrial Design ’29",
        "image": "/images/team/2027/Alzena Mahirah Hadinata-Industrial Design 29'.jpg",
        "imagePosition": "48.4% 52.0%",
        "imageScale": 4.99
      },
      {
        "name": "Steve Wilson Koesasih",
        "role": "Member",
        "division": "Education",
        "study": "Business Analytics ’29",
        "image": "/images/team/2027/Steve Wilson Koesasih-Business Analyics 29'.jpg",
        "imagePosition": "51.0% 46.4%",
        "imageScale": 6.42
      },
      {
        "name": "Elysia Selena Alston",
        "role": "Member",
        "division": "Education",
        "study": "Data Science and Analytics ’28",
        "image": "/images/team/2027/Elysia Selena Alston-Data Science and Analytics 28'.jpg",
        "imagePosition": "54.1% 47.7%",
        "imageScale": 1.92
      },
      {
        "name": "Klara Sciffi Richie Gavrila",
        "role": "Member",
        "division": "Education",
        "study": "Life Sciences ’30",
        "image": "/images/team/2027/Klara Sciffi Richie Gavrila-Life Sciences 30'.jpg",
        "imagePosition": "49.1% 47.0%",
        "imageScale": 2.1
      },
      {
        "name": "Neezar Akbar Lumban Tobing",
        "role": "Member",
        "division": "Education",
        "study": "Chemical Engineering ’28",
        "image": "/images/team/2027/Neezar Akbar Lumban Tobing-Chemical Engineering 28'.jpg",
        "imagePosition": "51.5% 33.9%",
        "imageScale": 1.97
      },
      {
        "name": "Jansen Ken Pegrasio",
        "role": "Member",
        "division": "Technology",
        "study": "Computer Engineering ’28",
        "image": "/images/team/2027/Jansen Ken Pegrasio-Computer Engineering 28'.jpg",
        "imagePosition": "46.6% 44.3%",
        "imageScale": 1.28
      },
      {
        "name": "Matthew Adriano Rahul Suresh",
        "role": "Member",
        "division": "Technology",
        "study": "Chemical Engineering ’30",
        "image": "/images/team/2027/Matthew Adriano Rahul Suresh-Chemical Engineering 30'.jpg",
        "imagePosition": "63.4% 41.4%",
        "imageScale": 3.32
      },
      {
        "name": "Merry Rosalie",
        "role": "Member",
        "division": "Technology",
        "study": "Master of Computing ’28",
        "image": "/images/team/2027/Merry Rosalie-Master of Computing 28'.jpg",
        "imagePosition": "51.5% 40.8%",
        "imageScale": 3.95
      },
      {
        "name": "Clarissa Joyceline Edi Surya",
        "role": "Member",
        "division": "Technology",
        "study": "Civil Engineering ’29",
        "image": "/images/team/2027/Clarissa Joyceline Edi Surya-Civil Engineering 29'.jpg",
        "imagePosition": "53.2% 34.2%",
        "imageScale": 2.73
      },
      {
        "name": "Puspa Tania Zahrani",
        "role": "Member",
        "division": "Media & Publications",
        "study": "Political Science ’27",
        "image": "/images/team/2027/Puspa Tania Zahrani-Political Science 27'.jpg",
        "imagePosition": "49.8% 68.4%",
        "imageScale": 2.82
      },
      {
        "name": "Verena Vanya Kartiko",
        "role": "Member",
        "division": "Media & Publications",
        "study": "Materials Science and Engineering ’30",
        "image": "/images/team/2027/Verena Vanya Kartiko-Materials Science and Engineering 30'.jpg",
        "imagePosition": "50.0% 0.0%"
      },
      {
        "name": "Kayla Widjaja",
        "role": "Member",
        "division": "Media & Publications",
        "study": "Data Science and Economics ’30",
        "image": "/images/team/2027/Kayla Widjaja-Data Science and Economics 30'.jpg",
        "imagePosition": "53.9% 51.7%",
        "imageScale": 2.44
      },
      {
        "name": "Michael Milo Valentino",
        "role": "Executive Member",
        "division": "Public Relations",
        "study": "Master of Sustainable and Green Finance ’27",
        "image": "/images/team/2027/Michael Milo Valentino-Master of Sustainable and Green Finance 27'.jpg",
        "imagePosition": "58.5% 26.3%",
        "imageScale": 1.64
      },
      {
        "name": "Eunice Felicia Jo",
        "role": "Executive Member",
        "division": "Public Relations",
        "study": "Communications and New Media ’28",
        "image": "/images/team/2027/Eunice Felicia Jo-Communications and New Media 28'.jpg",
        "imagePosition": "54.7% 35.3%",
        "imageScale": 2.34
      }
    ]
  },
  {
    "year": 2019,
    "members": [
      {
        "name": "Justinus",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Chemical Engineering ’20",
        "image": "/images/team/2019/justinus.jpg",
        "imagePosition": "55.1% 0.2%",
        "imageScale": 1.08
      },
      {
        "name": "Shania Mustika",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Economics ’21",
        "image": "/images/team/2019/shania-mustika.jpg",
        "imagePosition": "53.7% 3.7%",
        "imageScale": 1.14
      },
      {
        "name": "Wilson Wongso",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Chemical Engineering ’21",
        "image": "/images/team/2019/wilson-wongso.jpg",
        "imagePosition": "49.3% 1.9%",
        "imageScale": 1.11
      },
      {
        "name": "Alvina Nathania",
        "role": "Programme Head",
        "division": "Infrastructure",
        "study": "Civil Engineering ’21",
        "image": "/images/team/2019/alvina-nathania.jpg",
        "imagePosition": "61.7% 2.3%",
        "imageScale": 1.12
      },
      {
        "name": "Andrew Wijaya",
        "role": "Member",
        "division": "Infrastructure",
        "study": "Mechanical Engineering ’22",
        "image": "/images/team/2019/andrew-wijaya.jpg",
        "imagePosition": "49.2% 70.0%",
        "imageScale": 1.1
      },
      {
        "name": "Anna Yenardi",
        "role": "Member",
        "division": "Infrastructure",
        "study": "Architecture ’21",
        "image": "/images/team/2019/anna-yenardi.jpg",
        "imagePosition": "50.2% 35.2%",
        "imageScale": 3.03
      },
      {
        "name": "Eric Santoso",
        "role": "Member",
        "division": "Infrastructure",
        "study": "Chemical Engineering ’21",
        "image": "/images/team/2019/eric-santoso.jpg",
        "imagePosition": "96.1% 63.1%",
        "imageScale": 1.1
      },
      {
        "name": "Hokiewan Thezeus",
        "role": "Member",
        "division": "Infrastructure",
        "study": "Industrial Systems Engineering ’22",
        "image": "/images/team/2019/hokiewan-thezeus.jpg",
        "imagePosition": "46.9% 0.5%",
        "imageScale": 1.09
      },
      {
        "name": "Ryvan Firdy",
        "role": "Member",
        "division": "Infrastructure",
        "study": "Applied Mathematics ’20",
        "image": "/images/team/2019/ryvan-firdy.jpg",
        "imagePosition": "100.0% 0.0%",
        "imageScale": 1.04
      },
      {
        "name": "Radita Dionisius",
        "role": "Programme Head",
        "division": "Technology",
        "study": "Industrial Systems Engineering ’21",
        "image": "/images/team/2019/radita-dionisius.jpg",
        "imagePosition": "53.1% 2.5%",
        "imageScale": 1.11
      },
      {
        "name": "Alex Runako",
        "role": "Member",
        "division": "Technology",
        "study": "Industrial Systems Engineering ’22",
        "image": "/images/team/2019/alex-runako.jpg",
        "imagePosition": "47.8% 4.1%",
        "imageScale": 1.12
      },
      {
        "name": "Christopher Williams",
        "role": "Member",
        "division": "Technology",
        "study": "Business Administration ’22",
        "image": "/images/team/2019/christopher-williams.jpg",
        "imagePosition": "52.1% 5.5%",
        "imageScale": 1.15
      },
      {
        "name": "Stefina Aryani Winoto",
        "role": "Member",
        "division": "Technology",
        "study": "Chemical Engineering ’22",
        "image": "/images/team/2019/stefina-aryani-winoto.jpg",
        "imagePosition": "50.1% 6.6%",
        "imageScale": 1.14
      },
      {
        "name": "William Ryan Kusnadi",
        "role": "Member",
        "division": "Technology",
        "study": "Computer Science ’22",
        "image": "/images/team/2019/william-ryan-kusnadi.jpg",
        "imagePosition": "50.1% 31.3%",
        "imageScale": 3.03
      },
      {
        "name": "Stephanie Gunawan",
        "role": "Programme Head",
        "division": "Education",
        "study": "Business Administration ’20",
        "image": "/images/team/2019/stephanie-gunawan.jpg",
        "imagePosition": "50.3% 28.6%",
        "imageScale": 1.86
      },
      {
        "name": "Agnes Natasya",
        "role": "Member",
        "division": "Education",
        "study": "Computational Biology ’22",
        "image": "/images/team/2019/agnes-natasya.jpg",
        "imagePosition": "51.6% 1.0%",
        "imageScale": 1.11
      },
      {
        "name": "Felita Eleonora",
        "role": "Member",
        "division": "Education",
        "study": "Harp Performance ’22",
        "image": "/images/team/2019/felita-eleonora.jpg",
        "imagePosition": "51.7% 5.9%",
        "imageScale": 1.12
      },
      {
        "name": "James Nicholas",
        "role": "Member",
        "division": "Education",
        "study": "Business Administration ’20",
        "image": "/images/team/2019/james-nicholas.jpg",
        "imagePosition": "50.3% 4.6%",
        "imageScale": 1.13
      },
      {
        "name": "Raymond Victorio",
        "role": "Member",
        "division": "Education",
        "study": "Information Systems ’22",
        "image": "/images/team/2019/raymond-victorio.jpg",
        "imagePosition": "48.6% 3.8%",
        "imageScale": 1.12
      },
      {
        "name": "Shania Kesuma",
        "role": "Member",
        "division": "Education",
        "study": "Business Administration ’22",
        "image": "/images/team/2019/shania-kesuma.jpg",
        "imagePosition": "50.6% 25.9%",
        "imageScale": 1.12
      },
      {
        "name": "Evelyn Aliansyah",
        "role": "Head",
        "division": "Publicity & Marketing",
        "study": "Pharmacy ’21",
        "image": "/images/team/2019/evelyn-aliansyah.jpg",
        "imagePosition": "53.9% 40.9%",
        "imageScale": 1.07
      },
      {
        "name": "Aldo Maximillian",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Computer Engineering ’23",
        "image": "/images/team/2019/aldo-maximillian.jpg",
        "imagePosition": "49.2% 0.0%",
        "imageScale": 1.06
      },
      {
        "name": "Clarissa Edeline Yu",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Environmental Studies ’22",
        "image": "/images/team/2019/clarissa-edeline-yu.jpg",
        "imagePosition": "49.5% 3.7%",
        "imageScale": 1.12
      },
      {
        "name": "Gabriela Leilani",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Industrial Systems Engineering ’21",
        "image": "/images/team/2019/gabriela-leilani.jpg",
        "imagePosition": "0.0% 10.6%",
        "imageScale": 1.22
      },
      {
        "name": "Winny Tjong",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Food Science & Technology ’21",
        "image": "/images/team/2019/winny-tjong.jpg",
        "imagePosition": "49.2% 4.5%",
        "imageScale": 1.13
      }
    ]
  },
  {
    "year": 2020,
    "members": [
      {
        "name": "Eric Santoso",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Chemical Engineering ’21",
        "image": "/images/team/2020/eric-santoso.jpg",
        "imagePosition": "50.5% 1.6%",
        "imageScale": 1.11
      },
      {
        "name": "Shania Kesuma",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Business Administration ’22",
        "image": "/images/team/2020/shania-kesuma.jpg",
        "imagePosition": "49.1% 26.1%",
        "imageScale": 1.13
      },
      {
        "name": "Hokiewan Thezeus",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Industrial Systems Engineering ’22",
        "image": "/images/team/2020/hokiewan-thezeus.jpg",
        "imagePosition": "49.9% 12.2%",
        "imageScale": 1.12
      },
      {
        "name": "Michelle Vania",
        "role": "Programme Head",
        "division": "Community Empowerment",
        "study": "Architecture ’22",
        "image": "/images/team/2020/michelle-vania.jpg",
        "imagePosition": "51.6% 8.8%",
        "imageScale": 1.17
      },
      {
        "name": "Alicia Rachel",
        "role": "Member",
        "division": "Community Empowerment",
        "study": "Mechanical Engineering ’23",
        "image": "/images/team/2020/alicia-rachel.jpg",
        "imagePosition": "49.6% 7.5%",
        "imageScale": 1.11
      },
      {
        "name": "Austen Jeremy",
        "role": "Member",
        "division": "Community Empowerment",
        "study": "Mechanical Engineering ’23",
        "image": "/images/team/2020/austen-jeremy.jpg",
        "imagePosition": "50.0% 3.1%"
      },
      {
        "name": "Joe Teddy",
        "role": "Member",
        "division": "Community Empowerment",
        "study": "Computer Science ’23",
        "image": "/images/team/2020/joe-teddy.jpg",
        "imagePosition": "50.0% 4.1%",
        "imageScale": 1.13
      },
      {
        "name": "Nathanael Septianto",
        "role": "Member",
        "division": "Community Empowerment",
        "study": "Mechanical Engineering ’22",
        "image": "/images/team/2020/nathanael-septianto.jpg",
        "imagePosition": "31.7% 1.2%",
        "imageScale": 1.09
      },
      {
        "name": "Rahmani Nitiyudo",
        "role": "Member",
        "division": "Community Empowerment",
        "study": "Communication and New Media ’22",
        "image": "/images/team/2020/rahmani-nitiyudo.jpg",
        "imagePosition": "50.8% 5.6%",
        "imageScale": 1.14
      },
      {
        "name": "Aldo Maximillian",
        "role": "Programme Head",
        "division": "Technology",
        "study": "Computer Engineering ’23",
        "image": "/images/team/2020/aldo-maximillian.jpg",
        "imagePosition": "49.2% 0.0%",
        "imageScale": 1.06
      },
      {
        "name": "Francisco Chensan",
        "role": "Member",
        "division": "Technology",
        "study": "Computer Engineering ’23",
        "image": "/images/team/2020/francisco-chensan.jpg",
        "imagePosition": "51.0% 18.4%",
        "imageScale": 1.09
      },
      {
        "name": "Hubertus Adhy",
        "role": "Member",
        "division": "Technology",
        "study": "Information Security ’23",
        "image": "/images/team/2020/hubertus-adhy.jpg",
        "imagePosition": "49.3% 4.0%",
        "imageScale": 1.13
      },
      {
        "name": "Johanna",
        "role": "Member",
        "division": "Technology",
        "study": "Computer Science ’22",
        "image": "/images/team/2020/johanna.jpg",
        "imagePosition": "49.8% 17.2%",
        "imageScale": 1.3
      },
      {
        "name": "Jusuf Nathanael",
        "role": "Member",
        "division": "Technology",
        "study": "Computer Engineering ’23",
        "image": "/images/team/2020/jusuf-nathanael.jpg",
        "imagePosition": "50.1% 3.3%",
        "imageScale": 1.12
      },
      {
        "name": "Samuel Kristianto",
        "role": "Programme Head",
        "division": "Education",
        "study": "Data Science ’23",
        "image": "/images/team/2020/samuel-kristianto.jpg",
        "imagePosition": "78.4% 0.0%",
        "imageScale": 1.06
      },
      {
        "name": "Aileen",
        "role": "Member",
        "division": "Education",
        "study": "Nursing ’23",
        "image": "/images/team/2020/aileen.jpg",
        "imagePosition": "51.5% 4.8%",
        "imageScale": 1.13
      },
      {
        "name": "Aldrich Williams",
        "role": "Member",
        "division": "Education",
        "study": "Business Administration ’23",
        "image": "/images/team/2020/aldrich-williams.jpg",
        "imagePosition": "49.2% 4.3%",
        "imageScale": 1.12
      },
      {
        "name": "Azza Sekarnova",
        "role": "Member",
        "division": "Education",
        "study": "Business Analytics ’23",
        "image": "/images/team/2020/azza-sekarnova.jpg",
        "imagePosition": "49.0% 5.5%",
        "imageScale": 1.13
      },
      {
        "name": "Livia Anjaneth",
        "role": "Member",
        "division": "Education",
        "study": "Medicine ’24",
        "image": "/images/team/2020/livia-anjaneth.jpg",
        "imagePosition": "49.6% 25.4%",
        "imageScale": 1.58
      },
      {
        "name": "Philip Alexander",
        "role": "Member",
        "division": "Education",
        "study": "Computer Science ’22",
        "image": null
      },
      {
        "name": "Hans Sebastian",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Industrial Systems Engineering ’22",
        "image": "/images/team/2020/hans-sebastian.jpg",
        "imagePosition": "50.1% 2.6%",
        "imageScale": 1.11
      },
      {
        "name": "Nadya Devani",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Data Science ’22",
        "image": "/images/team/2020/nadya-devani.jpg",
        "imagePosition": "50.8% 13.3%",
        "imageScale": 1.23
      },
      {
        "name": "Ivander Jonathan",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Computer Engineering ’23",
        "image": "/images/team/2020/ivander-jonathan.jpg",
        "imagePosition": "51.3% 5.4%",
        "imageScale": 1.13
      },
      {
        "name": "Ayu Utami Intaran",
        "role": "Member",
        "division": "Publicity & Marketing",
        "study": "Computational Biology ’24",
        "image": null
      }
    ]
  },
  {
    "year": 2021,
    "members": [
      {
        "name": "Shania Kesuma",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Business Administration ’22",
        "image": "/images/team/2021/shania-kesuma.jpg",
        "imagePosition": "49.1% 26.1%",
        "imageScale": 1.13
      },
      {
        "name": "Hokiewan Thezeus",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Industrial Systems Engineering ’22",
        "image": "/images/team/2021/hokiewan-thezeus.jpg",
        "imagePosition": "50.4% 5.1%",
        "imageScale": 1.13
      },
      {
        "name": "Adhy Pratama",
        "role": "Content Production",
        "division": "Content Production",
        "study": "Information Security ’23",
        "image": "/images/team/2021/adhy-pratama.jpg",
        "imagePosition": "51.0% 0.0%",
        "imageScale": 1.08
      },
      {
        "name": "Dipasukha Edbert",
        "role": "Content Production",
        "division": "Content Production",
        "study": "Statistics ’23",
        "image": "/images/team/2021/dipasukha-edbert.jpg",
        "imagePosition": "50.3% 3.8%",
        "imageScale": 1.12
      },
      {
        "name": "Nicholas Lowie",
        "role": "Content Production",
        "division": "Content Production",
        "study": "Information System ’22",
        "image": "/images/team/2021/nicholas-lowie.jpg",
        "imagePosition": "50.0% 55.9%"
      },
      {
        "name": "Aldo",
        "role": "Training and Development",
        "division": "Training and Development",
        "study": "Industrial Systems Engineering ’22",
        "image": "/images/team/2021/aldo.jpg",
        "imagePosition": "49.2% 3.7%",
        "imageScale": 1.12
      },
      {
        "name": "Audrey Gunawan",
        "role": "Training and Development",
        "division": "Training and Development",
        "study": "Life Science ’25",
        "image": "/images/team/2021/audrey-gunawan.jpg",
        "imagePosition": "50.5% 3.9%",
        "imageScale": 1.12
      },
      {
        "name": "Gwyneth Guo",
        "role": "Training and Development",
        "division": "Training and Development",
        "study": "Business Analytics ’25",
        "image": "/images/team/2021/gwyneth-guo.jpg",
        "imagePosition": "49.9% 3.7%",
        "imageScale": 1.12
      },
      {
        "name": "Jeremy Citrawira",
        "role": "Training and Development",
        "division": "Training and Development",
        "study": "Data Science and Analytics ’25",
        "image": "/images/team/2021/jeremy-citrawira.jpg",
        "imagePosition": "100.0% 32.7%",
        "imageScale": 1.11
      },
      {
        "name": "Felishia Darianne",
        "role": "Training and Development",
        "division": "Training and Development",
        "study": "Business Administration ’25",
        "image": "/images/team/2021/felishia-darianne.jpg",
        "imagePosition": "50.4% 30.1%",
        "imageScale": 3.21
      }
    ]
  },
  {
    "year": 2024,
    "members": [
      {
        "name": "Caren Harry Ho",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Business Administration (Accountancy) ’26",
        "image": "/images/team/2024/caren-harry-ho.jpg",
        "imagePosition": "50.2% 3.8%",
        "imageScale": 1.12
      },
      {
        "name": "William Arthur Mantofa",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Business Administration ’27",
        "image": "/images/team/2024/william-arthur-mantofa.jpg",
        "imagePosition": "54.1% 8.3%",
        "imageScale": 1.11
      },
      {
        "name": "Narita Chrysant Lautama",
        "role": "Co-Project Director",
        "division": "Co-Project Directors",
        "study": "Mechanical Engineering ’26",
        "image": "/images/team/2024/narita-chrysant-lautama.jpg",
        "imagePosition": "50.7% 5.7%",
        "imageScale": 1.14
      },
      {
        "name": "Novenda Ermina Fatra",
        "role": "Programme Head",
        "division": "Education",
        "study": "Chemical Engineering ’27",
        "image": "/images/team/2024/novenda-ermina-fatra.jpg",
        "imagePosition": "50.0% 30.2%",
        "imageScale": 1.98
      },
      {
        "name": "Cathlin Theophilus",
        "role": "Member",
        "division": "Education",
        "study": "Biomedical Engineering ’25",
        "image": "/images/team/2024/cathlin-theophilus.jpg",
        "imagePosition": "50.1% 5.2%",
        "imageScale": 1.13
      },
      {
        "name": "Richelle Darlene Putri Susanto",
        "role": "Member",
        "division": "Education",
        "study": "Life Science ’27",
        "image": "/images/team/2024/richelle-darlene-putri-susanto.jpg",
        "imagePosition": "77.0% 0.0%",
        "imageScale": 1.06
      },
      {
        "name": "Haruka Angeline Kosugi",
        "role": "Member",
        "division": "Education",
        "study": "Business Administration ’26",
        "image": "/images/team/2024/haruka-angeline-kosugi.jpg",
        "imagePosition": "82.2% 1.5%",
        "imageScale": 1.1
      },
      {
        "name": "Felix Gilang Claychia",
        "role": "Member",
        "division": "Education",
        "study": "Mechanical Engineering ’27",
        "image": "/images/team/2024/felix-gilang-claychia-portrait.jpg",
        "imagePosition": "50.6% 19.7%",
        "imageScale": 1.36
      },
      {
        "name": "John Howard Wijaya",
        "role": "Programme Head",
        "division": "Technology",
        "study": "Mechanical Engineering ’27",
        "image": "/images/team/2024/john-howard-wijaya.jpg",
        "imagePosition": "49.6% 6.3%",
        "imageScale": 1.15
      },
      {
        "name": "Nicholas Jimmy Alden",
        "role": "Member",
        "division": "Technology",
        "study": "Computer Science ’25",
        "image": null
      },
      {
        "name": "Albert Ariel Widiaatmaja",
        "role": "Member",
        "division": "Technology",
        "study": "Computer Science ’25",
        "image": "/images/team/2024/albert-ariel-widiaatmaja.jpg",
        "imagePosition": "48.5% 9.6%",
        "imageScale": 1.18
      },
      {
        "name": "Bianca Diva",
        "role": "Member",
        "division": "Technology",
        "study": "Environmental Engineering ’26",
        "image": "/images/team/2024/bianca-diva.jpg",
        "imagePosition": "51.3% 3.3%",
        "imageScale": 1.12
      },
      {
        "name": "Cullen Sean",
        "role": "Member",
        "division": "Technology",
        "study": "Mechanical Engineering ’26",
        "image": "/images/team/2024/cullen-sean.jpg",
        "imagePosition": "56.9% 0.0%",
        "imageScale": 1.04
      },
      {
        "name": "Christopher Clement Sukandi",
        "role": "Member",
        "division": "Technology",
        "study": "Biomedical Engineering ’27",
        "image": null
      },
      {
        "name": "Andrian Hasif Tambunan",
        "role": "Member",
        "division": "Publicity",
        "study": "Communications and New Media ’26",
        "image": "/images/team/2024/andrian-hasif-tambunan.jpg",
        "imagePosition": "50.4% 29.6%",
        "imageScale": 1.92
      },
      {
        "name": "Catherine Liang",
        "role": "Member",
        "division": "Publicity",
        "study": "Computer Science ’26",
        "image": "/images/team/2024/catherine-liang.jpg",
        "imagePosition": "50.6% 3.0%",
        "imageScale": 1.12
      },
      {
        "name": "Fatima Hidaia Purawan",
        "role": "Member",
        "division": "Publicity",
        "study": "English Literature ’26",
        "image": "/images/team/2024/fatima-hidaia-purawan.jpg",
        "imagePosition": "48.1% 2.6%",
        "imageScale": 1.11
      },
      {
        "name": "Edward Jeremy Lo",
        "role": "Member",
        "division": "Public Relations",
        "study": "Yale-NUS Economics ’24",
        "image": "/images/team/2024/edward-jeremy-lo.jpg",
        "imagePosition": "49.5% 6.4%",
        "imageScale": 1.15
      },
      {
        "name": "Jonathan Christian Jacob",
        "role": "Member",
        "division": "Public Relations",
        "study": "Business Administration ’27",
        "image": "/images/team/2024/jonathan-christian-jacob.jpg",
        "imagePosition": "50.8% 16.3%",
        "imageScale": 1.27
      },
      {
        "name": "Melisa Abigail Thevandi",
        "role": "Member",
        "division": "Public Relations",
        "study": "Data Science and Analytics ’27",
        "image": "/images/team/2024/melisa-abigail-thevandi-portrait.jpg",
        "imagePosition": "42.9% 0.0%",
        "imageScale": 1.11
      },
      {
        "name": "Jayson Ng",
        "role": "Member",
        "division": "Public Relations",
        "study": "Data Science and Analytics ’27",
        "image": "/images/team/2024/jayson-ng.jpg",
        "imagePosition": "19.8% 0.0%",
        "imageScale": 1.02
      }
    ]
  }
];
