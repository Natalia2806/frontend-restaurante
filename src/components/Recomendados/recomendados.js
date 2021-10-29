import "./recomendados.css";

export const Recomendados = (props) => {
  return (
    <>
      <div className="row">
        <div className="col recomendados_col">
          <img
            src={props.img}
            alt=""
            style={{ width: "180px", height: "190px" }}
            className="img-fluid"
          />
          <h4>{props.titulo}</h4>
          <button className="btn bg-light">
            <a className="especiales" href="menu.html" aria-current="page">
              Ver detalles
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
