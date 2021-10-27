import React from "react";
import "./formStyle.css";

const formulario = () => {
  return (
    <div className="container container-form">
      <div className="content">
        <h1 className="logo">
          Reservas <span>SalSalsa</span>
        </h1>

        <div className="contact-wrapper animated bounceInUp">
          <div className="contact-form">
            <form action="" id="contact_form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label>Nombre completo</label>
                  <input
                    id="nombre"
                    type="text"
                    name="fullname"
                    pattern="[a-zA-Z- ]{10,30}"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Correo electronico</label>
                  <input
                    id="correo"
                    type="email"
                    name="email"
                    minlength="8"
                    maxlength="30"
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group col-md-5">
                  <label>Telefono</label>
                  <input id="telefono" type="text" name="telefono" />
                </div>
                <div className="form-group col-md-4">
                  <label>Servicios</label>
                  <select id="servicios" className="form-select mb-3">
                    <option className="mb-3 bg-dark"></option>
                    <option className="mb-3 bg-dark" value="1">
                      {" "}
                      Celebración de cumpleaños
                    </option>
                    <option className="mb-3 bg-dark" value="2">
                      Aniversarios
                    </option>
                    <option className="mb-3 bg-dark" value="3">
                      Fiestas infantiles
                    </option>
                    <option className="mb-3 bg-dark" value="4">
                      Declaraciones o propuestas
                    </option>
                    <option className="mb-3 bg-dark" value="5">
                      Despedidas
                    </option>
                    <option className="mb-3 bg-dark" value="6">
                      Cena con amigos
                    </option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <p>
                    <label>N°Personas</label>
                    <input
                      id="cantPersonas"
                      type="number"
                      name="cantPersonas"
                    />
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-md-6">
                  <p>
                    <label>Fecha</label>
                    <input id="fecha" type="date" name="fecha" />
                  </p>
                </div>
                <div className="form-group col-md-6">
                  <p>
                    <label>Hora</label>
                    <input id="hora" type="time" name="affair" />
                  </p>
                </div>
              </div>

              <p className="block">
                <label>Indicaciones especiales</label>
                <input
                  id="indicaciones"
                  type="text"
                  name="affair"
                  minlength="8"
                  maxlength="200"
                />
              </p>
              <p className="block">
                <label className="box">Acepta el trato de datos</label>
                <input type="checkbox" name="affair" />
              </p>

              <p className="block">
                <button type="submit" id="button">
                  Enviar
                </button>
              </p>
            </form>
          </div>
          <div className="contact-info">
            <h4>Mas informacion</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>Sal&Salsa
              </li>
              <li>
                <i className="fas fa-phone"></i>3103551873
              </li>
              <li>
                <i className="fas fa-envelope-open-text"></i>{" "}
                contacto@sal&salsa.com
              </li>
            </ul>
            <p>
              .......................................................................................
            </p>
            <p>........................................</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default formulario;
