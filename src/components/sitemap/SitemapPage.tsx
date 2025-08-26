import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Download, Calendar, Star, ExternalLink, Copy, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import SEOHead from '@/components/seo/SEOHead';
import { parseSitemapData, getSitemapStats, SitemapSection, SitemapUrl } from '@/utils/sitemapParser';

const SitemapPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState<string>('All');
  const [copiedUrls, setCopiedUrls] = useState<Set<string>>(new Set());
  const { toast } = useToast();
  
  const sitemapData = useMemo(() => parseSitemapData(), []);
  const stats = useMemo(() => getSitemapStats(), []);
  
  // Filter data based on search and section
  const filteredData = useMemo(() => {
    let filtered = sitemapData;
    
    if (selectedSection !== 'All') {
      filtered = sitemapData.filter(section => section.title === selectedSection);
    }
    
    if (searchQuery) {
      filtered = filtered.map(section => ({
        ...section,
        urls: section.urls.filter(url => 
          url.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          url.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          url.loc.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.urls.length > 0);
    }
    
    return filtered;
  }, [sitemapData, searchQuery, selectedSection]);

  const getPriorityBadge = (priority: string) => {
    const priorityNum = parseFloat(priority);
    if (priorityNum >= 0.8) return <Badge variant="default" className="bg-emerald text-background">High</Badge>;
    if (priorityNum >= 0.6) return <Badge variant="secondary">Medium</Badge>;
    return <Badge variant="outline">Low</Badge>;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const downloadXMLSitemap = async () => {
    try {
      const response = await fetch('/sitemap.xml');
      if (!response.ok) throw new Error('Failed to fetch sitemap');
      
      const xmlContent = await response.text();
      const blob = new Blob([xmlContent], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'sitemap.xml';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Download started",
        description: "The XML sitemap file is being downloaded.",
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Failed to download the XML sitemap. Please try again.",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrls(prev => new Set([...prev, url]));
      setTimeout(() => {
        setCopiedUrls(prev => {
          const newSet = new Set(prev);
          newSet.delete(url);
          return newSet;
        });
      }, 2000);
      
      toast({
        title: "URL copied!",
        description: "The URL has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Failed to copy URL to clipboard.",
        variant: "destructive",
      });
    }
  };

  const copyAllUrls = async () => {
    const allUrls = filteredData.flatMap(section => section.urls.map(url => url.loc));
    try {
      await navigator.clipboard.writeText(allUrls.join('\n'));
      toast({
        title: "All URLs copied!",
        description: `Copied ${allUrls.length} URLs to your clipboard.`,
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Failed to copy URLs to clipboard.",
        variant: "destructive",
      });
    }
  };

  const sectionTabs = ['All', ...sitemapData.map(section => section.title)];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        seoData={{
          title: 'Sitemap - TrackMyBusiness',
          description: 'Complete sitemap of TrackMyBusiness website including all pages, modules, industries, and resources.',
          keywords: 'sitemap, trackmybusiness, pages, navigation, modules, industries',
          canonical: 'https://www.trackmybusiness.us/sitemap'
        }}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Website Sitemap</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Complete overview of all pages and sections on TrackMyBusiness
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">{stats.totalPages}</div>
              <div className="text-sm text-muted-foreground">Total Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">{stats.totalSections}</div>
              <div className="text-sm text-muted-foreground">Sections</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">{stats.lastUpdated}</div>
              <div className="text-sm text-muted-foreground">Last Updated</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search pages, titles, or descriptions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={copyAllUrls} variant="outline" className="flex items-center gap-2">
              <Copy className="h-4 w-4" />
              Copy All URLs
            </Button>
            <Button onClick={downloadXMLSitemap} variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download XML
            </Button>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {sectionTabs.map((tab) => (
            <Button
              key={tab}
              variant={selectedSection === tab ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSection(tab)}
              className="text-sm"
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Sitemap Sections */}
        <div className="space-y-8">
          {filteredData.map((section: SitemapSection) => (
            <Card key={section.title} className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <span className="text-2xl">{section.icon}</span>
                  {section.title}
                  <Badge variant="secondary" className="ml-auto">
                    {section.urls.length} pages
                  </Badge>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {section.urls.map((url: SitemapUrl) => {
                    const isExternal = url.loc.startsWith('http');
                    const linkPath = isExternal ? url.loc : url.loc.replace('https://www.trackmybusiness.us', '') || '/';
                    const isCopied = copiedUrls.has(url.loc);
                    
                    return (
                      <div key={url.loc} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            {isExternal ? (
                              <a
                                href={url.loc}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-foreground hover:text-gold transition-colors flex items-center gap-1"
                              >
                                {url.title}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            ) : (
                              <Link
                                to={linkPath}
                                className="font-semibold text-foreground hover:text-gold transition-colors"
                              >
                                {url.title}
                              </Link>
                            )}
                            {getPriorityBadge(url.priority)}
                          </div>
                          {url.description && (
                            <p className="text-sm text-muted-foreground mb-2">
                              {url.description}
                            </p>
                          )}
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDate(url.lastmod)}
                            </span>
                            <span>Updates {url.changefreq}</span>
                            <span className="font-mono text-xs bg-muted px-2 py-1 rounded">
                              {linkPath}
                            </span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(url.loc)}
                          className="ml-4 flex items-center gap-2"
                        >
                          {isCopied ? (
                            <>
                              <Check className="h-3 w-3 text-emerald" />
                              <span className="text-emerald">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredData.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground">
                No pages found matching your search criteria.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSection('All');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Footer Info */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="font-semibold text-foreground mb-2">About This Sitemap</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This human-readable sitemap provides an organized view of all pages on the TrackMyBusiness website. 
            For search engines, you can access the XML sitemap format using the download button above.
          </p>
          <div className="text-xs text-muted-foreground">
            <p>Priority levels: High (0.8+), Medium (0.6-0.7), Low (&lt;0.6)</p>
            <p>Last generated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;