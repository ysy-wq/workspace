import React,{ useState } from 'react'
import './index.css'

export default function Header() {
  const [choosed, setchoosed] = useState(0)
  const headerUl = ['首页','全部课程','在线题库','学习中心','资讯','问答','课时包','...']

  const changeChoosed = (index) => {
    setchoosed(index)
  }
  return (
    <div className='header'>
      <div className='headerImg'>
        <img src='https://probe.bjmantis.net/9048/upload/portalConfig/c1b894dfd63443619b9f37d1b7b091d1.png' alt=''/>
      </div>
      <ul className='headerType'>
        {
          headerUl.map((item,index) => {
            return <li className={choosed === index ? 'headerTypeItem choosedStyle' : 'headerTypeItem'}
                       onClick={() => changeChoosed(index)}
                    >{item}</li>
          })
        }
      </ul>
      <div className='headerBtn'>
        <a href='/#'>登陆</a>｜
        <a href='/#'>免费注册</a>
      </div>
    </div>
  )
}
