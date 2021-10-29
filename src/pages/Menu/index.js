import { MenuItem } from "../../components/MenuItem";
import { menuData } from "../../data/menuData";
import "./styles.css";

export const Menu = () => {
    return (
        <section id="menu"
            class="container"
            style={{ marginTop: "72px", paddingBottom: "62px" }}
        >
            <h1 class="comida" style={{ marginTop: "100px" }}>
                HAMBURGUESAS
            </h1>
            <div class="row" id="burguer">
                {menuData.burguers.map((item) => (
                    <MenuItem key={item.id} data={item} />
                ))}
            </div>

            <h1 class="comida" style={{ marginTop: "100px" }}>
                PIZZAS
            </h1>

            <div class="row" id="pizza">
                {menuData.pizzas.map((item) => (
                    <MenuItem key={item.id} data={item} />
                ))}
            </div>
            <h1 class="comida" style={{ marginTop: "100px" }}>
                PROTEÍNAS
            </h1>
            <div class="row" id="protein">
                {menuData.proteins.map((item) => (
                    <MenuItem key={item.id} data={item} />
                ))}
            </div>
        </section>
    );
};
