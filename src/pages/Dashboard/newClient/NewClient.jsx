import "./newClient.css";

export default function NewClient() {
  return (
    <div className="newClient">
      <h1 className="newClientTitle">Nuevo usuario</h1>
      <form className="newClientForm">
        <div className="newClientItem">
          <label>Usuario</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newClientItem">
          <label>Nombre completo</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newClientItem">
          <label>Correo</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newClientItem">
          <label>Contraseña</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newClientItem">
          <label>Celular</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newClientItem">
          <label>Direccion</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newClientItem">
          <label>Genero</label>
          <div className="newClientGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Masculino</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Femenino</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Otro</label>
          </div>
        </div>
        <div className="newClientItem">
          <label>Activo</label>
          <select className="newClientSelect" name="active" id="active">
            <option value="yes">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newClientButton">Crear</button>
      </form>
    </div>
  );
}