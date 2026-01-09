"use client"

import { useEffect, useState } from "react"
import { getToken, removeToken } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { TaskForm } from "@/features/tasks/components/TaskForm"
import { TaskList } from "@/features/tasks/components/TaskList"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted && !getToken()) {
      router.replace("/login")
    }
  }, [isMounted])

  if (!isMounted) return null 
  console.log("Dashboard token:", getToken())


  const logout = () => {
    removeToken()
    router.push("/login")
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>

      <TaskForm />
      <TaskList />
    </div>
  )
}
