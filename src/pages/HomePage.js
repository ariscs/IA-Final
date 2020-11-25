import React from 'react';

import data from '../data/index';

const HomePage = () => {
  const sinMap = data.sintomas.map((item) => <th title={item.name}>{item.id}</th>);
  const enfValMap = data.enfermedades.map((item) => {
    const valMap = item.val.map((val, i) => (
      <td key="i">{val}</td>
    ));
    return (
      <tr>
        <td>{item.name}</td>
        {valMap}
      </tr>
    );
  });
  const sinListMap = data.sintomas.map((item) => <li>{item.name}</li>);

  return (
    <>
      <div className="container mt-5">
        <h1 className="title">Enfermedades</h1>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th rowSpan="2">Enfermedad</th>
              <th colSpan="15">Síntomas</th>
            </tr>
            <tr>
              {sinMap}
            </tr>
          </thead>
          <tbody>
            {enfValMap}
          </tbody>
        </table>
      </div>
      
      <div className="container mt-5">
        <h1 className="title">Lista de síntomas</h1>
        <div className="content">
          <ol type="1">
            {sinListMap}
          </ol>
        </div>
      </div>
    </>
  );
}

export default HomePage;
