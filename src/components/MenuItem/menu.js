import "./menu.css";

export const MenuItem = ({ data: { name, description, price, image } }) => {
  return (
    <div className="col" style={{ marginTop: "32px" }}>
      <div id="nameProduct">
        <h3>{name}</h3>
      </div>

      <div>
        <img src={`/images/${image}`} alt="Hamburguesa especial" id="image" />
      </div>

      <div id="priceProduct">
        <h2>
          <i className="fas fa-dollar-sign"></i>
          <span className="precio"> {price} </span>
        </h2>
      </div>

      <div className="description">
        <h6>{description}</h6>
        <br />
        <button
          type="button"
          className="btn btn-warning btn-block"
          data-bs-toggle="modal"
          data-bs-target="#burger1"
        >
          <i className="fas fa-plus-circle"></i> Más información
        </button>
      </div>

      <div className="addProduct">
        <button className="agregarCarrito">
          <i className="fas fa-shopping-cart"></i> Agregar carrito
        </button>
      </div>
    </div>
  );
};
