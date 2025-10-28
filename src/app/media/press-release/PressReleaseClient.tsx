'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';

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
  const handleViewDocument = (url: string | null) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleDownloadDocument = (url: string | null, fileName: string | null) => {
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName || 'document';
      link.click();
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/Media-page.jpg`}
          alt="press-release"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Press <span className="text-[#F1B434]">Release</span>
              </motion.h1>
              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.p
                className="text-lg text-gray-200 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Latest press releases and announcements from TIL
              </motion.p>
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
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm font-semibold text-gray-900">Details</div>
              <div className="text-sm font-semibold text-gray-900">Actions</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {documents.length > 0 ? (
              documents.map((document, index) => (
                <motion.div
                  key={document.doc_id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    {/* Details Column */}
                    <div className="text-sm text-gray-900">
                      {document.uploaded_file_desc || 'Untitled Document'}
                    </div>

                    {/* Actions Column */}
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleViewDocument(document.url)}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#F1B434] border border-[#F1B434] rounded-md hover:bg-[#F1B434] hover:text-white transition-colors"
                        disabled={!document.url}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Document
                      </button>
                      <button
                        onClick={() => handleDownloadDocument(document.url, document.user_file_name)}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#F1B434] border border-transparent rounded-md hover:bg-[#E8AC30] transition-colors"
                        disabled={!document.url}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Document
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="px-6 py-8 text-center text-gray-500">
                No press releases available at the moment.
              </div>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}