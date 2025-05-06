import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { productData } from '../../data/products';

export default function LGMobieleAircoPage() {
  const { model } = useParams();
  const brandSlug = 'lg-mobiele-airco';
  
  // Find the LG mobile airco brand
  const brandData = productData.brands.find(b => 
    b.name.toLowerCase() === 'lg mobiele airco'
  );
  
  if (!brandData) {
    return <Navigate to="/products" />;
  }
  
  // If no model is specified, redirect to the first model
  if (!model && brandData.models.length > 0) {
    return <Navigate to={`/products/${brandSlug}/${brandData.models[0].slug}`} />;
  }
  
  // Else, redirect to the ProductDetail page
  return <Navigate to={`/products/${brandSlug}/${model}`} />;
}
