import './App.css'
import Footer from './compoments/footer/Footer'
import User from './compoments/user/User'
import Nav from './compoments/navbar/Navbar'

function App(){
  let user1={name:"Lokesh",age:21,sec:"CSE"}
  let user2={name:"Lalithya",age:31,sec:"IT"}
  let user3={name:"Pinky",age:41,sec:"CSM"}
  let user4={name:"bhanu",age:51,sec:"CSD"}


  return (
    <div className='main'>
     <div>
       <Nav/>
     </div>
      <User user={user1}></User>
      <User user={user2}></User>
      <User user={user3}></User>
      <User user={user4}></User>
      <div>
      <Footer></Footer>
      </div>
    </div>  )
}
export default App