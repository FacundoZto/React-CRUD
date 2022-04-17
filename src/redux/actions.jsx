import axios from 'axios';

const url = 'http://localhost:3004/motorcycles/';

export const getProducts = () => {
	return async (dispatch) => {
		try{
			let products = await axios.get(url);
			dispatch({
			type: 'GET_PRODUCTS',
			payload: products.data
		})
		}catch(err){
			console.log(err);
		}
	};
}
