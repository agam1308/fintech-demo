// Helper to get the base path for assets
export const getBasePath = () => {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
};

// Helper to get asset path with base path
export const getAssetPath = (path) => {
  const basePath = getBasePath();
  return `${basePath}${path}`;
};
