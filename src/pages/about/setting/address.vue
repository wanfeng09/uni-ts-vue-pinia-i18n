<script setup lang="ts">
import { ref, reactive } from "vue";
import { useAddressStore } from "@/stores/index";
// 弹框实例
const addressPopup = ref();
// 仓库地址
const addressStore = useAddressStore();
// 地址列表
const addressList = addressStore.addressList.data;
// 触发长按事件索引下标记录
let pressIndex = ref(0);
// 长按事件
const actions = ["编辑", "删除", "复制"];
// 添加地址跳转
function add() {
  uni.navigateTo({
    url: "/pages/about/setting/addAddress",
  });
}
// 长按事件触发
function eventLongpress(e: number) {
  pressIndex.value = e;
  addressPopup.value.open();
}
// 长按事件选择
function eventTap(e: Number) {
  if (e === 0) {
    let id = addressList[pressIndex.value].id
    uni.navigateTo({
      url: `/pages/about/setting/addAddress?edit=${id}`,
    });
  } else if (e === 1) {
    addressStore.handleAddressList(2, addressList[pressIndex.value]);
  } else if (e === 2) {
    let address = addressList[pressIndex.value].address;
    uni.setClipboardData({
      data: address,
      success() {
        uni.showToast({
          icon: "none",
          title: "复制成功",
        });
      },
      fail() {
        uni.showToast({
          icon: "none",
          title: "复制失败",
        });
      },
    });
  }
  // 关闭弹框
  closedPop()
}
// 关闭弹框
function closedPop() {
  addressPopup.value.close();
}
</script>
<template>
  <view class="h-contain">
    <view class="h-padding h-bg--white">
      <view class="h-text h-color--primaryColor">
        <text style="padding: 10px 0 20px 0">Tip: 长按列表编辑</text>
      </view>
      <view
        class="h-row h-row__nowrap h-justify--center h-align-center"
        v-for="(item, index) in addressList"
        :key="index"
        @longpress="eventLongpress(index)"
      >
        <view class="h-flex1 h-padding__y h-border__bottom">
          <view class="h-row h-row__nowrap h-align-center">
            <text class="h-h5 h-color-dark-gray"
              >地址{{ index + 1 }}: {{ item.address }}</text
            >
          </view>
        </view>
      </view>
      <view
        class="h-row h-row__nowrap h-justify--end h-margin__y"
        style="padding-bottom: 30px"
      >
        <button
          @tap="add"
          class="h-nomargin h-color--white h-button h-bg--primaryColor h-button__noborder h-row h-row__nowrap h-justify--center h-align-center"
          style="width: 200rpx"
        >
          <text>添加</text>
        </button>
      </view>
    </view>
    <uni-popup ref="addressPopup" type="bottom">
      <view class="h-bg--white">
        <view
          class="h-row h-row__nowrap h-justify--center h-align-center h-border__bottom"
          v-for="(item, index) in actions"
          :key="index"
          @tap="eventTap(index)"
        >
          <text class="h-h6 h-color-dark-gray h-padding__y">{{ item }}</text>
        </view>
        <view class="h-bg--gray" style="height: 10rpx"></view>
        <view
          class="h-row h-row__nowrap h-justify--center h-align-center h-border__bottom"
          @tap="closedPop"
        >
          <text class="h-h6 h-color-dark-gray h-padding__y">取消</text>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<style lang="scss" scoped></style>
