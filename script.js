<script>
    function copiarNumero() {
    const numero = "123-456-7890"; // Número de contacto
    navigator.clipboard.writeText(numero)
        .then(() => {
            // Mostrar el mensaje
            const mensaje = document.getElementById("mensaje");
            mensaje.classList.add("visible");

            // Ocultar el mensaje después de 2 segundos
            setTimeout(() => {
                mensaje.classList.remove("visible");
            }, 2000);
        })
        .catch(err => {
            console.error("Error al copiar el número: ", err);
        });
}
</script>