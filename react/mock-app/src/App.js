import React, { PureComponent } from 'react'
import axios from 'axios'

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8090/mockData')
      .then(res => {
        if(!res) {
          return;
        }
        this.setState({
          dataSource: res.data.dataSource
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { dataSource } = this.state;
    console.log(dataSource)

    return (
      <div>
        {
          dataSource.map( item => {
            return <h2 key={item.key}>{item.mockTitle}</h2>
          })
        }
      </div>
      
    )
  }
}
