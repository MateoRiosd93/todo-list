import AddButton from '../add/addButton'

export default function AddTodo() {
    return (
        <form className='w-screen flex justify-center items-center px-4 relative'>
            <input
                className='w-screen border border-gray-400 px-4 py-3 rounded-md focus:border-gray-600  outline-none'
                type='text'
                placeholder='Write your tasks...'
            />
            <AddButton />
        </form>
    )
}
