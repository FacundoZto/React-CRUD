import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../redux/actions.jsx';
import CardProduct from './CardProduct.jsx';
import {Container, Row} from 'react-bootstrap';

const ProductList = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products)

	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch, products])

	return(
		<Container className='mt-5 mb-4'>
			<Row>
			{
				products && products.map(e => (
					<CardProduct
						key={e.id}
						id={e.id} 
						image={e.image}
						model={e.model}
						price={e.price}
						reference={e.reference}
						trademark={e.trademark}
					 />
					)) 
			}
			</Row>
		</Container>
		)
}

export default ProductList;