import React,{ Component } from 'react';
import classNames from 'classnames'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      isActive: true,
      isBar: false
    }
  }

  render() {
    const { isActive, isBar } = this.state
    return (
      <>
        <h2 className={'title ' + (isActive ? 'active' : '')}>我是标题1</h2>
        <h2 className={classNames('foo', 'bar', 'active')}>我是标题2</h2>
        <h2 className={classNames({'active': isActive},'title')}>我是标题3</h2>
        <h2 className={classNames(['avtive','title'])}>我是标题4</h2>
        <h2 className={classNames(['avtive','title', {'bar': !isBar}])}>我是标题5</h2>
      </>
    )
  }
}

export default App;
