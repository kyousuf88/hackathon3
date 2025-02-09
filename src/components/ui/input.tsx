// import * as React from "react"

// import { cn } from "@/lib/utils"

// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className = "", type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Input.displayName = "Input"

// export { Input }


// import React from "react";

// interface InputProps {
//   value: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
// }

// const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
//   return (
//     <input
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       className="border rounded px-4 py-2"
//     />
//   );
// };

// export default Input;
//222

// import React from "react";

// interface InputProps {
//   value: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
//   type?: string;
//   className?: string;
//   id?: string;   // Add id here
//   name?: string; // Add name here
//   autoComplete?: string;
//   required?: boolean;
// }

// const Input: React.FC<InputProps> = ({
//   value,
//   onChange,
//   placeholder,
//   type = "text",
//   className,
//   id,
//   name,
//   autoComplete,
//   required,
// }) => {
//   return (
//     <input
//       id={id}
//       name={name}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       type={type}
//       className={`border rounded px-4 py-2 ${className}`}
//       autoComplete={autoComplete}
//       required={required}
//     />
//   );
// };

// export default Input;

// import * as React from "react"

// import { cn } from "@/lib/utils"

// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Input.displayName = "Input"

// export { Input }


import * as React from "react";
import { cn } from "@/lib/utils";

// Directly use React.InputHTMLAttributes<HTMLInputElement> for the props
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
