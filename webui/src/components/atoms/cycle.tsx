import { FiPlus } from "react-icons/fi";

const Cycle = (
    {id, childCount}:
    {id: string, childCount: number}
) => {
    return (
        <div className = "flex flex-col gap-[2px]">
            <div>cycle {id}</div>
            <div className = "pl-[32px]">
                {childCount != 0 ? 
                    null
                    : 
                    <FiPlus color = "red" className = "hover:cursor-pointer" /> 
                }
            </div>
        </div>
    )
}

export default Cycle;