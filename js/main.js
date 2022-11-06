
 
        /* alert ("Vamos a conocerte");

         let nombreUs = prompt ("Ingresar su Nombre");
      
            if(nombreUs == "") {
            alert ("No Ingreso su Nombre");
            }

         let apellidoUs = prompt ("Ingresar su Apellido");

            if(apellidoUs == "") {
               alert ("No Ingreso su Apellido");
               
            } 

            alert ("Sabes si estas bien de salud "+ nombreUs + " " + apellidoUs + " " +"acompañame a saberlo");

            let pesoKilos = parseInt(prompt("Ingresar su peso en kg"));
           
            let altMts=parseInt(prompt ("Ingrese su altura en centímetros ej. 1.50m = 150cm"));
                       
            let altoMs = (altMts*altMts)/10000;

            let imc = pesoKilos/altoMs;

            if(imc <= 19) {
                alert ("Tienes tu peso inferio a lo recomendado");
            } else 
               if(imc <= 25){
                  alert ("Estas en tu peso recomendado");
            }else 
               if(imc <= 30){
                  alert ("Tienes sobrepeso. Cuidate y entrena");
            }else
               if (imc <= 35){
                  alert ("Cuidado tines obesidad moderada, te recomendamos asistir a un especialista");
            }else 
               if (imc > 35){
                  alert ("Tienes que asistir a un especialista lo antes posible, tienes obesidad");
            }
         
           let imcTur = (imc < 19 || imc > 30);

           
            if(imcTur){

               alert (nombreUs + " como te cuidamos te otrogamos un turno con un especialista");


               for( let turnoEsp = 1; turnoEsp <= 15; turnoEsp++ ){
                  
                  nombreUs + apellidoUs;

                  alert(nombreUs + " " + apellidoUs +" ud tiene el turno Nº " + turnoEsp );

                  break;
               }

           }   else {
                   alert ("Estas en buen estado sigue así");
           }*/

           function capturar(){
            //console.log("hola");
               function usuario(nombre,apellido,correo){
                  this.nombre = nombre;
                  this.apellido= apellido;
                  this.correo = correo;
               }
               let nombreCapturar = document.getElementById("nombre").value;
         //   console.log(nombreCapturar);
               let apellidoCapturar = document.getElementById("apellido").value;
            //   console.log (apellidoCapturar);
               let correoCapturar = document.getElementById("correo").value;
            //   console.log (correoCapturar);
               
              nuevoRegistro = new usuario(nombreCapturar,apellidoCapturar,correoCapturar);
               console.log(nuevoRegistro);

             agregar();

         }

         let baseDatos =[];
            function agregar(){
               baseDatos.push(nuevoRegistro);
               console.log(baseDatos);
               document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoRegistro.nombre + '</td> <td>' +nuevoRegistro.apellido + '</td><td>' +nuevoRegistro.correo + '</td></tbody>';         
            }
      




         
