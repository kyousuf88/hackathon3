// import { client } from "@/sanity/lib/client";

// export const fetchData = async (): Promise<void> => {
    
//     try {
//         const res = await fetch("https://template6-six.vercel.app/api/products");

//         if (!res.ok) {
//             throw new Error(`Failed to fetch products: ${res.statusText}`);
//         }

//         const products = await res.json();

//         for (const {
//             title,
//             imageUrl,
//             price,
//             tags,
//             description,
//             dicountPercentage,
//             isNew,
//         } of products) {
//             try {
//                 const imageAsset = await upload(imageUrl);

//                 if (!imageAsset) {
//                     console.warn(`Failed to upload image for product: ${title}`);
//                     continue;
//                 }

//                 await client.create({
//                     _type: "product",
//                     title,
//                     description,
//                     price,
//                     tags,
//                     dicountPercentage,
//                     imageUrl: {
//                         _type: "image",
//                         asset: {
//                             _type: "reference",
//                             _ref: imageAsset._id,
//                         },
//                     },
//                     isNew,
//                 });

//                 console.log("Migrated Product:", title);
//             } catch (err) {
//                 if (err)
//                     console.error(`Failed to migrate product: ${title}`);
//             }
//         }
//     } catch (error) {
//         console.error("Error in fetchData:", error);
//     }
// };

// const upload = async (image: string): Promise<any | null> => {
//     try {
//         const res = await fetch(image);

//         if (!res.ok) {
//             console.warn(`Failed to fetch image: ${image}`);
//             return null;
//         }

//         const contentType = res.headers.get("content-type") || "image/jpeg";

//         const imageAsset = await client.assets.upload("image", await res.blob(), {
//             filename: image.split("/").pop() || "image",
//             contentType,
//         });

//         return imageAsset;
//     } catch (error) {
//         console.error("Error in upload:", error);
//         return null;
//     }
// };

// fetchData();

//2222

// import { createClient } from '@sanity/client';

// const client = createClient({
//   projectId: 'ier9c94y',
//   dataset: 'production',
//   useCdn: true,
//   apiVersion: '2025-01-13',
//   token: 'skTWN4xw86CYc0kqONPbMe48vI8zVWqcwXABN1uJhiHZsyebB7K0oDHqXviH3KMZQPo0k1BhtgldupkmLVPNFFyEF0tSnB1I8HQH4gKrh57PC21ZpoLIJLxBmhUBORuRegby54SnqcfqmnaIrIjwEXGub0ZsKjOhsS3iSFt4kljbeDcRCJTb',
// });

// /**
//  * @typedef {Object} Product
//  * @property {string} title
//  * @property {string} imageUrl
//  * @property {number} price
//  * @property {string[]} tags
//  * @property {string} description
//  * @property {number} dicountPercentage // Typo in field name: dicountPercentage -> discountPercentage
//  * @property {boolean} isNew
//  */

// /**
//  * @typedef {Object} ImageAsset
//  * @property {string} _id
//  */

// async function uploadImageToSanity(imageUrl) {
//     try {
//         console.log(`Uploading image: ${imageUrl}`);

//         const response = await fetch(imageUrl);
//         if (!response.ok) {
//             throw new Error(`Failed to fetch image: ${imageUrl}`);
//         }

//         const buffer = await response.arrayBuffer();
//         const bufferImage = Buffer.from(buffer);

//         const asset = await client.assets.upload('image', bufferImage, {
//             filename: imageUrl.split('/').pop() || 'image',
//         });

//         console.log(`Image uploaded successfully: ${asset._id}`);
//         return asset._id;
//     } catch (error) {
//         console.error('Failed to upload image:', imageUrl, error);
//         return null;
//     }
// /**
//  * @typedef {Object} SanityDocument
//  * @property {string} _type
//  * @property {string} title
//  * @property {number} price
//  * @property {Object} productImage
//  * @property {string} productImage._type
//  * @property {Object} productImage.asset
//  * @property {string} productImage.asset._ref
//  * @property {string[]} tags
//  * @property {number} dicountPercentage // Typo in field name: dicountPercentage -> discountPercentage
//  * @property {string} description
//  * @property {boolean} isNew
//  */
//     isNew: boolean;
// }

// async function uploadProduct(product) {
//     try {
//         const imageId = await uploadImageToSanity(product.imageUrl);

//         if (imageId) {
//             const document = {
//                 _type: 'product',
//                 title: product.title,
//                 price: product.price,
//                 productImage: {
//                     _type: 'image',
//                     asset: {
//                         _ref: imageId,
//                     },
//                 },
//                 tags: product.tags,
//                 dicountPercentage: product.dicountPercentage, // Typo in field name: dicountPercentage -> discountPercentage
//                 description: product.description,
//                 isNew: product.isNew,
//             };

//             const createdProduct = await client.create(document);
//             console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
//         } else {
//             console.log(`Product ${product.title} skipped due to image upload failure.`);
//         }
//     } catch (error) {
//         console.error('Error uploading product:', error);
//     }
// }

// async function importProducts() {
//   try {
//     const response = await fetch('https://template6-six.vercel.app/api/products');
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
    
//     const products = await response.json();

//     for (const product of products) {
//       await uploadProduct(product);
//     }
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// }

// importProducts();


//3333

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ier9c94y',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: 'yskTWN4xw86CYc0kqONPbMe48vI8zVWqcwXABN1uJhiHZsyebB7K0oDHqXviH3KMZQPo0k1BhtgldupkmLVPNFFyEF0tSnB1I8HQH4gKrh57PC21ZpoLIJLxBmhUBORuRegby54SnqcfqmnaIrIjwEXGub0ZsKjOhsS3iSFt4kljbeDcRCJTb',
  //token: 'skxdHFkjUYuU5kcYoK31KgmrhoBEWqddBoCucfKJPGSGSBhYm36Pt5CjVECIa10pZO7wznjTo1fTIEpOCuFYPy7zXb2ajotMx4S6SDvbVWGc2wFR5Yc8mg1JBEgRoQxy76SZ563Vs5utCWlDzuX4z5x6d15KFOPhSOnB7ALmnfK1zMIaMPjG',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        dicountPercentage: product.dicountPercentage, // Typo in field name: dicountPercentage -> discountPercentage
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();