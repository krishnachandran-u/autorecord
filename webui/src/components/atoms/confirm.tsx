import { IoIosClose } from 'react-icons/io';
import { Urbanist } from 'next/font/google';

const font = Urbanist({subsets: ['latin']});

const Confirm = (
    { message, onConfirm, onCancel } : 
    { message: string, onConfirm: () => void, onCancel: () => void}
) => {
    return (
       <div className={`fixed w-screen h-screen flex justify-center items-center top-0 left-0 bg-opacity-50 bg-slate-800 ${font.className}`}>
            <div className="w-[300px] h-[150px] bg-white shadow-2xl z-[100] rounded-[16px] flex flex-col justify-between items-center p-[16px] gap-[8px] shadow-black">
                <div
                    className="flex justify-center items-center w-full h-full"
                >{message}</div>
                <div className = "flex flex-row justify-between items-center w-full gap-[16px]">
                    <button 
                        className = "flex-1 bg-red-500 text-white rounded-lg p-[8px] hover:bg-red-600 transition-all duration-300"
                        onClick={onConfirm}
                    >
                        Yes
                    </button>
                    <button 
                        className = "flex-1 bg-slate-200 rounded-lg p-[8px] hover:bg-slate-300 transition-all duration-300"
                        onClick={onCancel}
                    >
                        No
                    </button>
                </div>
            </div>
        </div> 
    )
}

export default Confirm;