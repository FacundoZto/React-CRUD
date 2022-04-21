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

export const publish = (moto) => {
	return async () => {
		try{
			let response = await axios.post(url, moto);
			return response;
		}catch(err) {
			console.log(err);
		}
	}
}

export const deletePost = (id) => {
	return async (dispatch) => {
		try{
			const response = await axios.delete(`${url}/${id}`);
			dispatch({
				type: 'DELETE_POST',
				payload: id
			})
			return response;
		}catch(err){
			console.log(err);
		}
	}
}
