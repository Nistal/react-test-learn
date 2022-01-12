import React, {useState, Fragment} from 'react';

const Contador = () => {

    //Se inicializa la constante con el use state
    const [numero, setNumero] = useState(0); //Se pasa el nombre del estado: "Numero" y un odificador de ese numero: "setNumero"

    return ( 
        <Fragment>
            <h2>First Component In React {numero}</h2>
            <button>Aumentar</button>
        </Fragment>
     );
}
 
export default Contador;