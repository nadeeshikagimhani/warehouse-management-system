import { BarChart2Icon } from "lucide-react"


const SidebarHeader = () => {
  return (
    <div className="flex gap-3 h-16 items-center px-5 border-b">

      <div className="flex shadow-2xl justify-center items-center rounded-lg size-10 bg-[#e85831] text-white">
        <BarChart2Icon className="size-6" strokeWidth={2.25}/>
      </div>
      
      <div className="leading-tight">
        <p className="text-md font-semibold text-foreground">Stock Flow</p>
        <p className="text-[11px] text-muted-foreground">Destribution System</p>
      </div>

    </div>
  )
}

export default SidebarHeader