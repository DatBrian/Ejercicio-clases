import Lapiz from "./data.js";

let lapices = [];

self.onmessage = (e) => {
    let type = e.data.type;

    if (type === "load") {
        let lapicesL = e.data.data;
        console.log(lapicesL);
        lapicesL.map((lapiz) => new Lapiz(lapiz.color, lapiz.dimension, lapiz.marca, lapiz.borrador, lapiz.material));
        let plantillaLoad = lapicesL
            .map((val, index) => `
                <tr>
                    <td style="background-color:${val.color}" scope="row">${val.color}</td>
                    <td>${val.dimension}</td>
                    <td>${marca}</td>
                    <td>${val.borrador}</td>
                    <td>${val.material}</td>
                    <td>
                        <button class="btnd" data-index="${index}" data-type="eliminarLapiz">
                            <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
                            <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill">
                            </path>
                            </svg>
                        </button>
                    </td>
                </tr>
            `).join("");

        console.log(plantillaLoad)

        self.postMessage({ type: "load", data: plantillaLoad });
    }

    if (type === "nuevo lapiz") {
        let colorU = e.data.data.colorU;
        let dimensionU = e.data.data.dimensionU;
        let marcaU = e.data.data.marcaU;
        let borradorU = e.data.data.borradorU;
        let materialU = e.data.data.materialU;

        borradorU = "true" ? borradorU = "Si tiene" : borradorU = "No tiene";

        let newLapiz = new Lapiz({
            color: colorU,
            dimension: dimensionU,
            marca: marcaU,
            borrador: borradorU,
            material: materialU
        });

        lapices.push(newLapiz);

        let plantilla = lapices
            .map(
                (val, index) => `
                <tr>
                    <td style="background-color:${val.color}" scope="row">${val.color}</td>
                    <td>${val.dimension}</td>
                    <td>${val.getMarca()}</td>
                    <td>${val.borrador}</td>
                    <td>${val.material}</td>
                    <td>
                        <button button class="btnd" data-index="${index}" data-type="eliminarLapiz">
                            <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
                            <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill">
                            </path>
                            </svg>
                        </button>
                    </td>
                </tr>
                `
            )
            .join("");

        console.log(lapices)
        self.postMessage({ type: "nuevo lapiz", data: lapices, plantilla: plantilla });
    }
}




