(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{566:function(t,e,o){"use strict";o.r(e);var i=o(17),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"关键路径"}},[t._v("关键路径")]),t._v(" "),o("blockquote",[o("p",[t._v("从输入到输出的关键路径")])]),t._v(" "),o("p",[t._v("更新（增删改查）->协调器注册任务->调度器任务循环执行任务")]),t._v(" "),o("p",[t._v("执行任务：主要两个步骤环节")]),t._v(" "),o("ul",[o("li",[t._v("执行协调器 Fiber 构造循环，构造成最新的 Fiber 树")]),t._v(" "),o("li",[t._v("执行 commitRoot，把 Fiber 树渲染到页面，任务完成")])]),t._v(" "),o("h2",{attrs:{id:"工作循环"}},[t._v("工作循环")]),t._v(" "),o("ol",[o("li",[t._v("scheduler 调度器的任务调度循环： 宏观上调度每个任务")]),t._v(" "),o("li",[t._v("Reconciler 协调器的 Fiber 构造循环：每个任务的新 Fiber 构造环节")])]),t._v(" "),o("p",[t._v("在 更新到 任务执行 commitRoot 环节之前（操作 dom 之前），react 做了系列的优化，比如批处理，任务优先级，可中断渲染等")])])}),[],!1,null,null,null);e.default=r.exports}}]);