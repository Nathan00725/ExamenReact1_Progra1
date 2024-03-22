import React, { useState } from "react";
import { Button, Form, Card, Alert} from "react-bootstrap";
import './Fondo.css'
 
const NotaFormulario = () => {
    const [nota1, setnota1] = useState('');
    const [nota2, setnota2] = useState('');
    const [nota3, setnota3] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [alerta, setalerta] = useState(false);

    const Nota = () => {
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
        setalerta('');
    };

    return (
       
        <div className="body-background">
            <Card className="card-custom">
                <Form>
                    {alerta && (
                        <Form.Text className="text-muted" style={{ marginBottom: '15px', fontSize:25  }}>
                           Porfavor de llenar todos los campos en blanco.
                        </Form.Text>
                    )}

                    <Form.Group className="input-spacing">
                        <Form.Label>Nota del primer parcial a un maximo de (30%)</Form.Label>
                        <Form.Control type="number" value={nota1} onChange={(v) => setnota1(v.target.value)} max="30"  min="0" />
                    </Form.Group>

                    <Form.Group className="input-spacing">
                        <Form.Label>Nota del segundo parcial a un maximo de (30%)</Form.Label>
                        <Form.Control type="number" value={nota2} onChange={(v) => setnota2(v.target.value)} max="30" min="0"/>
                    </Form.Group>

                    <Form.Group className="input-spacing">
                        <Form.Label>Nota del tercer parcial a un maximo de (40%)</Form.Label>
                        <Form.Control type="number" value={nota3} onChange={(v) => setnota3(v.target.value)} max="40" min="0" />
                    </Form.Group>

                    <Button variant="primary" onClick={Nota} className="btn-custom">
                        Sacar Notas
                    </Button>
                    <Button variant="light" onClick={limpiarCampos} className="btn-custom">
                        Limpiar
                    </Button>

                    {mensaje && <div className="mt-3"><strong>{mensaje}</strong></div>}
                </Form>
        
        </Card>
        </div>
    );
}

export default NotaFormulario;