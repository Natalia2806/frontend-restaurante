import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nuevo producto</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Imagen</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Nombre</label>
          <input type="text" placeholder="Nombre Del Producto" />
        </div>
        <div className="addProductItem">
          <label>Inventario</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Activo</label>
          <select name="active" id="active">
            <option value="yes">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Crear</button>
      </form>
    </div>
  );
}
