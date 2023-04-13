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

    getMarca() {
        return this.#marca
    }
}