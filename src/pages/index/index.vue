<template>
  <view class="h-contain">eweq
    <view v-for="item in 1000" :key="item">iiiiii</view>
    <!-- <view class="gui-padding-x gui-bg-white">
        <view class="gui-text gui-default-color">
          <text style="padding: 10px 0 20px 0">Tip: 长按列表编辑</text>
        </view>
        <view
          class="gui-list-items"
          v-for="(item, index) in addressList"
          :key="index"
          @longpress="eventLongpress(index)"
        >
          <view class="gui-list-body gui-border-b">
            <view class="gui-list-title">
              <text class="gui-list-title-text gui-primary-text"
                >地址{{ index + 1 }}: {{ item.address }}</text
              >
            </view>
          </view>
        </view>
        <view
          class="gui-margin-top gui-flex gui-row gui-nowrap gui-justify-content-end"
          style="padding-bottom: 30px"
        >
          <button
            @tap="add"
            class="gui-button gui-default-bg gui-noborder gui-flex gui-align-items-center gui-justify-content-center"
            style="width: 200rpx"
          >
            <text class="gui-color-white gui-button-text">添加</text>
          </button>
        </view>
      </view>
      <uni-popup ref="addressPopup" type="bottom">
        <view class="gui-bg-white">
          <view
            class="gui-list-items gui-border-b"
            v-for="(item, index) in actions"
            :key="index"
            @tap="eventTap(index)"
          >
            <text
              class="gui-list-title-text gui-list-one-line gui-primary-text"
              style="padding: 10rpx 0"
              >{{ item }}</text
            >
          </view>
          <view class="gui-bg-gray" style="height: 10rpx"></view>
          <view class="gui-list-items gui-border-b" @tap="closedPop">
            <text
              class="gui-list-title-text gui-list-one-line gui-primary-text"
              style="padding: 10rpx 0"
              >取消</text
            >
          </view>
        </view>
      </uni-popup> -->
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useAddressStore } from "@/stores/index";
const addressPopup = ref();
const addressList = useAddressStore().addressList.data;
const actions = ["编辑", "删除", "复制"];
function add() {}
function selectAddress(e: Number) {}
function eventLongpress(e: Number) {}
function eventTap(e: Number) {}
function closedPop() {}
</script>

<style lang="scss" scoped>

</style>
