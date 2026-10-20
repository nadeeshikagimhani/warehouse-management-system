import DefaultLayout from "../../../layouts/DashboardLayout"
import GreetingBanner from "./com/GreetingBanner"
import MonthlyStockMovements from "./com/MonthlyStockMovements"
import ProductStocks from "./com/ProductStocks"
import StockOverview from "./com/StockOverview"
import StockSummaryFilters from "./com/StockSummaryFilters"


const StockSummary = () => {
  return (
    <DefaultLayout>
      <StockSummaryFilters/>
      <GreetingBanner/>
      <StockOverview/>
      <MonthlyStockMovements/>
      <ProductStocks/>
    </DefaultLayout>
  )
}

export default StockSummary