"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { taskSchema } from "../schema"
import { useCreateTask } from "../hooks"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
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
      className="flex gap-2 flex-col space-y-4"
    >

      <Input className="input" placeholder="New task title * " {...form.register("title")} />
      <Textarea
         placeholder="Add task details..."
        className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none h-24"
        {...form.register("description")}
       />
      
      <Button type="submit" disabled={createTask.isPending} className="btn-primary px-4 py-2">
        {
            createTask.isPending ? "Adding" : "Add"
        }
      </Button>
    </form>
  )
}
