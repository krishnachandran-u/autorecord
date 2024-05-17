import { FiPlus } from "react-icons/fi";

const Cycle = (
    {id, childCount}:
    {id: string, childCount: number}
) => {
    return (
        <div className = "flex flex-col gap-[2px]">
            <div>cycle {id}</div>
            <div className = "pl-[32px]">
                <FiPlus color = "red" className = "hover:cursor-pointer" /> 
            </div>
            <FiPlus color = "red" className = "hover:cursor-pointer" /> 
        </div>
    )
}

export default Cycle;