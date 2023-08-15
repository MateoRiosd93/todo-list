import { DarkButton } from './components/darkButton'
import { LightButton } from './components/lightButton'

interface Props {
    mode: boolean
}

export function Theme({ mode }: Props) {
    if (mode) {
        return <LightButton />
    }

    return <DarkButton />
}
