import './style.css'

const $taskList = document.getElementById('task-list')

const API_URL = 'http://localhost:3000/api/tasks'

async function fetchTasks() {
  try {
    const response = await fetch(API_URL)
    const tasks = await response.json()

    // Limpiar la lista de tareas antes de agregar nuevas tareas
    $taskList.innerHTML = ''

    tasks.forEach(task => {
      const taskElement = document.createElement('div')
      taskElement.className = 'task-container p-4 rounded-md shadow-lg flex flex-col justify-between'

      taskElement.innerHTML = `
        <section class='flex justify-between items-start'>
          <div>
            <h2 class='text-lg font-semibold text-left'>${task.title}</h2>
            <p class='text-gray-400 text-left'>${task.description}</p>
          </div>
          <span class='text-sm ${task.isComplete ? 'text-green-500' : 'text-red-500'}'>
            ${task.isComplete ? 'Completada' : 'Pendiente'}
          </span>
        </section>
        <section class='flex justify-end mt-4'>
          <button class='modify-btn bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded'>
            Modificar
          </button>
          <button class='delete-btn bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-2 rounded ml-2'>
            Eliminar
          </button>
        </section>
      `

      $taskList.appendChild(taskElement)
    })
  } catch (error) {
    console.error('Error fetching tasks:', error)
  }
}

fetchTasks()