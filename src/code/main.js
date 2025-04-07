import * as materias from './materias.js';
Object.assign(globalThis, materias);

const disciplinas = new Map();
disciplinas.set(introducao_engenharia_quimica, { preReq: [], posReq: [programacao_engenharia_quimica] });
disciplinas.set(fundamentos_do_calculo, { preReq: [], posReq: [calculo_1,fundamentos_mecanica,laboratorio_mecanica] });
disciplinas.set(quimica_geral_1, {
  preReq: [],
  posReq: [
    quimica_geral_2,
    microbiologia,
    quimica_geral_experimental_2,
    quimica_organica_1,
    quimica_inorganica,
  ],
});
disciplinas.set(quimica_geral_experimental_1, { preReq: [], posReq: [quimica_geral_experimental_2, laboratorio_processos_quimicos] });
disciplinas.set(geometria_analitica_algebra_linear, { preReq: [], posReq: [] });
disciplinas.set(metodologia_cientifica, { preReq: [], posReq: [] });
//p2
disciplinas.set(calculo_1, { preReq: [fundamentos_do_calculo], posReq: [calculo_2, laboratorio_eletromagnetismo] });
disciplinas.set(fundamentos_mecanica, { preReq: [fundamentos_do_calculo], posReq: [fundamentos_eletromagnetismo, mecanica_resistencia_materiais] });
disciplinas.set(quimica_geral_2, { preReq: [quimica_geral_1], posReq: [fisico_quimica_1, quimica_analitica, quimica_analitica_experimental, corrosao] });
disciplinas.set(quimica_geral_experimental_2, { preReq: [quimica_geral_experimental_1, quimica_geral_1 ], posReq: [laboratorio_processos_quimicos] });
disciplinas.set(laboratorio_mecanica, { preReq: [fundamentos_do_calculo], posReq: [] });
disciplinas.set(microbiologia, { preReq: [quimica_geral_1], posReq: [] });
//p3
disciplinas.set(calculo_2, { preReq: [calculo_1], posReq: [calculo_3, equacoes_diferenciais] });
disciplinas.set(estatistica_basica, { preReq: [], posReq: [planejamento_experimental] });
disciplinas.set(quimica_organica_1, { preReq: [quimica_geral_1], posReq: [quimica_organica_2] });
disciplinas.set(fisico_quimica_1, { preReq: [quimica_geral_2], posReq: [principios_balancos_massa_energia, fisico_quimica_2, fisico_quimica_experimental, termodinamica_aplicada] });
disciplinas.set(programacao_engenharia_quimica, { preReq: [introducao_engenharia_quimica], posReq: [introducao_analise_processos] });
disciplinas.set(administracao_empreendedorismo, { preReq: [], posReq: [] });
disciplinas.set(optativa_1, { preReq: [], posReq: [] });
//p4
disciplinas.set(calculo_3, { preReq: [calculo_2], posReq: [fenomenos_transporte_1] });
disciplinas.set(desenho_tecnico, { preReq: [], posReq: [] });
disciplinas.set(quimica_organica_2, { preReq: [quimica_organica_1], posReq: [] });
disciplinas.set(equacoes_diferenciais, { preReq: [calculo_2], posReq: [introducao_analise_processos] });
disciplinas.set(principios_balancos_massa_energia, { preReq: [fisico_quimica_1], posReq: [desenvolvimento_processos_quimicos,laboratorio_processos_quimicos,engenharia_meio_ambiente, cinetica_calculo_reatores_1] });
disciplinas.set(fisico_quimica_2, {
  preReq: [fisico_quimica_1],
  posReq: [],
});
disciplinas.set(fisico_quimica_experimental, {
  preReq: [fisico_quimica_1],
  posReq: [],
});
//p5
disciplinas.set(introducao_analise_processos, { preReq: [equacoes_diferenciais, programacao_engenharia_quimica], posReq: [fenomenos_transporte_1, controle_processos, analise_simulacao_otimizacao_processos] });
disciplinas.set(termodinamica_aplicada, { preReq: [fisico_quimica_1], posReq: [operacoes_unitarias_3] });
disciplinas.set(quimica_inorganica, { preReq: [quimica_geral_1], posReq: [] });
disciplinas.set(quimica_analitica, { preReq: [quimica_geral_2], posReq: [] });
disciplinas.set(quimica_analitica_experimental, { preReq: [quimica_geral_2], posReq: [] });
disciplinas.set(fundamentos_eletromagnetismo, { preReq: [fundamentos_mecanica], posReq: [instrumentacao_automacao] });
disciplinas.set(unidade_curricular_extensao_1, { preReq: [], posReq: [] });
//p6
disciplinas.set(mecanica_resistencia_materiais, { preReq: [fundamentos_mecanica], posReq: [] });
disciplinas.set(fenomenos_transporte_1, { preReq: [introducao_analise_processos, calculo_3], posReq: [fenomenos_transporte_2, operacoes_unitarias_1, laboratorio_engenharia_quimica_1, fenomenos_transporte_3] });
disciplinas.set(desenvolvimento_processos_quimicos, { preReq: [principios_balancos_massa_energia], posReq: [] });
disciplinas.set(instrumentacao_automacao, {
  preReq: [fundamentos_eletromagnetismo],
  posReq: [controle_processos],
});
disciplinas.set(laboratorio_eletromagnetismo, { preReq: [calculo_1, fundamentos_mecanica], posReq: [] });
disciplinas.set(planejamento_experimental, { preReq: [estatistica_basica], posReq: [] });
disciplinas.set(unidade_curricular_extensao_2, { preReq: [], posReq: [] });
//p7
disciplinas.set(fenomenos_transporte_2, { preReq: [fenomenos_transporte_1], posReq: [operacoes_unitarias_2, laboratorio_engenharia_quimica_2] });
disciplinas.set(corrosao, { preReq: [quimica_geral_2], posReq: [] });
disciplinas.set(operacoes_unitarias_1, { preReq: [fenomenos_transporte_1], posReq: [projeto_processos_instalacoes_quimicas, laboratorio_engenharia_quimica_3] });
disciplinas.set(cinetica_calculo_reatores_1, { preReq: [principios_balancos_massa_energia], posReq: [cinetica_calculo_reatores_2, engenharia_bioquimica] });
disciplinas.set(laboratorio_engenharia_quimica_1, { preReq: [fenomenos_transporte_1], posReq: [] });
disciplinas.set(laboratorio_processos_quimicos, { preReq: [principios_balancos_massa_energia, quimica_geral_experimental_2], posReq: [] });
disciplinas.set(optativa_2, { preReq: [], posReq: [] });
//p8
disciplinas.set(fenomenos_transporte_3, { preReq: [fenomenos_transporte_1], posReq: [analise_simulacao_otimizacao_processos] });
disciplinas.set(controle_processos, { preReq: [instrumentacao_automacao, introducao_analise_processos], posReq: [] });
disciplinas.set(operacoes_unitarias_2, { preReq: [fenomenos_transporte_2], posReq: [] });
disciplinas.set(cinetica_calculo_reatores_2, { preReq: [cinetica_calculo_reatores_1], posReq: [laboratorio_engenharia_quimica_4] });
disciplinas.set(laboratorio_engenharia_quimica_2, { preReq: [fenomenos_transporte_2], posReq: [] });
disciplinas.set(seguranca_meio_ambiente_saude, { preReq: [], posReq: [] });
disciplinas.set(unidade_curricular_extensao_3, { preReq: [], posReq: [] });
//p9
disciplinas.set(gestao_producao_qualidade, { preReq: [], posReq: [] });
disciplinas.set(projeto_processos_instalacoes_quimicas, { preReq: [operacoes_unitarias_1], posReq: [] });
disciplinas.set(operacoes_unitarias_3, { preReq: [termodinamica_aplicada], posReq: [laboratorio_engenharia_quimica_4] });
disciplinas.set(engenharia_bioquimica, { preReq: [cinetica_calculo_reatores_1], posReq: [] });
disciplinas.set(laboratorio_engenharia_quimica_3, { preReq: [operacoes_unitarias_1], posReq: [] });
disciplinas.set(sociedade_organizacoes, { preReq: [], posReq: [] });
disciplinas.set(tcc_1, { preReq: [], posReq: [tcc_2] });
//p10
disciplinas.set(engenharia_meio_ambiente, { preReq: [principios_balancos_massa_energia], posReq: [] });
disciplinas.set(analise_simulacao_otimizacao_processos, { preReq: [introducao_analise_processos, fenomenos_transporte_3], posReq: [] });
disciplinas.set(laboratorio_engenharia_quimica_4, { preReq: [cinetica_calculo_reatores_2, operacoes_unitarias_3], posReq: [] });
disciplinas.set(tcc_2, { preReq: [tcc_1], posReq: [] });

