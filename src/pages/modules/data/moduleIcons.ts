// Centralized module icons for better performance
export const moduleIcons = {
  salesOrders: '/lovable-uploads/e43639fe-8f28-4447-8659-16c1baee9b53.png',
  warehouse: '/lovable-uploads/2788046a-56b7-45e9-8c62-0dcdf981aad7.png',
  inventory: '/lovable-uploads/513894e2-04e7-42fc-a8be-9bc390b066ed.png',
  production: '/lovable-uploads/d42f1f67-bb61-4af4-bf00-41e4dd3055e8.png',
  customerDatabase: '/lovable-uploads/f888f0f0-5dc9-4944-b5ed-64b239b1e58e.png',
  customerPortal: '/lovable-uploads/c78cb5cd-6b30-4b76-ab3d-95defabc532a.png',
  productDesigner: '/lovable-uploads/165c6ded-645a-41df-ba0c-b54b428c3953.png',
  logos: '/lovable-uploads/9ed005ea-9015-43b6-b721-149fd7e96dc3.png',
  artworkers: '/lovable-uploads/5a59d4b9-43ac-485e-830d-ee80fc2e0905.png',
  baseGarments: '/lovable-uploads/9646681d-05d8-4c78-9601-8a8b99451f0e.png',
  suppliers: '/lovable-uploads/89eb9fd7-66d8-4124-b584-7895d0032ef3.png',
  purchaseOrders: '/lovable-uploads/9a36183f-4238-4b3a-b0e0-43a4488f0214.png'
} as const;

// Preload critical images
export const preloadCriticalImages = () => {
  const criticalImages = [
    moduleIcons.salesOrders,
    moduleIcons.warehouse,
    moduleIcons.customerDatabase,
    moduleIcons.baseGarments
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);
  });
};