import { create } from 'zustand'

export interface Todo {
    id: string
    name: string
    creationDate: string
    completed: boolean
}

interface TodoState {
    todos: Todo[]
    filteredTodos: Todo[]
    addTodo: (todo: Todo) => void
    removeTodo: (id: string) => void
    toggleTodo: (id: string) => void
    completedTodo: () => void
    pendingTodo: () => void
    allTodos: () => void
}

const getInitialStateTodos = () => JSON.parse(localStorage.getItem('TODOS') as string) ?? []

export const useTodoState = create<TodoState>((set) => ({
    todos: getInitialStateTodos() ?? [],
    filteredTodos: [],
    addTodo: (todo: Todo) => set((state) => saveTodo(state, todo)),
    removeTodo: (id: string) => set((state) => deleteTodo(state, id)),
    toggleTodo: (id: string) => set(state => toggleTodos(state, id)),
    completedTodo: () => set(state => ({
        filteredTodos: state.todos.filter(todo => todo.completed)
    })),
    pendingTodo: () => set(state => ({
        filteredTodos: state.todos.filter(todo => !todo.completed)
    })),
    allTodos: () => set(state => ({ todos: state.todos, filteredTodos: [] }))
}))

const saveTodo = (state: TodoState, todo: Todo) => {
    setTodosLocalStorage([...state.todos, todo])
    return {
        todos: [...state.todos, todo],
        filteredTodos: []
    }
}

const deleteTodo = (state: TodoState, id: string) => {
    const todos = state.todos.filter(todo => todo.id !== id)
    const filteredTodos = state.filteredTodos.filter(todo => todo.id !== id)

    setTodosLocalStorage(todos)

    return {
        todos,
        filteredTodos
    }
}

const toggleTodos = (state: TodoState, id: string) => {
    const todos = toggle(state.todos, id)

    setTodosLocalStorage(todos)

    return {
        todos,
        filterTodos: toggle(state.filteredTodos, id)
    }
}

const setTodosLocalStorage = (todos: Todo[]) => localStorage.setItem('TODOS', JSON.stringify(todos))

const toggle = (todos: Todo[], id: string) => {
    return todos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            }
        } else {
            return todo
        }
    })
}