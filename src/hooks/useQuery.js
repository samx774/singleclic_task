import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../services/api";

export function useQueryData(endpoint, lang = "ar", key, options) {
  return useQuery({
    queryKey: [key, lang],
    queryFn: () => api.get(endpoint).then((res) => res.data),
    ...options,
  });
}

export function useQueryMutation(endpoint) {
  return useMutation({
    mutationFn: (data) => api.post(endpoint, data),
  });
}

export function useQueryUpdate(endpoint) {
  return useMutation({
    mutationFn: (data) => api.put(endpoint, data),
  });
}

export function useQueryDelete(endpoint) {
  return useMutation({
    mutationFn: (id) => api.delete(`${endpoint}/${id}`),
  });
}
