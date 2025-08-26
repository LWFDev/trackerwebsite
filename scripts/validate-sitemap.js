#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml')

console.log('🔍 Validating sitemap configuration...\n')

// Check if sitemap.xml exists
if (!fs.existsSync(sitemapPath)) {
  console.error('❌ ERROR: sitemap.xml not found at public/sitemap.xml')
  process.exit(1)
}

console.log('✅ sitemap.xml found')

// Read and validate XML structure
try {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8')
  
  // Basic XML validation
  if (!sitemapContent.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
    console.error('❌ ERROR: Invalid XML declaration')
    process.exit(1)
  }
  
  if (!sitemapContent.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
    console.error('❌ ERROR: Invalid sitemap namespace')
    process.exit(1)
  }
  
  // Count URLs
  const urlCount = (sitemapContent.match(/<url>/g) || []).length
  console.log(`✅ Found ${urlCount} URLs in sitemap`)
  
  // Validate required elements
  if (sitemapContent.includes('<loc>')) {
    console.log('✅ Location tags found')
  } else {
    console.error('❌ ERROR: No location tags found')
    process.exit(1)
  }
  
} catch (error) {
  console.error('❌ ERROR reading sitemap:', error.message)
  process.exit(1)
}

// Check Vite configuration
const viteConfigPath = path.resolve(__dirname, '../vite.config.ts')
if (fs.existsSync(viteConfigPath)) {
  const viteConfig = fs.readFileSync(viteConfigPath, 'utf-8')
  
  if (viteConfig.includes('staticFileServerPlugin')) {
    console.log('✅ Static file server plugin configured')
  } else {
    console.warn('⚠️  Static file server plugin not found in vite.config.ts')
  }
  
  if (viteConfig.includes("assetsInclude: ['**/*.xml']")) {
    console.log('✅ XML assets inclusion configured')
  } else {
    console.warn('⚠️  XML assets inclusion not configured')
  }
}

// Check deployment configurations
const netlifyConfig = path.resolve(__dirname, '../netlify.toml')
const vercelConfig = path.resolve(__dirname, '../public/vercel.json')
const redirectsConfig = path.resolve(__dirname, '../public/_redirects')

if (fs.existsSync(netlifyConfig)) {
  console.log('✅ Netlify configuration found')
}

if (fs.existsSync(vercelConfig)) {
  console.log('✅ Vercel configuration found')
}

if (fs.existsSync(redirectsConfig)) {
  console.log('✅ Redirects configuration found')
}

console.log('\n🎉 Sitemap validation complete!')
console.log('\n📋 Next steps:')
console.log('1. Start development server: npm run dev')
console.log('2. Test sitemap access: http://localhost:8080/sitemap.xml')
console.log('3. Check browser network tab for successful XML response')
console.log('4. Validate with online sitemap checker after deployment')