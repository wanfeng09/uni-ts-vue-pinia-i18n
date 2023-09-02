import type { AddressParams } from '@/types/address';
import { defineStore  } from "pinia";
import { Names } from '../storeName/index';
import { reactive } from 'vue'

export const useAddressStore = defineStore(Names.Address,() => {
    const addressList = reactive<{
        data: AddressParams[]
    }>({
        data: []
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