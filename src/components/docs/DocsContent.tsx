
import React from "react";
import { motion } from "framer-motion";
import { DocItem } from "@/data/docsData";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CodeBlock from "@/components/docs/CodeBlock";

interface DocsContentProps {
  doc: DocItem;
}

const DocsContent = ({ doc }: DocsContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden"
    >
      {/* Document header */}
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 px-6 py-5 border-b border-zinc-700">
        <h1 className="text-2xl md:text-3xl font-bold text-white">{doc.title}</h1>
        {doc.description && (
          <p className="mt-2 text-zinc-300">{doc.description}</p>
        )}
      </div>
      
      {/* Document content */}
      <div className="p-6 md:p-8">
        <div className="prose prose-invert max-w-none prose-headings:font-semibold 
                       prose-headings:text-white prose-p:text-zinc-300
                       prose-a:text-gold-light prose-a:no-underline prose-a:font-medium
                       hover:prose-a:text-gold-hover prose-code:bg-zinc-700 
                       prose-code:text-zinc-200 prose-code:px-1.5 prose-code:py-0.5 
                       prose-code:rounded-md prose-code:before:content-none 
                       prose-code:after:content-none">
          {/* Render content based on HTML string */}
          <div dangerouslySetInnerHTML={{ __html: doc.content }} />
          
          {/* Display code examples if available */}
          {doc.codeExamples && doc.codeExamples.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Code Examples</h2>
              <div className="space-y-4">
                {doc.codeExamples.map((example, index) => (
                  <CodeBlock 
                    key={index} 
                    code={example.code} 
                    language={example.language} 
                    title={example.title} 
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Related docs */}
          {doc.relatedDocs && doc.relatedDocs.length > 0 && (
            <div className="mt-12">
              <Separator className="mb-6" />
              <h3 className="text-lg font-medium mb-4">Related Documentation</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {doc.relatedDocs.map((relatedDoc, index) => (
                  <Card key={index} className="bg-zinc-800 border-zinc-700 hover:border-gold-DEFAULT/50 transition-colors">
                    <div className="p-4">
                      <h4 className="font-medium text-white">{relatedDoc.title}</h4>
                      <p className="text-sm text-zinc-400 mt-1">{relatedDoc.description}</p>
                      <a 
                        href={`/documentation/${relatedDoc.categoryId}/${relatedDoc.id}`}
                        className="text-sm text-gold-light font-medium mt-2 inline-block hover:underline"
                      >
                        Read more →
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DocsContent;
