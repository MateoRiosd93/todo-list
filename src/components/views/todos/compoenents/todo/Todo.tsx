import { useTodoState } from '../../../../../store/todoState'
import DeleteButton from '../delete/DeleteButton'
import { ToggleButton } from '../toggleButton/ToggleButton'

interface Props {
    id: string
    name: string
    creationDate: string
    completed: boolean
}

export default function Todo({ id, name, creationDate, completed }: Props) {
    const { removeTodo, toggleTodo } = useTodoState()

    return (
        <div className='w-full flex items-center justify-between my-2 px-6 py-4 shadow-md rounded-md hover:bg-slate-100 transition-colors'>
            <button onClick={() => toggleTodo(id)}>
                <ToggleButton completed={completed} />
            </button>
            <div className='w-3/4 flex flex-col items-start justify-center'>
                <h3
                    className={`font-normal ${completed ? 'line-through' : ''}`}
                >
                    {name}
                </h3>
                <p className='font-thin'>{creationDate}</p>
            </div>
            <button onClick={() => removeTodo(id)}>
                <DeleteButton />
            </button>
        </div>
    )
}
