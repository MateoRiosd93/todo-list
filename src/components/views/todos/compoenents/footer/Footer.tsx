import { useTodoState } from "../../../../../store/todoState"

export default function Footer() {
    const { completedTodos, pendingTodos, allTodos } = useTodoState()

    return (
        <footer className="w-screen flex justify-end">
            <div>
                <span onClick={allTodos} className="px-2 py-1 mx-1 font-extralight text-lg">All</span>
                <span onClick={completedTodos} className="px-2 py-1 mx-1 font-extralight text-lg">Completed</span>
                <span onClick={pendingTodos} className="px-2 py-1 mx-1 font-extralight text-lg">Pending</span>
            </div>
        </footer>
    )
}
