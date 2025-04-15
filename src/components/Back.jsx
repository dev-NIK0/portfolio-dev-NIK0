import { AiFillGithub } from "react-icons/ai";

export const Back = () => {
  return (
    <div class="bg-indigo-500 m-30 h-dvh rounded-4xl">
      <h1 class="text-center p-20 text-2xl font-mono italic">Backend Apps</h1>
      <div class="grid grid-cols-3 gap-3 justify-items-center">
        <div class="flex flex-col items-center">
          <h1 class="text-center pb-10">API Tienda</h1>
          <p class="p-10 text-center max-w-md">
            Se realizo una API de una Tienda en Java con Spring y otras
            dependencias , bajo la modalidad CRUD , basada en una tienda donde
            tiene entidades como producto , compra , cliente y categoria.Este
            proyecto se realizo para acreditar conocimientos adquiridos en un
            curso de Desarrollo Backend en Java.
          </p>
          <a href="https://github.com/dev-NIK0/appTienda" target="_blank">
            <AiFillGithub class="inline-block w-[4rem] h-[4rem]" />
          </a>
        </div>
      </div>
    </div>
  );
};
