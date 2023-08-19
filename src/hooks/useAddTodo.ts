import { useState } from "react"
import { Todo, useTodoState } from "../store/todoState"

export function useAddTodo() {
    const [task, setTask] = useState('')
    const { addTodo } = useTodoState()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value)
    }

    const saveTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (task) {
            const newTodo: Todo = {
                id: Date.now().toString(),
                name: task,
                creationDate: new Date().toDateString(),
                completed: false,
            }
            addTodo(newTodo)
        }

        setTask('')
    }

    return {
        task,
        handleChange,
        saveTodo
    }

}