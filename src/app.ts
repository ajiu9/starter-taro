import { createPinia } from 'pinia'
import { createApp } from 'vue'

import './app.css'
// import '@nutui/nutui/dist/style.css'

const App = createApp({
// eslint-disable-next-line unused-imports/no-unused-vars
  onShow(options) {
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())

export default App
