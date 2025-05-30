import { json_materias } from './materias.js';

const container = document.querySelector("main");
json_materias.forEach(periodo => {

  const article = document.createElement("article");
  article.className =
    "flex flex-col gap-3 *:rounded-lg *:border *:border-[#636c7e] [&_div]:px-2 [&_div]:pt-2";

  const titulo = document.createElement("h2");
  titulo.className = "p-2 text-center font-semibold tracking-wide";
  titulo.innerHTML = periodo.titulo;
  article.appendChild(titulo);

  periodo.disciplinas.forEach(disciplina => {
    const div = document.createElement("div");
    div.className =
      "dsp box-content flex h-[100px] w-[200px] flex-col items-center justify-start pb-5 text-center";
    div.id = disciplina.id;

    div.innerHTML = `
      <div class="ml-auto">
        <svg
          class="tree-icon cursor-pointer fill-black dark:fill-white"
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 5C7 4.44772 7.44772 4 8 4C8.55228 4 9 4.44772 9 5C9 5.55228 8.55228 6 8 6C7.44772 6 7 5.55228 7 5ZM9 7.82929C10.1652 7.41746 11 6.30622 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.30622 5.83481 7.41746 7 7.82929V9V16C7 18.2091 8.79086 20 11 20H14.1707C14.5825 21.1652 15.6938 22 17 22C18.6569 22 20 20.6569 20 19C20 17.3431 18.6569 16 17 16C15.6938 16 14.5825 16.8348 14.1707 18H11C9.89543 18 9 17.1046 9 16V12.4649C9.58835 12.8052 10.2714 13 11 13H14.1707C14.5825 14.1652 15.6938 15 17 15C18.6569 15 20 13.6569 20 12C20 10.3431 18.6569 9 17 9C15.6938 9 14.5825 9.83481 14.1707 11H11C9.89543 11 9 10.1046 9 9V7.82929ZM16 12C16 12.5523 16.4477 13 17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12ZM16 19C16 19.5523 16.4477 20 17 20C17.5523 20 18 19.5523 18 19C18 18.4477 17.5523 18 17 18C16.4477 18 16 18.4477 16 19Z"
          />
        </svg>
      </div>
      <p class="flex flex-1 items-center pb-3 capitalize">${disciplina.nome}</p>
    `;

    article.appendChild(div);
  });

  container.appendChild(article);
});
