{{#if (includes "React" "Preact" s=framework)}}
import { Component } from 'react'

{{#if typescript }}import type { PropsWithChildren } from 'react'{{/if}}{{/if}}

{{#if (eq framework 'Vue3') }}
import { createApp } from 'vue'
{{/if}}
import './app.{{ cssExt }}'

{{#if (includes "React" "Preact" s=framework)}}
class App extends Component{{#if typescript }}<PropsWithChildren>{{/if}} {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}
{{/if}}

{{#if (eq framework 'Vue3') }}
const App = createApp({
    onShow(options) { },
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
{{/if}}

export default App
