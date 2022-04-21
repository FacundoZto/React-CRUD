const initialState = {
	products: [],
};

const reducer = (state=initialState, action) =>{
	switch(action.type){
		case 'GET_PRODUCTS':
			return{
				...state,
				products: action.payload
			}
		case 'DELETE_POST':
			return{
				...state,
				products: state.products.filter(el => el.id !== action.payload)
			}
		default:
			return{
				...state
			}
	}
}

export default reducer;