import React from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext/AuthContext'
const useRole = () => {
  const { user, loading } = useContext(AuthContext)
  const AxiosSecure = useAxiosSecure()
  const { data: role, isLoading: isRoleLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ['role', user?.email],
    queryFn: async () => {
      const { data } = await AxiosSecure(`/users/role/${user?.email}`)
      return data.role
    },
  })

  return [role, isRoleLoading]
}

export default useRole
