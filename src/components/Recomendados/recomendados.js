import "./recomendados.css";

export const Recomendados = (props) => {

    return (
        <><div class="row">
            <div class="col recomendados_col">
                <img src={props.img} alt="" style={{ width: "180px", height: "190px" }} class="img-fluid" /><h4>{props.titulo}</h4><button class="btn bg-light"><a class="especiales" href="menu.html" aria-current="page">Ver detalles</a></button>
            </div>
        </div>
        </>
    );
}

