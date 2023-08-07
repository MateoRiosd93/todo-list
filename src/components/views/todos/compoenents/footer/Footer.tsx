import { useTodoState } from "../../../../../store/todoState"

export default function Footer() {
    const { completedTodos, pendingTodos, allTodos } = useTodoState()

    return (
        <footer className="w-screen flex justify-end pb-1">
            <div>
                <span onClick={allTodos} className="px-2 py-1 mx-1 font-extralight text-xl">All</span>
                <span onClick={completedTodos} className="px-2 py-1 mx-1 font-extralight text-xl">Completed</span>
                <span onClick={pendingTodos} className="px-2 py-1 mx-1 font-extralight text-xl">Pending</span>
            </div>
        </footer>
    )
}
