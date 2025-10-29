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
        address: 'Calle 93 # 47ª – 25, Bogotá',
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
        images: ['/img/1.webp', '/img/imagen-medio-kunku.webp'],
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
        images: ['/img/imagen-medio-kunku.webp', '/img/1.webp'],
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
        images: ['/img/imagen-medio-kunku.webp', '/img/1.webp'],
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
        images: ['/img/1.webp', '/img/imagen-medio-kunku.webp'],
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
      '/img/1.webp',
      '/img/imagen-medio-kunku.webp',
      '/img/banner-kinku.webp',
      '/img/Metriku-e1694531856484.webp',
      '/img/imagen-medio-kunku.webp',
      '/img/1.webp',
      '/img/banner-kinku.webp',
      '/img/imagen-medio-kunku.webp',
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
        address: 'Ciudad Jardín Norte, Bogotá',
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
      '/img/imagen-medio-kunku.webp',
      '/img/1.webp',
      '/img/banner-kinku.webp',
      '/img/Metriku-e1694531856484.webp',
      '/img/imagen-medio-kunku.webp',
      '/img/1.webp',
      '/img/banner-kinku.webp',
      '/img/imagen-medio-kunku.webp',
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

