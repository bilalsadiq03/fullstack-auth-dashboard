"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { taskSchema } from "../schema"
import { useCreateTask } from "../hooks"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function TaskForm() {
  const form = useForm({
    resolver: zodResolver(taskSchema),
  })

  const createTask = useCreateTask()

  const onSubmit = (data: any) => {
    createTask.mutate(data)
    form.reset()
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex gap-2"
    >
      <Input placeholder="New task title" {...form.register("title")} />
      <Button type="submit" disabled={createTask.isPending}>
        {
            createTask.isPending ? "Adding" : "Add"
        }
      </Button>
    </form>
  )
}
