'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, X } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

type DocumentDetail = {
  doc_id: number;
  file_type: string | null;
  table_name: string | null;
  ref_id: number | null;
  uploaded_file_desc: string | null;
  random_file_name: string | null;
  url: string | null;
  publication: string | null;
  user_file_name: string | null;
  precedence: number | null;
  is_disabled: boolean | null;
  uploaded_by_user: number | null;
  uploaded_on: Date | null;
  modified_on: Date | null;
};

interface PressReleaseClientProps {
  documents: DocumentDetail[];
}

export function PressReleaseClient({ documents }: PressReleaseClientProps) {
  const [selectedDocument, setSelectedDocument] = useState<DocumentDetail | null>(null);

  // ✅ Build the correct URL for each document
  const getFileUrl = (document: DocumentDetail) => {
    if (document.url && document.url.trim() !== '') return document.url;
    if (document.random_file_name)
      return `${basePath}/uploads/${document.random_file_name}`;
    return null;
  };

  // ✅ Open document in modal iframe
  const handleViewDocument = (document: DocumentDetail) => {
    setSelectedDocument(document);
  };

  // ✅ Trigger download
  const handleDownloadDocument = (url: string | null, fileName: string | null) => {
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName || 'document';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('File not available for download.');
    }
  };

  return (
    <div className="bg-white min-h-screen relative">
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/Media-page.jpg`}
          alt="press-release"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-white mb-6">
                Press <span className="text-[#F1B434]">Release</span>
              </h1>
              <p className="text-lg text-gray-200 max-w-xl leading-relaxed">
                Latest press releases and announcements from TIL
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm font-semibold text-gray-900">Details</div>
              <div className="text-sm font-semibold text-gray-900">Actions</div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {documents.length > 0 ? (
              documents.map((document, index) => {
                const fileUrl = getFileUrl(document);

                return (
                  <motion.div
                    key={document.doc_id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-6 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                      <div className="text-sm text-gray-900">
                        {document.uploaded_file_desc || 'Untitled Document'}
                      </div>

                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleViewDocument(document)}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#F1B434] border border-[#F1B434] rounded-md hover:bg-[#F1B434] hover:text-white transition-colors"
                          disabled={!fileUrl}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Document
                        </button>
                        <button
                          onClick={() => handleDownloadDocument(fileUrl, document.user_file_name)}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#F1B434] border border-transparent rounded-md hover:bg-[#E8AC30] transition-colors"
                          disabled={!fileUrl}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Document
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="px-6 py-8 text-center text-gray-500">
                No press releases available at the moment.
              </div>
            )}
          </div>
        </motion.div>
      </main>

      {/* 🪟 Modal with Iframe */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] relative overflow-hidden"
          >
            <div className="absolute top-3 right-3 z-50">
              <button
                onClick={() => setSelectedDocument(null)}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <iframe
              src={getFileUrl(selectedDocument) || ''}
              className="w-full h-full rounded-2xl"
              title="Document Viewer"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
