import React, { useEffect, useState } from 'react'
//importamos los objetos json
import {Pacientejson} from '../components/objects/Paciente'
import {Medicojson} from '../components/objects/Medico'
import {Segurojson} from '../components/objects/Seguro'
import {Ingresojson} from '../components/objects/Ingreso'
//----//----//----//
import Loading from '../components/loading/Loading'

function Registro() {
  //Estados de Pruebas
  const [Paciente, setPaciente] = useState(Pacientejson);
  const [Medico, setMedico] = useState(Medicojson);
  const [Seguro, setSeguro] = useState(Segurojson);
  const [Ingreso, setIngreso] = useState(Ingresojson);

  //Estado para Loading spinner
  const [spinner, setSpinner] = useState(false);
  const CambiarEstado = () => {
    setSpinner (true)
    setTimeout (()=>{
      setSpinner(false);
    }, 5000)
  }
  //----//----//----//

  const handleChangePaciente = (e) => {
    const { name, value } = e.target;
    setPaciente({...Paciente, [name]: value });
  };

  const handleChangeMedico = (e) => {
    const { name, value } = e.target;
    setMedico({...Medico, [name]: value });
  };
  const handleChangeSeguro = (e) => {
    const { name, value } = e.target;
    setSeguro({...Seguro, [name]: value });
  };

  const guardar = () => {
    const newIngreso = {
      Paciente,
      Medico,
      Seguro,
    };
    setIngreso (newIngreso);
  };
  useEffect (()=>{
    if (Ingreso.Paciente.ID !== "") {
      setMsg(
        Ingreso.Paciente.ID != ""
          ? {
              message: "Se ha registrado al paciente correctamente",
              color: "success",
              visible: "si",
            }
          : {
              message: "No se ha podido registrar al paciente",
              color: "danger",
              visible: "si",
            }
      );
      setSpinner(true);
      setTimeout(() => {
        setSpinner(false);
        setTimeout(() => {
          setMsg({
            message: "",
            color: "",
            visible: "no",
          });
          setIngreso(Ingresojson);
          setMedico(Medicojson);
          setPaciente(Pacientejson);
          setSeguro(Segurojson);
        }, 5000);
      }, 5000);

    }else{
      console.log('no ray nada que mostrar')
    }
  }, [Ingreso])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
  };
    
//Pruebas para mostrar mensaje cuando se realizo el registro de Paciente
    const [msg, setMsg] = useState({
      message: "",
      color: "",
      visible: "no",
    });
  
    const Mensaje = () => {
      if (msg.visible === 'si') {
        return(
          <div className={"alert alert-" + msg.color} role="alert">
              {msg.message}
            </div>
        )
      }else{
        return ('');
      }
    }
  
    const Mostrar = () => {
      setMsg({
        message: "Se ha registrado al paciente correctamente",
        color: "success",
        visible: "si",
      });
      setTimeout(() => {
        setMsg({
          message: "",
          color: "",
          visible: "no",
        })
      }, 5000);
    };
    //----//----//----//
    
    return (
      <>
      <div className='container pt-2'>
        <Mensaje/>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-4 col-md-2 col-lg-2 mb-4">
            <button className="btn" onClick={Mostrar}>
              <ion-icon name="arrow-back-circle"></ion-icon>
            </button>
          </div>
          <div className="col-sm-8 col-md-10 col-lg-10 mb-4">
            <h1 className="text-center">Pre - Registro</h1>
          </div>
        </div>
        <form className="form-control pt-4" onSubmit={handleSubmit} >
          <div className="row">
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
            <input
                  required
                  onChange={handleChangePaciente}
                  value={Paciente.ID}
                  className="form-control mb-2"
                  placeholder="CI"
                  name="ID"
                  />
              <label htmlFor="floatingInput">CI</label>
            </div>
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
              <input
                type="date"
                className="col-sm-12 col-md-4 col-lg-4 form-control mb-2"
                required
                />
              <label htmlFor="floatingInput">Fecha</label>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-2 d-grid gap-2">
              <button className="btn btn-success" >
                Buscar <ion-icon name="search"></ion-icon>
              </button>
            </div>
            <div className="form-floating col-sm-12 col-md-12 col-lg-12">
            <input
                  required
                  onChange={handleChangePaciente}
                  value={Paciente.nombre}
                  className="form-control mb-2"
                  placeholder="Nombre Completo"
                  name="nombre"
                  />
              <label htmlFor="floatingInput">Nombre Completo</label>
            </div>
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
              <select className="form-select mb-2">
                <option>Sexo:</option>
                <option>Masculino.</option>
                <option>Femenino.</option>
              </select>
              <label htmlFor="floatingInput">Sexo</label>
            </div>
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
            <input
                  type="number"
                  required
                  onChange={handleChangePaciente}
                  value={Paciente.edad}
                  className="form-control mb-2"
                  placeholder="Edad"
                  name="edad"
                  />
              <label htmlFor="floatingInput">Edad</label>
            </div>
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
            <input
                  required
                  onChange={handleChangePaciente}
                  value={Paciente.telefono}
                  className="form-control mb-2"
                  placeholder="Telefono"
                  name="telefono"
                  />
              <label htmlFor="floatingInput">Tel??fono</label>
            </div>
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
            <input
                  required
                  onChange={handleChangePaciente}
                  value={Paciente.correo}
                  className="form-control mb-2"
                  placeholder="Correo"
                  name="correo"
                  />
              <label htmlFor="floatingInput">Correo</label>
            </div>
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
              <input
                required
                onChange={handleChangeMedico}
                value={Medico.nombre}
                className="form-control mb-2"
                placeholder="Nombre Medico"
                name="nombre"
                />
              <label htmlFor="floatingInput">Medico</label>
            </div>
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
              <input
                required
                onChange={handleChangeSeguro}
                value={Seguro.nombre}
                className="form-control mb-2"
                placeholder="Nombre Seguro"
                name="nombre"
                />
              <label htmlFor="floatingInput">Seguro</label>
            </div>
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
              <input
                type="number"
                required
                onChange={handleChangeSeguro}
                value={Seguro.cobertura}
                className="form-control mb-2"
                placeholder="cobertura"
                name="cobertura"
                />
              <label htmlFor="floatingInput">Cobertura</label>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-grid gap-2">
              <button className="btn btn-primary mb-2" onClick={guardar}>
                <ion-icon name="save-outline"></ion-icon> Guardar
              </button>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-grid gap-2">
              <button className="btn btn-danger  mb-2" onClick={CambiarEstado}>
                <ion-icon name="ban-outline"></ion-icon> Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
      {spinner&&<Loading/>}
    </>
  );
}

export default Registro


// const guardar = async () => {
//   const newIngreso = {
//     Paciente,
//     Medico,
//     Seguro,
//   };
//   await Promise.all(setIngreso ( newIngreso ),setLoading(true));
//   setMsg(
//     Ingreso.Paciente.ID != ""
//       ? {
//           message: "Se ha registrado al paciente correctamente",
//           color: "success",
//           visible: "si",
//         }
//       : {
//           message: "No se ha podido registrar al paciente",
//           color: "danger",
//           visible: "si",
//         }
//   );
//   setTimeout(() => {
//     setMsg({
//       message: "",
//       color: "",
//       visible: "no",
//     });
//   }, 5000);

//   setLoading(false);
// };