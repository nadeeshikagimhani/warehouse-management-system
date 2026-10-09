import TopNav from "../components/top-nav/TopNav"

const NotFound = ({children}) => {
  return (
    <div>
      <div>
      <TopNav/>
      </div>

      <div className="flex flex-col min-h-screen items-center bg-gray-100">
        {children}
      </div>
    </div>
  )
}

export default NotFound