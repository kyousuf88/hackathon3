// // import { toast } from "@/components/ui/use-toast";
// // import { IResponse } from "@/types";

// // type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

// // interface RequestOptions {
// //   method?: RequestMethod;
// //   body?: any;
// // }

// // async function makeApiCallService(
// //   url: string,
// //   options: RequestOptions = {}
// // ): Promise<IResponse | null> {
// //   try {
// //     const headers: HeadersInit = {
// //       "Content-Type": "application/json",
// //     };

// //     const response = await fetch(url, {
// //       method: options.method || "GET",
// //       headers,
// //       body: JSON.stringify(options.body),
// //     });

// //     if (!response.ok) {
// //       const res = await response.json();
// //       toast({
// //         variant: "destructive",
// //         title: "Error",
// //         description: res?.response?.meta?.message,
// //       });
// //       return null;
// //     }

// //     const data: any = await response.json();
// //     if (response.ok) {
// //       toast({
// //         variant: "default",
// //         title: "Success",
// //         description: data?.response?.meta?.message,
// //       });
// //     }

// //     return data;
// //   } catch (error) {
// //     toast({
// //       title: "API Service error",
// //       description: `An error occurred while making the API call: ${
// //         ((error as unknown) as any)?.message
// //       }`,
// //     });

// //     return null;
// //   }
// // }

// // export default makeApiCallService;

// 22222222


// import { toast } from "@/components/ui/use-toast";
// import { IResponse } from "@/types";

// type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

// interface RequestOptions {
//   method?: RequestMethod;
//   body?: Record<string, unknown>; // More specific type instead of `any`
// }

// async function makeApiCallService(
//   url: string,
//   options: RequestOptions = {}
// ): Promise<IResponse | null> {
//   try {
//     const headers: HeadersInit = {
//       "Content-Type": "application/json",
//     };

//     const response = await fetch(url, {
//       method: options.method || "GET",
//       headers,
//       body: options.body ? JSON.stringify(options.body) : undefined, // Ensure body is only sent when provided
//     });

//     if (!response.ok) {
//       const res = await response.json();
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: res?.response?.meta?.message,
//       });
//       return null;
//     }

//     const data: IResponse = await response.json(); // Specified type as IResponse
//     if (response.ok) {
//       toast({
//         variant: "default",
//         title: "Success",
//         description: data?.meta?.message,
//       });
//     }

//     return data;
//   } catch (error: unknown) {
//     let errorMessage = "An unknown error occurred";
    
//     // Safely handle error and extract message if possible
//     if (error instanceof Error) {
//       errorMessage = error.message;
//     }

//     toast({
//       title: "API Service error",
//       description: `An error occurred while making the API call: ${errorMessage}`,
//     });

//     return null;
//   }
// }

// export default makeApiCallService;

  import { toast } from "@/components/ui/use-toast";

  // Define the expected structure of the API response.
  interface Meta {
    message?: string; // 'message' is optional in the 'meta' object
  }
  
  interface ResponseData {
    response?: {
      meta?: Meta; // 'meta' is optional
    };
  }
  
  type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";
  
  interface RequestOptions {
    method?: RequestMethod;
    body?: Record<string, unknown>; // More specific type instead of `any`
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
        body: options.body ? JSON.stringify(options.body) : undefined, // Ensure body is only sent when provided
      });
  
      if (!response.ok) {
        const res: ResponseData = await response.json(); // Cast the response to 'ResponseData'
        const message = res?.response?.meta?.message || "Something went wrong"; // Safely access the message inside meta
        toast({
          variant: "destructive",
          title: "Error",
          description: message,
        });
        return null;
      }
  
      const data: ResponseData = await response.json(); // Specified type as 'ResponseData'
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
      
      // Safely handle error and extract message if possible
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
  

