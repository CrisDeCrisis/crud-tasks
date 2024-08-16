import './style.css'

const $app = document.getElementById('app')

const API_URL = 'http://localhost:3000/api/tasks'

async function fetchTasks() {
  try {
    const response = await fetch(API_URL)
    const tasks = await response.json()

    tasks.forEach(task => {
      const taskElement = `
        <div id='taskContainer' class="bg-amber-200 shadow-xl rounded p-4 mb-4">
          <h2 class="text-yellow-700 text-xl font-bold mb-2">${task.title}</h2>
          <p class="text-yellow-950">${task.description}</p>
        </div>
      `
      $app.innerHTML += taskElement
    })
  } catch (error) {
    console.error('Error fetching tasks:', error)
  }
}

fetchTasks()