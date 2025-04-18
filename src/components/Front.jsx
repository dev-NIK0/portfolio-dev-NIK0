import autores from "../assets/autores.png";
import colores from "../assets/colores.png";
import perritos from "../assets/image_perritos.png";
import { AiFillGithub } from "react-icons/ai";

export const Front = () => {
  return (
    <div class="bg-indigo-500 sm:m-20 md:m-25 lg:m-30 sm:p-10 md:p-10 lg:p-10 rounded-4xl">
      <h1 class="text-center p-20 sm:text-l md:text-lg lg:text-2xl font-mono italic">Frontend Apps</h1>
      <div class="lg:grid lg:grid-cols-3 lg:gap-3 lg:justify-items-center">
        <div class="sm:p-10 md:p-10 lg:p-10  flex flex-col items-center" >
          <h1 class="font-bold text-center pb-10">Nota de Autores</h1>
          <img class="border-4 border-white rounded-xl" src={autores} />
          <p class="p-10 text-center max-w-md">
            Pagina simple realizada para demostrar las tecnologias aprendidas
            que forman parte de lo que es el desarrollo "Front-End" , esta
            pagina se basa en un simple hecho de ver como va cambiando la nota
            de texto presentada de un autor mediante la accion "click" al boton
            que aparece en la pantalla.
          </p>
          <a href="https://github.com/dev-NIK0/notas-de-autores" target="_blank">
            <AiFillGithub class="inline-block w-[4rem] h-[4rem]" />
          </a>
          
        </div>
        <div class="sm:p-10 md:p-10 lg:p-10  flex flex-col items-center">
          <h1 class="font-bold text-center pb-10">Cambiar de Color</h1>
          <img
            class="border-4 border-white rounded-xl h-50 w-100"
            src={colores}
          />
          <p class="p-10 text-center max-w-md">
            Pagina simple realizada para demostrar las tecnologias aprendidas
            que forman parte de lo que es el desarrollo "Front-End" , esta
            pagina se basa en un simple hecho de ver como cambia el color (en
            formato hexadecimal) del fondo de la misma mediante la accion
            "click" al boton que aparece.
          </p>
          <a href="https://github.com/dev-NIK0/colores-aleatorios" target="_blank">
            <AiFillGithub class="inline-block w-[4rem] h-[4rem]"/>
          </a>
        </div>
        <div class="sm:p-10 md:p-10 lg:p-10  flex flex-col items-center">
          <h1 class="font-bold text-center pb-10">Perritos Mundito</h1>
          <img
            class="border-4 border-white rounded-2xl h-50 w-100"
            src={perritos}
          />
          <p class="p-10 text-center max-w-md">
            Pagina con tematica de las razas de perros con sus caracteristicas y
            al final de la pagina informacion para contactar , en esta etapa se
            incluyo la parte Responsive para que al disminuir una pantalla los
            elementos se vayan acomodando de forma correcta. Esta misma fue
            hecha para comprobar los conocimientos adquiridos en el curso de
            Desarrollador Front-End en el programa Buenos Aires (BA) 2.0.
          </p>
          <a href="https://dev-nik0.github.io/" target="_blank">
            <AiFillGithub class="inline-block w-[4rem] h-[4rem]"/>
          </a>
            
        </div>
      </div>
    </div>
  );
};
