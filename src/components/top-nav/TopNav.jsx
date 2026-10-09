import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"

const TopNav = () => {

  const navigate = useNavigate();


  return (
    <div className="flex items-center justify-between px-10 md:px-30 h-16 bg-background">
      <div className="font-bold text-xl cursor-pointer" onClick={() => navigate("/")}>StockFlow</div>

      <Button onClick={() => navigate("/login")}>Login</Button>
    </div>
  )
}

export default TopNav