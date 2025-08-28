'use client'

import { useEffect } from 'react'

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://nashvillepressurewashing.com/#business",
          "name": "Nashville Pressure Washing",
          "description": "Professional pressure washing and exterior cleaning services in Nashville, Tennessee. Specializing in residential and commercial pressure washing, parking lot striping, and surface restoration.",
          "url": "https://nashvillepressurewashing.com",
          "telephone": "+1-615-555-0123",
          "email": "info@nashvillepressurewashing.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main Street",
            "addressLocality": "Nashville",
            "addressRegion": "TN",
            "postalCode": "37201",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 36.1627,
            "longitude": -86.7816
          },
          "areaServed": {
            "@type": "City",
            "name": "Nashville"
          },
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 36.1627,
              "longitude": -86.7816
            },
            "geoRadius": "50000"
          },
          "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00",
          "priceRange": "$$",
          "paymentAccepted": ["Cash", "Credit Card", "Check"],
          "currenciesAccepted": "USD",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Pressure Washing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residential Pressure Washing",
                  "description": "Professional pressure washing for homes, driveways, sidewalks, and decks"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Pressure Washing",
                  "description": "Commercial building cleaning, parking lots, and industrial surfaces"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Parking Lot Striping",
                  "description": "Professional parking lot line painting and striping services"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Sarah Johnson"
              },
              "reviewBody": "Excellent service! They cleaned our driveway and it looks brand new. Very professional and affordable."
            },
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Mike Thompson"
              },
              "reviewBody": "Great commercial pressure washing service. They did our entire office building and parking lot. Highly recommend!"
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What areas do you serve in Nashville?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve the greater Nashville metropolitan area including Davidson County and surrounding counties within a 50-mile radius."
              }
            },
            {
              "@type": "Question",
              "name": "How much does pressure washing cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our pricing varies based on the size of the area, type of surface, and level of cleaning required. We offer free estimates and competitive pricing starting at $150 for residential services."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer emergency services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer emergency pressure washing services for commercial properties and can often respond within 24 hours for urgent cleaning needs."
              }
            },
            {
              "@type": "Question",
              "name": "What surfaces can you clean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We clean all types of exterior surfaces including concrete, brick, vinyl siding, wood decks, driveways, sidewalks, parking lots, and commercial buildings."
              }
            },
            {
              "@type": "Question",
              "name": "Are you licensed and insured?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance to protect our clients and their property."
              }
            }
          ]
        },
        {
          "@type": "Service",
          "name": "Pressure Washing Services",
          "description": "Professional pressure washing and exterior cleaning services in Nashville, TN",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Nashville Pressure Washing"
          },
          "serviceType": "Exterior Cleaning",
          "areaServed": "Nashville, Tennessee",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Available Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "House Washing",
                  "description": "Professional house washing using soft wash techniques to safely clean siding, roofs, and gutters"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Driveway Cleaning",
                  "description": "Deep cleaning of concrete driveways, removing oil stains, dirt, and grime"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Deck & Patio Cleaning",
                  "description": "Restoration cleaning of wood decks, patios, and outdoor living spaces"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Building Cleaning",
                  "description": "Professional cleaning of commercial buildings, storefronts, and industrial facilities"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Parking Lot Striping",
                  "description": "Professional parking lot line painting, striping, and maintenance services"
                }
              }
            ]
          }
        }
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
