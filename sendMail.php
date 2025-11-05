<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre  = htmlspecialchars(trim($_POST["name"]));
    $correo  = htmlspecialchars(trim($_POST["correo"]));
    $mensaje = htmlspecialchars(trim($_POST["messagel"]));

    $para = "oespinosa@oeamexico.art"; // <-- tu correo aquí
    $asunto = "Nuevo mensaje desde tu web personal";

    $contenido = "Nombre: $nombre\nCorreo: $correo\n\nMensaje:\n$mensaje";
    $cabeceras = "From: $correo\r\n";
    $cabeceras .= "Reply-To: $correo\r\n";
    $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($para, $asunto, $contenido, $cabeceras)) {
        echo "<script>alert('Mensaje enviado con éxito.'); window.history.back();</script>";
    } else {
        echo "<script>alert('No se pudo enviar el mensaje. Intenta más tarde.'); window.history.back();</script>";
    }
} else {
    header("Location: index.html");
    exit;
}
?>
