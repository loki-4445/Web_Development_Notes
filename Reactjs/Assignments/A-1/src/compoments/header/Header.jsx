import './Header.css'
function Header(){
    return (
        <div className='head'>  
          <img src="https://m.media-amazon.com/images/I/71d+YNmI5CL.jpg" alt="" className="icon" />
          <div className="ulis">
            <ul>
              <li><a href="https://en.wikipedia.org/wiki/Jana_Sena_Party" target='_blank'>Home</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Pawan_Kalyan" target='_blank'>About author</a></li>
              <li><a href="https://www.thehindu.com/elections/lok-sabha/andhra-pradesh-lok-sabha-election-results-2024-live/article68207311.ece" target='_blank'>Winning details</a></li>
            </ul>
          </div>
          <div className="icons">
            <img src="https://m.media-amazon.com/images/I/71VRd3FvgRL._AC_UF1000,1000_QL80_.jpg" alt="" />
            <img src="https://www.shutterstock.com/image-vector/lotus-flower-saffron-color-political-600nw-2399179289.jpg" alt="" />
            </div>
            </div>
      );

}
export default Header