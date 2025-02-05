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
// };
// " use client"

// import React from "react";
// import ProductDetailExtraInfoSection from "@/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
// import ProductDetailRelatedSection from "@/components/sections/shop/product-detail/ProductDetailRelatedSection";
// import ProductDetailShowcaseSection from "@/components/sections/shop/product-detail/ProductDetailShowcaseSection";
// import ProductDetailTopSection from "@/components/sections/shop/product-detail/ProductDetailTopSection";
// import { Separator } from "@/components/ui/separator";
// import Image from "next/image"; // Next.js Image component

// // Define the params structure
// interface ProductDetailPageParams {
//   product_id: string;
// }

// // Correct the props interface
// interface ProductDetailPageProps {
//   params: ProductDetailPageParams; // params is a plain object
// }

// // Product Detail Page Component
// export default function ProductDetailPage({ params }: ProductDetailPageProps) {
//   const productId = params.product_id; // Access product_id correctly

//   return (
//     <div className="mt-24 lg:mt-8">
//       <ProductDetailTopSection product_id={productId} />

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

// // Generate Static Params for Static Generation
// export async function generateStaticParams() {
//   // Replace this with your actual data-fetching logic
//   const productIds = ["product1", "product2", "product3"]; // Example product IDs

//   return productIds.map((id) => ({
//     product_id: id, // Matches the dynamic route parameter
//   }));
// }

"use client" // This tells Next.js that this component should be rendered on the client

import React, { useState } from "react";
import {Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";  // Use router hook here

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle signup logic here
    try {
      // Simulating successful signup
      console.log({ fullName, email, password });
      // Redirect after signup
      router.push("/login");
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create an Account</h2>
          <p className="mt-2 text-sm text-gray-600">Please sign up to create an account</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)} // Handle change
                required
                placeholder="Enter your full name"
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Handle change
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Handle change
                required
                placeholder="Enter your password"
                className="mt-1"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Sign up"}
          </Button>
        </form>
      </div>
    </div>
  );
}
