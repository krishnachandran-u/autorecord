import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

const Options = () => {
    return (
        <div className = "border-2 border-slate-600 lg:w-fit w-full p-[24px] rounded-xl bg-slate-600 text-white gap-[24px] flex flex-col h-fit">
            <div className = "flex flex-row items-center gap-[32px] justify-between">
              <div className = "whitespace-nowrap">project name</div>
              <Input type = "text" className = "bg-slate-600" />
            </div>
            <div className = "flex flex-row items-center gap-[32px] justify-between">
              <div className = "whitespace-nowrap">enforce <b>Times New Roman</b></div>
              <Switch />
            </div>
            <div className = "flex flex-row items-center gap-[32px] justify-between">
              <div className = "md:whitespace-nowrap">use monospace font for code stubs</div>
              <Switch />
            </div>
            <div className = "flex flex-row justify-between items-center gap-[32px]">
              <button className = "flex-1 bg-white p-[12px] border-white border-2 text-black rounded-lg hover:scale-110 hover:bg-slate-600 hover:text-white transition-all duration-300">save</button>
                <button className = "flex-1 bg-white p-[12px] border-white border-2 text-black rounded-lg hover:scale-110 hover:bg-slate-600 hover:text-white transition-all duration-300">get</button>
            </div>
        </div> 
    )
}

export default Options;