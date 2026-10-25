import React from 'react';

export function SeoSchema() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: "Enterprise Standard Operating Procedures & Employee Handbooks",
    description: "Turnkey industry SOPs, shift punchlists, and OSHA compliance manuals in editable Word (.docx) & PDF formats.",
    brand: {
      '@type': 'Brand',
      name: "OpsManual Pro",
    },
        image: 'https://opsmanual-pro.vercel.app/og-image.png',
    sku: 'OPSMANUAL-PRO-PRO-2026',
    offers: {
      '@type': 'Offer',
      price: '39.00',
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: 'https://opsmanual-pro.vercel.app',
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnOnline',
        returnFees: 'https://schema.org/FreeReturn',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0.00',
          currency: 'USD',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'US',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
        },
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: "4.9",
      reviewCount: "194",
      bestRating: '5',
      worstRating: '1',
    },
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: "OpsManual Pro",
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: "49.00",
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: "4.9",
      reviewCount: "194",
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Can I edit these manuals with my company branding?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. All packages are delivered in unlocked, fully editable Microsoft Word (.docx) and Google Docs formats so you can insert your logo and policies in minutes.",
        },
      },
      {
        '@type': 'Question',
        name: "Do these comply with OSHA and federal labor guidelines?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. Our templates incorporate OSHA 1910 general safety standards, EEOC at-will employment disclaimers, and wage-and-hour compliance provisions.",
        },
      }
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
