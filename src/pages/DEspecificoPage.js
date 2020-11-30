import React, {
  useEffect,
    useState
  } from "react";
  import Slider from 'react-input-slider';
  
  import Hot from '../images/hot.png';
  import Cold from '../images/cold.png';
  import Plus from '../images/plus.png';
  import Minus from '../images/minus.png';

  import data from '../data/index';
  
  const DEspecificoPage = () => {
    const [enf, setEnf] = useState([]); //Se guarda su posicion en el arreglo original en data.enfermedades.
    const [sin1, setSin1] = useState({ x: 0 });
    const [sin2, setSin2] = useState({ x: 0 });
    const [sin3, setSin3] = useState({ x: 0 });
    const [temp, setTemp] = useState({ x: 35 });
    const [sin4, setSin4] = useState({ x: 35 });
    const [sin5, setSin5] = useState({ x: 0 });
    const [sin6, setSin6] = useState({ x: 0 });
    const [sin7, setSin7] = useState({ x: 0 });
    const [sin8, setSin8] = useState({ x: 0 });
    const [sin9, setSin9] = useState({ x: 0 });
    const [sin10, setSin10] = useState({ x: 0 });
    const [sin11, setSin11] = useState({ x: 0 });
    const [sin12, setSin12] = useState({ x: 0 });
    const [sin13, setSin13] = useState({ x: 0 });
    const [sin14, setSin14] = useState({ x: 0 });
    const [sin15, setSin15] = useState({ x: 0 });

    const [datos, setDatos] = useState([]);

    const CheckboxHandle = (event) => {
      if (event.target.checked === true) {
        if(enf.length <= 4) {
          setEnf([
            ...enf,
            event.target.value
          ]);
        } else {
          event.target.checked = false;
        }
      } else {
        let array = enf;
        let index = array.indexOf(event.target.value)
        if (index !== -1) {
          array.splice(index, 1);
          setEnf([...array]);
        }
      }
    };

    const handleButton = () => {
      setDatos([
        sin1.x,
        sin2.x,
        sin3.x,
        Number(sin4.x),
        sin5.x,
        sin6.x,
        sin7.x,
        sin8.x,
        sin9.x,
        sin10.x,
        sin11.x,
        sin12.x,
        sin13.x,
        sin14.x,
        sin15.x
      ]);
    };

    useEffect(() => {
      console.log(enf);
      let totalesE = []; //suma de los valores de cada enfermedad, el arreglo debe tener maximo 12 elementos.
      let totalesM = []; //suma de los minimos de cada enfermedad comparada con los datos del usuario, el arreglo debe tener maximo 12 elementos.
      if(enf.length > 0) {
        enf.forEach((element) => {
          let total = 0;
          let sumaMinimos = 0;
          data.enfermedades[Number(element)].val.forEach((valor, ind) => {
            total += valor;
            if(valor>datos[ind]){
              sumaMinimos+=datos[ind];
            }else{
              sumaMinimos+=valor;
            }
          });
          totalesM.push(sumaMinimos);
          totalesE.push(total);
        });
        console.log(totalesM);
        console.log(totalesE);
      }else{
        console.log("Es necesario seleccionar endermedades para comparar.");
      }
    },[datos]);

    const enfMap = data.enfermedades.map((item) => {
      return(
        <div>
          <label>
            <input type="checkbox" value={item.id} onChange={CheckboxHandle}/> {item.name}
          </label>
        </div>
      );
    });
  
    return (
      <>
        <div className="container mt-5">
          <h1 className="title">Cuestionario - Diagnóstico general</h1>
        </div>
        <div className="container mt-5">
          <h2 className="title is-5">Selecciona las enfermedades que quieres comparar</h2>
        </div>
        <div className="container mt-5">
          <div className="columns">
            <div className="column">
              {enfMap}
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label" htmlFor="sin1">1. Sexo asignado al nacer:</label>
                <div className="control">
                  <div className="select">
                    <select id="sin1" onChange={(event) => {setSin1({x: parseFloat(event.target.value).toFixed(2)})}}>
                      <option value="0.00">Masculino</option>
                      <option value="0.50">Femenino</option>
                      <option value="0.25">Otro</option>
                    </select>
                  </div>
                </div>
              </div>
  
              <div className="field">
                <label className="label" htmlFor="sin2">2. Edad:</label>
                <div className="control">
                  <input id="sin2" className="input" type="number" placeholder="Edad" onChange={(event) => {
                    if(event.target.value > 50){
                      setSin2({x: parseFloat(0.90).toFixed(2)});
                    } else if(event.target.value > 30) {
                      setSin2({x: parseFloat(0.50).toFixed(2)});
                    } else {
                      setSin2({x: parseFloat(0.00).toFixed(2)});
                    }
                  }}/>
                </div>
              </div>
  
              <div className="field">
                <label className="label" htmlFor="sin3">3. Antecedentes familiares:</label>
                <div className="control">
                  <div className="select">
                    <select id="sin3" onChange={(event) => {setSin3({x: parseFloat(event.target.value).toFixed(2)})}}>
                      <option value="0.00">Ninguno</option>
                      <option value="0.25">1</option>
                      <option value="0.50">2</option>
                      <option value="0.75">3</option>
                      <option value="1.00">Más de 3</option>
                    </select>
                  </div>
                </div>
              </div>
  
              <div className="field">
                <label className="label" htmlFor="sin4">4. Alta temperatura/Fiebre:</label>
                <h2 className="subtitle">{'temp: ' + temp.x}°C</h2>
                <div className="control">
                  <div className="columns">
                    <div className="column is-narrow">
                      <img src={Cold} alt="cold" className="image is-32x32"/>
                    </div>
                    <div className="column is-narrow">
                      <Slider
                        id="sin4"
                        axis="x"
                        xstep={0.1}
                        xmin={35}
                        xmax={40}
                        x={temp.x}
                        onChange={({ x }) => {
                          setTemp({ x: parseFloat(x.toFixed(2)) });
                          let t = parseFloat(x.toFixed(2));
                          if (t > 36.7){
                            setSin4({ x: parseFloat((3.30-(40-t))*0.303030).toFixed(2)});
                          } else {
                            setSin4({ x: 0.00 });
                          }
                        }}
                      />
                    </div>
                    <div className="column is-narrow">
                      <img src={Hot} alt="hot" className="image is-32x32"/>
                    </div>
                  </div>
                </div>
                <div className="content is-small mt-2">
                  <p>*La temperatura media normal en los seres humanos se sitúa entre los 36,4 °C y los 36,7 °C.</p>
                </div>
              </div>
  
              <div className="field">
                <label className="label" htmlFor="sin5">5. Neumonía:</label>
                <div className="control">
                  <div className="columns">
                    <div className="column is-narrow">
                      <img src={Minus} alt="minus" className="image is-24x24"/>
                    </div>
                    <div className="column is-narrow">
                      <Slider
                        id="sin5"
                        axis="x"
                        xstep={0.01}
                        xmin={0}
                        xmax={1}
                        x={sin5.x}
                        onChange={({ x }) => setSin5({ x: parseFloat(x.toFixed(2)) })}
                      />
                    </div>
                    <div className="column is-narrow">
                      <img src={Plus} alt="plus" className="image is-24x24"/>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="field">
                <label className="label" htmlFor="sin6">6. Problemas generales de rendimiento: cansancio, y pérdida del apetito, pérdida de masa muscular, sordera:</label>
                <div className="control">
                  <div className="columns">
                    <div className="column is-narrow">
                      <img src={Minus} alt="minus" className="image is-24x24"/>
                    </div>
                    <div className="column is-narrow">
                      <Slider
                        id="sin6"
                        axis="x"
                        xstep={0.01}
                        xmin={0}
                        xmax={1}
                        x={sin6.x}
                        onChange={({ x }) => setSin6({ x: parseFloat(x.toFixed(2)) })}
                      />
                    </div>
                    <div className="column is-narrow">
                      <img src={Plus} alt="plus" className="image is-24x24"/>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="field">
                <label className="label" htmlFor="sin7">7. Dolor o problemas en las extremidades(articulaciones sensibles, infecciones músculos, esqueleto, extremidades: ojos, boca, cuello, nariz, sensibles o palpación, hinchazón (muñecas, rodillas, tobillos, codos, caderas, hombros y/o mandíbula):</label>
                <div className="control">
                  <div className="columns">
                    <div className="column is-narrow">
                      <img src={Minus} alt="minus" className="image is-24x24"/>
                    </div>
                    <div className="column is-narrow">
                      <Slider
                        id="sin7"
                        axis="x"
                        xstep={0.01}
                        xmin={0}
                        xmax={1}
                        x={sin7.x}
                        onChange={({ x }) => setSin7({ x: parseFloat(x.toFixed(2)) })}
                      />
                    </div>
                    <div className="column is-narrow">
                      <img src={Plus} alt="plus" className="image is-24x24"/>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="field">
                <label className="label" htmlFor="sin8">8. Afectación de órganos (piel, anemia, alteraciones hematológicas, pulmones, corazón, vasos sanguíneos, ojos, riñones, hígado, alteraciones neuronales, glándulas salivales, tejido nervioso, médula ósea):</label>
                <div className="control">
                  <div className="columns">
                    <div className="column is-narrow">
                      <img src={Minus} alt="minus" className="image is-24x24"/>
                    </div>
                    <div className="column is-narrow">
                      <Slider
                        id="sin8"
                        axis="x"
                        xstep={0.01}
                        xmin={0}
                        xmax={1}
                        x={sin8.x}
                        onChange={({ x }) => setSin8({ x: parseFloat(x.toFixed(2)) })}
                      />
                    </div>
                    <div className="column is-narrow">
                      <img src={Plus} alt="plus" className="image is-24x24"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/*Column*/}
  
            <div className="column">
              <div className="field">
                <label className="label" htmlFor="sin9">9. Deformidad o lesiones en la estructura ósea (columna vertebral, muñeca y caderas):</label>
                <div className="control">
                  <div className="columns">
                    <div className="column is-narrow">
                      <img src={Minus} alt="minus" className="image is-24x24"/>
                    </div>
                    <div className="column is-narrow">
                      <Slider
                        id="sin9"
                        axis="x"
                        xstep={0.01}
                        xmin={0}
                        xmax={1}
                        x={sin9.x}
                        onChange={({ x }) => setSin9({ x: parseFloat(x.toFixed(2)) })}
                      />
                    </div>
                    <div className="column is-narrow">
                      <img src={Plus} alt="plus" className="image is-24x24"/>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="field">
                <label className="label" htmlFor="sin10">10. Ataxia/Alteración en el sistema nervioso autónomo (crisis epilépticas, movimientos involuntarios, descoordinación del cuerpo, caminar torpe, sin agarre en manos):</label>
                <div className="control">
                  <div className="columns">
                    <div className="column is-narrow">
                      <img src={Minus} alt="minus" className="image is-24x24"/>
                    </div>
                    <div className="column is-narrow">
                      <Slider
                        id="sin10"
                        axis="x"
                        xstep={0.01}
                        xmin={0}
                        xmax={1}
                        x={sin10.x}
                        onChange={({ x }) => setSin10({ x: parseFloat(x.toFixed(2)) })}
                      />
                    </div>
                    <div className="column is-narrow">
                      <img src={Plus} alt="plus" className="image is-24x24"/>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="field">
                <label className="label" htmlFor="sin11">11. Problemas asociados a la vista (vista cansada, enfocar, puntos ciegos, sensibilidad a la luz, pérdida parcial o absoluta de la vista, sensibilidad al contraste, doble vista):</label>
                <div className="control">
                  <div className="columns">
                    <div className="column is-narrow">
                      <img src={Minus} alt="minus" className="image is-24x24"/>
                    </div>
                    <div className="column is-narrow">
                      <Slider
                        id="sin11"
                        axis="x"
                        xstep={0.01}
                        xmin={0}
                        xmax={1}
                        x={sin11.x}
                        onChange={({ x }) => setSin11({ x: parseFloat(x.toFixed(2)) })}
                      />
                    </div>
                    <div className="column is-narrow">
                      <img src={Plus} alt="plus" className="image is-24x24"/>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="field">
                <label className="label" htmlFor="sin12">12. Problemas para hablar y tragar:</label>
                <div className="control">
                  <div className="columns">
                    <div className="column is-narrow">
                      <img src={Minus} alt="minus" className="image is-24x24"/>
                    </div>
                    <div className="column is-narrow">
                      <Slider
                        id="sin12"
                        axis="x"
                        xstep={0.01}
                        xmin={0}
                        xmax={1}
                        x={sin12.x}
                        onChange={({ x }) => setSin12({ x: parseFloat(x.toFixed(2)) })}
                      />
                    </div>
                    <div className="column is-narrow">
                      <img src={Plus} alt="plus" className="image is-24x24"/>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="field">
                <label className="label" htmlFor="sin13">13. Problemas de concentración, orientación, destreza/razonamiento, alteraciones del sueño:</label>
                <div className="control">
                  <div className="columns">
                    <div className="column is-narrow">
                      <img src={Minus} alt="minus" className="image is-24x24"/>
                    </div>
                    <div className="column is-narrow">
                      <Slider
                        id="sin13"
                        axis="x"
                        xstep={0.01}
                        xmin={0}
                        xmax={1}
                        x={sin13.x}
                        onChange={({ x }) => setSin13({ x: parseFloat(x.toFixed(2)) })}
                      />
                    </div>
                    <div className="column is-narrow">
                      <img src={Plus} alt="plus" className="image is-24x24"/>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="field">
                <label className="label" htmlFor="sin14">14. Cambios en la estabilidad emocional, conducta impulsiva, depresión, ansiedad, estrés:</label>
                <div className="control">
                  <div className="columns">
                    <div className="column is-narrow">
                      <img src={Minus} alt="minus" className="image is-24x24"/>
                    </div>
                    <div className="column is-narrow">
                      <Slider
                        id="sin14"
                        axis="x"
                        xstep={0.01}
                        xmin={0}
                        xmax={1}
                        x={sin14.x}
                        onChange={({ x }) => setSin14({ x: parseFloat(x.toFixed(2)) })}
                      />
                    </div>
                    <div className="column is-narrow">
                      <img src={Plus} alt="plus" className="image is-24x24"/>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="field">
                <label className="label" htmlFor="sin15">15. Demencia/Pérdida de memoria:</label>
                <div className="control">
                  <div className="columns">
                    <div className="column is-narrow">
                      <img src={Minus} alt="minus" className="image is-24x24"/>
                    </div>
                    <div className="column is-narrow">
                      <Slider
                        id="sin15"
                        axis="x"
                        xstep={0.01}
                        xmin={0}
                        xmax={1}
                        x={sin15.x}
                        onChange={({ x }) => setSin15({ x: parseFloat(x.toFixed(2)) })}
                      />
                    </div>
                    <div className="column is-narrow">
                      <img src={Plus} alt="plus" className="image is-24x24"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="field mt-5">
                <button className="button is-large is-primary" onClick={handleButton}>Continuar</button>
              </div>
            </div>{/*Column*/}
          </div>{/*Columns*/}
        </div>
      </>
    );
  }
  
  export default DEspecificoPage;
  