import {Container, Form} from 'react-bootstrap'
import {useState} from 'react';
import {publish} from '../redux/actions.jsx';
import {useDispatch} from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const NewProduct = () => {

	const dispatch = useDispatch();
	const [data, setData] = useState({
		trademark: '',
		model: '',
		reference: '',
		image: '',
		price: ''
	});
	let navigate = useNavigate();

	const handleChange = (e) => {
		e.preventDefault();
		setData({
			...data,
			//propiedad dinamica []
			[e.target.name]: e.target.value
		})
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let response = await dispatch(publish(data));
		if(response.status === 201) {
			Swal.fire(
			  'Publicación realizada',
			  'Tu aviso ha sido publicado',
			  'success'
			)
			navigate('/');
		}else{
			Swal.fire({
			  icon: 'error',
			  title: 'Error',
			  text: 'No se ha podido publicar el aviso'
			})
		}
		setData({
			trademark: '',
			model: '',
			reference: '',
			image: '',
			price: ''
		})
	}

	return(
		<Container className='mt-5'>
			<h3 className='text-center mb-5'>Publica tu moto</h3>
			<Form onSubmit={handleSubmit} >
				<Form.Group className='mb-3'>
					<Form.Control 
					type='text' 
					placeholder='Marca'
					name='trademark' 
					value={data.trademark}
					onChange={handleChange}
					required
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Control 
					type='text' 
					placeholder='Tipo'
					name='reference' 
					value={data.reference}
					onChange={handleChange}
					required
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Control 
					type='number' 
					placeholder='Modelo'
					name='model' 
					value={data.model}
					onChange={handleChange}
					required
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Control 
					type='number' 
					placeholder='Precio'
					name='price' 
					value={data.price}
					onChange={handleChange}
					required
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Control 
					type='text' 
					placeholder='URL de la imagen'
					name='image' 
					value={data.image}
					onChange={handleChange}
					required
					/>
				</Form.Group>
				<button className='btn btn-primary w-100' >PUBLICAR</button>
			</Form>
		</Container>
		)
}

export default NewProduct;