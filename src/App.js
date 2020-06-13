import React, { Fragment } from 'react';
import Formulario from './components/Formulario';


function App() {

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="col">
            <Formulario />
          </div>
          <div className="col">2</div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
