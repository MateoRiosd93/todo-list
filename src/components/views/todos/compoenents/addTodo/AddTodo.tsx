import AddButton from '../add/addButton'
import { useAddTodo } from '../../../../../hooks/useAddTodo'

export default function AddTodo() {
    const { task, handleChange, saveTodo } = useAddTodo()

    return (
        <form
            className='w-screen flex justify-center items-center px-4 relative'
            onSubmit={saveTodo}
        >
            <input
                className='w-screen border border-gray-400 px-4 py-3 rounded-md focus:border-gray-600  outline-none'
                type='text'
                placeholder={`Write your todo's...`}
                value={task}
                onChange={handleChange}
            />
            <button>
                <AddButton />
            </button>
        </form>
    )
}
