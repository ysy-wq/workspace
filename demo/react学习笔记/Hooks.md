hook使用规则：
1、只能在最顶层使用hook，不能在循环，条件或嵌套函数中调用Hook（为了正确的按照顺序的调用Hook）
2、只能在React函数中调用Hook，不能在普通的JavaScript函数中调用Hook(可以在自定义Hook中调用其他Hook)


一、State Hook
State Hook的作用相当于class组件中的this.state，用于存放数据。
例：const [ count, setCount ] = useState(0)
这里利用了es6的解构赋值，其中count为初始值，setCount为修改count的方法，当count值需要修改时则调用setCount，
其作用类似于this.setState。如果有多个状态值需要设置时，多次调用useState即可，由于count仅是一个变量，因此，
也不需要通过this去使用它，直接使用即可。


二、Effect Hook
Effect的作用类似于class组件中的生命周期，当需要执行副作用操作。例如网络请求，手动更新DOM，事件的监听等。
useEffect可以看作是componentDidMount,componentDidUpdate和componentWillUnmount这三个函数的组合。
可以通过调用useEffect来实现。
例：useEffect(() => {
  document.title = {count}
}) 

当我们希望在组件的加载与更新时都执行同样的操作时，如果使用class组件，则需要在componentDidMount和componentDidUpdate生命周期钩子函数中，编写同样的一段代码。但是使用useEffect则可以直接在useEffect钩子中编写代码，然后给它传递第二个参数，监听对应数据即可，若没有第二个参数，则每次数据变化时都会重新触发钩子函数。

useEffect有两个参数，第一个是回调函数，用于执行需要执行的操作，如果当你执行了数据的订阅时，可以通过return一个函数取消订阅。将添加与移除订阅逻辑放在一起
例：useEffect(() => {
  document.title = {count};
  console.log('DOM更新时回调')
  return () => {
    console.log('DOM移除时回调')// 在这里执行取消订阅操作
  }
},[])// 第二个参数可选

跳过一些不必要的副作用函数：
    useEffect的第二个参数是一个可选的参数，它需要传递一个数组，用于存放需要监听的数据，如果不传递该参数，则每一次重新渲染时，
都会执行useEffect,若传递一个空数组时，则代表没有需要监听的数据，useEffect只在第一次渲染时调用。若传递需要监听的数据，在该数据发生改变时,useEffect重新调用

在class组件中，生命周期钩子函数中的逻辑十分混乱，会将很多的逻辑代码放在一起。但是在useEffect中就不会有这种问题了，你可以将不同的操作存放在不同的useEffect中，从而避免上述问题。React会根据useEffect声明的顺序从而依次调用它。

清除订阅：在useEffect钩子函数中返回一个函数，用于清除订阅。