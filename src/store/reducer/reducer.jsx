const obj = {
    btc: "Fetching...",
    eth: "Fetching...",
    sol: "Fetching...",
    ftm: "Fetching..."
}

export default (state = obj, action) => {

    switch (action.type) {
        case ("rate"):
            return { ...state, btc: action.price.toFixed(2) }

        case ("eth"):
            return { ...state, eth: action.price }

        case ("sol"):
            return {...state , sol : action.price}
            
        case("ftm"):
                return {...state , ftm : action.price}
        default: return state


    }
}

