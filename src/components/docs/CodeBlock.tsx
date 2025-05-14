
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

const CodeBlock = ({ code, language, title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Define syntax highlighting colors
  const keywordColor = "text-yellow-400";
  const stringColor = "text-green-400";
  const commentColor = "text-zinc-500";
  const functionColor = "text-blue-400";
  const variableColor = "text-purple-400";
  
  // Very simple syntax highlighting based on language
  const highlightedCode = () => {
    if (language === "jsx" || language === "tsx") {
      return code
        .replace(
          /(import|export|const|function|return|if|else|from|let|var)/g,
          `<span class="${keywordColor}">$1</span>`
        )
        .replace(
          /(["'].*?["'])/g,
          `<span class="${stringColor}">$1</span>`
        )
        .replace(
          /(\/\/.*)/g,
          `<span class="${commentColor}">$1</span>`
        )
        .replace(
          /(&lt;[\/\w\s="'.:;-]*&gt;)/g, 
          `<span class="${functionColor}">$1</span>`
        );
    }
    
    return code;
  };

  return (
    <div className="rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
      {title && (
        <div className="px-4 py-2 bg-zinc-800 border-b border-zinc-700 flex justify-between items-center">
          <span className="text-sm font-medium text-zinc-300">{title}</span>
          <div className="flex items-center space-x-2 text-xs text-zinc-400">
            <span className="px-2 py-0.5 rounded-full bg-zinc-700">{language}</span>
          </div>
        </div>
      )}
      <div className="relative group">
        <pre className="p-4 overflow-x-auto text-sm">
          <code 
            dangerouslySetInnerHTML={{ 
              __html: highlightedCode() 
            }} 
            className="font-mono text-zinc-300"
          />
        </pre>
        <button
          onClick={handleCopy}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-md transition-opacity",
            "bg-zinc-800/80 hover:bg-zinc-700 opacity-0 group-hover:opacity-100"
          )}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-zinc-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
