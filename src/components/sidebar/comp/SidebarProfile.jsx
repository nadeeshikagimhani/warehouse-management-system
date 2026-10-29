/*
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
*/

import { UserRound } from "lucide-react";
import { useUser } from "@clerk/react";

const roleLabel = {
  "stock-manager": "Stock Manager",
  "fdo": "Field Distribution Officer",
};

function SidebarProfile() {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress || "";
  const name = user?.fullName || email || "StockFlow user";
  const role = roleLabel[user?.publicMetadata?.role] || "Access pending";

  return (
    <div className="mt-auto border-t border-border px-4 py-2 lg:py-4">
      <div className="flex items-center gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#fdf1ed] text-[#a63d1d]">
          <UserRound aria-hidden="true" className="size-4" strokeWidth={1.8} />
        </div>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-xs font-medium text-foreground">{name}</p>
          <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
            {role}
          </p>
          <p className="mt-0.5 truncate text-[10px] text-muted-foreground">
            {email}
          </p>
        </div>
      </div>
    </div>
  );
}


export default SidebarProfile;