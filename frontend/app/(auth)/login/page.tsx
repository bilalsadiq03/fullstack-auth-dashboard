"use client"

import { LoginForm } from "@/features/auth/components/LoginForm"
import { getToken } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LoginPage() {
  const router = useRouter()

  useEffect(() => {
    if (getToken()) {
      // router.push("/dashboard")
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <LoginForm />
    </div>
  )
}
