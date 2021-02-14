const addForm = document.querySelector(".add")
const ul = document.querySelector('.todos')
const search = document.querySelector('.search input')


const generateTodoTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `
    ul.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim()
    
    if (todo.length) {
        generateTodoTemplate(todo)
        addForm.reset()
    }
    // addForm.add.value = ''   another way of resetting the form's value
})

// Deleting todos
ul.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})

// Make function to filter input
const filterTodos = (input) => {
    Array.from(ul.children)
        .filter((todo) => {
            return !todo.textContent.toUpperCase().includes(input)
        })
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(ul.children)
        .filter((todo) => {
            return todo.textContent.includes(input)
        })
        .forEach((todo) => {
            return todo.classList.remove('filtered')
        })
}

// Searching todos using keyup event
search.addEventListener('keyup', () => {
    const input = search.value.trim().toUpperCase()
    filterTodos(input)
})
