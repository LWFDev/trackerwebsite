import { useEffect } from 'react'

const SitemapRoute = () => {
  useEffect(() => {
    // Generate sitemap content dynamically as fallback
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tracker-systems.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tracker-systems.com/pricing</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://tracker-systems.com/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tracker-systems.com/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`

    // Redirect browser to download the sitemap content
    const blob = new Blob([sitemapContent], { type: 'application/xml' })
    const url = URL.createObjectURL(blob)
    
    // Replace the page content with XML
    document.body.innerHTML = `<pre style="font-family: monospace; white-space: pre-wrap; margin: 0; padding: 20px;">${sitemapContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
    document.title = 'Sitemap'
    
    // Cleanup
    return () => URL.revokeObjectURL(url)
  }, [])

  return null
}

export default SitemapRoute