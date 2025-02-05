import { atom } from "jotai";



type BillingInfo = {

  firstName: string;

  lastName: string;

  company?: string;

  country: string;

  street: string;

  town: string;

  province: string;

  zipCode: string;

  phone: string;

  email: string;

  additionalInfo?: string;

};



export const billingAtom = atom<BillingInfo | null>(null);