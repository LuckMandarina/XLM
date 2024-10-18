function enviarFormulario() {
    //captura informacion del index
   const nombre = document.getElementById("nombre").value;
   const email = document.getElementById("email").value;
   const anio = document.getElementById("anio").value;

   //crear un documento XML
   const xmlDATA = `
   <usuario>
    <nombre>${nombre}</nombre>
    <email>${email}</email>
    <anio>${anio}</anio>
   </usuario>
`;
   //Almacenar el XML en locarstorage
   localStorage.setItem('usuarioXML', xmlDATA);

   //Redirigir a la pagina de visualizacion
   window.location.href = 'visualizar.html';

   //Evitar que el formulario se envide de la manera tradicional 
   return false;
}