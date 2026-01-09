"use client"

import { useState, useMemo } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

import { TaskForm } from "@/features/tasks/components/TaskForm"
import { TaskList } from "@/features/tasks/components/TaskList"
import { useTasks, useCreateTask } from "@/features/tasks/hooks"

import { DashboardStats } from "./DashboardStats"
import { DashboardFilters } from "./DashboardFilters"

export default function DashboardPage() {
  const { data: tasks = [], isLoading } = useTasks()
  const createTask = useCreateTask()

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
      <DashboardStats {...stats} />

      {/* Filters + Add */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <DashboardFilters
          search={search}
          onSearchChange={setSearch}
          status={status}
          onStatusChange={setStatus}
        />

        <Button
        className="btn-primary"
          onClick={() =>
            createTask.mutate({ title: "New Task", status: "pending" })
          }
        >
          <Plus className="h-4 w-4 mr-2" />
          New Task
        </Button>
      </div>

      {/* Task Creation */}
      <TaskForm />

      {/* Task List */}
      <TaskList tasks={filteredTasks} />
    </div>
  )
}
