import {Container, Form} from 'react-bootstrap'
import {useState} from 'react';

const NewProduct = () => {

	const [data, setData] = useState({
		trademark: '',
		model: '',
		reference: '',
		image: '',
		price: ''
	});

	const handleChange = (e) => {
		e.preventDefault();
		setData({
			...data,
			//propiedad dinamica []
			[e.target.name]: e.target.value
		})
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('enviado')
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