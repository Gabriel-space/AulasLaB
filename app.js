async function getURI(uri) {
    const response = fetch(`https://jsonplaceholder.typicode.com/${uri}`)
        .then(response => response.json())
    return response
}

async function listarUsuarios() {
    const data = await usuarios('/users')
    data.forEach(item => {
        criarElementoLi(item.name)
    });
}

const capturandoTarefa = () => {
    const tarefa = document.getElementById('tarefa')
    const aux = tarefa.value 
    tarefa.value = ''
    return aux
}

async function listarFotografias() {
    const data = await getURI('/photos')
    data.forEach(item => {
        criarImagem(item.thumbnailUrl)
    });
}

const elementoCriarTarefa = (tarefa) => {
    const listaTarefas = document.getElementById('lista-tarefas')
    const elementoButton = document.createElement('button')
    elementoButton.classList.add('list-group-item')
    elementoButton.classList.add('list-group-item-action')
    elementoButton.innerText = tarefa
    listaTarefas.appendChild(elementoButton)
    const elementoAlerta = document.getElementById('alerta')
    elementoAlerta.classList.add('alerta-sumir')
}

function criarElementoLi(contexto) {
    const elementLi = document.createElement('li')
    elementLi.textContent = contexto
    const listaNaoOrdenada = document.querySelector('ul')
    listaNaoOrdenada.appendChild(elementLi)
}

function criarImagem(img) {
    const elementLi = document.createElement('li')
    elementLi.innerHTML = `<img src='${img}'/>`
    const listaNaoOrdenada = document.querySelector('ul')
    listaNaoOrdenada.appendChild(elementLi)
}

const mostrarAlerta = (frase) => {
    const elementoAlerta = document.getElementById('alerta')
    elementoAlerta.classList.remove('alerta-sumir')
    elementoAlerta.innerText = frase
}

const button = document.querySelector('button')
button.addEventListener('click', () => listarFotografias())
const botaoEnviarTarefa = document.getElementById('butao-enviar-tarefa')
botaoEnviarTarefa.addEventListener('click', (e) => {
    const textoTarefa = capturandoTarefa()
    if(textoTarefa == '') {
        mostrarAlerta('Por favor preencha o campo abaixo')
        return
    }
    elementoCriarTarefa(textoTarefa)
})