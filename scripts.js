const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listacompleta = document.querySelector('.lista-task')

let listadeitens = []



function adicionarTarefa() {
    listadeitens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ""
    mostrartarefa()
}

function mostrartarefa() {

    let novaLi = ''

    listadeitens.forEach((item, index) => {

        novaLi = novaLi + `

            <li class="${item.concluida && "done"}" >
                <img src="./img/checked.png" alt="Check" onclick="concluirtarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="Apagar" onclick="deletaritem(${index})">
            </li>
            
            `

    })

    listacompleta.innerHTML = novaLi

}

function concluirtarefa(index) {
    listadeitens[index].concluida = !listadeitens[index].concluida

    mostrartarefa()
}

function deletaritem(index) {
    listadeitens.splice(index, 1)

    mostrartarefa()
}

button.addEventListener('click', adicionarTarefa)
/*function button(){
    let input = document.querySelector("input").value

    let li = document.createElement('li')
    li.innerHTML = input + '<span onclick="deletartarefa(this)">X</span>'

    document.querySelector('ul').appendChild(li)

    document.querySelector("input").value = ''
}*/

/*function deletartarefa(li){
    li.parentElement.remove()
}*/