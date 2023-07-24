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
}

export const useTodoState = create<TodoState>((set) => ({
    todos: [],
    addTodo: (todo: Todo) => set((state) => ({
        todos: [...state.todos, todo]
    })),
    removeTodo: (id: string) => set(state => ({
        todos: state.todos.filter(todo => todo.id !== id)
    }))
}))