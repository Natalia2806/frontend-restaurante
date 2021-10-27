import { Header } from "../../components/Header/header";
import { Recomendados } from "../../components/Recomendados/recomendados";
import recomendadosData from "../../data/recomendadosData"
import "./styles.css";

export const Home = () => {
  let recomendados = recomendadosData;
  return (
    <>
      <Header />
      <section id="propuesta">
        <div class="container-fluid">
          <div class="content-center">
            <h1 class="title">Nuestra propuesta</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eaque id fugiat nemo distinctio ipsam
              accusamus, voluptatem, enim architecto animi dolor. Veritatis tempora dignissimos veniam, ea amet
              quos blanditiis eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ipsam fuga
              ut eos cum, illum totam dignissimos ipsum sit debitis explicabo, quibusdam nihil! Non, praesentium.
              Iure, ratione. Ea, cupiditate sit!</p>
          </div>
        </div>
      </section>

      <section id="recomendados">
        <div class="container content-center">
            <h1 class="title">Descubre nuestras especialidades</h1>
                {recomendados.map(data =>
                <Recomendados img={data.img} titulos={data.titulo}></Recomendados>)}
        </div>
      </section>


      <section id="servicios" class="divider">
        <div class="container">
            <div class="content-center">
                <h1 class="padding-h1">Organizamos eventos</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim atque consectetur nesciunt cumque,
                    iure esse voluptatem odit maxime, vel mollitia, earum doloremque veritatis pariatur inventore saepe
                    temporibus. Fuga, exercitationem architecto!</p>
            </div>
            <div class="row">
                <div id="fiesta " class="col-md-3 img_row">
                    <img src="images/fondo_eventos.jpg" alt="" class="img-fluid img-contenedor"/>
                </div>
                <div id="matrimonio " class="col-md-3 img_row">
                    <img src="images/matrimonio.jpg" alt="" class="img-fluid img-contenedor"/>
                </div>
                <div id="cena " class="col-md-3 img_row">
                    <img src="images/imagen2.jpg" alt="" class="img-fluid img-contenedor"/>
                </div>
                <div id="cumpleaños " class="col-md-3 img_row">
                    <img src="images/cumpleaños2.jpg" alt="" class="img-fluid img-contenedor"/>
                </div>
            </div>
        </div>
    </section>

      
    <section id="comentarios"> 
    
    
   
        <div class="container">
            <div class="content-center">
                <h1 class="padding-top padding-h1">Unas palabras de nuestros clientes</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <p>Enim atque consectetur nesciunt cumque, iure esse voluptatem odit maxime,<br /> vel mollitia,
                            earum doloremque veritatis pariatur inventore saepe temporibus. <br />Fuga, exercitationem
                            architecto!</p>
                        <div class="testimonial-user">
                            <div class="row">
                                <div class="col-md-3">
                                    <img src="images/personal2@2x.png" alt="" class="img-fluid"/>
                                </div>
                                <div class="col-md-9">
                                    <h6>Sofia Mendez</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <p>Enim atque consectetur nesciunt cumque, iure esse voluptatem odit maxime,<br/> vel mollitia,
                            earum doloremque veritatis pariatur inventore saepe temporibus. <br/>Fuga, exercitationem
                            architecto!</p>
                        <div class="testimonial-user">
                            <div class="row">
                                <div class="col-md-3">
                                    <img src="images/personal1@2x.png" alt="" class="img-fluid"/>
                                </div>
                                <div class="col-md-9">
                                    <h6>Jairo Díaz</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <p>Enim atque consectetur nesciunt cumque, iure esse voluptatem odit maxime,<br/> vel mollitia,
                            earum doloremque veritatis pariatur inventore saepe temporibus. <br/>Fuga, exercitationem
                            architecto!</p>
                        <div class="testimonial-user">
                            <div class="row">
                                <div class="col-md-3">
                                    <img src="images/testimonio1@2x.png" alt="" class="img-fluid"/>
                                </div>
                                <div class="col-md-9">
                                    <h6>Sebastian Gimenez</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>

    </>
  );
};
