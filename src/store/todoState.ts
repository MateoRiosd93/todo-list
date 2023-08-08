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
    completedTodos: () => void
    pendingTodos: () => void
    allTodos: () => void
}

export const useTodoState = create<TodoState>((set) => ({
    todos: [],
    filteredTodos: [],
    addTodo: (todo: Todo) => set((state) => ({
        todos: [...state.todos, todo],
        filteredTodos: []
    })),
    removeTodo: (id: string) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id),
        filteredTodos: state.filteredTodos.filter(todo => todo.id !== id),
    })),
    toggleTodo: (id: string) => set(state => ({
        todos: toggleTodos(state.todos, id),
        filteredTodos: toggleTodos(state.filteredTodos, id)
    })),
    completedTodos: () => set(state => ({
        filteredTodos: state.todos.filter(todo => todo.completed)
    })),
    pendingTodos: () => set(state => ({
        filteredTodos: state.todos.filter(todo => !todo.completed)
    })),
    allTodos: () => set(state => ({ todos: state.todos, filteredTodos: [] }))
}))

const toggleTodos = (todos: Todo[], id: string) => {
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