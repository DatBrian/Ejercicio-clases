import Lapiz from '../storage/data.js';

export default {
    datosDefault() {

        let colorElement = document.querySelector(`[name="color"]`);
        let rangeElement = document.querySelector(`[name="dimension"]`);
        let marcaElements = document.querySelectorAll(`[name="marca"]`);
        let borradorElements = document.querySelectorAll(`[name="borrador"]`);
        let materialElements = document.querySelectorAll(`[name="material"]`);

        let lapizDefault = undefined;

        addEventListener("DOMContentLoaded", (e) => {
            lapizDefault = new Lapiz({});

            colorElement.value = lapizDefault.color;
            rangeElement.value = lapizDefault.dimension;

            marcaElements.forEach((element) => {
                if (element.value === lapizDefault.getMarca()) {
                    element.checked = true;
                }
            });

            borradorElements.forEach((element) => {
                if (element.value === lapizDefault.borrador.toString()) {
                    element.checked = true;
                }
            });

            materialElements.forEach((element) => {
                if (element.value === lapizDefault.material) {
                    element.checked = true;
                }
            });
        });
    }
}