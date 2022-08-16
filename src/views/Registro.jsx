import React from 'react'

function Registro() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-4 col-md-2 col-lg-2 mb-4">
            <button className="btn">
              <ion-icon name="arrow-back-circle"></ion-icon>
            </button>
          </div>
          <div className="col-sm-8 col-md-10 col-lg-10 mb-4">
            <h1 className="text-center">Pre - Registro</h1>
          </div>
        </div>
        <form className="form-control">
          <div className="row">
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="C.I."
                required
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
              <button className="btn btn-success">
                Buscar <ion-icon name="search"></ion-icon>
              </button>
            </div>
            <div className="form-floating col-sm-12 col-md-12 col-lg-12">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Nombre Completo"
                required
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
                type="text"
                className="form-control mb-2"
                placeholder="Persona Responsable"
                required
              />
              <label htmlFor="floatingInput">Edad</label>
            </div>
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Teléfono"
                required
              />
              <label htmlFor="floatingInput">Teléfono</label>
            </div>
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Correo"
                required
              />
              <label htmlFor="floatingInput">Correo</label>
            </div>
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Nombre Medico"
                required
              />
              <label htmlFor="floatingInput">Medico</label>
            </div>
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Seguro"
                required
              />
              <label htmlFor="floatingInput">Seguro</label>
            </div>
            <div className="form-floating col-sm-12 col-md-4 col-lg-4">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Cobertura"
                required
              />
              <label htmlFor="floatingInput">Cobertura</label>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-grid gap-2">
              <button className="btn btn-primary mb-2">
                <ion-icon name="save-outline"></ion-icon> Guardar
              </button>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-grid gap-2">
              <button className="btn btn-danger  mb-2">
                <ion-icon name="ban-outline"></ion-icon> Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registro