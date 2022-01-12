import React, {useState} from 'react';

const Count = () => {

    //Se inicializa la constante con el use state
    const [numero, setNumero] = useState(1); //Se pasa el nombre del estado: "Numero" y un odificador de ese numero: "setNumero"

    return ( 
        <h2>First Component In React {numero}</h2>
     );
}
 
export default Count;