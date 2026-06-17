import request from '@/axios'
import type { UserType } from './types'

interface RoleParams {
  roleName: string
}

// 登录接口 - 对接后端 /api/user/login (nginx 会去掉 /api 前缀)
export const loginApi = (data: { name: string; password: string }): Promise<IResponse<any>> => {
  return request.post({ url: '/api/user/login', data })
}

// 登出接口 - 对接后端 /api/user/logout
export const loginOutApi = (): Promise<IResponse> => {
  return request.post({ url: '/api/user/logout' })
}

// 获取用户信息 - 对接后端 /api/user/info
export const getUserInfoApi = (): Promise<IResponse<any>> => {
  return request.get({ url: '/api/user/info' })
}

// 注册接口 - 对接后端 /api/user/register
export const registerApi = (data: { name: string; password: string; phone?: string }): Promise<IResponse<any>> => {
  return request.post({ url: '/api/user/register', data })
}

// 保留原有接口结构，后续可根据需要调整
export const getUserListApi = ({ params }: AxiosConfig) => {
  return request.get<{
    code: string
    data: {
      list: UserType[]
      total: number
    }
  }>({ url: '/mock/user/list', params })
}

export const getAdminRoleApi = (
  params: RoleParams
): Promise<IResponse<AppCustomRouteRecordRaw[]>> => {
  return request.get({ url: '/mock/role/list', params })
}

export const getTestRoleApi = (params: RoleParams): Promise<IResponse<string[]>> => {
  return request.get({ url: '/mock/role/list2', params })
}
