import Header from './compoments/header/Header'
import Footer from './compoments/footer/Footer'
import {Outlet} from 'react-router-dom'
function Rootlayout(){
    return (
        <div                                                                                        >
            <Header />
            {/* Main dynamic */}
            <div style={{minHeight:'100vh'}}>   
        {/* for loading the dynamic content we use Outlet */}
            <Outlet/>
            </div>
            <Footer  />
        </div>
    )
}
export default Rootlayout