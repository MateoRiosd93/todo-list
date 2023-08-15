import DeleteButton from '../buttons/delete-button'
import { ToggleButton } from '../buttons/toggle-button'
import { useTodoState } from '../../../../store/todoState';

interface Props {
    id: string
    name: string
    creationDate: string
    completed: boolean
}

export default function Todo({ id, name, creationDate, completed }: Props) {
    const { removeTodo, toggleTodo } = useTodoState()

    return (
        <div className='w-full flex items-center justify-between my-3 px-6 py-4 shadow-sm rounded-md hover:bg-slate-100 transition-colors dark:bg-slate-100 dark:shadow-slate-100'>
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
