// 父子组件通信案例
// 1、父组件向子组件传递数据
import React,{ Component } from 'react';

class ChildCpn1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props
    }
  }

  render() {
    const {name, age, height} = this.state.message
    return (
      <div>
        <h2>我是子组件</h2>
        <p>父组件传递过来的数据有：{'姓名:' + name + ' 年龄：' + age + ' 身高：' + height}</p>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn1 name={'张三'} age={'20'} height={'185'}/>
        <ChildCpn1 name={'李四'} age={'25'} height={'175'}/>
      </div>
    )
  }
}

export default App