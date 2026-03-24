// pages/ProductDetail.tsx
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

import { ProductImages } from "../components/product/ProductImages";
import { ProductInfo } from "../components/product/ProductInfo";
import { ProductReviews } from "../components/product/ProductReviews";
import Error from "../components/product/state/Error";
import SkeletonPlaceholder from "../components/product/state/SkeletonPlaceholder";

export const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProduct(id!);

  if (isLoading) {
    return <SkeletonPlaceholder />;
  }

  if (isError) {
    return <Error />;
  }

  if (!product) return null;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl border border-gray-100">
        <ProductImages product={product} />
        <ProductInfo product={product} />
      </div>

      <ProductReviews reviews={product.reviews} />
    </div>
  );
};
