import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"

const TopNav = () => {

  const navigate = useNavigate();


  return (
    <div className="flex items-center justify-between px-10  h-16 bg-background border-b border-b-gray-200 sticky top-0 z-50">
      <div className="font-semibold text-lg cursor-pointer" onClick={() => navigate("/")}>StockFlow</div>

      <Button onClick={() => navigate("/login")}>Login</Button>
    </div>
  )
}

export default TopNav