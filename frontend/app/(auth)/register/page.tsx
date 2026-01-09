"use client"

import { SignupForm } from "@/features/auth/components/SignupForm"
import { getToken } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function RegisterPage() {
  const router = useRouter()

  useEffect(() => {
    if (getToken()) {
      router.replace("/dashboard")
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <SignupForm />
    </div>
  )
}
