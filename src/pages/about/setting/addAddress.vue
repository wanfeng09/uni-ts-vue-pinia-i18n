<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useAddressStore } from "@/stores/index";
import type { AddressParams } from "@/types/address";
import { onLoad } from "@dcloudio/uni-app";
// 仓库地址
const addressStore = useAddressStore();
// 自定义样式
const inputStyle = reactive({
  color: "#999",
  disableColor: "#fff",
  borderColor: "#e5e5e5",
  backgroundColor: "#fff",
});
// 标题
let title = ref("");


// 设置自定义表单校验规则，必须在节点渲染完毕后执行
// this.$refs.customForm.setRules(this.customRules)
// 表单实例
const customForm = ref();
// 表单数据
const customFormData = ref<AddressParams>({
  username: "",
  phone: "",
  state: "",
  city: "",
  county: "",
  address: "",
  isDefault: 0,
});
// 自定义表单校验规则
const customRules = {
  username: {
    rules: [
      {
        required: true,
        errorMessage: "请输入",
      },
    ],
  },
  phone: {
    rules: [
      {
        required: true,
        errorMessage: "请输入",
      },
    ],
  },
  state: {
    rules: [
      {
        required: true,
        errorMessage: "请输入",
      },
    ],
  },
  city: {
    rules: [
      {
        required: true,
        errorMessage: "请输入",
      },
    ],
  },
  county: {
    rules: [
      {
        required: true,
        errorMessage: "请输入",
      },
    ],
  },
  address: {
    rules: [
      {
        required: true,
        errorMessage: "请输入",
      },
    ],
  },
};
// 获取页面参数[第一种方式]
// const query = defineProps<{ edit: string }>();
// title.value = query.edit === null ? "添加地址" : "编辑地址";
// uni.setNavigationBarTitle({ title: title.value });

onLoad((option) => { // 第二种
  title.value = "添加地址"
  if (option && option.edit) {
    title.value = "编辑地址"
    addressStore.addressList.data.map(item => {
      if (item.id === Number(option.edit)) {
        customFormData.value = item
      }
    })
  }
  uni.setNavigationBarTitle({ title: title.value });

})

// 默认地址事件
function switchChange(e: UniHelper.SwitchOnChangeEvent) {
  customFormData.value.isDefault = e.detail.value ? 1 : 0
}

function selectAddress() {
  uni.getSystemInfo({
    success(res) {
      let locationEnabled = res.locationEnabled; //判断手机定位服务是否开启
      let locationAuthorized = res.locationAuthorized; //判断定位服务是否允许微信授权
      if (locationEnabled == false || locationAuthorized == false) {
        //手机定位服务（GPS）未授权
        uni.showModal({
          title: "授权",
          content: "获取授权失败，是否前往授权？",
          success: function (result) {
            if (result.confirm) {
              uni.openAppAuthorizeSetting();
            }
          },
          fail: function () {
            uni.showToast({
              title: "请前往设置中授权位置信息",
              icon: "none",
            });
          },
        });
      } else {
        console.log('打开地图');
        uni.chooseLocation({
          //keyword:'',
          success: function (response) {
            console.log(response, "获取位置信息");
          },
          fail: (fail) => {
            console.log(fail, "获取位置信息失败");
          },
        });
      }
    },
  });
}

function submit() {
  customForm.value.validate().then(() => {
    uni.showToast({
      title: `校验通过`,
    });
    if (title.value === '添加地址') {
      addressStore.handleAddressList(0, customFormData.value)
    } else {
      addressStore.handleAddressList(1, customFormData.value)
    }
    uni.navigateBack()
  }).catch((err: UniHelper.UniFormsErrShowType) => {
      console.log("err", err);
    });
}
</script>
<template>
  <uni-section :title="title" type="line">
    <view class="h-padding">
      <!-- 自定义表单校验 -->
      <uni-forms ref="customForm" :rules="customRules" :modelValue="customFormData">
        <uni-forms-item label="用户名" required name="username">
          <uni-easyinput v-model="customFormData.username" placeholder="username" />
        </uni-forms-item>
        <uni-forms-item label="手机号" required name="phone">
          <uni-easyinput v-model="customFormData.phone" placeholder="phone" />
        </uni-forms-item>
        <uni-forms-item label="省" required name="state">
          <uni-easyinput v-model="customFormData.state" placeholder="state" />
        </uni-forms-item>
        <uni-forms-item label="市" required name="city">
          <uni-easyinput v-model="customFormData.city" placeholder="city" />
        </uni-forms-item>
        <uni-forms-item label="区" required name="county">
          <uni-easyinput v-model="customFormData.county" placeholder="county" />
        </uni-forms-item>
        <uni-forms-item label="地址" required name="address">
          <uni-easyinput v-model="customFormData.address" placeholder="address" />
        </uni-forms-item>
        <!-- <uni-forms-item label="地址" required name="address">
          <view @tap="selectAddress">
            <uni-easyinput v-model="customFormData.address" placeholder="address" disabled :styles="inputStyle"
              placeholderStyle="color:#999" />
          </view>
        </uni-forms-item> -->
        <uni-forms-item label="默认地址" :labelWidth="100" required name="isDefault">
          <switch color="#008AFF" :checked="customFormData.isDefault === 1 ? true : false" @change="switchChange" />
        </uni-forms-item>
      </uni-forms>
      <button class="h-bg--primaryColor h-color--white" @click="submit">
        提交
      </button>
    </view>
  </uni-section>
</template>

<style lang="scss" scoped></style>
