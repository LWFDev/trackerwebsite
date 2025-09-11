export interface LicenseType {
  name: string;
  included: number;
  additional: string;
}

export interface PricingTier {
  name: string;
  basePrice: number;
  tierPrice: number;
  onboardingFee: number;
  ukPricing?: {
    basePrice: number;
    tierPrice: number;
    onboardingFee: number;
  };
  description: string;
  highlighted: boolean;
  savings?: string;
  licenses: {
    full: LicenseType;
    department: LicenseType;
    station: LicenseType;
  };
  features: {
    storage: string;
    modules: string[];
    support: string[];
    integrations: string[];
    training: string[];
  };
  additionalServices: {
    name: string;
    price: string;
  }[];
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    basePrice: 79900,
    tierPrice: 799000,
    onboardingFee: 250000,
    ukPricing: {
      basePrice: 59900, // £599
      tierPrice: 599000, // £5990
      onboardingFee: 200000, // £2000
    },
    description: "Perfect for small businesses getting started with decoration tracking",
    highlighted: false,
    licenses: {
      full: {
        name: "Full User Licenses",
        included: 2,
        additional: "$219/month each"
      },
      department: {
        name: "Department Licenses",
        included: 2,
        additional: "$139/month each"
      },
      station: {
        name: "Station Licenses",
        included: 2,
        additional: "$59/month each"
      }
    },
    features: {
      storage: "25GB included, $10/GB additional",
      modules: [
        "Base Garments Module",
        "Customer Database",
        "Sales Order Management",
        "Basic Production Tracking"
      ],
      support: [
        "Email support",
        "Knowledge base access",
        "Community forum"
      ],
      integrations: [
        "Basic API access",
        "1 third-party integration"
      ],
      training: [
        "Self-service onboarding",
        "Video tutorials",
        "Documentation"
      ]
    },
    additionalServices: [
      { name: "Additional Storage (per GB)", price: "$10/month" },
      { name: "Priority Support", price: "$200/month" },
      { name: "Custom Integration", price: "$2,500 setup" }
    ]
  },
  {
    name: "Decorator",
    basePrice: 199900,
    tierPrice: 1999000,
    onboardingFee: 450000,
    ukPricing: {
      basePrice: 149900, // £1499
      tierPrice: 1499000, // £14990
      onboardingFee: 350000, // £3500
    },
    description: "Ideal for growing decoration businesses with advanced needs",
    highlighted: true,
    licenses: {
      full: {
        name: "Full User Licenses",
        included: 5,
        additional: "$199/month each"
      },
      department: {
        name: "Department Licenses",
        included: 5,
        additional: "$100/month each"
      },
      station: {
        name: "Station Licenses",
        included: 5,
        additional: "$49/month each"
      }
    },
    features: {
      storage: "100GB included, $8/GB additional",
      modules: [
        "All Starter modules",
        "Product Designer",
        "Artwork Management",
        "Advanced Production",
        "Inventory Management",
        "Customer Portal",
        "Analytics & Reporting"
      ],
      support: [
        "Priority email & chat support",
        "Phone support",
        "Dedicated account manager"
      ],
      integrations: [
        "Advanced API access",
        "5 third-party integrations",
        "Webhook support"
      ],
      training: [
        "Guided onboarding",
        "Live training sessions",
        "Custom documentation"
      ]
    },
    additionalServices: [
      { name: "Additional Storage (per GB)", price: "$8/month" },
      { name: "24/7 Support", price: "$500/month" },
      { name: "Custom Development", price: "$150/hour" }
    ]
  },
  {
    name: "Enterprise",
    basePrice: 0,
    tierPrice: 0,
    onboardingFee: 0,
    description: "Comprehensive solution for large-scale decoration operations",
    highlighted: false,
    licenses: {
      full: {
        name: "Full User Licenses",
        included: 0,
        additional: "Custom pricing"
      },
      department: {
        name: "Department Licenses",
        included: 0,
        additional: "Custom pricing"
      },
      station: {
        name: "Station Licenses",
        included: 0,
        additional: "Custom pricing"
      }
    },
    features: {
      storage: "Unlimited storage included",
      modules: [
        "All Decorator modules",
        "Multi-location support",
        "Advanced workflow automation",
        "Custom module development",
        "White-label options",
        "Advanced security features"
      ],
      support: [
        "24/7 priority support",
        "Dedicated success manager",
        "On-site training available",
        "Custom SLA"
      ],
      integrations: [
        "Unlimited integrations",
        "Custom API development",
        "Enterprise SSO",
        "Advanced webhooks"
      ],
      training: [
        "Custom training program",
        "On-site implementation",
        "Change management support",
        "Ongoing education"
      ]
    },
    additionalServices: [
      { name: "Custom Development", price: "Quote on request" },
      { name: "Professional Services", price: "Quote on request" },
      { name: "Dedicated Infrastructure", price: "Quote on request" }
    ]
  }
];