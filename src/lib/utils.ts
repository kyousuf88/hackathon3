import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// // ERROR HANDLER
// export const handleError = (error: unknown) => {
//   if (error instanceof Error) {
//     throw new Error(`Error: ${error.message}`);
//   } else if (typeof error === "string") {
//     throw new Error(error);
//   } else {
//     throw new Error(`Unknown error: ${JSON.stringify(error)}`);
//   }
// }


// export const successResponse = (
//   data: any,
//   message: string = "Success",
//   code = 200
// ) => {
//   const response = {
//     meta: {
//       success: true,
//       message,
//     },
//     data,
//   };
//   return NextResponse.json({ response }, { status: code });
// };

// export const errorResponse = (
//   message: string = "Error",
//   code = 400,
//   data: any = null
// ) => {
//   const response = {
//     meta: {
//       success: false,
//       message,
//     },
//     data,
//   };
//   return NextResponse.json({ response }, { status: code });
// };

// Catching error of type `unknown` and checking the error structure


import { toast } from "@/components/ui/use-toast";

// Define the expected structure of the API response.
interface Meta {
  message?: string;
}

interface ResponseData {
  response?: {
    meta?: Meta;
  };
}

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: RequestMethod;
  body?: Record<string, unknown>; // More specific type than `any`
}

async function makeApiCallService(
  url: string,
  options: RequestOptions = {}
): Promise<ResponseData | null> {
  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    const response = await fetch(url, {
      method: options.method || "GET",
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined, // Body is optional
    });

    if (!response.ok) {
      const res: ResponseData = await response.json(); // Type is ResponseData instead of any
      const message = res?.response?.meta?.message || "Something went wrong";
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      });
      return null;
    }

    const data: ResponseData = await response.json(); // Response type
    if (response.ok) {
      const successMessage = data?.response?.meta?.message || "Request successful";
      toast({
        variant: "default",
        title: "Success",
        description: successMessage,
      });
    }

    return data;
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    toast({
      title: "API Service error",
      description: `An error occurred while making the API call: ${errorMessage}`,
    });

    return null;
  }
}

export default makeApiCallService;
