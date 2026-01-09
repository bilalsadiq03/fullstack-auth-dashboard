"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function DashboardFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: {
  search: string
  onSearchChange: (v: string) => void
  status: "all" | "pending" | "completed"
  onStatusChange: (v: "all" | "pending" | "completed") => void
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <div className="flex gap-3 flex-1">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <select
          value={status}
          onChange={(e) =>
            onStatusChange(e.target.value as any)
          }
          className="border rounded-md px-3 py-2 text-sm bg-background"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  )
}
