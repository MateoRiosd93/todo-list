import AddButton from '../buttons/add-button'
import { useAddTodo } from '../../../../hooks/useAddTodo';

export default function AddTodo() {
    const { task, handleChange, saveTodo } = useAddTodo()

    return (
        <form
            className='w-full flex justify-center items-center px-4 relative'
            onSubmit={saveTodo}
        >
            <input
                className='w-full border bg-transparent text-slate-800 border-slate-300 px-4 py-3 rounded-md focus:border-gray-600  outline-none text-lg  dark:text-white'
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
