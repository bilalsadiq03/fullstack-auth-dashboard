"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToggleTaskStatus, useDeleteTask } from "../hooks"

export function TaskItem({ task }: { task: any }) {
  const toggleStatus = useToggleTaskStatus()
  const deleteTask = useDeleteTask()

  const isCompleted = task.status === "completed"

  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-lg border p-3 transition",
        isCompleted && "bg-muted/50"
      )}
    >
      <div className="flex items-center gap-3">
        <Checkbox
          checked={isCompleted}
          onCheckedChange={() =>
            toggleStatus.mutate({
              id: task._id,
              status: isCompleted ? "pending" : "completed",
            })
          }
        />

        <span
          className={cn(
            "text-sm",
            isCompleted &&
              "line-through text-muted-foreground"
          )}
        >
          {task.title}
        </span>
      </div>

      <Button
        size="icon"
        variant="ghost"
        onClick={() => deleteTask.mutate(task._id)}
      >
        <Trash color="red" className="h-4 w-4 text-destructive" />
      </Button>
    </div>
  )
}
