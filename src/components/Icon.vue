<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** 图标名称，格式为 'collection-[icon-name]' */
  name: string
  /** 图标大小，默认为 16px */
  size?: number | string
  /** 图标颜色 */
  color?: string
  /** 额外的CSS类名 */
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 16,
  color: '',
  className: '',
})

// 计算最终的图标类名
const iconClass = computed(() => {
  const classes = [`i-${props.name}`]

  if (props.className)
    classes.push(props.className)

  return classes.join(' ')
})

// 计算样式对象
const styleObject = computed(() => {
  const styles: Record<string, string> = {}

  if (props.size) {
    const sizeValue = typeof props.size === 'number' ? `${props.size}px` : props.size
    styles['--icon-size'] = sizeValue
  }

  if (props.color)
    styles['--icon-color'] = props.color

  return styles
})
</script>

<template>
  <text :class="iconClass" :style="styleObject" />
</template>

<style>
/* 基础图标样式 */
[class^="i-"] {
  display: inline-block;
  width: var(--icon-size, 1em);
  height: var(--icon-size, 1em);
  color: var(--icon-color, currentColor);
  font-size: var(--icon-size, 1em);
  line-height: 1;
}
</style>
