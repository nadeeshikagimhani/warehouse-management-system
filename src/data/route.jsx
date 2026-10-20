import * as Pages from "../pages"

export const routes = [

  //Authentication
  {
    route: "/login",
    title: "Login",
    page: <Pages.Login/>
  },
  {
    route: "/sign-up",
    title: "Sign Up",
    page: <Pages.Signup/>
  },

  // Stock Manager
  {
    route: "/",
    title: "Stock Summary",
    page: <Pages.StockSummary/>
  },
  {
    route: "/not-found",
    title: "Not Found",
    page: <Pages.NotFoundPage/>
  },
  {
    route: "/distribution-runs",
    title: "Distribution Runs",
    page: <Pages.DistributionRuns/>
  },
  {
    route: "/stock-requests",
    title: "Stock Requests",
    page: <Pages.StockRequests/>
  },
  {
    route: "/stock-summary",
    title: "Stock Summary",
    page: <Pages.StockSummary/>
  },
  {
    route: "/return-approvals",
    title: "Return Approvals",
    page: <Pages.ReturnApprovals/>
  },

  // FDO
  {
    route: "/fdo",
    title: "Stock Requests",
    page: <Pages.FDOStockRequest/>
  },
  {
    route: "/fdo/stock-requests",
    title: "Stock Requests",
    page: <Pages.FDOStockRequest/>
  },
  {
    route: "/fdo/distribution",
    title: "Distributions",
    page: <Pages.FDODistribution/>
  },
  {
    route: "/fdo/run-history",
    title: "Run History",
    page: <Pages.FDORunHistory/>
  },

]