"use client"

import { useTasks } from "../hooks"
import { TaskItem } from "./TaskItem"

export function TaskList() {
  const { data, isLoading } = useTasks()

  if (isLoading) return <p>Loading tasks...</p>

  if (!data?.length)
    return <p className="text-muted-foreground">No tasks yet</p>

  return (
    <div className="space-y-2">
      {data.map((task: any) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  )
}
