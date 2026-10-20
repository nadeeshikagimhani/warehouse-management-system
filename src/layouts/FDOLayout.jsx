import Sidebar from "../components/sidebar/Sidebar"
import TopNav from "../components/top-nav/TopNav"
import { sidebarNavigationFDO, sidebarProfileFDO, sidebarHeaderFDO } from "../data/sidebars/sidebarNavFDO"

const FDOLayout = ({children}) => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar nav={sidebarNavigationFDO} profile={sidebarProfileFDO} header={sidebarHeaderFDO}/>

      <div className="flex-1 bg-gray-100">
        <TopNav />
        <div className="p-10">
          {children}
        </div>
      </div>
    </div>
  )
}

export default FDOLayout