import { useText } from "../../../hooks/useText"

export const TextRow = () => {
    return <div style={{padding: '3%'}}>
        {useText()}
    </div>
}