/** 添加收货地址: 请求参数 */
export type AddressParams = {
    /** 编辑id */
    id?: number,
    /** 收货人姓名 */
    username: string,
    /** 联系方式 */
    phone: string,
    /** 省份编码 */
    state: string,
    /** 城市编码 */
    city: string,
    /** 区/县编码 */
    county: string,
    /** 详细地址 */
    address: string,
    /** 默认地址，1为是，0为否 */
    isDefault: number,
  }
  
