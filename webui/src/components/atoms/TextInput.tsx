import { Textarea } from "../ui/textarea";

const TextInput = (
    {id, name}:
    {id: string, name: string}
) => {
    return (
        <div className = "flex flex-row gap-[8px]">
            <div>{name}</div>
            <Textarea />
        </div>
    )
}

export default TextInput;