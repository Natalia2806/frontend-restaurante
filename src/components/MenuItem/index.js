import "./styles.css";

export const MenuItem = ({ data: { name, description, price, image } }) => {
  return (
    <div class="col" style={{ marginTop: "32px" }}>
      <div id="nameProduct">
        <h3>{name}</h3>
      </div>

      <div>
        <img src={`/images/${image}`} alt="Hamburguesa especial" id="image" />
      </div>

      <div id="priceProduct">
        <h2>
          <i class="fas fa-dollar-sign"></i>
          <span class="precio"> {price} </span>
        </h2>
      </div>

      <div class="description">
        <h6>{description}</h6>
        <br />
        <button
          type="button"
          class="btn btn-warning btn-block botonMenu"
          data-bs-toggle="modal"
          data-bs-target="#burger1"
        >
          <i class="fas fa-plus-circle"></i> Más información
        </button>
      </div>

      <div class="addProduct">
        <button class="agregarCarrito">
          <i class="fas fa-shopping-cart"></i> Agregar carrito
        </button>
      </div>
    </div>
  );
};
