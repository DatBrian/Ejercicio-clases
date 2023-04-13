export default class Lapiz {
    #marca
    constructor(
        {
            color = "#FFFF00",
            dimension = "20",
            borrador = true,
            material = "madera",
            marca = "mongol"
        }) {
        this.dimension = dimension;
        this.borrador = borrador;
        this.material = material;
        this.#marca = marca;
        this.color = color;
    }

    setColor(valor) {
        this.color = valor;
    }

    setDimension(valor) {
        this.dimension = valor;
    }

    setBorrador(valor) {
        this.Borrador = valor;
    }

    setMaterial(valor) {
        this.material = valor;
    }

    setMarca(valor) {
        this.#marca = valor;
    }

    getMarca() {
        return this.#marca
    }
}