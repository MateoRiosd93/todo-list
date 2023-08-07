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
    pendingTodos: () => void
    allTodos: () => void
}

export const useTodoState = create<TodoState>((set) => ({
    todos: [
        {
            id: "1234",
            name: "Estudiar React",
            creationDate: "2020/02/12",
            completed: true
        },
        {
            id: "3424",
            name: "Estudiar ECMAScript",
            creationDate: "2020/02/12",
            completed: true
        },
        {
            id: "1242",
            name: "Estudiar Nodejs",
            creationDate: "2020/02/12",
            completed: false
        },
    ],
    addTodo: (todo: Todo) => set((state) => ({
        todos: [...state.todos, todo]
    })),
    removeTodo: (id: string) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
    })),
    toggleTodo: (id: string) => set(state => ({
        todos: toggleTodos(state, id)
    })),
    completedTodos: () => set(state => ({
        todos: state.todos.filter(todo => todo.completed)
    })),
    pendingTodos: () => set(state => ({
        todos: state.todos.filter(todo => !todo.completed)
    })),
    allTodos: () => set(state => ({ todos: state.todos }))
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