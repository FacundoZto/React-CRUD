import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../redux/actions.jsx';

const ProductList = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products)

	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch])

	console.log(products);

	return(
		<div>Listado de motos</div>
		)
}

export default ProductList;