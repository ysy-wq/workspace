一、react-router有两种模式，对应着两种组件
  1.hash模式：可以适配低版本浏览器。但是url路径会加一个#，看起来不像真实url，组件：HashRouter
  2.history模式：基于H5，有以下几种方法改变当前location，组件：BrowserRouter
    push(location)：使用新的路径
    replace(location)：替换原来的路径
    go(n):向前或向后改变路径
    goBack()：向后改变路径
    goForward()：向前改变路径

二、Link和NavLink
  通常用于路径的跳转，最终都会被渲染成a元素，NavLink和Link相似，只是在它的基础上增加了一些样式属性。NavLink组件有activeStyle，用于组件被选中时添加样式，activeClassName用于活跃时添加className，NavLink被选中时，会默认添加一个class名为active

三、Route
  用于路径的匹配，渲染对应的组件。它的path属性用于匹配路径，component属性用于匹配到路径后渲染对应的组件，exact用于精准匹配路径,只有精确匹配到完全一致的路径，才会渲染对应的组件。

四、Switch
  Switch匹配路由时有一种排他性，即匹配到了第一个路由以后，便不再继续向下进行匹配

五、Redirect
  Redirect用于路由的重定向，当这个组件出现以后，则会执行跳转至对应的url。

六、路由的高级使用
路由嵌套；在子组件中嵌套路由。
手动跳转：通过给元素添加对应的onClick事件

只有通过路由渲染出来的组件，才可以直接获取history对象。如果不是，则需要把该组件通过withRouter包裹，再用路由Router组件包裹使用

七、动态路由：路由中的路径并不固定，例如/detail/:id或{`/detail/{id}`}

八、参数传递
1、动态路由，例：/url/:id  通过this.props.match获取数据
2、前端路由的search传递 例： /url?name=zhangsan&age=20  通过this.props.location获取数据
3、通过to传入对象 通过this.props.location获取数据
例：<NavLink to={{
  pathname: '/detail2',
  state: {height: 1.98, address: '洛杉矶'}，
  search: '?apikey=123'
}}></NavLink>

九、react-router-config
    如果当我们需要将所有路由集中到一个地方管理时，可以通过react-router-config管理。
    首先npm i react-router-config,然后创建router文件夹，在该文件夹下创建index.js用于管理路由，以数组的形式，每个路由包括
path，component，如果有些路由组件需要精准匹配时，加上exact: true。如果有路由嵌套，子路由也是通过这种方式管理。
    通过这种方式管理以后，不需要通过使用Switch组件，而是通过react-router-config中提供的renderRoutes函数去代替。
例：{renderRoutes（routes}

    react-router-config函数中还提供了一个matchRoutes辅助函数，传入一个路由对象数组，用于获取所有匹配的路径
例: const routes = matchRoutes(this.props.route.routes,'/about');
    console.log(routes)
