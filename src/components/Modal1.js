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
              <h1 className="title is-1">{por}%</h1>{/* Porcentaje de coincidencia */}
            </div>
            <div className="content has-text-centered">
              <h1 className="subtitle is-2">{data.enfermedades[ind].name}</h1>{/* Enfermedad mas probable */}
            </div>
            {por < 75 &&
              <div className="content has-text-centered is-small">
                <p>**Los resultados por debajo del 75% no son determinantes para diagnosticar correctamente una enfermedad, sin embargo, te mostramos el resultado más alto de acuerdo a tus síntomas.</p>{/* Enfermedad mas probable */}
              </div>
            }
            <div className="content">
              <p className="title is-4">Tratamiento:</p>{/* Indicaciones y tratamiento */}
            </div>
            <div className="content">
              <p className="subtitle is-6">{data.enfermedades[ind].tratamiento}</p>{/* Indicaciones y tratamiento */}
            </div>
            <div className="buttons">
              <a href={data.enfermedades[ind].url} target="_blank" rel="noreferrer" className="button is-info is-light">Más información</a>
            </div>
            <div className="content is-small">
              <p>El equipo de DiagnosticApp te recuerda que este es un simple ejercicio que puede ayudarte a diagnosticar solamente <strong>enfermedades degenerativas</strong> a partir de una serie de síntomas, en caso de obtener un porcentaje alto de acuerdo con tus síntomas te recomendamos asistir con un especialista o profesional de la salud para realizar otras pruebas y así obtener un resultado más claro.</p>
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
