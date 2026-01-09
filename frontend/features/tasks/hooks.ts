import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchTasks, createTask, deleteTask, updateTask } from "./api"
import { toast } from "sonner"

export const useTasks = () =>
  useQuery({
    queryKey: ["tasks"],
    queryFn: async () => (await fetchTasks()).data,
  })

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createTask,

    onMutate: async (newTask) => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] })

      const prevTasks = queryClient.getQueryData(["tasks"])

      queryClient.setQueryData(["tasks"], (old: any) => [
        { ...newTask, _id: Date.now().toString(), optimistic: true },
        ...(old || []),
      ])

      return { prevTasks }
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(["tasks"], context?.prevTasks)
      toast.error("Failed to create task")
    },

    onSuccess: () => {
      toast.success("Task created")
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
    },
  })
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteTask,

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] })

      const prev = queryClient.getQueryData(["tasks"])

      queryClient.setQueryData(["tasks"], (old: any) =>
        old.filter((t: any) => t._id !== id)
      )

      return { prev }
    },

    onError: (_, __, ctx) => {
      queryClient.setQueryData(["tasks"], ctx?.prev)
      toast.error("Delete failed")
    },

    onSuccess: () => {
      toast.success("Task deleted")
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
    },
  })
}

export const useToggleTaskStatus = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      updateTask(id, { status }),

    onMutate: async ({ id, status }) => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] })

      const previousTasks = queryClient.getQueryData<any[]>(["tasks"])

      queryClient.setQueryData(["tasks"], (old: any[]) =>
        old.map((task) =>
          task._id === id ? { ...task, status } : task
        )
      )

      return { previousTasks }
    },

    onError: (_err, _vars, context) => {
      queryClient.setQueryData(["tasks"], context?.previousTasks)
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
    },
  })
}