// Estiliza elementos
let styleMap = {
  current: [
    "outline-4",
    localStorage.getItem("theme") === "light"
      ? "outline-sky-300"
      : "outline-sky-400",
    "outline",
  ],
  parent: [
    "outline-4",
    localStorage.getItem("theme") === "light"
      ? "outline-red-300"
      : "outline-red-400",
    "outline",
  ],
  child: [
    "outline-4",
    localStorage.getItem("theme") === "light"
      ? "outline-green-300"
      : "outline-green-400",
    "outline",
  ],
};

function styleElements(elements, type, add) {
  elements.forEach((id) => {
    let element = document.getElementById(id);
    element.classList[add ? "add" : "remove"](...styleMap[type]);
  });
}

let currentReqs = {
  actual: [],
  parentReq: [],
  childReq: [],
};

// hover styles
let divs = document.querySelectorAll(".dsp");
divs.forEach((div) => {
  div.addEventListener("mouseover", (e) => {
    console.log(disciplinas);
    currentReqs.actual = div.id;
    currentReqs.parentReq = disciplinas.get(currentReqs.actual).preReq;
    currentReqs.childReq = disciplinas.get(currentReqs.actual).posReq;

    styleElements([currentReqs.actual], "current", true);
    styleElements(currentReqs.parentReq, "parent", true);
    styleElements(currentReqs.childReq, "child", true);
  });

  div.addEventListener("mouseout", (e) => {
    styleElements([currentReqs.actual], "current", false);
    styleElements(currentReqs.parentReq, "parent", false);
    styleElements(currentReqs.childReq, "child", false);
  });
});

