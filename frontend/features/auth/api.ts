import api from "@/lib/api"

export const registerUser = (data: any) =>
  api.post("/auth/register", data)

export const loginUser = (data: any) =>
  api.post("/auth/login", data)
