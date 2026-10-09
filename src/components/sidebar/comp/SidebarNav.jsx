import { sidebarNavigation } from "../../../data/navItems";

function SidebarNavItem({ item }) {
  const { label, icon: Icon, badge} = item;

  return (
    <li>
      <div className="flex items-center gap-3 w-full h-11 px-3 text-left text-md font-medium">
          <Icon className="size-5 shrink-0"/>
          <span>
            {label}
          </span>
          {badge && <span className="ml-auto bg-[#e85831] px-2 py-0.5 rounded-full text-white text-[12px]">{badge}</span>}
      </div>
    </li>
  )
}

const SidebarNav = () => {
  return (
    <div>
      <ul className="space-y-1">
        {sidebarNavigation.map((item)=>(
          <SidebarNavItem 
            key={item.label} 
            item={item} 
          />
        ))}
      </ul>
    </div>
  )
}

export default SidebarNav