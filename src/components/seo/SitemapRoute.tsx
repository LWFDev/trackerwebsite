import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateSitemap, generateRobotsTxt } from '@/utils/sitemap';

interface SitemapRouteProps {
  type: 'sitemap' | 'robots';
}

const SitemapRoute: React.FC<SitemapRouteProps> = ({ type }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const content = type === 'sitemap' ? generateSitemap() : generateRobotsTxt();
    const mimeType = type === 'sitemap' ? 'application/xml' : 'text/plain';
    
    // Create and download the file
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    
    // Set proper headers via JavaScript (limited, but better than nothing)
    const response = new Response(content, {
      headers: {
        'Content-Type': mimeType,
        'Cache-Control': 'public, max-age=3600',
      }
    });
    
    // For development, we'll show the content in a new window
    if (process.env.NODE_ENV === 'development') {
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(`<pre>${content}</pre>`);
        newWindow.document.title = type === 'sitemap' ? 'sitemap.xml' : 'robots.txt';
      }
    }
    
    // In production, we should serve this as a proper XML/text response
    // This requires server-side configuration
    
    // Redirect back to home after showing content
    setTimeout(() => {
      navigate('/');
    }, 100);
    
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [type, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="prose prose-invert max-w-4xl">
        <h1>Generating {type === 'sitemap' ? 'Sitemap' : 'Robots.txt'}...</h1>
        <p>Your {type === 'sitemap' ? 'sitemap.xml' : 'robots.txt'} is being generated.</p>
      </div>
    </div>
  );
};

export default SitemapRoute;