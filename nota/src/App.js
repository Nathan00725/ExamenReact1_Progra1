import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

const NotaFormulario = () => {
    const [nota1, setnota1] = useState('');
    const [nota2, setnota2] = useState('');
    const [nota3, setnota3] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [alerta, setalerta] = useState(false);

    const calcularNota = () => {
        // Validaciones de los campos
        if(nota1 === '' || nota2 === '' || nota3 === '') {
            setalerta(true);
            return;
        }

        const notaFinal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
        
        if(notaFinal < 0){
          setMensaje('No se permiten numero negativos a 0')
        }else if(notaFinal < 60 ) {
            setMensaje('Reprobado');
        } else if(notaFinal < 80) {
            setMensaje('Bueno');
        } else if(notaFinal < 90) {
            setMensaje('Muy bueno');
        } else if(notaFinal <= 100) {
            setMensaje('Sobresaliente');
        }else {
             setMensaje('No es posible que sea mayor a 100')
        }
    };

    const limpiarCampos = () => {
        setnota1('');
        setnota2('');
        setnota3('');
        setMensaje('');
    };

    return (
        <Form>
            { alerta &&
                <Alert variant="danger" onClose={() => setalerta(false)} dismissible>
                    Porfavor llenar todos los campos que les falten Informacion
                </Alert>
            }

            <Form.Group>
                <Form.Label>Nota del primer parcial con un maximo de (30%)</Form.Label>
                <Form.Control
                    type="number"
                    value={nota1}
                    onChange={(n) => setnota1(n.target.value)}
                    max="30"
                    min="0"
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Nota del segundo parcial con un maximo de (30%)</Form.Label>
                <Form.Control
                    type="number"
                    value={nota2}
                    onChange={(n) => setnota2(n.target.value)}
                    max="30"
                    min="0"
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Nota del tercer parcial con un maximo de (40%)</Form.Label>
                <Form.Control
                    type="number"
                    value={nota3}
                    onChange={(n) => setnota3(n.target.value)}
                    max="40"
                    min="0"
                />
            </Form.Group>

            <Button variant="warning" onClick={calcularNota}>
                Calcular
            </Button>
            <Button variant="secondary" onClick={limpiarCampos} className="ml-2">
                Limpiar
            </Button>

            { mensaje && <div className="mt-3"><strong>{mensaje}</strong></div> }
        </Form>
    );
}

export default NotaFormulario;