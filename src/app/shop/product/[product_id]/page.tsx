// "use client";

// import React from "react";
// import ProductDetailExtraInfoSection from "@/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
// import ProductDetailRelatedSection from "@/components/sections/shop/product-detail/ProductDetailRelatedSection";
// import ProductDetailShowcaseSection from "@/components/sections/shop/product-detail/ProductDetailShowcaseSection";
// import ProductDetailTopSection from "@/components/sections/shop/product-detail/ProductDetailTopSection";
// import { Separator } from "@/components/ui/separator";
// import Image from "next/image"; // Next.js Image component

// export default function ProductDetailPage({
//   params,
// }: {
//   params: {
//     product_id: string;
//   };
// }) {
//   return (
//     <div className="mt-24 lg:mt-8">
//       <ProductDetailTopSection product_id={"Detailed Page"} />

//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailShowcaseSection productId={params.product_id} />
//       </div>

//       <div className="my-[40px]">
//         <Separator />
//       </div>

//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailExtraInfoSection product_id={params.product_id} />
//       </div>

//       <div className="my-[40px]">
//         <Separator />
//       </div>

//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailRelatedSection />
//       </div>

//       {/* Fixed Image */}
//       <div className="mt-8 flex justify-center">
//         <Image
//           src="/images/banner_icon_1.png" 
//           alt="Banner Icon"
//           width={100} 
//           height={100} 
//         />
//       </div>
//     </div>
//   );
// }


// "use client";

// import React from "react";
// import ProductDetailExtraInfoSection from "@/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
// import ProductDetailRelatedSection from "@/components/sections/shop/product-detail/ProductDetailRelatedSection";
// import ProductDetailShowcaseSection from "@/components/sections/shop/product-detail/ProductDetailShowcaseSection";
// import ProductDetailTopSection from "@/components/sections/shop/product-detail/ProductDetailTopSection";
// import { Separator } from "@/components/ui/separator";
// import Image from "next/image"; // Next.js Image component

// export default function ProductDetailPage({
//   params,
// }: {
//   params: {
//     product_id: string;
//   };
// }) {
//   // Directly access the product_id from params
//   const productId = params.product_id;

//   return (
//     <div className="mt-24 lg:mt-8">
//       <ProductDetailTopSection product_id={"Detailed Page"} />

//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailShowcaseSection productId={productId} />
//       </div>

//       <div className="my-[40px]">
//         <Separator />
//       </div>

//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailExtraInfoSection product_id={productId} />
//       </div>

//       <div className="my-[40px]">
//         <Separator />
//       </div>

//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailRelatedSection />
//       </div>

//       {/* Fixed Image */}
//       <div className="mt-8 flex justify-center">
//         <Image
//           src="/images/banner_icon_1.png"
//           alt="Banner Icon"
//           width={40}
//           height={40}
//         />
//       </div>
//     </div>
//   );
// }

// "use client";

// import React from "react";
// import ProductDetailExtraInfoSection from "@/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
// import ProductDetailRelatedSection from "@/components/sections/shop/product-detail/ProductDetailRelatedSection";
// import ProductDetailShowcaseSection from "@/components/sections/shop/product-detail/ProductDetailShowcaseSection";
// import ProductDetailTopSection from "@/components/sections/shop/product-detail/ProductDetailTopSection";
// import { Separator } from "@/components/ui/separator";
// import Image from "next/image";

// type PageProps = {
//   params: {
//     product_id: string;
//   };
// };

// export async function generateMetadata({ params }: PageProps) {
//   return {
//     title: `Product ${params.product_id}`,
//     description: `Details about product ${params.product_id}`,
//   };
// }

// export async function generateStaticParams() {
//   return [
//     { product_id: "1" },
//     { product_id: "2" },
//     { product_id: "3" },
//   ];
// }

// export default function ProductDetailPage({ params }: PageProps) {
//   const { product_id } = params;

//   return (
//     <div className="mt-24 lg:mt-8">
//       <ProductDetailTopSection product_id={product_id} />

//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailShowcaseSection productId={product_id} />
//       </div>

//       <div className="my-[40px]">
//         <Separator />
//       </div>

//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailExtraInfoSection product_id={product_id} />
//       </div>

//       <div className="my-[40px]">
//         <Separator />
//       </div>

//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailRelatedSection />
//       </div>

//       <div className="mt-8 flex justify-center">
//         <Image
//           src="/images/banner_icon_1.png"
//           alt="Banner Icon"
//           width={40}
//           height={40}
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import ProductDetailExtraInfoSection from "@/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
import ProductDetailRelatedSection from "@/components/sections/shop/product-detail/ProductDetailRelatedSection";
import ProductDetailShowcaseSection from "@/components/sections/shop/product-detail/ProductDetailShowcaseSection";
import ProductDetailTopSection from "@/components/sections/shop/product-detail/ProductDetailTopSection";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

// Define a specific type for the product details (adjust fields based on your API response)
type ProductDetails = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

type PageProps = {
  params: {
    product_id: string;
  };
};

export default function ProductDetailPage({ params }: PageProps) {
  const { product_id } = params;

  // Use the defined type instead of `any`
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(null);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await fetch(`/api/products/${product_id}`);
        if (!response.ok) throw new Error("Failed to fetch product details.");
        const data: ProductDetails = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProductDetails();
  }, [product_id]);

  if (!productDetails) return <p>Loading...</p>;

  return (
    <div className="mt-24 lg:mt-8">
      <ProductDetailTopSection product_id={product_id} />

      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailShowcaseSection productId={product_id} />
      </div>

      <div className="my-[40px]">
        <Separator />
      </div>

      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailExtraInfoSection product_id={product_id} />
      </div>

      <div className="my-[40px]">
        <Separator />
      </div>

      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailRelatedSection />
      </div>

      <div className="mt-8 flex justify-center">
        <Image
          src="/images/banner_icon_1.png"
          alt="Banner Icon"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}
