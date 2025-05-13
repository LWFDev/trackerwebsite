
import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-playfair font-bold mb-8 text-white">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Last Updated: May 13, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Acceptance of Terms</h2>
          <p className="text-gray-300 mb-4">
            Welcome to Track My Business. By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Use License</h2>
          <p className="text-gray-300 mb-4">
            Permission is granted to temporarily access the materials on Track My Business's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            <li className="mb-2">Modify or copy the materials</li>
            <li className="mb-2">Use the materials for any commercial purpose</li>
            <li className="mb-2">Attempt to decompile or reverse engineer any software contained on Track My Business's website</li>
            <li className="mb-2">Remove any copyright or other proprietary notations from the materials</li>
            <li className="mb-2">Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Disclaimer</h2>
          <p className="text-gray-300 mb-4">
            The materials on Track My Business's website are provided on an 'as is' basis. Track My Business makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Limitations</h2>
          <p className="text-gray-300 mb-4">
            In no event shall Track My Business or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Track My Business's website, even if Track My Business or a Track My Business authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Accuracy of Materials</h2>
          <p className="text-gray-300 mb-4">
            The materials appearing on Track My Business's website could include technical, typographical, or photographic errors. Track My Business does not warrant that any of the materials on its website are accurate, complete or current. Track My Business may make changes to the materials contained on its website at any time without notice. However, Track My Business does not make any commitment to update the materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
