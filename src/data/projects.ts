export type ApartmentType = {
  id: string
  name: string
  bedrooms: number
  area: {
    min: number
    max: number
    unit: string
  }
  description: string
  images: string[]
  features: string[]
  price?: number
}



export type CommonArea = {
  name: string
  description: string
  image?: string
  features: string[]
}

export type ProjectData = {
  id: string
  title: string
  subtitle: string
  bannerImage?: string
  project: {
    description: string
    location: {
      address: string
      stratum?: number
      neighborhood?: string
    }
    developer?: {
      name: string
      experience?: string
    }
  }
  apartmentTypes: ApartmentType[]
  commonAreas: CommonArea
  gallery: string[]
}

export const projectsData: Record<string, ProjectData> = {
  kioto: {
    id: 'kioto',
    title: 'Proyecto Kioto',
    subtitle: 'Kioto combina apartamentos y apartaestudios con diseño contemporáneo, acabados de primera calidad y ubicación estratégica. Pensado para quienes buscan comodidad, estilo y excelente conectividad, con espacios eficientes y amenidades que elevan la experiencia de vivir.',
    bannerImage: '/img/banner-kinku.webp',
    project: {
      description: 'Ubicado estratégicamente en el sector de la Castellana, Kioto brinda a sus familias distinción, centralidad y calidad de vida. Con 5 pisos habitables, este proyecto combina diseño contemporáneo, acabados de primera calidad y ubicación estratégica. Pensado para quienes buscan comodidad, estilo y excelente conectividad, con espacios eficientes y amenidades que elevan la experiencia de vivir.',
      location: {
        address: 'Cra. 48 #91-98, Bogotá',
        neighborhood: 'La Castellana',
      },
    },
    apartmentTypes: [
      {
        id: 'apto-204',
        name: 'Apartamento 204',
        bedrooms: 2,
        area: {
          min: 62.65,
          max: 62.65,
          unit: 'm²',
        },
        description: 'Últimas unidades disponibles. Apartamento de 2 habitaciones con acabados de primera calidad y excelente distribución.',
        images: [
          'https://drive.google.com/thumbnail?id=1F6whQWiMtqmhkGannxOkvP3Zyab4ZjSK&sz=w2000',
          'https://drive.google.com/thumbnail?id=1OLZWmPIBj_ZHHJpWVFvdGVoJudMFXk8O&sz=w2000',
          'https://drive.google.com/thumbnail?id=1YpZf8ZAW1FvIWOlJpNMSxwRkfvxTsU7V&sz=w2000',
          'https://drive.google.com/thumbnail?id=1jpEMuZ7AcaNfFjOBScVN80mOHikmBc5J&sz=w2000',
          'https://drive.google.com/thumbnail?id=1yTxuvZvB2mse6AJbz9w5diCHCT0ZfU4_&sz=w2000',
        ],
        price: 567240000,
        features: [
          '2 habitaciones',
          '1 baño social',
          '1 baño privado',
          'Vestier en habitación principal',
          'Closet en habitación auxiliar',
          'Sala/Comedor',
          'Cocina',
          'Cuarto de ropas',
          '1 parqueadero',
          'Balcón',
        ],
      },
      {
        id: 'apartaestudio-608',
        name: 'Apartaestudio 608',
        bedrooms: 1,
        area: {
          min: 33.47,
          max: 33.47,
          unit: 'm²',
        },
        description: 'Apartaestudio con mezzanine, diseño inteligente y espacios optimizados para máximo aprovechamiento.',
        images: [
          'https://drive.google.com/file/d/1HUP6kSRmXg7M3qyCxCuviSwmKiDQxph-/view?usp=sharing',
          'https://drive.google.com/file/d/1KBjzBswGpwodtBY3c7HC3aSZ3u9p-myX/view?usp=sharing',
          'https://drive.google.com/file/d/1LR4Q-ISt-xCRT47NoaUL6r5SJBFy_zMI/view?usp=sharing',
          'https://drive.google.com/file/d/1XXCm1Ne85XdL9a9_y_P1p1z6XNyyCO2K/view?usp=sharing',
          'https://drive.google.com/file/d/1pm_Ta5xHOw8S4Lr_r46wjfeUQWXuWJn4/view?usp=sharing',
        ],
        price: 340240000,
        features: [
          '1 habitación con mezzanine',
          '1 baño',
          'Sala Estudio',
          'Barra de comedor desplegable',
          'Cocina',
          'Closet',
          'Mueble TV',
          'Balcón',
        ],
      },
      {
        id: 'apartaestudio-609',
        name: 'Apartaestudio 609',
        bedrooms: 1,
        area: {
          min: 35,
          max: 35,
          unit: 'm²',
        },
        description: 'Apartaestudio con mezzanine, diseño inteligente y espacios optimizados para máximo aprovechamiento.',
        images: [
          'https://drive.google.com/file/d/133C0ojkoj2Wyxz7BDMF4iiFMAZJCoHJ0/view?usp=sharing',
          'https://drive.google.com/file/d/13g-5-dOmTLyKtoQS2g11X1i7t05YtIcI/view?usp=sharing',
          'https://drive.google.com/file/d/18FgrE4YIMf9NrDk8L8acz-s8MGmslaY9/view?usp=sharing',
          'https://drive.google.com/file/d/1J_F_ZC8lNTJh4J8xZaWT2jVM1vdxyxuG/view?usp=sharing',
          'https://drive.google.com/file/d/1KbaQW29u8s2wUA5HV7_EgH2EMvhwf8NX/view?usp=sharing',
          'https://drive.google.com/file/d/1ZAUGFy49KyHVkbBd0ELUDL2tbj2m_To9/view?usp=sharing',
        ],
        price: 335730000,
        features: [
          '1 habitación con mezzanine',
          '1 baño',
          'Sala Estudio',
          'Barra de comedor desplegable',
          'Cocina',
          'Closet',
          'Mueble TV',
          'Balcón',
        ],
      },
      {
        id: 'apto-207',
        name: 'Apartamento 207',
        bedrooms: 1,
        area: {
          min: 24.4,
          max: 24.4,
          unit: 'm²',
        },
        description: 'Apartamento compacto con diseño eficiente, ideal para jóvenes profesionales y estudiantes.',
        images: ['/img/imagen-medio-kunku.webp'],
        price: 234050000,
        features: [
          '1 habitación',
          '1 baño',
          'Sala Estudio',
          'Barra de comedor desplegable',
          'Cocina',
          'Closet',
          'Mueble de TV',
          'Balcón',
        ],
      },
    ],
    commonAreas: {
      name: 'Zonas Comunes',
      description: 'Espacios comunes diseñados para disfrutar de la vida en comunidad con estilo y comodidad.',
      features: [
        'Parqueadero',
        'Lavandería',
        'Zona Co-Working',
        'Salón de Juegos',
        'Zona BBQ',
        'Bicicletero',
      ],
    },
    gallery: [
      'https://drive.google.com/file/d/16KVlfu-0uIqYJkBpAW3NqbvYY34fXQWt/view?usp=sharing',
      'https://drive.google.com/file/d/18_yJVLlTE_tzFY19QVcKBK9jOix9AFGd/view?usp=sharing',
      'https://drive.google.com/file/d/1DalIymlXNXApTfaWRAdPL8FGRo-d9ycG/view?usp=sharing',
      'https://drive.google.com/file/d/1KZx_70zgFkXrLAOLgA-W1k8EF61J_lhd/view?usp=sharing',
      'https://drive.google.com/file/d/1Y7oNaBZoZruPBJB8egnqTic8oc_4O-ez/view?usp=sharing',
      'https://drive.google.com/file/d/1ddpPOanpq0leKvm5sNSsGGzbcbn8l3_t/view?usp=sharing',
      'https://drive.google.com/file/d/1dqmYH8-iOMPifQyv1XCCDWtNv7-uz5f_/view?usp=sharing',
      'https://drive.google.com/file/d/1ihTKQ8_tNH8GOSTU0prLDKZcFfDBRYuy/view?usp=sharing',
      'https://drive.google.com/file/d/1mHRYMPrSb14JRlOjyYlCM7F1VqxNpxmF/view?usp=sharing',
      'https://drive.google.com/file/d/1s6mfoEsBnZai01W8WckSRsP2sYGi4Y7s/view?usp=sharing',
    ],
  },
  osaka: {
    id: 'osaka',
    title: 'Proyecto Osaka',
    subtitle: 'Osaka ofrece apartaestudios funcionales con diseño inteligente para optimizar el espacio y brindar confort. Cercano a universidades y centros de estudio, es ideal para estudiantes y profesionales que buscan conectividad, amenidades útiles e inversión sólida.',
    bannerImage: '/img/imagen-medio-kunku.webp',
    project: {
      description: 'Ubicado en el exclusivo sector de Ciudad Jardín Norte, este proyecto ofreció apartamentos entre 70 m² y 91 m², con 2 o 3 habitaciones, diseño único y acabados modernos. Todas las unidades han sido entregadas exitosamente y actualmente no hay disponibilidad vigente.',
      location: {
        address: 'Carrera 58 B #129 A – 23, Bogotá',
        neighborhood: 'Ciudad Jardín Norte',
      },
    },
    apartmentTypes: [],
    commonAreas: {
      name: 'Zonas Comunes',
      description: 'Espacios comunes diseñados para disfrutar de la vida en comunidad con estilo y comodidad.',
      features: [
        'Lobby',
        'Salón Comunal con cocina',
        'Gimnasio',
        'BBQ',
        'Parqueadero',
      ],
    },
    gallery: [
      'https://drive.google.com/file/d/15Askm4_7chtQxFY8zITFmCiZ06ROsWo6/view?usp=sharing',
      'https://drive.google.com/file/d/169Zsv1sPf_wdobUQYxOsVukaoEKe0sGg/view?usp=sharing',
      'https://drive.google.com/file/d/1PECM8xQXbL230Two_ZnlBpk7HrMaRZxQ/view?usp=sharing',
      'https://drive.google.com/file/d/1TkjWPz5_yL6oGM67T-S_t5OjY6NeT2Fs/view?usp=sharing',
      'https://drive.google.com/file/d/1UIlhkIstDQs5eqQ0ULEwgmeQxNiVXt5A/view?usp=sharing',
      'https://drive.google.com/file/d/1Zo3crOd2zl-X5o0HqCZBxyphvdYQd5xm/view?usp=sharing',
      'https://drive.google.com/file/d/1aBjAq2b94RmhPTNVlPt13WvBIitehkPC/view?usp=sharing',
    ],
  },
  pekin: {
    id: 'pekin',
    title: 'Proyecto Pekín',
    subtitle: 'Pekín destaca por su conectividad y entorno de servicios. Con materiales de calidad y enfoque contemporáneo, es una alternativa atractiva para invertir o habitar en una ubicación estratégica con amenidades útiles.',
    bannerImage: '/img/banner-kinku.webp',
    project: {
      description: 'Pekín destaca por su conectividad y entorno de servicios. Con materiales de calidad y enfoque contemporáneo, es una alternativa atractiva para invertir o habitar en una ubicación estratégica con amenidades útiles.',
      location: {
        address: 'Calle 59 #17-43, Bogotá',
        neighborhood: 'Bogotá',
      },
    },
    apartmentTypes: [
      {
        id: 'apartamento-pekin',
        name: 'Apartamentos disponibles',
        bedrooms: 2,
        area: {
          min: 45,
          max: 80,
          unit: 'm²',
        },
        description: 'Unidades actualmente disponibles para inversión con diseño contemporáneo y materiales durables.',
        images: ['/img/banner-kinku.webp', '/img/1.webp'],
        features: [
          'Disponibilidad vigente',
          'Diseño contemporáneo',
          'Materiales durables',
          'Inversión segura',
        ],
      },
    ],
    commonAreas: {
      name: 'Amenidades Pekín',
      description: 'Zonas comunes modernas con amenidades útiles para tu día a día.',
      features: [
        'Gimnasio',
        'Coworking',
        'Zona de Lavandería',
        'Terraza Social',
        'Parqueaderos',
        'Seguridad 24/7',
      ],
    },
    gallery: [
      '/img/banner-kinku.webp',
      '/img/1.webp',
      '/img/imagen-medio-kunku.webp',
      '/img/Metriku-e1694531856484.webp',
      '/img/banner-kinku.webp',
      '/img/1.webp',
      '/img/imagen-medio-kunku.webp',
      '/img/Metriku-e1694531856484.webp',
    ],
  },
}

