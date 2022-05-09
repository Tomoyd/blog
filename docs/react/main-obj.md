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

```TypeScript
export type Fiber = {|
  // 组件的类型，如FunctionComponent ForwardRef HostComponent等值
  tag: WorkTag,

  // 与ReactElement key相同
  key: null | string,

 // 标识ReactElement 的类型，对应的$$typeof 的值，通常是REACT_ELEMENT_TYPE,还有react.portal等
  elementType: any,

  // 当前组件，ClassComponent对应相应的Class Function对应相应的Function Host对应相应的tagName
  type: any,

  //与Fiber关联的局部状态节点，如HostComponent对应真实dom，根节点对应FiberRoot class类型对应class实例
  stateNode: any,

  // 指向父节点
  return: Fiber | null,

  // 指向第一个子节点
  child: Fiber | null,
  // 下一个兄弟节点
  sibling: Fiber | null,
  index: number,

  // 通常与节点绑定
  ref:
    | null
    | (((handle: mixed) => void) & {_stringRef: ?string, ...})
    | RefObject,

  //ReactElement中传入，用于与memorizedProps比较是否变动
  pendingProps: any, // This type will be more specific once we overload the tag.
  memoizedProps: any, // 输出，上一次比较生成子节点时用到的属性，生成子节点后会把pendingProps赋值给它

  // 存储更新对象的队列，每次处罚更新都会在改队列上创建一个Update
  updateQueue: mixed,

  // 上次更新后生成的子节点的局部状态 执行Hook对象链表
  memoizedState: any,

  // fiber所依赖的context和events等
  dependencies: Dependencies | null,

  // 模式，如concurrentMode
  mode: TypeOfMode,

  // 副作用标记用来commit节点使用
  flags: Flags,
  subtreeFlags: Flags,
  deletions: Array<Fiber> | null,

  // 指向下一个有副作用Fiber
  nextEffect: Fiber | null,

  // 第一个有副作用Fiber,最后一个有副作用的Fiber
  firstEffect: Fiber | null,
  lastEffect: Fiber | null,
  // Fiber 节点的优先级
  lanes: Lanes,
  childLanes: Lanes,

  // 指向对于的Fiber（current 和WorkInProgress 互相指向）
  alternate: Fiber | null,
|};

```
