import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-24 px-6">
      <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
        Manage Your Tasks Securely and Efficiently
      </h1>

      <p className="text-muted-foreground mt-4 max-w-xl">
        A modern full-stack dashboard built with secure authentication,
        scalable architecture, and an optimized user experience.
      </p>

      <div className="flex gap-4 mt-8">
        <Link href="/register">
          <Button size="lg">Get Started</Button>
        </Link>
        <Link href="/login">
          <Button size="lg" variant="outline">
            Login
          </Button>
        </Link>
      </div>

      <div className="flex gap-6 mt-12 text-sm text-muted-foreground">
        <span>🔐 Secure Auth</span>
        <span>⚡ Optimistic UI</span>
        <span>📊 Personal Dashboard</span>
      </div>
    </section>
  )
}
