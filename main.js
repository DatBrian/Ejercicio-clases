class lapiz {
    #marca
    constructor({ color = "rgb(255, 255, 0)", dimension = "20", borrador = "true", material = "madera", marca = "mongol" }) {
        this.color = color;
        this.dimension = dimension;
        this.borrador = borrador;
        this.material = material;
        this.#marca = marca;
    }

    get color() {
        return this.color;
    }
}

let lapizDefault = undefined;
let color = document.querySelector(`[name = "color"]`);

addEventListener("DOMContentLoaded", (e) => {

    let lapizDefault = new lapiz({});

    color.value = lapizDefault.color;

    

})



// let obj = new lapiz({ material: "goma", marca: "norma" });