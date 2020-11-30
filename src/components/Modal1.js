import React from "react";
import PropTypes from 'prop-types';

import data from '../data/index';

const Modal1 = ({open, ind, close, por}) => {
  if(!open){
    return null;
  }

  return (
    <div className={`modal is-active`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Resultados</p>
          <button className="delete" aria-label="close" onClick={close}></button>
        </header>
        <section className="modal-card-body">
          <div className="container">
            <div className="notification is-primary has-text-centered">
              <h1 className="title is-1">{data.enfermedades[ind].name}</h1>{/* Porcentaje de coincidencia */}
            </div>
            <div className="content has-text-centered">
              <h1 className="subtitle is-2">HOLA</h1>{/* Enfermedad mas probable */}
            </div>
            <div className="content">
              <p className="subtitle">HOLA</p>{/* Indicaciones y tratamiento */}
            </div>
            <div className="content">
              <p className="subtitle">HOLA</p>{/* Otras posibles */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

Modal1.propTypes = {
  close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Modal1;
