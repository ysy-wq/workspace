async 定义异步函数：
  自动把函数转换为promise
  当调用异步函数时，函数返回值会被resolve处理
  异步函数内部可以使用await

await暂停异步函数的执行：
  当使用在promise前面时，await等待promise完成，并返回promise的结果
  await只能和promise一起使用，不能和callback一起使用
  await只能与async函数一起搭配使用

async和await的使用：解决了promise中的.then链式调用