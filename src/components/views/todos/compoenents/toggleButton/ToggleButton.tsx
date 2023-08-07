import { DoneButton } from '../done/DoneButton'
import { PendingButton } from '../pending/PendingButton'

interface Props {
    completed: boolean
}

export function ToggleButton({ completed }: Props) {
    if (completed) {
        return <DoneButton />
    }

    return <PendingButton />
}
