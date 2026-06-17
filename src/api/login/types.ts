export interface UserLoginType {
  username: string
  password: string
}

// 对接后端返回的用户信息
export interface UserType {
  id?: number
  name?: string
  phone?: string
  address?: string
  avatar?: string
  // 保留原有字段做兼容
  username?: string
  password?: string
  role?: string
  roleId?: string
  permissions?: string | string[]
}
