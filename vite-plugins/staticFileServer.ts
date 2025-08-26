import type { Plugin } from 'vite'
import fs from 'fs'
import path from 'path'
import type { IncomingMessage, ServerResponse } from 'http'

export function staticFileServerPlugin(): Plugin {
  return {
    name: 'static-file-server',
    configureServer(server) {
      server.middlewares.use('/sitemap.xml', (req: IncomingMessage, res: ServerResponse, next: () => void) => {
        try {
          const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml')
          
          if (fs.existsSync(sitemapPath)) {
            const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8')
            
            res.setHeader('Content-Type', 'application/xml; charset=utf-8')
            res.setHeader('Cache-Control', 'public, max-age=3600')
            res.setHeader('X-Robots-Tag', 'index, follow')
            res.end(sitemapContent)
          } else {
            next()
          }
        } catch (error) {
          console.error('Error serving sitemap.xml:', error)
          next()
        }
      })

      server.middlewares.use('/robots.txt', (req: IncomingMessage, res: ServerResponse, next: () => void) => {
        try {
          const robotsPath = path.resolve(process.cwd(), 'public/robots.txt')
          
          if (fs.existsSync(robotsPath)) {
            const robotsContent = fs.readFileSync(robotsPath, 'utf-8')
            
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.setHeader('Cache-Control', 'public, max-age=3600')
            res.end(robotsContent)
          } else {
            next()
          }
        } catch (error) {
          console.error('Error serving robots.txt:', error)
          next()
        }
      })

      // Handle sitemap index and other XML files
      server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
        if (!req.url || !/\/(sitemap.*\.xml|.*\.xml)$/.test(req.url)) {
          return next()
        }

        try {
          const xmlPath = path.resolve(process.cwd(), 'public' + req.url)
          
          if (fs.existsSync(xmlPath)) {
            const xmlContent = fs.readFileSync(xmlPath, 'utf-8')
            
            res.setHeader('Content-Type', 'application/xml; charset=utf-8')
            res.setHeader('Cache-Control', 'public, max-age=3600')
            res.end(xmlContent)
          } else {
            next()
          }
        } catch (error) {
          console.error('Error serving XML file:', error)
          next()
        }
      })
    }
  }
}