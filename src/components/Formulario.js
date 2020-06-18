import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

	// Crear State de Citas
	const [cita, actualizarCita] = useState({
		mascota: '',
		propietario: '',
		fecha: '',
		hora: '',
		sintomas: ''
	});

	const [error, actualizarError] = useState(false);

	// Función que se ejecuta cada que el usuario escribe en un input
	const actulizarState = (e) => {
		actualizarCita({
			...cita,
			[e.target.name]: e.target.value
		})
	}

	// Extraer los valores
	const { mascota, propietario, fecha, hora, sintomas } = cita;

	// Cuando el usuario presiona agregar cita
	const submitCita = (e) => {
		e.preventDefault();

		// Validar
		if( mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){
			actualizarError(true);
			// siempre que se este validando tiene que haber un return
			return;
		}

		// Eliminar el mensaje previo
		actualizarError(false);

		// Asignar un ID
		cita.id = uuidv4();

		// Crear la cita
		crearCita(cita);

		// Reiniciar el Form
		actualizarCita({
			mascota: '',
			propietario: '',
			fecha: '',
			hora: '',
			sintomas: ''
		})

	}

	return (
		<Fragment>
			<h2>Crear cita</h2>
			
			{ error ? <p className="alerta-error">Todos los campos son obligatorios</p>
			: null }

			<form
				onSubmit={submitCita}
			>
			<label>Nombre Mascota</label>
			<input 
				type="text"
				name="mascota"
				className="form-control"
				placeholder="Nombre mascota"
				onChange={actulizarState}
				value={mascota}
			/>

			<label>Nombre Dueño</label>
			<input 
				type="text"
				name="propietario"
				className="form-control"
				placeholder="Nombre dueño de la mascota"
				onChange={actulizarState}
				value={propietario}
			/>

			<label>Fecha</label>
			<input 
				type="date"
				name="fecha"
				className="form-control"
				onChange={actulizarState}
				value={fecha}
			/>

			<label>Hora</label>
			<input 
				type="time"
				name="hora"
				className="form-control"
				onChange={actulizarState}
				value={hora}
			/>

			<label>Sintomas</label>
			<textarea
				name="sintomas"
				className="form-control"
				onChange={actulizarState}
				value={sintomas}
			></textarea>

			<button
				type="submit"
				className="btn btn-primary mt-3 btn-block"
			>Agregar cita</button>
	
			</form>

		</Fragment>
	)
}

// documentas los componentes con PropTypes
Formulario.propTypes = {
	crearCita: PropTypes.func.isRequired
}

export default Formulario