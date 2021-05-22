import immutable from 'immutable'

let arr = [1, 2, 3, 4, 5], obj = { name: 'zhangsan' }

// immutable的API使用

// 01：Map()：将原生object对象转为Map对象，只能转换第一层
// let imObj = immutable.Map(obj)
// console.log(imObj)

// 02: List()：将原生Array对象转为List对象，只能转换第一层
// let imArr = immutable.List(arr)
// console.log(imArr)

// 03：fromJs()：将原生js对象转换为immutable对象（深度转换，会将内部嵌套的对象和数组全部转成immutable）
// let imObj = immutable.fromJS(obj)
// let imArr = immutable.fromJS(arr)
// console.log(imObj)// Map对象
// console.log(imArr)// List对象

// 04：toJs()：将immutable对象转为原生js对象(深度转换，会将内部嵌套的Map和List全部转为原生js对象)
// let imObj = immutable.fromJS(obj)
// let imArr = immutable.fromJS(arr)
// let JsObj = imObj.toJS()
// let JsArr = imArr.toJS()
// console.log(JsObj)
// console.log(JsArr)

// 05：查看List或Map的大小
// let imObj = immutable.fromJS(obj)
// let imArr = immutable.fromJS(arr)
// console.log(imObj.size)
// console.log(imArr.count())

// 06：is() 判断两个immutable对象是否相等
// const imArr1 = immutable.fromJS([1,2,3,4,5])
// const imArr2 = immutable.fromJS([1,2,3,4,5])
// const imArr3 = immutable.fromJS([5,4,3,2,1])
// console.log(immutable.is(imArr1,imArr2))
// console.log(immutable.is(imArr1,imArr3))

// 07: merge() 对象合并
// const obj1 = immutable.fromJS({name:'zhangsan',age:20})
// const obj2 = immutable.fromJS({address:'beijing'})
// console.log(obj1.merge(obj2))
// console.log(obj1.merge(obj2).toJS())

// 08：增删改查
// get()/getIn()  set()/setIn()  update()/updateIn()  delete()/deleteIn()

