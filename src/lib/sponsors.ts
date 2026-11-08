export type SponsorTier = {
  name: string;
  sponsors: string[];
};

export type SponsorYear = {
  year: number;
  partners: string[];
  tiers: SponsorTier[];
  endorsements: string[];
};

// Historical recognition from every slide of the original Wix archive.
// Sponsor tiers and year labels follow the source; these are not 2027 sponsors.
export const pastSponsors: SponsorYear[] = [
  {
    "year": 2024,
    "partners": [
      "Yayasan Harapan Dalam Halaman",
      "Yayasan Holi’Ana’A"
    ],
    "tiers": [
      {
        "name": "Diamond",
        "sponsors": [
          "Buddhist Education Centre Surabaya",
          "Metta School",
          "Perkumpulan Longevitology Surabaya"
        ]
      },
      {
        "name": "Gold",
        "sponsors": [
          "PT. Matahari Sakti",
          "PT. Prima Duta Sejati",
          "PT. Nagasakti Makmur"
        ]
      },
      {
        "name": "Bronze",
        "sponsors": [
          "PT. Matahari Putra Makmur",
          "PT. Alpha Cikupa Makmur",
          "Mandiri Investment"
        ]
      }
    ],
    "endorsements": [
      "Kedutaan Besar Republik Indonesia di Singapura",
      "Kementrian Pendidikan dan Kebudayaan (KEMENDIKBUD) Indonesia"
    ]
  },
  {
    "year": 2019,
    "partners": [
      "Yayasan Donders"
    ],
    "tiers": [
      {
        "name": "Diamond",
        "sponsors": [
          "Maybank",
          "Kitabisa"
        ]
      },
      {
        "name": "Gold",
        "sponsors": [
          "PT. Sentramitra Dayautama"
        ]
      },
      {
        "name": "Bronze",
        "sponsors": [
          "Alvapipe",
          "PT Agrindo",
          "PT. Ateja Tritunggal",
          "PT. Industri Karet Deli",
          "Hotel Burza Yogyakarta",
          "PT. Mega Central Finance",
          "Lions Club Medan Liberty",
          "One2Tuition"
        ]
      },
      {
        "name": "Sub-Bronze",
        "sponsors": [
          "Indofood",
          "Wardaya College",
          "PT. Supra Sari Pangan",
          "Soap Cycling Singapore",
          "MY Jabatan",
          "Deltomed"
        ]
      }
    ],
    "endorsements": [
      "Kedutaan Besar Republik Indonesia di Singapura"
    ]
  },
  {
    "year": 2017,
    "partners": [
      "Yayasan Harapan Sumba"
    ],
    "tiers": [
      {
        "name": "Diamond",
        "sponsors": [
          "Maybank"
        ]
      },
      {
        "name": "Platinum",
        "sponsors": [
          "PT. Adicipta Inovasi Teknologi",
          "Yayasan CBN"
        ]
      },
      {
        "name": "Gold",
        "sponsors": [
          "NAMZ - Earthnatural Pte. Ltd",
          "Roger & Monika Bieri"
        ]
      },
      {
        "name": "Silver",
        "sponsors": [
          "Lions Club Indonesia",
          "PT. Benua Nusa Indonesia",
          "PT. Intan Unindo Perdana"
        ]
      },
      {
        "name": "Bronze",
        "sponsors": [
          "PT. Kari Umbi",
          "Wardaya College"
        ]
      }
    ],
    "endorsements": [
      "Kedutaan Besar Republik Indonesia di Singapura"
    ]
  },
  {
    "year": 2016,
    "partners": [
      "Yayasan Bhakti Alam Sendang Biru"
    ],
    "tiers": [
      {
        "name": "Gold",
        "sponsors": [
          "Bank Indonesia",
          "Martha Tilaar Group",
          "NAMZ - Earthnatural Pte. Ltd",
          "PT. Kalbe Farma"
        ]
      },
      {
        "name": "Silver",
        "sponsors": [
          "Kompas Gramedia",
          "PT. Ernst & Young Indonesia",
          "Tanoto Foundation",
          "Sinar Kencana Agung"
        ]
      },
      {
        "name": "Bronze",
        "sponsors": [
          "PT. Faber-Castell International Indonesia",
          "Youcan Indonesia"
        ]
      },
      {
        "name": "Sub-Bronze",
        "sponsors": [
          "Coca Cola Amatil Indonesia",
          "PT. Lion Wings",
          "PT. Mikatasa Agung",
          "Wardaya College"
        ]
      }
    ],
    "endorsements": [
      "Kedutaan Besar Republik Indonesia di Singapura"
    ]
  },
  {
    "year": 2015,
    "partners": [
      "Yayasan Alusi Tao Toba"
    ],
    "tiers": [
      {
        "name": "Platinum",
        "sponsors": [
          "PTPN 4"
        ]
      },
      {
        "name": "Bronze",
        "sponsors": [
          "Gramedia",
          "Happy Holy Kids",
          "JNE Express",
          "Kedutaan Besar Republik Indonesia",
          "Prime Service International",
          "Ramsay Healthcare",
          "Solid"
        ]
      }
    ],
    "endorsements": [
      "Kedutaan Besar Republik Indonesia di Singapura"
    ]
  },
  {
    "year": 2014,
    "partners": [
      "Foundation"
    ],
    "tiers": [
      {
        "name": "Platinum",
        "sponsors": [
          "Advance Innovations",
          "Wilmar"
        ]
      },
      {
        "name": "Silver",
        "sponsors": [
          "Union Sampoerna",
          "USTP"
        ]
      },
      {
        "name": "Bronze",
        "sponsors": [
          "Happy Holy Kids",
          "Penerbit Erlangga"
        ]
      }
    ],
    "endorsements": [
      "Kedutaan Besar Republik Indonesia di Singapura"
    ]
  }
];
