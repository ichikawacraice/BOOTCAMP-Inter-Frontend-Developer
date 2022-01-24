const inputAdd = document.querySelector('.inputField .inputAdd')
const btnAdd = document.querySelector('.inputField .btnAdd')
const btnRemoveAll = document.querySelector('button.btnRemoveAll')
const todoList = document.querySelector('.todoList')
const pendingTasksNumb = document.querySelector('.pendingTasks')
let listArr
// Como foi usado armazenamento local, mostra as tarefas mesmo depois de fechar o site e voltar
mostrarTarefas()

// Ativando botão de add somente quando tiver texto
inputAdd.onkeyup = () => {
  const userData = inputAdd.value
  if (userData !== '') {
    btnAdd.classList.add('active')
  } else {
    btnAdd.classList.remove('active')
  }
}

// Adiciona a tarefa na lista
btnAdd.onclick = () => {
  const data = inputAdd.value
  const getLocalStorage = localStorage.getItem('Nova Tarefa')
  if (getLocalStorage == null) {
    listArr = []
  } else {
    listArr = JSON.parse(getLocalStorage)
  }
  listArr.push({ tarefa: data, complet: 'notComplet' })
  localStorage.setItem('Nova Tarefa', JSON.stringify(listArr))
  mostrarTarefas()
  btnAdd.classList.remove('active') // ao adicionar a tarefa o botão volta a ficar inativo
}

// Mostra a lista de tarefas
function mostrarTarefas () {
  const getLocalStorage = localStorage.getItem('Nova Tarefa')
  if (getLocalStorage == null) {
    listArr = []
  } else {
    listArr = JSON.parse(getLocalStorage)
  }
  pendingTasksNumb.textContent = listArr.length
  if (listArr.length > 0) { // desativa o botão de removar todas as tarefas caso não existam tarefas
    btnRemoveAll.classList.add('active')
  } else {
    btnRemoveAll.classList.remove('active')
  }
  let newLiTag = ''
  listArr.forEach((element, index) => {
    newLiTag += `<li><span class="iconMark ${element.complet}" onclick="markTask(${index})"><i class="fas fa-check"></i></span><span class="task ${element.complet}">${element.tarefa}</span><span class="iconTrash" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`
  })
  todoList.innerHTML = newLiTag
  inputAdd.value = '' // depois de adicionar a tarefa, limpa o input
}

// deleta a tarefa ao clicar na lixeira
// eslint-disable-next-line no-unused-vars
function deleteTask (index) {
  listArr.splice(index, 1)
  localStorage.setItem('Nova Tarefa', JSON.stringify(listArr))
  mostrarTarefas()
}

// marca a tarefa como concluída
// eslint-disable-next-line no-unused-vars
function markTask (index) {
  const getLocalStorage = localStorage.getItem('Nova Tarefa')
  listArr = JSON.parse(getLocalStorage)

  if (listArr[index].complet === 'notComplet') {
    listArr[index].complet = 'complet'
  } else {
    listArr[index].complet = 'notComplet'
  }
  localStorage.setItem('Nova Tarefa', JSON.stringify(listArr))
  mostrarTarefas()
}

// deleta todas as tarefas
btnRemoveAll.onclick = () => {
  listArr = []
  localStorage.setItem('Nova Tarefa', JSON.stringify(listArr))
  mostrarTarefas()
}
