type Props = {
  title: string
  subtitle?: string
  image?: string
}

export const PageBanner = ({ title, subtitle, image = '/img/banner-kinku.webp' }: Props) => {
  return (
    <section className="relative overflow-hidden bg-gray-900 min-h-[50vh] md:min-h-[60vh] flex items-center pt-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/60 to-gray-900"></div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24 text-center">
        <h1 className="text-white font-extralight leading-tight tracking-tight text-4xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/80 max-w-3xl mx-auto text-sm md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

export default PageBanner


