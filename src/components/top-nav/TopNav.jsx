import { Button } from "../ui/button"
import { useLocation, useNavigate } from "react-router-dom"

import ViewSwitchBtn from "./ViewSwitchBtn";
import { routes } from "@/data/route";

const TopNav = () => {

  const navigate = useNavigate();
  const {pathname} = useLocation();
  const pageTitle = routes.find(({ route }) => route === pathname)?.title;


  return (
    <header className="flex items-center justify-between px-10  h-16 bg-background border-b border-b-gray-200 sticky top-0 z-50">
        <h1 className="min-w-0 truncate font-semibold text-lg text-foreground">{pageTitle}</h1>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <ViewSwitchBtn/>
          <Button onClick={() => navigate("/login")}>Login</Button>
        </div>
    </header>
  )
}

export default TopNav