import { FiPlus } from "react-icons/fi";

const Exp = (
    {id, hasChildren}:
    {id: string, hasChildren: boolean}
) => {
    return (
        <div className={`flex flex-col gap-[2px] pl-[32px]`}>
            <div>experiment {id}</div>
            <div className="pl-[32px]">
                {hasChildren ? 
                    null
                    : 
                    <FiPlus color="red" className="hover:cursor-pointer" /> 
                }
            </div>
        </div>
    )
}

export default Exp;