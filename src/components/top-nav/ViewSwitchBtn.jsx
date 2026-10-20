import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom"

const ViewSwitchBtn = () => {

  const {pathname} = useLocation();
  const isFdoView = pathname.startsWith("/fdo");

  return (
    <Button
    type="button"
    variant="outline"
    aria-label={`Swith to ${isFdoView ? "Warehouse" : "FDO"} View`}
    title={`Switch to ${isFdoView ? "Warehouse" : "FDO"} View`}
    onClick={()=> window.location.replace(isFdoView ? "/" : "/fdo")}
    className="gap-2 rounded-lg border-border bg-white px-2.5 text-sm font-semibold">

      <span aria-hidden="true" className="w-2 h-2 bg-orange-600 rounded-full"></span>
      <span className="hidden sm:inline">{isFdoView ? "FDO view" : "SM View"}</span>
      <span className="sm:hidden">{isFdoView ? "FDO" : "SM"}</span>
      <ArrowRight aria-hidden="true" className="size-4"/>

    </Button>
  )
}

export default ViewSwitchBtn