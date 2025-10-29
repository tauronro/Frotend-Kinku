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
      description: 'Kioto combina apartamentos y apartaestudios con diseño contemporáneo, acabados de primera calidad y ubicación estratégica. Pensado para quienes buscan comodidad, estilo y excelente conectividad, con espacios eficientes y amenidades que elevan la experiencia de vivir.',
      location: {
        address: 'Calle 59 #17-43, Bogotá',
        neighborhood: 'Bogotá',
      },
    },
    apartmentTypes: [
      {
        id: 'apartamento-1',
        name: 'Apartamentos',
        bedrooms: 2,
        area: {
          min: 62,
          max: 95,
          unit: 'm²',
        },
        description: 'Espacios amplios y funcionales para tu familia, con diseño contemporáneo y acabados de primera calidad.',
        images: ['/img/1.webp', '/img/imagen-medio-kunku.webp'],
        features: [
          'Espacios amplios y funcionales',
          'Diseño contemporáneo',
          'Acabados de primera calidad',
          'Perfectos para familias',
        ],
      },
      {
        id: 'apartaestudio-1',
        name: 'Apartaestudios',
        bedrooms: 0,
        area: {
          min: 26,
          max: 35,
          unit: 'm²',
        },
        description: 'Perfectos para estudiantes y jóvenes profesionales, con diseño optimizado para máximo aprovechamiento del espacio.',
        images: ['/img/imagen-medio-kunku.webp', '/img/1.webp'],
        features: [
          'Diseño optimizado',
          'Perfectos para estudiantes',
          'Espacios eficientes',
          'Ideal para jóvenes profesionales',
        ],
      },
    ],
    commonAreas: {
      name: 'Amenidades Kioto',
      description: 'Zonas comunes modernas con usos atractivos y contemporáneos para disfrutar en cualquier momento del día.',
      features: [
        'Gimnasio equipado',
        'Sala de coworking',
        'Zona de lavandería',
        'Terraza social',
        'Parqueaderos',
        'Seguridad 24/7',
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
      description: 'Osaka ofrece apartaestudios funcionales con diseño inteligente para optimizar el espacio y brindar confort. Cercano a universidades y centros de estudio, es ideal para estudiantes y profesionales que buscan conectividad, amenidades útiles e inversión sólida.',
      location: {
        address: 'Calle 59 #17-43, Bogotá',
        neighborhood: 'Bogotá',
      },
    },
    apartmentTypes: [
      {
        id: 'apartaestudio-osaka',
        name: 'Apartaestudios funcionales',
        bedrooms: 0,
        area: {
          min: 24,
          max: 35,
          unit: 'm²',
        },
        description: 'Diseño optimizado para máximo aprovechamiento del espacio, ideal para estudiantes y jóvenes profesionales.',
        images: ['/img/imagen-medio-kunku.webp', '/img/1.webp'],
        features: [
          'Diseño optimizado',
          'Máximo aprovechamiento del espacio',
          'Ideal para estudiantes',
          'Perfecto para jóvenes profesionales',
        ],
      },
    ],
    commonAreas: {
      name: 'Amenidades Osaka',
      description: 'Zonas comunes diseñadas para el estudio, recreación y servicios que necesitas.',
      features: [
        'Zona de Estudio',
        'Área Recreativa',
        'Seguridad 24/7',
        'Lavandería',
        'WiFi Incluido',
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

