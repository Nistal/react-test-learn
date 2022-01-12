import React, {useState} from "react"; //Se importal useState de react
import Count from "./components/Count";

function App() {

  //Se inicializa la constante con el use state
  const [numero, setNumero] = useState(1) //Se pasa el nombre del estado: "Numero" y un odificador de ese numero: "setNumero"

  return (
    <div className="App">
      <h1>Esto es un H1 en react #{numero}</h1>
      <Count />
    </div>
  );
}

export default App;
