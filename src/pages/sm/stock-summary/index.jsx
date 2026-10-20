import SMLayout from "../../../layouts/SMLayout"
import GreetingBanner from "./com/GreetingBanner"
import MonthlyStockMovements from "./com/MonthlyStockMovements"
import ProductStocks from "./com/ProductStocks"
import StockOverview from "./com/StockOverview"
import StockSummaryFilters from "./com/StockSummaryFilters"


const StockSummary = () => {
  return (
    <SMLayout>
      <StockSummaryFilters/>
      <GreetingBanner/>
      <StockOverview/>
      <MonthlyStockMovements/>
      <ProductStocks/>
    </SMLayout>
  )
}

export default StockSummary