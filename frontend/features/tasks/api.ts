import api from "@/lib/api"

export const fetchTasks = () => api.get("/tasks")
export const createTask = (data: any) => api.post("/tasks", data)
export const deleteTask = (id: string) => api.delete(`/tasks/${id}`)
export const updateTask = (id: string, data: any) => api.put(`/tasks/${id}`, data)
