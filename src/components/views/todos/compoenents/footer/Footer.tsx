import { useState } from 'react'
import { useTodoState } from '../../../../../store/todoState'

interface State {
    all: boolean
    completed: boolean
    pending: boolean
}

const INITIAL_STATE: State = {
    all: true,
    completed: false,
    pending: false,
}

const COMPLETED_STATE: State = {
    all: false,
    completed: true,
    pending: false,
}

const PENDING_STATE: State = {
    all: false,
    completed: false,
    pending: true,
}

enum Filters {
    all = 'All',
    completed = 'Completed',
    pending = 'Pending',
}

export default function Footer() {
    const { completedTodos, pendingTodos, allTodos } = useTodoState()

    const [isActive, setIsActive] = useState<State>(INITIAL_STATE)

    const { all, completed, pending } = isActive

    const handleFilter = (value: string) => {
        if (value === Filters.completed) {
            setIsActive(COMPLETED_STATE)
            completedTodos()
            return
        }

        if (value === Filters.pending) {
            setIsActive(PENDING_STATE)
            pendingTodos()
            return
        }

        setIsActive(INITIAL_STATE)
        allTodos()
        return
    }

    return (
        <footer className='w-screen flex justify-end pb-1'>
            <div>
                <span
                    onClick={() => handleFilter(Filters.all)}
                    className={`px-2 py-1 mx-1 font-extralight text-xl ${
                        all ? 'underline' : ''
                    }`}
                >
                    All
                </span>
                <span
                    onClick={() => handleFilter(Filters.completed)}
                    className={`px-2 py-1 mx-1 font-extralight text-xl ${
                        completed ? 'underline' : ''
                    }`}
                >
                    Completed
                </span>
                <span
                    onClick={() => handleFilter(Filters.pending)}
                    className={`px-2 py-1 mx-1 font-extralight text-xl ${
                        pending ? 'underline' : ''
                    }`}
                >
                    Pending
                </span>
            </div>
        </footer>
    )
}
