import { DarkButton } from './darkButton'
import { LightButton } from './lightButton'

interface Props {
    mode: boolean
}

export function Theme({ mode }: Props) {
    if (mode) {
        return <LightButton />
    }

    return <DarkButton />
}
