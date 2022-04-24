import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts, updatePost} from '../redux/actions.jsx';
import CardProduct from './CardProduct.jsx';
import {Container, Row, Modal, Form} from 'react-bootstrap';
import Swal from 'sweetalert2';

const ProductList = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products)

	const [updateList, setUpdateList] = useState(false);
	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch, updateList])

	//UPDATE PRODUCT
	//para mostrar el form
	const [modal, setModal] = useState(false);
	const handleClose = () => setModal(false);
	const handleOpen = () => setModal(true);

	//manejo del form
	const [dataModal, setDataModal] = useState({});
	const handleChangeModal = (e) => {
		setDataModal({
			...dataModal,
			[e.target.name]: e.target.value
		})
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await dispatch(updatePost(dataModal));
		if(response.status === 200){
			Swal.fire(
				  'Guardado',
				  'El aviso ha sido modificado',
				  'success'
				)
			setUpdateList(true);
			handleClose();
		}else{
			Swal.fire({
					  icon: 'error',
					  title: 'Error',
					  text: 'No se ha podido modificar el aviso'
					})
		}
	}

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
						handleClose={handleClose}
						handleOpen={handleOpen}
						setDataModal={setDataModal}
						moto={e}
					 />
					)) 
			}
			</Row>

			{/*ACTUALIZAR*/}
			<Modal show={modal} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Actualizar Datos</Modal.Title>
				</Modal.Header>
				<Form
					onSubmit={handleSubmit}
				>
					<Modal.Body>
						<Form.Group className='mb-3'>
							<Form.Label>Marca</Form.Label>
							<Form.Control 
							type='text' 
							placeholder='Marca'
							name='trademark' 
							value={dataModal.trademark}
							onChange={handleChangeModal}
							required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Tipo</Form.Label>
						<Form.Control 
						type='text' 
						placeholder='Tipo'
						name='reference' 
						value={dataModal.reference}
						onChange={handleChangeModal}
						required
						/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Modelo</Form.Label>
							<Form.Control 
							type='number' 
							placeholder='Modelo'
							name='model' 
							value={dataModal.model}
							onChange={handleChangeModal}
							required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
						<Form.Label>Precio</Form.Label>
							<Form.Control 
							type='number' 
							placeholder='Precio'
							name='price' 
							value={dataModal.price}
							onChange={handleChangeModal}
							required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
						<Form.Label>Imagen</Form.Label>
							<Form.Control 
							type='text' 
							placeholder='URL de la imagen'
							name='image' 
							value={dataModal.image}
							onChange={handleChangeModal}
							required
							/>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<button className="btn btn-secondary" type='reset' onClick={handleClose}>
				            Cancelar
				        </button>
				        <button className="btn btn-success" type='submit'>
				            Guardar
				        </button>
					</Modal.Footer>
				</Form>
			</Modal>
		</Container>
		)
}

export default ProductList;