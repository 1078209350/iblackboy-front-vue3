import request from '@/axios'

// 产品类型定义
export interface ProductType {
  productId?: number
  productName: string
  productPrice: number
  productType: string
  productImg?: string
  productNumber?: string
}

// 分页查询产品列表
export const getProductListApi = (params: {
  page: number
  size: number
  productName?: string
  productPrice?: string
  productType?: string
}): Promise<IResponse<any>> => {
  return request.get({ url: '/api/product/queryList', params })
}

// 新增产品
export const addProductApi = (data: ProductType): Promise<IResponse<any>> => {
  return request.post({ url: '/api/product/addProduct', data })
}

// 修改产品
export const updateProductApi = (data: ProductType): Promise<IResponse<any>> => {
  return request.post({ url: '/api/product/changeProduct', data })
}

// 删除产品
export const deleteProductApi = (data: { productId: number }): Promise<IResponse<any>> => {
  return request.post({ url: '/api/product/deleteProduct', data })
}
