// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Input from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { signupUser } from "@/lib/api/auth"
// import { useRouter } from "next/navigation"

// export default function Signup() {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState("")
//   const [formData, setFormData] = useState({ fullName: "", email: "", password: "" })

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     setError("")
//     setIsLoading(true)

//     const formData = new FormData(e.currentTarget)
//     const fullname = formData.get("fullName") as string
//     const email = formData.get("email") as string
//     const password = formData.get("password") as string

//     try {
//       await signupUser(fullname, email, password)
//       router.push("/login")
//     } catch (err) {
//       console.log(err);
//       setError("Failed to create account")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
//         <div className="text-center">
//           <h2 className="mt-6 text-3xl font-bold text-gray-900">Create an account</h2>
//           <p className="mt-2 text-sm text-gray-600">Sign up to get started</p>
//         </div>
//         <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//           {error && <div className="text-red-500 text-sm text-center">{error}</div>}
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <Input
//                 id="fullName"
//                 name="fullName"
//                 type="text"
//                 autoComplete="name"
//                 required
//                 className="mt-1"
//                 placeholder="Enter your full name"
//                 value={formData.fullName || ""}
//                 onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="mt-1"
//                   placeholder="Enter your email"
//                   value={formData.email || ""}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <Input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   className="mt-1"
//                   placeholder="Create a password"
//                   value={formData.password || ""}
//                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 />
//               </div>
//             </div>
//             <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white" disabled={isLoading}>
//               {isLoading ? "Creating account..." : "Create account"}
//             </Button>
//             <div className="text-center text-sm">
//               <span className="text-gray-600">Already have an account?</span>{" "}
//               <Link href="/login" className="text-primary hover:text-primary-hover font-medium">
//                 Sign in
//               </Link>
//             </div>
//           </form>

//           <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white" disabled={isLoading}>
//             {isLoading ? "Creating account..." : "Create account"}
//           </Button>

//           <div className="text-center text-sm">
//             <span className="text-gray-600">Already have an account?</span>{" "}
//             <Link href="/login" className="text-primary hover:text-primary-hover font-medium">
//               Sign in
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

//2222
// "use client"
// import React, { useState } from "react";
// import Input from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/router";

// export default function SignUp() {
//   const router = useRouter();
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Handle signup logic here
//     try {
//       // Simulating successful signup
//       console.log({ fullName, email, password });
//       // Redirect after signup
//       router.push("/login");
//     } catch (error) {
//       console.error("Signup failed:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
//         <div className="text-center">
//           <h2 className="mt-6 text-3xl font-bold text-gray-900">Create an Account</h2>
//           <p className="mt-2 text-sm text-gray-600">Please sign up to create an account</p>
//         </div>
//         <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <Input
//                 id="fullName"
//                 name="fullName"
//                 type="text"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)} // Handle change
//                 required
//                 placeholder="Enter your full name"
//                 className="mt-1"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} // Handle change
//                 autoComplete="email"
//                 required
//                 placeholder="Enter your email"
//                 className="mt-1"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} // Handle change
//                 required
//                 placeholder="Enter your password"
//                 className="mt-1"
//               />
//             </div>
//           </div>

//           <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white" disabled={isLoading}>
//             {isLoading ? "Creating account..." : "Sign up"}
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signupUser } from "@/lib/api/auth"
import { useRouter } from "next/navigation"

export default function Signup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const fullname = formData.get("fullName") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      await signupUser(fullname, email, password)
      router.push("/login")
    } catch (err) {
      console.log(err);
      setError("Failed to create account")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create an account</h2>
          <p className="mt-2 text-sm text-gray-600">Sign up to get started</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className="mt-1"
                placeholder="Enter your full name"
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
                autoComplete="email"
                required
                className="mt-1"
                placeholder="Enter your email"
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
                autoComplete="new-password"
                required
                className="mt-1"
                placeholder="Create a password"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
          </Button>

          <div className="text-center text-sm">
            <span className="text-gray-600">Already have an account?</span>{" "}
            <Link href="/login" className="text-primary hover:text-primary-hover font-medium">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
