import { SidebarHeader, SidebarNav, SidebarProfile } from './comp'
import { sidebarNavigation } from '../../data/navItems'

const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 border-r border-gray-400">
      <SidebarHeader/>
      <SidebarNav items={sidebarNavigation}/>
      <SidebarProfile/>
      
    </div>
  )
}

export default Sidebar
