import type { AddressParams } from '@/types/address';
import { defineStore  } from "pinia";
import { Names } from '../storeName/index';
import { reactive } from 'vue'

export const useAddressStore = defineStore(Names.Address,() => {
    const addressList = reactive<{
        data: AddressParams[]
    }>({
        data: [{
            id: 1,
            /** 收货人姓名 */
            username: 'username',
            /** 联系方式 */
            phone: '13333333333',
            /** 省份编码 */
            state: 'state',
            /** 城市编码 */
            city: 'city',
            /** 区/县编码 */
            county: 'county',
            /** 详细地址 */
            address: 'address',
            /** 默认地址，1为是，0为否 */
            isDefault: 0,
        },{
            id: 2,
            username: 'username',
            phone: '13333333333',
            state: 'state',
            city: 'city',
            county: 'county',
            address: 'address',
            isDefault: 0,
        }]
    })
    // 地址数据改变
    function handleAddressList(status:Number,val: AddressParams){
        if(status === 0){ // 添加
            addressList.data.push(val)
        }else if(status === 1){ // 编辑 
            addressList.data.map((item,index) => {
                if(item.id === val.id){
                    addressList.data.splice(index,1,val)
                }
            })
        }else if(status === 2){ // 删除
            addressList.data.map((item,index) => {
                if(item.id === val.id){
                    addressList.data.splice(index,1)
                }
            })
        }
    }

    return {
        addressList,
        handleAddressList
    }
})