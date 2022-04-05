import './Header.css'

const Header = (props) => {
  return (
    <div className='header'>
      <div className='appname'>{props.appName}</div>
      <div className='username'>{`Hi, ${props.user.name}. My lucky Number is ${props.anyNumber}`}</div>
      <ul className='menu'>
        {/**
      ['m1', 'm2', 'm3'] ==> [<li>m1</li>, <li>m2</li>, <li>m3</li>]
      */}
        {props.menuItems.map((value, index) => (
          <li key={value + index}>{value}</li>
        ))}
      </ul>
    </div>
  )
}
/** 
 * let ul = documnet.getElementsByClass('menu')[0]
 * *props.menuItems.map((value,index)=>{
* let li = documnet.createdElemnet('li)
* li.innerText = value
* ul.appendChild(li)
})

plain JS ==> vanilla JS*/

export default Header
