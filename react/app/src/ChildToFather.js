// 子组件向父组件传递数据(btn计数)
import React, {Component} from 'react'

function ChildBtn(props) {
  const {operator, btnClick} = props
  return (
    <button onClick={btnClick}>{operator}</button>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  changeCounter(index) {
    this.setState({
      counter: this.state.counter + index
    })
  }

  render() {
    return(
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <ChildBtn operator={'+10'} btnClick={() => this.changeCounter(10)} />
        <ChildBtn operator={'-10'} btnClick={() => this.changeCounter(-10)} />
      </div>
    )
  }
}
export default App