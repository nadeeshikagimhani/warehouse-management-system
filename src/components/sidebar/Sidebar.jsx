import { SidebarHeader, SidebarNav, SidebarProfile } from './comp'

const Sidebar = ({nav, profile, header}) => {
  return (
    <div className="flex flex-col w-60 border-r border-gray-200 sticky top-0 h-screen z-40">
      <SidebarHeader header={header}/>
      <SidebarNav items={nav}/>
      <SidebarProfile profile={profile}/>
      
    </div>
  )
}

export default Sidebar
