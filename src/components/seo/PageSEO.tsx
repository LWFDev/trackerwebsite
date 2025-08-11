import React from 'react';
import SEOHead from './SEOHead';
import { SEOData, generatePageSEO } from '@/utils/seo';

interface PageSEOProps {
  seo: SEOData | Partial<SEOData>;
  breadcrumbs?: object;
  extraSchema?: object | object[];
}

const PageSEO: React.FC<PageSEOProps> = ({ seo, breadcrumbs, extraSchema }) => {
  const merged = generatePageSEO(seo as Partial<SEOData>);

  // Merge schemas: page schema + optional breadcrumbs + any extra schemas
  let schema: any = merged.schema || null;

  if (breadcrumbs) {
    schema = schema ? [schema, breadcrumbs] : breadcrumbs;
  }

  if (extraSchema) {
    const extras = Array.isArray(extraSchema) ? extraSchema : [extraSchema];
    if (schema) {
      schema = Array.isArray(schema) ? [...schema, ...extras] : [schema, ...extras];
    } else {
      schema = extras.length === 1 ? extras[0] : extras;
    }
  }

  return <SEOHead seoData={{ ...merged, schema: schema || undefined }} />;
};

export default PageSEO;
