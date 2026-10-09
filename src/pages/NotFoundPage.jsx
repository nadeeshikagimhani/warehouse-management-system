import { BarChart2 } from "lucide-react"
import NotFound from "../layouts/NotFound"


const NotFoundPage = () => {
  return (
    <NotFound>

      <div className="text-center mt-50 md:w-2xl">

        <div className="flex gap-3 items-center justify-center mb-20">

          <div className="flex shadow-2xl justify-center items-center rounded-lg size-10 bg-[#e85831] text-white">
            <BarChart2 className="size-6" strokeWidth={2.25}/>
          </div>

          <div className="leading-tight">
            <p className="text-md font-semibold text-foreground">Stock Flow</p>
            <p className="text-[11px] text-muted-foreground">Destribution System</p>
          </div>

        </div>

        <h3 className="text-2xl md:text-5xl font-bold">
        The page you’re looking for can’t be found.
        </h3>
      </div>

    </NotFound>
  )
}

export default NotFoundPage