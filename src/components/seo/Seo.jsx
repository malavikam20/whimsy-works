import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = 'Triune Global Trading | Antique & Heritage Crafts from Kerala',
  description = 'Curators of rare antique and heritage crafts from Kerala. Aranmula mirrors, teak clocks, brass sculptures, and traditional wood carvings with worldwide shipping.',
  pathname = '',
  image = 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1200&q=80',
}) => {
  const siteUrl = 'https://triuneglobal.netlify.app'
  const url = `${siteUrl}${pathname}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Triune Global Trading" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <html lang="en" />
    </Helmet>
  )
}

export default SEO