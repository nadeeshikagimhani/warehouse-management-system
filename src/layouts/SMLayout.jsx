import Sidebar from "../components/sidebar/Sidebar"
import TopNav from "../components/top-nav/TopNav"
import { sidebarNavigation, sidebarProfileSM, sidebarHeaderSM } from "../data/sidebars/sidebarNavSm"

const SMLayout = ({ children }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar nav={sidebarNavigation} profile={sidebarProfileSM} header={sidebarHeaderSM}/>

      <div className="flex-1 bg-gray-100">
        <TopNav />
        <div className="p-10">
          {children}
        </div>
      </div>
    </div>
  )
}

export default SMLayout