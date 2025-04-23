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

  // 添加内联样式
  const styles = []
  if (props.size) {
    const size = typeof props.size === 'number' ? `${props.size}px` : props.size
    styles.push(`--icon-size: ${size}`)
  }

  if (props.color)
    styles.push(`--icon-color: ${props.color}`)

  // 添加样式类
  if (styles.length > 0)
    classes.push(`[style="${styles.join(';')}"]`)

  console.log(classes, classes.join(' '))

  return classes.join(' ')
})
</script>

<template>
  <text :class="iconClass" />
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
