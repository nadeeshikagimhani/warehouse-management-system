import * as Pages from "../pages"

export const routes = [

  //Authentication
  {
    route: "/login",
    page: <Pages.Login/>
  },
  {
    route: "/sign-up",
    page: <Pages.Signup/>
  },

  // Stock Manager
  {
    route: "/",
    page: <Pages.StockSummary/>
  },
  {
    route: "/not-found",
    page: <Pages.NotFoundPage/>
  },
  {
    route: "/distribution-runs",
    page: <Pages.DistributionRuns/>
  },
  {
    route: "/stock-requests",
    page: <Pages.StockRequests/>
  },
  {
    route: "/stock-summary",
    page: <Pages.StockSummary/>
  },
  {
    route: "/return-approvals",
    page: <Pages.ReturnApprovals/>
  },

  // FDO
  {
    route: "/fdo",
    page: <Pages.FDOStockRequest/>
  },
  {
    route: "/fdo/stock-requests",
    page: <Pages.FDOStockRequest/>
  },
  {
    route: "/fdo/distribution",
    page: <Pages.FDODistribution/>
  },
  {
    route: "/fdo/run-history",
    page: <Pages.FDORunHistory/>
  },

]