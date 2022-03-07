

const api = () => {

  return (dispatch) => {
    // console.log("hxkjk")



    fetch("https://data.messari.io/api/v1/assets/btc/metrics")

      .then(res => res.json())
      .then(data => {
        console.log(data.data.market_data.price_usd.toFixed(2))
        dispatch({ type: "rate", price: data.data.market_data.price_usd })
      })




  }



}


const api2 = () => {
  return (dispatch) => {
    fetch("https://data.messari.io/api/v1/assets/eth/metrics")
      .then(res => res.json())
      .then(data => {
        console.log(data.data.market_data.price_usd.toFixed(2))
        dispatch({ type: "eth", price: data.data.market_data.price_usd.toFixed(2) })
      })
  }


}


const api3 = () => {
  
  return (dispatch) => {

    fetch("https://data.messari.io/api/v1/assets/sol/metrics")
      .then(res => res.json())
      .then(data => {
        console.log(data.data.market_data.price_usd.toFixed(2))
        dispatch({ type: "sol", price: data.data.market_data.price_usd.toFixed(2) })
      }
      )
  }
}


const api4 = ( ) => {
    return(dispatch) => {
      fetch("https://data.messari.io/api/v1/assets/ftm/metrics")
      .then (res => res.json())
      .then( data => {
        console.log(data.data.market_data.price_usd.toFixed(2))
        dispatch({type: "ftm" , price : data.data.market_data.price_usd.toFixed(2) })
      })
    }
}



  export { api, api2, api3 , api4}
