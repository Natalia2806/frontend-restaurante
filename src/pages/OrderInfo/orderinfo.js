import { useContext } from "react";
import { Footer } from "../../components/Footer/footer";
import { AppContext } from "../../context/AppContext";
import "./orderinfo.css";

export const OrderInfo = () => {
  const { shoppingCartItems, calculateTotal } = useContext(AppContext);

  return (
    <>
      <div className="order-info__main fondo-oscuro">
        <div className="order-info__container">
          <form className="order-info__form">
            <div className="order-info__form-group">
              <div className="order-info__form-pair">
                <label htmlFor="">Nombre</label>
                <input type="text" name="" id="" />
              </div>
              <div className="order-info__form-pair">
                <label htmlFor="">Correo</label>
                <input type="text" name="" id="" />
              </div>
            </div>
            <div className="order-info__form-group">
              <div className="order-info__form-pair">
                <label htmlFor="">Direccion</label>
                <input type="text" name="" id="" />
              </div>
              <div className="order-info__form-pair">
                <label htmlFor="">Telefono</label>
                <input type="text" name="" id="" />
              </div>
            </div>
            <div className="order-info__form-group">
              <div className="order-info__form-pair form__only">
                <label htmlFor="">Comentarios o solicitudes especiales</label>
                <input type="text" name="" id="" />
              </div>
            </div>
            <div className="order-info__form-pair-check">
              <label htmlFor="">
                Acepta los terminos de tratamiento de datos
              </label>
              <input type="checkbox" name="" id="" />
            </div>
            <button className="order-info__form-btn" type="submit">
              Enviar
            </button>
          </form>
          <div className="order-info__data">
            <h3 className="order-info__data-title">Resumen de compra</h3>
            <div className="order-info__data-table">
              <div className="order-info__data-table-head">
                <div className="ofdt-name">Nombre</div>
                <div className="ofdt-price">Precio unitario($)</div>
                <div className="ofdt-count">Cantidad</div>
              </div>
              {shoppingCartItems.map(({ id, name, price, count }) => (
                <div className="order-info__data-table-item" key={id}>
                  <div className="ofdt-name">{name}</div>
                  <div className="ofdt-price">{price}</div>
                  <div className="ofdt-count">{count}</div>
                </div>
              ))}
              <div className="order-info__data-table-total">
                <div>Total</div>
                <div>${calculateTotal()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
