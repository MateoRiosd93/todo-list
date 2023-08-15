import { DoneButton } from '../done-button'
import { PendingButton } from '../pending-button'

interface Props {
    completed: boolean
}

export function ToggleButton({ completed }: Props) {
    if (completed) {
        return <DoneButton />
    }

    return <PendingButton />
}
