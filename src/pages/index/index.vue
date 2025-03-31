<script>
import Counter from '../../components/Counter.vue'
import './index.scss'

export default {
  name: 'Index',
  components: {
    Counter,
  },
}
</script>

<template>
  <view class="index">
    <Counter />

    <Text class="text-[#123456] bg-amber-100">
      tailwindcss
    </Text>
    <View class="index bg-[#123456]">
      <Text class="text-[55rpx] text-[#fff]">
        Hello world!
      </Text>
    </View>
  </view>
</template>
