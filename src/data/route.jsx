import 
{ 
  Login, 
  NotFoundPage, 
  DistributionRuns, 
  StockRequests,
  StockSummary,
  ReturnApprovals,
} from "../pages";

export const routes = [
  {
    route: "/",
    page: <StockSummary/>
  },
  {
    route: "/login",
    page: <Login/>
  },
  {
    route: "/not-found",
    page: <NotFoundPage/>
  },
  {
    route: "/distribution-runs",
    page: <DistributionRuns/>
  },
  {
    route: "/stock-requests",
    page: <StockRequests/>
  },
  {
    route: "/stock-summary",
    page: <StockSummary/>
  },
  {
    route: "/return",
    page: <ReturnApprovals/>
  }
]