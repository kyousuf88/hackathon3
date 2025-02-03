"use server";


// export async function createBillingInfo(input: any) {
//   return input
// }

// export async function updateBillingInfo(input: any, billingId: string) {
//   if (!input) {
//     throw new Error("Input is required");
//   }
//   // Do something with input
//   return billingId;
// }


// Using unknown for flexibility and validating the input at runtime
export async function createBillingInfo(input: unknown): Promise<unknown> {
  if (typeof input !== "object" || input === null) {
    throw new Error("Input must be a valid object");
  }
  // You can add additional validation or processing logic here if needed
  return input;
}

export async function updateBillingInfo(input: unknown, billingId: string): Promise<string> {
  if (typeof input !== "object" || input === null) {
    throw new Error("Input must be a valid object");
  }

  if (typeof billingId !== "string" || !billingId.trim()) {
    throw new Error("Billing ID must be a non-empty string");
  }

  // Process the input and return the billing ID
  return billingId;
}
