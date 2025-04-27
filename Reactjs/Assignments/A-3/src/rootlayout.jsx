import Header from "./compoments/header/Header"
import Footer from "./compoments/footer/Footer"
import {Outlet} from 'react-router-dom'
function rootlayout(){
    return <div className="text-center">
        <div className="p-0 m-0 text-center text-white bg-dark">
        <Header></Header>
        </div>
    {/* //dynamic content */}
<div style={{minHeight:'100vh'}}>
        <Outlet/>
    </div>
    <Footer></Footer>
    </div>
}
export default rootlayout