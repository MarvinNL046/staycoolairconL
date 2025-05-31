// Minimal feature set for better performance
import { domAnimation } from 'framer-motion';

// Only load essential animation features
const features = {
  ...domAnimation,
  // Remove unused features to reduce bundle size
  layout: false,
  projectionNode: false,
};

export default features;