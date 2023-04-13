export default {
    datosNuevos() {

        const ws = new Worker("storage/wsDatos.js", { type: "module" });

        loadFromLocalStorage();

        let form = document.querySelector("#form");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            let formData = new FormData(form);

            let color = formData.get('color');
            let dimension = formData.get('dimension');
            let marca = formData.get('marca');
            let borrador = formData.get('borrador');
            let material = formData.get('material');

            ws.postMessage({
                type: "nuevo lapiz",
                data: {
                    colorU: color,
                    dimensionU: dimension,
                    marcaU: marca,
                    borradorU: borrador,
                    materialU: material
                }
            })
        });

        ws.onmessage = ((e) => {
            let type = e.data.type;

            if (type === 'load') {
                let plantillaLoad = e.data.data;
                updateTable("tableL", plantillaLoad)
            }

            if (type === 'nuevo lapiz') {
                let data = e.data;

                let lapices = data.data;
                let plantilla = e.data.plantilla;
                console.log(lapices)
                updateTable("tableL", plantilla)
                saveLocalStorage(lapices);

            }
        })

        //Borrar datos
        let deleteAll = document.querySelector("#deleteAll");

        deleteAll.addEventListener("click", (e) => {
            deleteLocalStorage();
        })

        //Botones individuales

        document.addEventListener("click", (e) => {
            if (e.target.getAttribute("data-type") === "eliminarLapiz") {

                Swal.fire({
                    title: 'Estas seguro?',
                    text: "Al eliminar este lapiz no podrás recuperarlo",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, eliminalo'
                }).then((result) => {
                    if (result.isConfirmed) {
                        let index = parseInt(e.target.getAttribute("data-index"));
                        let lapices = JSON.parse(localStorage.getItem("Lista Lápices"));
                        lapices.splice(index, 1);
                        localStorage.setItem("Lista Lápices", JSON.stringify(lapices));

                        Swal.fire(
                            'Hecho!',
                            'Lápiz Eliminado',
                            'success'
                        );
                        setTimeout(function () {
                            location.reload();
                        }, 2000);
                    }
                })


            }
        });

        //Funciones

        function updateTable(tableId, plantilla) {
            document.querySelector(`#${tableId} tbody`).innerHTML = plantilla;
        }

        function saveLocalStorage(array) {
            localStorage.setItem("Lista Lápices", JSON.stringify(array));
        }

        function loadFromLocalStorage() {
            let lapicesL = JSON.parse(localStorage.getItem("Lista Lápices")) || [];

            ws.postMessage({ type: "load", data: lapicesL });
        }

        function deleteLocalStorage() {
            Swal.fire({
                title: 'Estas seguro?',
                text: "Al eliminar todos tus lápices no podrás recuperarlos",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminalos'
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.clear();
                    Swal.fire(
                        'Hecho!',
                        'Tus lápices han sido eliminados.',
                        'success'
                    );
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                }
            })
        }


    }
}