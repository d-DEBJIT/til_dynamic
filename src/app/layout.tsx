// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import TopBar from '../components/TopBar';
import MainNavigation from '../components/MainNavigation';
import SearchModal from '../components/SearchModal';
import SleekFooter from '../components/SleekFooter';

import { SearchProvider } from '../context/SearchContext'; // ✅

export const metadata: Metadata = {
  title: 'tilindia.in',
  description: 'Your site description goes here.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white overflow-x-hidden">
        <SearchProvider> {/* ✅ Wrap the app with context */}
          <TopBar />
          <MainNavigation />
          <SearchModal />
          <main className="pt-[56px] lg:pt-[60px]">
            {children}
          </main>
          <SleekFooter />
        </SearchProvider>
      </body>
    </html>
  );
}
