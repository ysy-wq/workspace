import moment from 'moment';
import 'moment/locale/zh-cn.js'// 引入中文文档，将日期用中文显示

// 1、日期格式化
let date1 = moment().format('MMMM Do YYYY, h:mm:ss a');// April 27th 2021, 11:31:29 am
// let date2 = moment().format('dddd')// Tuesday
// let date3 = moment().format('MMM Do YY')// Apr 27th 21
// let date4 = moment().format('Do')// 27th
// let date5 = moment().format()// 2021-04-27T11:37:58+08:00

// 2、相对时间
// let date6 = moment('20111031', 'YYYYMMDD').fromNow()// 9 years ago
// let date7 = moment().startOf('day').fromNow()// 12 hours ago
// let date8 = moment().endOf('day').fromNow()// in 12 hours
// let date9 = moment().startOf('hour').fromNow()// an hour ago

// 3、日历时间
// let date10 = moment().subtract(10,'days').calendar()// 04/17/2021
// let date11 = moment().subtract(6,'days').calendar()// Last Wednesday at 11:54 AM
// let date12 = moment().add(3,'days').calendar()// Friday at 11:55 AM
// let date13 = moment().add(10,'days').calendar()// 05/07/2021

console.log(date1)