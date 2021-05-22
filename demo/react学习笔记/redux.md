1、Redux的作用
  Redux是一个帮助我们管理state的容器，提供了可预测的管理状态。

2、Redux的核心理念
  （1）store：
  （2）action：所有数据的变化，必须通过派发（dispatch）action来更新。
              action是一个普通的JavaScript对象，用于描述这次更新的type和content
              使用action的好处是可以清晰的知道数据到底发生了什么养的变化，所有数据变化都是可追踪、可预测的。
  （3）reducer：reducer是一个纯函数，reducer会将传入的state和action结合起来生成一个新的state。
为了保证reducer的纯净，不要在reducer中执行以下操作：
  1、修改传入参数；
  2、执行有副作用的操作，如API请求和路由跳转
  3、调用非纯函数，如Date.now()或Math.random()


3、Redux的三大原则
  单一数据源：
    整个应用程序的state被存储在一个object tree中，并且这个object tree只存储在一个store中
    Redux没有强制让我们不能创建多个store，但是这样做不利于数据维护
    单一数据源可以让整个应用程序的state变得方便维护、追踪、修改

  state是只读的
    唯一修改state的方法一定是触发action。
    这样保证了所有的修改都被集中化，并且按照严格的顺序执行。

  使用纯函数来执行修改（纯函数：1、确定的输入一定会产生确定的输出  2、函数在执行过程中，不能产生副作用（触发事件，发出请求等））
    通过reducer将旧state和actions联系在一起，并且返回一个新的state
    随着应用程序的复杂度增加，可以将reducer分解成多个小的reducers，分别操作不同的state tree的一部分
    所有的reducer都必须是纯函数，不能产生任何的副作用

4、Provider
  Provider组件包裹在根组件的最外层，使得所有的子组件都可以拿到state
  它接收store作为props，然后通过context往下传，这样react中任何组件都可以通过context获取store

5、redux存放数据的规则
  如果是组件内部使用的状态数据，存放在组件内的state中，如果是通过接口请求返回到的这类数据，存放在redux中

6、Redux的运作流程
  （1）当用户触摸界面时，调用store.dispatch(action)捕捉具体的action动作。
  （2）然后Redux的store自动调用reducer函数，store传递两个参数给reducer函数，当前state和收到的action。其中，reducer函数必须是一个纯函数，
该函数会返回一个新的state。
  （3）根reducer会把多个字reducer的返回结果合并成最终的应用状态，在这一过程中，可以使用Redux提供的combineReducer方法。使用该方法时，action会传递
给每个子的reducer进行处理，在子reducer处理后会将结果返回给根reducer合并成最终的应用状态。
  （4）store调用store.subscribe(listener)监听state的变化，state一旦发生改变就会触发store的更新，最终view会根据store数据的更新刷新界面。