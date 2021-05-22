import React, { Component } from 'react'

const UserContext = React.createContext({nickname: 'ysy', level: -1})
class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h2>用户昵称：{this.context.nickname}</h2>
        <h2>用户等级：{this.context.level}</h2>
      </div>
    )
  }
}

ProfileHeader.contextType = UserContext;

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <ul>
          <li>设置1</li>
          <li>设置1</li>
          <li>设置1</li>
          <li>设置1</li>
          <li>设置1</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <UserContext.Provider value={{nickname:'big-head',level: 99}}>
          <Profile />
        </UserContext.Provider>
        <h2>其他内容</h2>
      </div>
    )
  }
}
export default App