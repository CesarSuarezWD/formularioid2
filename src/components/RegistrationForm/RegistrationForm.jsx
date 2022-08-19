import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { ReactPhone } from '../ReactPhone/ReactPhone';
import 'react-phone-input-2/lib/style.css'
import './RegistrationForm.css';

export const RegistrationForm = () => {

  return (
    // <div>
      <Container className='container'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">

            <h1>Registro</h1>

            <FloatingLabel
              controlId="floatingInputFirstName"
              label="Nombres"
              className="mt-3 mb-3"
            >
              <Form.Control type="text" placeholder="nombres" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInputLastName" label="Apellidos" className='mb-3'>
              <Form.Control type="text" placeholder="Apellidos" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInputID" label="Documento de identidad" className='mb-3'>
              <Form.Control type="text" placeholder="Documento" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInputAddress" label="Fecha de expedición" className='mb-3'>
              <Form.Control type="date" placeholder="Fechas de expedición" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInputAddress" label="Género" className='mb-3'>
              <Form.Select aria-label="gender" className='mb-3'>
                <option>Selecciona...</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
                <option value="Otro">Otro</option>
              </Form.Select>
            </FloatingLabel>


            <Form.Text className="text-muted">
              Teléfono
            </Form.Text>
            <ReactPhone />

            <FloatingLabel controlId="floatingInputAddress" label="Dirección de correspondencia" className='mb-3'>
              <Form.Control type="text" placeholder="Dirección" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputEmail"
              label="Correo"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
              <Form.Text className="text-muted">
                No compartiremos tu dirección de email con nadie.
              </Form.Text>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputEmailConf"
              label="Confirmar correo"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>


            <FloatingLabel controlId="floatingPassword" label="Contraseña" className='mb-3'>
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>  

            <FloatingLabel controlId="floatingPasswordConf" label="Confirmar contraseña" className='mb-5'>
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>    

          </Form.Group>

          <Form.Group className='button'>
            <Button variant="primary" type="submit" className="mb-5" >
              Continuar
            </Button>
          </Form.Group>

          {/* <p className='paragraph'>Si ya estás registrado <b><a href="/#" className='pLogin'>inicia sesión</a></b></p> */}

          <Form.Label className='inicioSesion'>Si ya estás registrado <b><a href="/#" className='pLogin'>inicia sesión</a></b></Form.Label>

        </Form>
      </Container>
    // </div>
  )
}
