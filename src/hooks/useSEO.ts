import { useEffect } from 'react';
import { Page } from '../types';

interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const seoMetadata: Record<Page, SEOMetadata> = {
  'Home': {
    title: 'XMRMatters - Privacy-First Monero Exchange',
    description: 'Discover Monero\'s privacy revolution and learn why peer-to-peer cryptocurrency trading matters. Launch coming January 5, 2025.',
    keywords: 'Monero, XMR, privacy, P2P, cryptocurrency, trading, anonymous, exchange, decentralized, KYC-free, XMRMatters, secure, private, financial freedom',
    image: '/images/HLogo.png',
  },
  'About': {
    title: 'About XMRMatters - Our Mission for Financial Privacy',
    description: 'Learn about XMRMatters\' mission to empower financial privacy through Monero and peer-to-peer trading without KYC requirements.',
    keywords: 'Monero, privacy, financial freedom, P2P trading, decentralized, cryptocurrency, KYC-free, XMR, MoneroCommunity',
    image: '/images/HLogo.png',
  },
  'Donate': {
    title: 'Support XMRMatters - Donate to Privacy',
    description: 'Help us build privacy-first financial tools. Donate in Monero to support XMRMatters development.',
    keywords: 'donate, Monero, support, privacy, contribution, P2P, Exchange, Platform, DEX, LocalMoneroInspired, XMRMatters, PrivacyFirst, MoneroFoundation',
    image: '/images/HLogo.png',
  },
  'Monero': {
    title: 'Monero & Privacy - Understanding Digital Freedom',
    description: 'Explore Monero\'s privacy features, RingCT technology, and why financial privacy matters in the modern world.',
    keywords: 'Monero, privacy, RingCT, cryptocurrency, anonymity, digital freedom, financial privacy, secure transactions, XMR, P2P trading, XMRMatters, decentralized',
    image: '/images/HLogo.png',
  },
};

export function useSEO(page: Page) {
  useEffect(() => {
    const metadata = seoMetadata[page];
    
    // Update document title
    document.title = `${metadata.title}`;
    
    // Update or create meta description
    let descElement = document.querySelector('meta[name="description"]');
    if (!descElement) {
      descElement = document.createElement('meta');
      descElement.setAttribute('name', 'description');
      document.head.appendChild(descElement);
    }
    descElement.setAttribute('content', metadata.description);
    
    // Update or create meta keywords
    let keywordsElement = document.querySelector('meta[name="keywords"]');
    if (!keywordsElement && metadata.keywords) {
      keywordsElement = document.createElement('meta');
      keywordsElement.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsElement);
    }
    if (keywordsElement && metadata.keywords) {
      keywordsElement.setAttribute('content', metadata.keywords);
    }
    
    // Update Open Graph tags for social sharing
    const updateOGTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    updateOGTag('og:title', metadata.title);
    updateOGTag('og:description', metadata.description);
    if (metadata.image) {
      updateOGTag('og:image', metadata.image);
    }
    updateOGTag('og:type', 'website');
    if (metadata.url) {
      updateOGTag('og:url', metadata.url);
    }
    
    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', metadata.title);
    updateTwitterTag('twitter:description', metadata.description);
    if (metadata.image) {
      updateTwitterTag('twitter:image', metadata.image);
    }
  }, [page]);
}
