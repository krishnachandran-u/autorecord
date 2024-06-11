const NewProject = () => {
    return (
        <div className = "fixed w-screen h-screen flex justify-center items-center top-0 left-0 bg-opacity-50 bg-slate-800 p-[24px]">
            <div className = "max-w-[700px] w-full bg-white rounded-xl p-[24px] sm:p-[32px] flex flex-col justify-between text-[18px] gap-[32px]">
                <div className = "sm:text-[32px] text-[24px] font-semibold">Create new project</div> 
                <div className = "flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[16px]">
                        <div>
                            <div>Project code: </div> 
                            <div className = "text-[12px] text-red-600">Only letters (a-z), numbers (0-9), and hyphen (-) are allowed</div>
                        </div>
                        <input type="text" pattern="[a-z0-9-]+" className="bg-slate-200 text-black h-[36px] rounded-lg p-[8px] max-w-[500px]"/>
                    </div> 
                    <div className="flex flex-col gap-[16px]">
                        <div>Project Name: </div> 
                        <input type="text" className="bg-slate-200 text-black h-[36px] rounded-lg p-[8px] max-w-[500px]"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProject;