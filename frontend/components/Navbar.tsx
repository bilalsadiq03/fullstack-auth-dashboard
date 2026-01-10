"use client"

import { LogOut, User, LayoutDashboard } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useProfile } from "@/features/auth/hooks"
import { removeToken } from "@/lib/auth"

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const { data: profile, isLoading, isError } = useProfile()

  const currentView =
    pathname.startsWith("/profile") ? "profile" : "dashboard"

  const onLogout = () => {
    removeToken()
    router.push("/login")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-card border-b border-border z-50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            <span className="text-xl font-bold">
              Task Management App
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex items-center gap-8">
            <button
              onClick={() => router.push("/dashboard")}
              className={`flex items-center gap-2 text-sm font-medium transition ${
                currentView === "dashboard"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </button>

            <button
              onClick={() => router.push("/profile")}
              className={`flex items-center gap-2 text-sm font-medium transition ${
                currentView === "profile"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="w-5 h-5" />
              Profile
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-border">
              <div className="text-right">
                {isLoading ? (
                  <p className="text-sm text-muted-foreground">
                    Loading...
                  </p>
                ) : isError ? (
                  <p className="text-sm text-destructive">
                    Error
                  </p>
                ) : (
                  <p className="text-sm font-medium">
                    {profile?.name}
                  </p>
                )}
              </div>

              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center text-sm font-bold">
                {(profile?.name || "U").charAt(0)}
              </div>
            </div>

            <button
              onClick={onLogout}
              className="p-2 hover:bg-destructive/10 rounded-lg transition text-muted-foreground hover:text-destructive"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
