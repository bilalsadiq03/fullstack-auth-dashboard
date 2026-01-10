"use client"

import { useState, useMemo } from "react"
import { Plus } from "lucide-react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

import { TaskForm } from "@/features/tasks/components/TaskForm"
import { TaskList } from "@/features/tasks/components/TaskList"
import { useTasks, useCreateTask } from "@/features/tasks/hooks"

import { DashboardStats } from "./DashboardStats"
import { DashboardFilters } from "./DashboardFilters"
import { Navbar } from "@/components/Navbar"

export default function DashboardPage() {
  const { data: tasks = [], isLoading } = useTasks()
  const createTask = useCreateTask()
    const [showForm, setShowForm] = useState(false)


  const [search, setSearch] = useState("")
  const [status, setStatus] = useState<
    "all" | "pending" | "completed"
  >("all")

  const filteredTasks = useMemo(() => {
    return tasks.filter((task: any) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesStatus =
        status === "all" || task.status === status

      return matchesSearch && matchesStatus
    })
  }, [tasks, search, status])

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t: any) => t.status === "completed").length,
    pending: tasks.filter((t: any) => t.status === "pending").length,
  }

  if (isLoading) return <p>Loading dashboard...</p>

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Stats */}
      <Navbar />
      <DashboardStats {...stats} />

      {/* Filters + Add */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <DashboardFilters
          search={search}
          onSearchChange={setSearch}
          status={status}
          onStatusChange={setStatus}
        />

        <button
          onClick={() => setShowForm(!showForm)}
          className={`${showForm && "bg-red-400"}w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2.5 rounded-lg transition`}
        >
          {showForm ? <div className="flex justify-center items-center gap-2">
            <X className="w-5 h-5" />
            Cancel
          </div> : (
            <div className="flex justify-center items-center gap-2">
              <Plus className="w-5 h-5" />
              New task
            </div>
          
          )

          }
        </button>

        
      </div>

      {/* Task Creation */}
      {showForm && (
        <div className="bg-card border border-border rounded-xl p-4">
          <TaskForm onSuccess={() => setShowForm(false)} />
        </div>
      )}
      

      {/* Task List */}
      <TaskList tasks={filteredTasks} />
    </div>
  )
}
