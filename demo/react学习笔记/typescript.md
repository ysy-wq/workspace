一、typescript的类型：
any：任意类型、number：数字类型、string：字符串类型、boolean：布尔类型、

数组类型： let arr: number[] = [1,2]
let arr: Array<number> = [1,2]

元祖类型：各类型的元素不必相同，对应位置的类型需要相同。
let x:[string, number];
x = ['Runoob', 1]// 运行正常
x = [1, 'Runoob']// 报错
console.log(x[0])// Runoob

枚举类型：用于定义数值集合
enum Color {red, green, blue};
let c: Color = Color.blue;
console.log(c) // 输出2

void：用于标示方法返回值的类型，表示该方法没有返回值
function hello():void {
    alert('Hello Runoob')
}

null: 标示对象值缺失

undefined： 用于初始化变量为一个未定义的值

never：never是其他类型（包括null和undefined）的自类型，代表从不会出现的值


二、变量作用域
全局作用域：定义在程序结构的外部，可以在代码的ren