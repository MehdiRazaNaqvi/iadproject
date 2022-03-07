import { connect } from "react-redux"
import { api, api2, api3, api4 } from "./store/action/index"
import "./CSS/app.css"

import pic from "./CSS/pic.svg"
import btc from "./CSS/btc.svg"
import eth from "./CSS/ethereum.svg"
import sol from "./CSS/sol.svg"
import ftm from "./CSS/ftm.svg"

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => {


  return (


    <div className="grandparent">

    <div className="img_div">
      <img className="maj_img" src = {pic} alt="" />

    </div>





    <div className="parent" >

      <div className="p">
        <img className="small_img" src={btc} />
        <h1 className="item1" >{props.btc_price}</h1>
        <span><p className="item2" >market cap   70M </p> <p>24h high  40100</p>  <p>24h low  37200</p> </span>

      </div>



      <div className="p">
        <img className="small_img" src={eth} alt="" />
        <h1 className="item1" >{props.eth_price}</h1>
        <span><p className="item2" >market cap   70M </p> <p>24h high  40100</p>  <p>24h low  37200</p> </span>
      

      </div>


      <div className="p">
        <img className="small_img" src={sol} alt="" />
        <h1 className="item1" >{props.sol_price}</h1>
        <span><p className="item2" >market cap   70M </p> <p>24h high  40100</p>  <p>24h low  37200</p> </span>
     
      </div>


      <div className="p">
        <img className="small_img" src={ftm} alt="" />
        <h1 className="item1" >{props.ftm_price}</h1>
        <span><p className="item2" >market cap   70M </p> <p>24h high  40100</p>  <p>24h low  37200</p> </span>

      </div>  


<Button onClick={() => { 

       // setInterval(props.api, 1000, 1);
          // setInterval(props.api2, 1000, 1);
          // setInterval(props.api3, 1000, 1);
          // setInterval(props.api4, 1000, 1);
          

  }} variant="outline-dark">Fetch</Button>

    </div>

    </div>
  )
}



const mapStateToProps = (state) => ({
  btc_price: state.btc,
  eth_price: state.eth,
  sol_price: state.sol,
  ftm_price : state.ftm

})

const mapDispatchToProps = (dispatch) => ({

  api: () => dispatch(api()),
  api2: () => dispatch(api2()),
  api3: () => dispatch(api3()),
  api4: () => dispatch(api4())


})

export default connect(mapStateToProps, mapDispatchToProps)(App)///