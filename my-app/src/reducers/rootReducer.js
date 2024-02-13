const initialState = {
    products:[
        {id:1, name:"Generator", description:"Lorem ipsum dolow sit amet", price:"120$"},
        {id:2, name:"Belt", description:"Lorem ipsum dolow sit amet", price:"190$"},
        {id:3, name:"Igla", description:"Lorem ipsum dolow sit amet", price:"120$"},
        {id:4, name:"Pyla", description:"Lorem ipsum dolow sit amet", price:"120$"},
    ]
}

const rootReducer = (state = initialState, action) =>{
    return state;
}

export default rootReducer;