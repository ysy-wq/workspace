import React,{ useState, useEffect } from 'react'

export default function GetUrlData() {
    const [urlData, seturlData] = useState({})

    fetch('http://musicapi.leanapp.cn/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA')
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log('Request Failed', err))
    return (
        <div>
            GetUrlData
        </div>
    )
}
