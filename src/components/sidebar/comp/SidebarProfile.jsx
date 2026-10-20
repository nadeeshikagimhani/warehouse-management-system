import { UserRound } from "lucide-react"

const SidebarProfile = ({profile}) => {
  return (
    <div className="px-4 py-4 mt-auto border-t border-border">
      <div className="flex gap-3 items-center">

        <div className="bg-[#fdf1ed] text-[#a63d1d] rounded size-8 flex items-center justify-center">
          <UserRound className="size-4" strokeWidth={1.5}/>
        </div>

        <div className="leading-tight">

          <div className="truncate text-xs font-medium text-foreground">{profile.name}</div>
          <div className="truncate mt-0.5 text-[11px] text-muted-foreground">{profile.role}</div>
          <div className="truncate text-[10px] mt-0.5 text-muted-foreground">{profile.detail}</div>

        </div>

      </div>
      
    </div>
  )
}

export default SidebarProfile