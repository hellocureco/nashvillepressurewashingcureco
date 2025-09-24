'use client'

import { useEffect } from 'react'

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://thecurecompany.com/#business",
          "name": "The Cure Company",
          "description": "Professional pressure washing and exterior cleaning services in Nashville, Tennessee. Specializing in residential and commercial pressure washing, parking lot striping, and surface restoration.",
          "url": "https://thecurecompany.com",
          "telephone": "+1-615-555-0123",
          "email": "info@thecurecompany.com",
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
            "name": "Nashville Pressure Washing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residential Pressure Washing Nashville",
                  "description": "Professional house washing, driveway cleaning, deck restoration, and patio cleaning for Nashville homeowners"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Pressure Washing Nashville",
                  "description": "Commercial building cleaning, gas station forecourt cleaning, convenience store pressure washing, and industrial surfaces"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gas Station Pressure Washing Nashville",
                  "description": "EPA-compliant gas station forecourt cleaning, pump area cleaning, and convenience store pressure washing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Parking Lot Striping Nashville",
                  "description": "ADA-compliant parking lot line painting, handicap parking striping, fire lane striping, and regulatory compliance"
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
                "text": "We serve the greater Nashville metropolitan area including Davidson County and surrounding counties within a 50-mile radius. This includes Franklin, Brentwood, Murfreesboro, Hendersonville, Gallatin, Clarksville, Antioch, Madison, Spring Hill, Smyrna, and Columbia."
              }
            },
            {
              "@type": "Question",
              "name": "How much does pressure washing cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our pricing varies based on the size of the area, type of surface, and level of cleaning required. We offer free estimates and competitive pricing starting at $150 for residential services, $200 for parking lot striping, and $300 for commercial services. Contact us for a detailed quote."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer emergency services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer emergency pressure washing services for commercial properties and can often respond within 24 hours for urgent cleaning needs. We provide 24/7 emergency service for critical situations like property damage cleanup or urgent compliance requirements."
              }
            },
            {
              "@type": "Question",
              "name": "What surfaces can you clean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We clean all types of exterior surfaces including concrete, brick, vinyl siding, wood decks, driveways, sidewalks, parking lots, and commercial buildings. We also specialize in gas station forecourts, industrial equipment, and ADA compliance striping."
              }
            },
            {
              "@type": "Question",
              "name": "Are you licensed and insured?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance to protect our clients and their property. We are also BBB accredited, EPA certified, and OSHA compliant."
              }
            },
            {
              "@type": "Question",
              "name": "How long does a typical pressure washing job take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Job duration depends on the size and complexity of the project. Residential homes typically take 2-4 hours, commercial buildings 4-8 hours, and parking lot striping 2-6 hours. We provide time estimates during our free consultation."
              }
            },
            {
              "@type": "Question",
              "name": "Do you use environmentally friendly cleaning solutions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we use eco-friendly cleaning solutions that are safe for plants, pets, and the environment. Our cleaning products are biodegradable and meet EPA standards for environmental safety."
              }
            },
            {
              "@type": "Question",
              "name": "Can you work around my schedule?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! We offer flexible scheduling including evenings and weekends. We work around your business hours for commercial properties and can accommodate residential schedules. Same-day service is available for urgent needs."
              }
            },
            {
              "@type": "Question",
              "name": "What's included in your parking lot striping service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our parking lot striping includes line painting, ADA handicap spaces, fire lanes, directional arrows, numbered spaces, and curb painting. We ensure all markings meet local regulations and safety standards for full compliance."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide before and after photos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we document our work with before and after photos for quality assurance and your records. These photos can be useful for insurance claims, property management records, or showcasing the transformation."
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
            "name": "The Cure Company"
          },
          "serviceType": "Exterior Cleaning",
          "areaServed": "Nashville, Tennessee",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Nashville Pressure Washing & Striping Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "House Washing Nashville",
                  "description": "Professional house washing using soft wash techniques to safely clean siding, roofs, and gutters in Nashville"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Driveway Cleaning Nashville",
                  "description": "Deep cleaning of concrete driveways, removing oil stains, dirt, and grime in Nashville and surrounding areas"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gas Station Forecourt Cleaning",
                  "description": "EPA-compliant gas station forecourt cleaning, pump area cleaning, and convenience store pressure washing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Building Cleaning Nashville",
                  "description": "Professional cleaning of commercial buildings, storefronts, and industrial facilities in Nashville"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "ADA Parking Compliance Nashville",
                  "description": "ADA-compliant handicap parking striping, fire lane striping, and regulatory compliance services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Parking Lot Striping Nashville",
                  "description": "Professional parking lot line painting, striping, and maintenance services with ADA compliance"
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
