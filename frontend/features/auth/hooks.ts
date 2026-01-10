import { useMutation, useQuery } from "@tanstack/react-query"
import { registerUser, loginUser, fetchProfile } from "./api"
import { toast } from "sonner"
import { setToken } from "@/lib/auth"

export const useProfile = () =>
  useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  })

export const useRegister = () =>
  useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Account created successfully")
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Registration failed")
    },
  })

export const useLogin = () =>
  useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      setToken(res.data.token)
      toast.success("Logged in successfully")
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Login failed")
    },
  })
