import { create } from 'zustand'

export interface Todo {
    id: string
    name: string
    creationDate: string
    completed: boolean
}

interface TodoState {
    todos: Todo[]
    addTodo: (todo: Todo) => void
    removeTodo: (id: string) => void
    toggleTodo: (id: string) => void
    completedTodos: () => void
    incompletedTodos: () => void
}

export const useTodoState = create<TodoState>((set) => ({
    todos: [],
    addTodo: (todo: Todo) => set((state) => ({
        todos: [...state.todos, todo]
    })),
    removeTodo: (id: string) => set(state => ({
        todos: state.todos.filter(todo => todo.id !== id)
    })),
    toggleTodo: (id: string) => set(state => ({
        todos: toggleTodos(state, id)
    })),
    completedTodos: () => set(state => ({
        todos: state.todos.filter(todo => todo.completed)
    })),
    incompletedTodos: () => set(state => ({
        todos: state.todos.filter(todo => !todo.completed)
    }))
}))

const toggleTodos = (state: TodoState, id: string) => {
    return state.todos.map(todo => {
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