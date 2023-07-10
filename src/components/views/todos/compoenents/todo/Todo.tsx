import DeleteButton from '../delete/DeleteButton'
import DoneButton from '../done/DoneButton'
import PendingButton from '../pending/PendingButton'

interface Props {
    name: string
    creationDate: string
    completed: boolean
}

export default function Todo({ name, creationDate, completed }: Props) {
    return (
        <div className='w-full flex items-center justify-between my-2 px-6 py-4 shadow-md rounded-md hover:bg-slate-100 transition-colors'>
            {completed ? <DoneButton /> : <PendingButton />}
            <div className='w-3/4 flex flex-col items-start justify-center'>
                <h3 className='font-normal'>{name}</h3>
                <p className='font-thin'>{creationDate}</p>
            </div>
            <DeleteButton />
        </div>
    )
}