// Overlay
let main = document.querySelector("main");
let overlay = document.querySelector(".overlay");
let treeIcons = document.querySelectorAll(".tree-icon");
let overlayContent = document.querySelector(".overlay-content");
let overflowContainer = document.querySelector(".overflow-container");
let header = document.querySelector("header");
let legenda = document.querySelector(".legenda"); // alinhamento da legenda
let closeBtn = document.querySelector(".close-btn"); // alinhamento da legenda

overlay.addEventListener("click", (e) => {
  if (!overlayContent.contains(e.target)) {
    overlay.classList.add("hidden");
    main.classList.remove("blur-sm");
    header.classList.remove("blur-sm"); // alinhamento da legenda
    legenda.classList.remove("invisible"); // alinhamento da legenda
    overflowContainer.classList.remove("overflow-x-hidden"); // remove scroll no overlay

    document.querySelector(".tree").remove();
    document.querySelector(".tree").remove();

    // Mantem pré-requisitos como padrão
    btnTreeVis.textContent === "Ver Pré-requisitos" ? toggleTreeVis() : null;
  }
});

// Evento fechar overlay mobile
closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  main.classList.remove("blur-sm");
  header.classList.remove("blur-sm"); // alinhamento da legenda
  legenda.classList.remove("invisible"); // alinhamento da legenda
  overflowContainer.classList.remove("overflow-x-hidden"); // remove scroll no overlay

  document.querySelector(".tree").remove();
  document.querySelector(".tree").remove();

  // Mantem pré-requisitos como padrão
  btnTreeVis.textContent === "Ver Pré-requisitos" ? toggleTreeVis() : null;
});


// Tree
function TreeData(data, select) {
  var main = document.querySelector(select);
  var treecanvas = document.createElement("div");
  treecanvas.className = "tree";
  var treeCode = buildTree(data, Object.keys(data)[0]);
  treecanvas.innerHTML = treeCode;
  main.appendChild(treecanvas);
}

