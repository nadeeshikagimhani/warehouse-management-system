import Sidebar from "../components/sidebar/Sidebar"
import TopNav from "../components/top-nav/TopNav"

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-200">
        <TopNav />
        <div className="p-10">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout