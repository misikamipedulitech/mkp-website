export type Program = {
  year: number;
  title: string;
  description: string;
  location: {
    name: string;
    lat: number;
    lng: number;
  };
  image?: {
    src: string;
    alt: string;
  };
};

// TODO: temporary data, newest first. Coordinates are from OpenStreetMap
// unless marked approximate.
// Program history source: https://directorsmkp.wixsite.com/misikamipeduli/our-footprints
export const pastPrograms: Program[] = [
  {
    year: 2024,
    title: "Desa Afia",
    description: "In 2024, Misi Kami Peduli (Mission: We Care) visited Desa Afia and empowerd the local community through various initiatives. The technology team successfully constructed a solar irrigation system, providing sustainable water solutions to support 80 hectares of paddy fields in Desa Tetehosi Afia. The education team organized a digital literacy case competition at Universitas Nias, fostering innovation and critical thinking among participants. Additionally, over 300 books were donated to Gunungsitoli’s children’s library, accompanied by a reading event aimed at promoting childhood literacy and a love for learning.",
    location: { name: "Nias, North Sumatra", lat: 1.3807, lng: 97.1938 },
    image: { src: "/images/programs/2024.png", alt: "The MKP 2024 team holding their programme banner by the sea in Nias" },
  },
  {
    year: 2021,
    title: "Singapore",
    description: "In 2021, Misi Kami Peduli (Mission: We Care) adapted to pandemic challenges by empowering the Indonesian domestic helper community through a 4-week-long online digital literacy workshop. Using a flipped-classroom approach, the MKP team prepared YouTube pre-lecture videos on essential tools like Google Search, Gmail, Google Docs, Slides, Forms, Meet, and Zoom, followed by live sessions for discussions and questions. Supported by Suara Kita mentors, this initiative successfully bridged the digital divide and equipped participants with practical skills to thrive in a technology-driven world.",
    location: { name: "Singapore", lat: 1.2966, lng: 103.7764 },
    image: { src: "/images/programs/2021.png", alt: "MKP volunteers and workshop participants together in a classroom in Singapore" },
  },
  {
    year: 2019,
    title: "Desa Waitaru",
    description: "In 2019, Misi Kami Peduli (Mission: We Care) visited Desa Waitaru with the aim to empower the local community. The technical team constructed a solar panel and wiring for 24 houses, including toilet and communal hall. The infrastructure team installed a solar water pump system including tanks and 300m long piping to provide a clean water source to the village. The education team conducted workshops regarding money-saving, healthcare, sanitation, and a small Kidzania in local primary school. We also conducted a teacher training program to motivate and inspire primary school teachers on Sumba Island.",
    location: { name: "Sumba, East Nusa Tenggara", lat: -9.75, lng: 120.1 },
    image: { src: "/images/programs/2019.png", alt: "The MKP 2019 team with their banner outside the bamboo community hall in Desa Waitaru" },
  },
  {
    // Preserved from Wix: its heading says 2017 / Desa Homba Karipit,
    // while its paragraph says 2018 / Kampung Tanakandumbuka.
    // Keep the source wording until MKP confirms the historical details.
    year: 2017,
    title: "Desa Homba Karipit",
    description: "In 2018, Misi Kami Peduli (Mission: We Care) visited Kampung Tanakandumbuka and built a toilet and communal hall. The technical team constructed a solar panel and wiring for 23 houses, including toilet and communal hall. The education and health team collaborated to install workshops regarding money-saving, healthcare, and science fair. We also visited a local primary school, SDN Hombakaripit and conducted a small Kidzania where the children could try a lot of different occupation and allow them to dream big.",
    location: {
      name: "Sumba, East Nusa Tenggara",
      lat: -9.5297,
      lng: 119.0811,
    },
    image: { src: "/images/programs/2017.png", alt: "MKP volunteers and villagers gathered around newly installed solar panels in Sumba" },
  },
  {
    year: 2016,
    title: "Dusun Sendang Biru",
    description: "In 2016, Misi Kami Peduli (Mission: We Care) constructed a 400 m road at a slippery trekking route to ensure the safety of the tourists. They also conducted mangrove and coral transplantation with the students. The community empowerment team conducted English, marketing, design and website maintenance workshops to empower and equip our local partner and the guides. Two selfie corners were also constructed to establish iconic spots in Clungup Mangrove Conservation, Sendang Biru, to boost ecotourism in the area.",
    location: { name: "Malang, East Java", lat: -8.4555, lng: 112.6894 },
    image: { src: "/images/programs/2016.png", alt: "The MKP 2016 team with local children and their banner on the beach at Sendang Biru" },
  },
  {
    year: 2015,
    title: "Desa Lontung & Janji Maria",
    description: "In 2015, Misi Kami Peduli (Mission: We Care) conducted educational programmes with the aim to motivate local students to learn for a better future. They also set up two solar panels on-board of kapal belajar (learning ship) owned by Alusi Tao Toba, a ship to facilitate educational activities in the village. Aside from that, they promoted water-hyacinth handicrafts as one of the locals' main economic activities.",
    location: { name: "Samosir, North Sumatra", lat: 2.4757, lng: 98.7306 },
    image: { src: "/images/programs/2015.png", alt: "MKP volunteers and local children in front of a traditional house in Samosir" },
  },
  {
    year: 2014,
    title: "Desa Maileppet",
    description: "Education was the main focus of Misi Kami Peduli (Mission: We Care) 2014. The team conducted various classes and upgraded learning facilities in the local schools. They also initiated an agricultural workshop and developed a distillation water system in Pokai, which had recently suffered from floods at that point of time.",
    location: { name: "Mentawai, West Sumatra", lat: -1.5743, lng: 99.1944 },
    image: { src: "/images/programs/2014.png", alt: "MKP volunteers with children in traditional dress and donated equipment in Mentawai" },
  },
  {
    year: 2013,
    title: "Desa Bonto Nyaelang",
    description: "In Misi Kami Peduli (Mission: We Care) 2013, we based our project on three pillars: agriculture, education and home industry. The team helped to build an irrigation system to channel water from a nearby river to the locals' plantations and provided environmentally friendly fungicides and pesticides. In line with the direction of the project, the team conducted workshops on kolang kaling (Arenga pinata) making and entrepreneurship to spur the growth of home industry in the village.",
    location: {
      name: "Bulukumba, South Sulawesi",
      lat: -5.4841,
      lng: 120.1595,
    },
    image: { src: "/images/programs/2013.png", alt: "The MKP 2013 team in red shirts in front of their banner in Bonto Nyaelang" },
  },
  {
    year: 2012,
    title: "Desa Pemenang Timur & Tegal Maja",
    description: "As the villages in Lombok faced difficulty in accessing clean water, water distribution became the core focus of Misi Kami Peduli (Mission: We Care) 2012. The team built a 5 km water pipe to improve the distribution of clean water from the water sources to nearby villages. This initiative granted easier access to clean water for the villagers. Additionally, the team shared information on various scholarships for the locals to help them pursue higher education.",
    location: {
      name: "Lombok, West Nusa Tenggara",
      lat: -8.4084,
      lng: 116.1174,
    },
    image: { src: "/images/programs/2012.png", alt: "The MKP 2012 team and local children behind their banner in Lombok" },
  },
  {
    year: 2011,
    title: "Desa Aek Popo",
    description: "The highlight of Misi Kami Peduli (Mission: We Care) 2011 was the construction of Rumah Pintar (smart house), a common facility where locals can find information relevant to their livelihoods. As most of the villagers worked as farmers the team also conducted workshops on organic plantation and safe use of pesticides to improve the quality of their harvest. Moreover, the team also held talks on entrepreneurship and nutrition.",
    location: { name: "Karo, North Sumatra", lat: 2.9245, lng: 98.4936 },
    image: { src: "/images/programs/2011.png", alt: "MKP volunteers and children behind the Rumah Pintar Desa Aek Popo banner" },
  },
  {
    year: 2010,
    title: "Desa Ketapan Rame",
    description: "The second Misi Kami Peduli (Mission: We Care) aimed to improve local hygiene conditions by raising awareness of the locals. The initiative that year ranged from mass teeth brushing exercise to distribution of soaps to the villagers. On top of that, the team also engaged the locals in community service, cleaning houses and common spaces in the living spaces in the village. MKP 2010 also conducted public speaking sessions as well as English and Mathematics classes.",
    location: { name: "Mojokerto, East Java", lat: -7.67, lng: 112.6043 },
    image: { src: "/images/programs/2010.png", alt: "MKP volunteers with schoolchildren outside a school in Ketapan Rame" },
  },
  {
    year: 2009,
    title: "Desa Tajem Sari",
    description: "The first Misi Kami Peduli (Mission: We Care) focused on improving the education in the village. The team donated 18 computer sets, 55 books in English and 6 study desks to Tajem Sari Primary School. The team also built internet infrastructure, conducted English lessons and interacted with the locals. This groundbreaking initiative by MKP enabled 20 students to make contributions to the community around them.",
    location: { name: "Grobogan, Central Java", lat: -7.0248, lng: 110.6192 },
    image: { src: "/images/programs/2009.png", alt: "An MKP volunteer teaching at the front of a classroom in Tajem Sari" },
  },
];