/* Recursive function to build tree structure :) */
function buildTree(obj, node) {
  var treeString = "<li class='flex-1 dark:last:before:border-white dark:before:border-white dark:after:border-white'><a href='#' class='dark:text-white dark:border-white'>" + obj[node].value + "</a>",
    sons = [];

  for (var i in obj) {
    if (obj[i].parent == node) sons.push(i);
  }

  if (sons.length > 0) {
    treeString += "<ul class='flex justify-center dark:before:border-white'>";

    for (var i in sons) {
      treeString += buildTree(obj, sons[i]);
    }

    treeString += "</ul>";
  }
  return treeString;
}


function getTreeData(idDisciplina) {
  let nomeDisciplina = document.getElementById(idDisciplina).querySelector("p").textContent.trim();
  let treeObj = {
    [idDisciplina]: { value: nomeDisciplina, parent: "" }, // Disciplina inicial não tem pai
  };

  // Inicializa uma fila para processar as disciplinas com seus pais
  let queueDisciplinas = [{ id: idDisciplina, parent: "" }];

  // Loop enquanto houver disciplinas na fila
  while (queueDisciplinas.length > 0) {
    // Remove a próxima disciplina da fila
    let { id, parent } = queueDisciplinas.shift();

    // Adiciona cada pré-requisito como filho da disciplina atual
    disciplinas.get(id).preReq.forEach((preReqId) => {
      let nomePreReq = document.getElementById(preReqId).querySelector("p").textContent.trim();

      // Adiciona a disciplina pré-requisito no objeto treeObj
      treeObj[preReqId] = { value: nomePreReq, parent: id };

      // Adiciona a disciplina pré-requisito à fila para processamento posterior
      queueDisciplinas.push({ id: preReqId, parent: id });
    });
  }


  // pos requisitos
  let nomeDisciplinaPos = document.getElementById(idDisciplina).querySelector("p").textContent.trim();
  let treeObjPos = {
    [idDisciplina]: { value: nomeDisciplinaPos, parent: "" }, // Disciplina inicial não tem pai
  };

  // Inicializa uma fila para processar as disciplinas com seus pais
  let queueDisciplinasPos = [{ id: idDisciplina, parent: "" }];

  // Loop enquanto houver disciplinas na fila
  while (queueDisciplinasPos.length > 0) {
    // Remove a próxima disciplina da fila
    let { id, parent } = queueDisciplinasPos.shift();

    // Adiciona cada pré-requisito como filho da disciplina atual
    disciplinas.get(id).posReq.forEach((preReqId) => {
      let nomePreReq = document.getElementById(preReqId).querySelector("p").textContent.trim();

      // Adiciona a disciplina pré-requisito no objeto treeObjPos
      treeObjPos[preReqId] = { value: nomePreReq, parent: id };

      // Adiciona a disciplina pré-requisito à fila para processamento posterior
      queueDisciplinasPos.push({ id: preReqId, parent: id });
    });
  }

  let trees = { treePre: treeObj, treePos: treeObjPos };
  return trees;
}


treeIcons.forEach((treeIcon) => {
  treeIcon.addEventListener("click", (e) => {
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
    main.classList.add("blur-sm");
    header.classList.add("blur-sm"); // alinhamento da legenda
    legenda.classList.add("invisible"); // alinhamento da legenda
    overflowContainer.classList.add("overflow-x-hidden"); // remove scroll no overlay

    let isSvg = e.target.tagName !== 'path' ? true : false;  // verifica se o clique foi no svg ou path
    let divId;
    if(isSvg) {
      divId = e.target.parentElement.parentElement.id;
    } else {
      divId = e.target.parentElement.parentElement.parentElement.id;
    }

    var trees = getTreeData(divId)
    TreeData(trees.treePre, "#tree");
    TreeData(trees.treePos, "#treePos");
  });
});

// Altera visibilidade da árvore
let btnTreeVis = document.getElementById("btnTreeVis");

function toggleTreeVis (){
  let treeReq = document.getElementById("containerPre");
  let treePos = document.getElementById("containerPos");
  treeReq.classList.toggle("hidden");
  treePos.classList.toggle("hidden");
  btnTreeVis.textContent = btnTreeVis.textContent === "Ver Pré-requisitos" ? "Ver Subsequentes" : "Ver Pré-requisitos";  // faz fechar ao clicar no botão
}

btnTreeVis.addEventListener("click", toggleTreeVis);
