import { SidebarHeader, SidebarNav, SidebarProfile } from './comp'

const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 border-r border-gray-400">
      <SidebarHeader/>
      <SidebarNav/>
      <SidebarProfile/>
      
    </div>
  )
}

export default Sidebar
