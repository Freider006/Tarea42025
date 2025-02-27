document.addEventListener("DOMContentLoaded", function() {
    const agregarBtn = document.getElementById("agregarBtn");
    const tareaInput = document.getElementById("tareaInput");
    const listaTareas = document.getElementById("listaTareas");

    agregarBtn.addEventListener("click", function() {
        const tareaTexto = tareaInput.value.trim();
        
        if (tareaTexto === "") {
            alert("Por favor, escribe una tarea.");
            return;
        }

        // Crear un nuevo elemento de lista (li)
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = tareaTexto;

        // Botón de eliminar
        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.classList.add("eliminar");

        // Evento para eliminar la tarea
        eliminarBtn.addEventListener("click", function() {
            listaTareas.removeChild(nuevaTarea);
        });

        // Agregar botón a la tarea
        nuevaTarea.appendChild(eliminarBtn);
        listaTareas.appendChild(nuevaTarea);

        // Limpiar el input
        tareaInput.value = "";
    });
});
