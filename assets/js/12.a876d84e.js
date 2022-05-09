(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{564:function(e,t,i){"use strict";i.r(t);var l=i(17),r=Object(l.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"主要结构"}},[e._v("主要结构")]),e._v(" "),i("p",[e._v("react 大致主要代码架构")]),e._v(" "),i("ul",[i("li",[e._v("react：React 基本 API react 组件及基础函数等：如 ReactElement setState，hooks，开发过程中绝大部分 api 来自于此包")]),e._v(" "),i("li",[e._v("react-dom： web 渲染器，(其他渲染器如 react-native)")]),e._v(" "),i("li",[e._v("react-reconciler")]),e._v(" "),i("li",[e._v("scheduler")])]),e._v(" "),i("p",[e._v("总的大致过程是：")]),e._v(" "),i("ul",[i("li",[e._v("react 启动后，调用改变状态的 react api，")]),e._v(" "),i("li",[e._v("react-reconciler 接收到改变后（scheduleUpdateOnFiber），将回调函数(封装了生成新 Fiber 树的逻辑)送给 scheduler 进行调度")]),e._v(" "),i("li",[e._v("scheduler 控制执行时机，执行完后生成新的 Fiber 树")]),e._v(" "),i("li",[e._v("渲染器(react-dom,react-native),将 fiber 树形结构渲染到界面上")])]),e._v(" "),i("h2",{attrs:{id:"架构分析"}},[e._v("架构分析")]),e._v(" "),i("ol",[i("li",[e._v("api 层： 开发过程中使用的绝大部分 API，主要在 react 文件夹中，主要通过 api 驱动内核运行\n"),i("ul",[i("li",[e._v("setState")]),e._v(" "),i("li",[e._v("hook ，发起 dispatchAction 改变状态")]),e._v(" "),i("li",[e._v("forceUpdate")])])]),e._v(" "),i("li",[e._v("内核运行层：开发过程中不涉及，如果更好的使用 理解 react， 需要对内核运行原理进行理解\n"),i("ul",[i("li",[e._v("渲染器：react-dom，启动应用，将 Fiber 树构建成实际的 dom")]),e._v(" "),i("li",[e._v("协调器：react-reconciler，\n"),i("ul",[i("li",[e._v("接收 react-dom 发起的初次 render 和 react api 发出的更新更新")]),e._v(" "),i("li",[e._v("将 fiber 树的构造过程封装在一个回调函数，并将其传入到 scheduler 中进行调度")]),e._v(" "),i("li",[e._v("调度执行回调完后，执行渲染器的相关 api，生成实际节点")])])]),e._v(" "),i("li",[e._v("调度器：scheduler\n"),i("ul",[i("li",[e._v("接收协调器提供的回调函数，并包装到一个任务对象中")]),e._v(" "),i("li",[e._v("维护任务队列，优先级高的排在最前面")]),e._v(" "),i("li",[e._v("循环执行任务队列，直到队列为空")])])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);