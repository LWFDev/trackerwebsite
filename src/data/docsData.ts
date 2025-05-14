
// Types for documentation data
export interface CodeExample {
  title: string;
  language: string;
  code: string;
}

export interface RelatedDoc {
  id: string;
  categoryId: string;
  title: string;
  description: string;
}

export interface DocItem {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExamples?: CodeExample[];
  relatedDocs?: RelatedDoc[];
}

export interface DocsCategory {
  id: string;
  name: string;
  description: string;
  docs: DocItem[];
}

// Sample documentation data
export const docsCategories: DocsCategory[] = [
  {
    id: "getting-started",
    name: "Getting Started",
    description: "Start your journey with our platform",
    docs: [
      {
        id: "introduction",
        title: "Introduction",
        description: "Learn about our platform and what it offers",
        content: `
          <h2>Welcome to Track My Business</h2>
          <p>
            Track My Business is a comprehensive business management platform designed specifically 
            for print shops, embroidery businesses, and other decorating companies.
          </p>
          <p>
            This documentation will help you understand how to use our platform effectively, 
            how to integrate with our APIs, and how to get the most out of our features.
          </p>
          
          <h3>Who is this documentation for?</h3>
          <p>
            This documentation is designed for:
          </p>
          <ul>
            <li>Business owners looking to streamline their operations</li>
            <li>Developers integrating with our platform</li>
            <li>Production managers optimizing workflows</li>
            <li>Sales teams managing customer orders</li>
          </ul>
          
          <h3>What you'll learn</h3>
          <p>
            Throughout this documentation, you'll learn:
          </p>
          <ul>
            <li>How to navigate and use the platform</li>
            <li>Best practices for each module</li>
            <li>How to integrate with external services</li>
            <li>Tips and tricks for power users</li>
          </ul>
        `,
        codeExamples: [
          {
            title: "Quick API Example",
            language: "javascript",
            code: `// Initialize the Track My Business client
const tmb = new TrackMyBusiness({
  apiKey: "your-api-key"
});

// Fetch all orders
tmb.orders.list()
  .then(orders => {
    console.log(\`You have \${orders.length} orders\`);
  })
  .catch(error => {
    console.error("Error fetching orders:", error);
  });`
          }
        ],
        relatedDocs: [
          {
            id: "quick-start",
            categoryId: "getting-started",
            title: "Quick Start Guide",
            description: "Get up and running in minutes"
          },
          {
            id: "platform-overview",
            categoryId: "getting-started",
            title: "Platform Overview",
            description: "See how all the pieces fit together"
          }
        ]
      },
      {
        id: "quick-start",
        title: "Quick Start Guide",
        description: "Get up and running in minutes",
        content: `
          <h2>Quick Start Guide</h2>
          <p>
            This guide will help you get started with Track My Business in just a few minutes.
            Follow these steps to set up your account and start managing your business.
          </p>
          
          <h3>Step 1: Create Your Account</h3>
          <p>
            Visit our <a href="/get-started">signup page</a> and create your account by providing the required information.
          </p>
          
          <h3>Step 2: Set Up Your Business Profile</h3>
          <p>
            After creating your account, you'll be guided through setting up your business profile:
          </p>
          <ul>
            <li>Enter your business name and contact details</li>
            <li>Specify your business type and size</li>
            <li>Select which decoration methods you offer</li>
          </ul>
          
          <h3>Step 3: Explore the Dashboard</h3>
          <p>
            Once your profile is set up, you'll be taken to your dashboard where you can:
          </p>
          <ul>
            <li>View key metrics at a glance</li>
            <li>Access different modules</li>
            <li>Set up additional users</li>
            <li>Customize your preferences</li>
          </ul>
          
          <h3>Step 4: Import Your Data</h3>
          <p>
            To get the most out of the platform, import your existing data:
          </p>
          <ul>
            <li>Customers: Import your customer database</li>
            <li>Products: Add your products and pricing</li>
            <li>Orders: Import existing orders</li>
            <li>Inventory: Set up your inventory items</li>
          </ul>
        `,
        relatedDocs: [
          {
            id: "introduction",
            categoryId: "getting-started",
            title: "Introduction",
            description: "Learn about our platform and what it offers"
          },
          {
            id: "account-setup",
            categoryId: "account",
            title: "Account Setup",
            description: "Detailed account configuration guide"
          }
        ]
      },
      {
        id: "platform-overview",
        title: "Platform Overview",
        description: "See how all the pieces fit together",
        content: `
          <h2>Platform Overview</h2>
          <p>
            Track My Business is organized into interconnected modules that work together to 
            provide a complete business management solution.
          </p>
          
          <h3>Core Modules</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div class="border border-zinc-700 rounded-md p-4">
              <h4 class="font-semibold">Sales Orders</h4>
              <p class="text-sm text-zinc-400">Manage customer orders from quote to delivery</p>
            </div>
            <div class="border border-zinc-700 rounded-md p-4">
              <h4 class="font-semibold">Customer Database</h4>
              <p class="text-sm text-zinc-400">Track customer information and order history</p>
            </div>
            <div class="border border-zinc-700 rounded-md p-4">
              <h4 class="font-semibold">Inventory</h4>
              <p class="text-sm text-zinc-400">Track stock levels and manage reordering</p>
            </div>
            <div class="border border-zinc-700 rounded-md p-4">
              <h4 class="font-semibold">Production</h4>
              <p class="text-sm text-zinc-400">Schedule and manage production workflow</p>
            </div>
          </div>
          
          <h3>Supporting Modules</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div class="border border-zinc-700 rounded-md p-4">
              <h4 class="font-semibold">Base Garments</h4>
              <p class="text-sm text-zinc-400">Manage your product catalog</p>
            </div>
            <div class="border border-zinc-700 rounded-md p-4">
              <h4 class="font-semibold">Logos</h4>
              <p class="text-sm text-zinc-400">Store and manage customer artwork</p>
            </div>
            <div class="border border-zinc-700 rounded-md p-4">
              <h4 class="font-semibold">Product Designer</h4>
              <p class="text-sm text-zinc-400">Create product mockups and visualizations</p>
            </div>
            <div class="border border-zinc-700 rounded-md p-4">
              <h4 class="font-semibold">Purchase Orders</h4>
              <p class="text-sm text-zinc-400">Manage vendor orders and receiving</p>
            </div>
          </div>
          
          <h3>Data Flow</h3>
          <p>
            Our platform is designed with a natural workflow in mind:
          </p>
          <ol>
            <li>Create customer records in the Customer Database</li>
            <li>Enter sales orders linked to customers</li>
            <li>Production schedules are automatically generated</li>
            <li>Inventory is updated as items are used</li>
            <li>Purchase orders are created based on inventory needs</li>
          </ol>
        `
      }
    ]
  },
  {
    id: "account",
    name: "Account Management",
    description: "Manage your account and user settings",
    docs: [
      {
        id: "account-setup",
        title: "Account Setup",
        description: "Configure your account settings",
        content: `
          <h2>Account Setup</h2>
          <p>
            Properly setting up your account is the first step to getting the most out of Track My Business.
            This guide will walk you through the essential account settings you should configure.
          </p>
          
          <h3>User Management</h3>
          <p>
            As an account administrator, you can add users and assign them roles:
          </p>
          <ol>
            <li>Go to Settings > Users</li>
            <li>Click "Add User"</li>
            <li>Enter the user's email address</li>
            <li>Select the appropriate role</li>
            <li>The user will receive an invitation email</li>
          </ol>
          
          <h3>Role-Based Permissions</h3>
          <p>
            Track My Business uses role-based permissions to control access to features:
          </p>
          <ul>
            <li><strong>Administrator:</strong> Full access to all features and settings</li>
            <li><strong>Manager:</strong> Access to most features but limited settings access</li>
            <li><strong>Sales:</strong> Focus on customer and order management</li>
            <li><strong>Production:</strong> Access to production schedules and job tracking</li>
            <li><strong>Warehouse:</strong> Inventory and shipping management</li>
          </ul>
          
          <h3>Business Settings</h3>
          <p>
            Configure your business settings to customize the platform:
          </p>
          <ul>
            <li>Business Information: Name, address, contact details</li>
            <li>Branding: Logo, colors, email templates</li>
            <li>Tax Settings: Tax rates and calculation methods</li>
            <li>Payment Methods: Configure available payment options</li>
            <li>Shipping Methods: Set up shipping carriers and options</li>
          </ul>
        `,
        codeExamples: [
          {
            title: "User Management API",
            language: "javascript",
            code: `// Create a new user
const newUser = await tmb.users.create({
  email: "user@example.com",
  firstName: "John",
  lastName: "Doe",
  role: "sales"
});

// Update user permissions
await tmb.users.update(newUser.id, {
  permissions: {
    customers: "read-write",
    orders: "read-write",
    products: "read-only",
    reports: "read-only"
  }
});`
          }
        ]
      },
      {
        id: "security",
        title: "Security Settings",
        description: "Protect your account and data",
        content: `
          <h2>Security Settings</h2>
          <p>
            Keeping your account secure is essential for protecting your business data.
            This guide covers the security features available in Track My Business.
          </p>
          
          <h3>Password Requirements</h3>
          <p>
            All passwords must meet the following requirements:
          </p>
          <ul>
            <li>Minimum 8 characters</li>
            <li>At least one uppercase letter</li>
            <li>At least one lowercase letter</li>
            <li>At least one number</li>
            <li>At least one special character</li>
          </ul>
          
          <h3>Two-Factor Authentication (2FA)</h3>
          <p>
            We strongly recommend enabling two-factor authentication for all users:
          </p>
          <ol>
            <li>Go to Settings > Security</li>
            <li>Click "Enable 2FA"</li>
            <li>Scan the QR code with an authenticator app</li>
            <li>Enter the verification code</li>
          </ol>
          <p>
            Administrators can require 2FA for all users in the organization from the security settings page.
          </p>
          
          <h3>Session Management</h3>
          <p>
            You can view and manage all active sessions:
          </p>
          <ol>
            <li>Go to Settings > Security > Sessions</li>
            <li>Review the list of active sessions</li>
            <li>Click "Revoke" to end a session</li>
            <li>Click "Revoke All" to end all sessions except your current one</li>
          </ol>
          
          <h3>Data Encryption</h3>
          <p>
            Track My Business uses industry-standard encryption to protect your data:
          </p>
          <ul>
            <li>All data in transit is protected with TLS 1.2+ encryption</li>
            <li>Sensitive data is encrypted at rest using AES-256</li>
            <li>API keys are securely hashed and never displayed after creation</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "api",
    name: "API Reference",
    description: "Integrate with our platform using our API",
    docs: [
      {
        id: "authentication",
        title: "Authentication",
        description: "Secure your API requests",
        content: `
          <h2>API Authentication</h2>
          <p>
            All API requests to Track My Business require authentication. This guide explains 
            how to authenticate your requests properly.
          </p>
          
          <h3>API Keys</h3>
          <p>
            To authenticate API requests, you need to use an API key:
          </p>
          <ol>
            <li>Go to Settings > Developer > API Keys</li>
            <li>Click "Create API Key"</li>
            <li>Enter a description for the key</li>
            <li>Select the appropriate scopes</li>
            <li>Copy the API key immediately (it won't be shown again)</li>
          </ol>
          
          <h3>Authentication Methods</h3>
          <p>
            There are two ways to authenticate your API requests:
          </p>
          
          <h4>1. Authorization Header</h4>
          <p>
            The recommended method is to use the Authorization header:
          </p>
          <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
          
          <h4>2. Query Parameter</h4>
          <p>
            Alternatively, you can use a query parameter (less secure):
          </p>
          <pre><code>https://api.trackmybusiness.com/v1/orders?api_key=YOUR_API_KEY</code></pre>
          
          <h3>API Key Security</h3>
          <p>
            To keep your API keys secure:
          </p>
          <ul>
            <li>Never share API keys in public repositories</li>
            <li>Use different API keys for different applications</li>
            <li>Rotate API keys periodically</li>
            <li>Restrict API keys to only the scopes they need</li>
            <li>Revoke API keys that are no longer needed</li>
          </ul>
        `,
        codeExamples: [
          {
            title: "Authentication with Node.js",
            language: "javascript",
            code: `const axios = require('axios');

// Create a client with your API key
const client = axios.create({
  baseURL: 'https://api.trackmybusiness.com/v1',
  headers: {
    'Authorization': \`Bearer \${process.env.TMB_API_KEY}\`,
    'Content-Type': 'application/json'
  }
});

// Make an authenticated request
async function getOrders() {
  try {
    const response = await client.get('/orders');
    return response.data;
  } catch (error) {
    console.error('Authentication error:', error.response.data);
    throw error;
  }
}`
          },
          {
            title: "Authentication with Python",
            language: "python",
            code: `import requests
import os

# API key from environment variable
api_key = os.environ.get('TMB_API_KEY')

# Headers with authentication
headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

# Make an authenticated request
def get_orders():
    try:
        response = requests.get(
            'https://api.trackmybusiness.com/v1/orders',
            headers=headers
        )
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Authentication error: {e}")
        raise`
          }
        ]
      },
      {
        id: "orders-api",
        title: "Orders API",
        description: "Manage orders through the API",
        content: `
          <h2>Orders API</h2>
          <p>
            The Orders API allows you to create, read, update, and delete orders in Track My Business.
            This guide covers the available endpoints and their usage.
          </p>
          
          <h3>Endpoints</h3>
          <table class="w-full border-collapse my-4">
            <thead>
              <tr class="border-b border-zinc-700">
                <th class="py-2 px-4 text-left">Method</th>
                <th class="py-2 px-4 text-left">Endpoint</th>
                <th class="py-2 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-zinc-800">
                <td class="py-2 px-4">GET</td>
                <td class="py-2 px-4">/orders</td>
                <td class="py-2 px-4">List all orders</td>
              </tr>
              <tr class="border-b border-zinc-800">
                <td class="py-2 px-4">GET</td>
                <td class="py-2 px-4">/orders/:id</td>
                <td class="py-2 px-4">Get a specific order</td>
              </tr>
              <tr class="border-b border-zinc-800">
                <td class="py-2 px-4">POST</td>
                <td class="py-2 px-4">/orders</td>
                <td class="py-2 px-4">Create a new order</td>
              </tr>
              <tr class="border-b border-zinc-800">
                <td class="py-2 px-4">PUT</td>
                <td class="py-2 px-4">/orders/:id</td>
                <td class="py-2 px-4">Update an order</td>
              </tr>
              <tr class="border-b border-zinc-800">
                <td class="py-2 px-4">DELETE</td>
                <td class="py-2 px-4">/orders/:id</td>
                <td class="py-2 px-4">Delete an order</td>
              </tr>
              <tr class="border-b border-zinc-800">
                <td class="py-2 px-4">PUT</td>
                <td class="py-2 px-4">/orders/:id/status</td>
                <td class="py-2 px-4">Update order status</td>
              </tr>
            </tbody>
          </table>
          
          <h3>List Orders</h3>
          <p>
            Retrieve a list of orders with optional filtering:
          </p>
          <pre><code>GET /orders</code></pre>
          
          <h4>Query Parameters</h4>
          <ul>
            <li><code>customer_id</code> - Filter by customer ID</li>
            <li><code>status</code> - Filter by order status (quote, confirmed, in_production, shipped, delivered, cancelled)</li>
            <li><code>created_after</code> - Filter by creation date</li>
            <li><code>created_before</code> - Filter by creation date</li>
            <li><code>page</code> - Page number for pagination (default: 1)</li>
            <li><code>limit</code> - Number of results per page (default: 25, max: 100)</li>
          </ul>
          
          <h3>Create Order</h3>
          <p>
            Create a new order:
          </p>
          <pre><code>POST /orders</code></pre>
          
          <h4>Request Body</h4>
          <p>
            The request body should be a JSON object with the following properties:
          </p>
          <ul>
            <li><code>customer_id</code> (required) - The ID of the customer</li>
            <li><code>items</code> (required) - Array of order items</li>
            <li><code>shipping_address</code> - Shipping address object</li>
            <li><code>billing_address</code> - Billing address object</li>
            <li><code>shipping_method</code> - Shipping method code</li>
            <li><code>payment_method</code> - Payment method code</li>
            <li><code>notes</code> - Order notes</li>
            <li><code>reference</code> - External reference number</li>
          </ul>
        `,
        codeExamples: [
          {
            title: "Create an Order",
            language: "javascript",
            code: `// Create a new order
const order = await tmb.orders.create({
  customer_id: "cust_123456",
  items: [
    {
      product_id: "prod_789",
      quantity: 24,
      price_per_unit: 12.50,
      decoration: {
        type: "screen_print",
        locations: ["front"],
        colors: 2,
        artwork_id: "art_456"
      }
    }
  ],
  shipping_address: {
    name: "Acme Inc",
    street: "123 Main St",
    city: "Springfield",
    state: "IL",
    zip: "62701",
    country: "US"
  },
  shipping_method: "ground",
  notes: "Rush order - needed by Friday"
});

console.log(\`Order created with ID: \${order.id}\`);`
          }
        ]
      }
    ]
  },
  {
    id: "modules",
    name: "Module Guides",
    description: "Learn how to use each module effectively",
    docs: [
      {
        id: "sales-orders",
        title: "Sales Orders",
        description: "Manage customer orders from quote to fulfillment",
        content: `
          <h2>Sales Orders Module</h2>
          <p>
            The Sales Orders module is the central hub for managing customer orders throughout 
            their lifecycle, from initial quote to final delivery.
          </p>
          
          <h3>Order Lifecycle</h3>
          <p>
            Each order in Track My Business follows a standard lifecycle:
          </p>
          <ol>
            <li><strong>Quote:</strong> Initial pricing and details provided to customer</li>
            <li><strong>Confirmed:</strong> Customer has approved the order</li>
            <li><strong>In Production:</strong> Order is being produced</li>
            <li><strong>Quality Check:</strong> Order is being checked for quality</li>
            <li><strong>Shipped:</strong> Order has been shipped to the customer</li>
            <li><strong>Delivered:</strong> Order has been received by the customer</li>
          </ol>
          <p>
            Orders can also be canceled at any point in the process.
          </p>
          
          <h3>Creating a New Order</h3>
          <p>
            To create a new order:
          </p>
          <ol>
            <li>Go to Sales Orders > New Order</li>
            <li>Select the customer (or create a new one)</li>
            <li>Add products and decoration details</li>
            <li>Specify shipping details</li>
            <li>Add any notes or special instructions</li>
            <li>Save as a quote or confirm immediately</li>
          </ol>
          
          <h3>Order Management</h3>
          <p>
            The main order management screen provides several features:
          </p>
          <ul>
            <li><strong>Order List:</strong> View all orders with filtering options</li>
            <li><strong>Order Details:</strong> View comprehensive information about each order</li>
            <li><strong>Status Updates:</strong> Change the status of orders as they progress</li>
            <li><strong>Order History:</strong> Track all changes made to an order</li>
            <li><strong>Attachments:</strong> Add files like approval forms or shipping labels</li>
          </ul>
          
          <h3>Bulk Actions</h3>
          <p>
            For efficient workflow, you can perform bulk actions:
          </p>
          <ul>
            <li>Update status for multiple orders</li>
            <li>Generate production sheets for a batch of orders</li>
            <li>Print shipping labels for all orders ready to ship</li>
            <li>Export selected orders to CSV or PDF</li>
          </ul>
        `,
        relatedDocs: [
          {
            id: "customer-database",
            categoryId: "modules",
            title: "Customer Database",
            description: "Manage your customer information"
          },
          {
            id: "production",
            categoryId: "modules",
            title: "Production",
            description: "Manage your production workflow"
          }
        ]
      },
      {
        id: "customer-database",
        title: "Customer Database",
        description: "Manage your customer information",
        content: `
          <h2>Customer Database Module</h2>
          <p>
            The Customer Database module allows you to store and manage all information about your 
            customers, including contact details, order history, and communication logs.
          </p>
          
          <h3>Customer Profiles</h3>
          <p>
            Each customer profile contains the following information:
          </p>
          <ul>
            <li><strong>Basic Information:</strong> Name, company, contact details</li>
            <li><strong>Addresses:</strong> Shipping and billing addresses</li>
            <li><strong>Contacts:</strong> Multiple contact persons with roles</li>
            <li><strong>Financial:</strong> Payment terms, tax exemption status</li>
            <li><strong>Custom Fields:</strong> User-defined fields for additional information</li>
          </ul>
          
          <h3>Adding a New Customer</h3>
          <p>
            To add a new customer:
          </p>
          <ol>
            <li>Go to Customers > Add Customer</li>
            <li>Enter the required information</li>
            <li>Add any additional contacts or addresses</li>
            <li>Specify payment terms and other preferences</li>
            <li>Save the customer record</li>
          </ol>
          
          <h3>Customer Categories</h3>
          <p>
            You can organize customers into categories for easier management:
          </p>
          <ul>
            <li><strong>Business Types:</strong> Corporate, Education, Sports, Retail, etc.</li>
            <li><strong>Size:</strong> Small, Medium, Large, Enterprise</li>
            <li><strong>Status:</strong> Active, Inactive, Prospect</li>
            <li><strong>Custom Categories:</strong> Create your own categorization system</li>
          </ul>
          
          <h3>Customer Insights</h3>
          <p>
            The Customer Database provides valuable insights:
          </p>
          <ul>
            <li><strong>Order History:</strong> View all past and current orders</li>
            <li><strong>Spending Analysis:</strong> Track customer spending over time</li>
            <li><strong>Product Preferences:</strong> See which products they order most</li>
            <li><strong>Payment History:</strong> Track payment timeliness and behavior</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "integrations",
    name: "Integrations",
    description: "Connect with other systems and services",
    docs: [
      {
        id: "shopify",
        title: "Shopify Integration",
        description: "Connect your Shopify store",
        content: `
          <h2>Shopify Integration</h2>
          <p>
            Track My Business can integrate with your Shopify store to automatically import 
            orders and sync inventory.
          </p>
          
          <h3>Setup Process</h3>
          <p>
            To set up the Shopify integration:
          </p>
          <ol>
            <li>Go to Settings > Integrations > Shopify</li>
            <li>Click "Connect Shopify Store"</li>
            <li>Log in to your Shopify account</li>
            <li>Authorize Track My Business to access your store</li>
            <li>Configure sync settings</li>
          </ol>
          
          <h3>Features</h3>
          <p>
            The Shopify integration provides the following features:
          </p>
          <ul>
            <li><strong>Order Import:</strong> Automatically import new orders</li>
            <li><strong>Inventory Sync:</strong> Keep inventory levels in sync</li>
            <li><strong>Status Updates:</strong> Update order status in Shopify when it changes in Track My Business</li>
            <li><strong>Customer Sync:</strong> Import customer data from Shopify orders</li>
            <li><strong>Fulfillment:</strong> Mark orders as fulfilled in Shopify</li>
          </ul>
          
          <h3>Configuration Options</h3>
          <p>
            Customize the integration to suit your needs:
          </p>
          <ul>
            <li><strong>Sync Frequency:</strong> How often to check for new orders</li>
            <li><strong>Order Status Mapping:</strong> Map Shopify order statuses to Track My Business statuses</li>
            <li><strong>Product Mapping:</strong> Associate Shopify products with Track My Business products</li>
            <li><strong>Historical Import:</strong> Import historical orders</li>
          </ul>
          
          <h3>Troubleshooting</h3>
          <p>
            Common issues and their solutions:
          </p>
          <ul>
            <li><strong>Authentication Errors:</strong> Reconnect your Shopify account</li>
            <li><strong>Missing Orders:</strong> Check sync settings and filters</li>
            <li><strong>Inventory Discrepancies:</strong> Manually trigger a sync</li>
            <li><strong>API Rate Limits:</strong> Adjust sync frequency</li>
          </ul>
        `,
        codeExamples: [
          {
            title: "Manual Sync API",
            language: "javascript",
            code: `// Trigger a manual sync with Shopify
const syncResult = await tmb.integrations.shopify.sync({
  syncOrders: true,
  syncInventory: true,
  syncCustomers: true
});

console.log(\`Sync completed: \${syncResult.ordersImported} orders imported\`);`
          }
        ]
      }
    ]
  }
];
