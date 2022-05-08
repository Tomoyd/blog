## ReactElement

> 在 react 包中
> 描述 JSX，createElement 生成的结果

关键属性有
key: 在协调时，diff 算法中会使用到
type: 标识节点的种类，协调时会用到，根据不同的组件类型执行不同的操作，如是字符串类型则直接使用
props
等

协调器会根据 ReactElement 生成对应的 Fiber 节点，当不一定一一对应，比如 Fragment 节点就不会生成 Fiber 节点

- ReactElement 数据结构和 Fiber 树的构建是通过 props.children 为单位先后交替生成的
- 当 ReactElement 树构造完毕，Fiber 树随即构造完毕

## Fiber

> 在 react-reconciler 包中
