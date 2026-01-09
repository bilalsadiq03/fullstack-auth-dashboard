"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getToken } from "@/lib/auth"
import { HeroSection } from "@/components/HeroSection"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect authenticated users directly to dashboard
    if (getToken()) {
      router.replace("/dashboard")
    }
  }, [])

  return <HeroSection />
}
