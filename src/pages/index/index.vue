<script>
import Counter from '../../components/Counter.vue'
import IconItem from '../../components/Icon.vue'
import './index.scss'

export default {
  name: 'Index',
  components: {
    Counter,
    IconItem,
  },
}
</script>

<template>
  <view class="index">
    <Counter />

    <Text class="text-[#123456] bg-amber-100">
      tailwindcss
    </Text>
    <view class="index bg-[#123456]">
      <Text class="text-[55rpx] text-[#fff]">
        Hello world!
      </Text>
    </view>

    <!-- Iconify 示例 -->
    <view class="mt-4 p-4 bg-gray-100 rounded">
      <Text class="text-lg font-bold mb-2">
        Iconify 图标示例
      </Text>

      <!-- 使用Icon组件 -->
      <view class="mb-4">
        <Text class="text-sm text-gray-600 mb-1">
          使用Icon组件:
        </Text>
        <view class="flex justify-around items-center">
          <IconItem name="mdi-home" size="24" color="#1677ff" />
          <IconItem name="mdi-account" size="32" color="#52c41a" />
          <IconItem name="mdi-heart" size="48" color="#f5222d" />
          <IconItem name="mdi-star" size="24" color="#faad14" />
        </view>
      </view>

      <!-- 使用Tailwind CSS类 -->
      <view class="mb-2">
        <text class="text-sm text-gray-600 mb-1">
          使用Tailwind CSS类:
        </text>
        <view class="flex justify-around items-center">
          <view class="i-mdi-home text-blue-500 text-2xl" />
          <text class="i-mdi-account text-green-500 text-2xl" />
          <text class="i-mdi-heart text-red-500 text-2xl" />
          <text class="i-mdi-star text-yellow-500 text-2xl" />
        </view>
      </view>
    </view>
  </view>
</template>
