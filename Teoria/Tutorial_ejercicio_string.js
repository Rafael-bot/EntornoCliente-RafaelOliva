/**
 * ●Te han pedido que incluyas en el texto de la próxima newsletter unas variables dinámicas que te vienen del usuario
 * ●Nombre: Cristina
 * ●Videojuego: Link awakening
 * ●Descuento: 20%
 */

 const NOMB = "Cristina";
 const VID = "Link Awakening";
 const DESC = "20%";
 const TEXT = `Hola ${NOMB}, tienes el ${VID} con un ${DESC}.`;

 document.querySelector(".ejercicio-string").innerHTML = TEXT;
