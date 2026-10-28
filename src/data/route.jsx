import * as Pages from "../pages"
import { UserRole, RouteAccess } from "./access"

export const routes = [

  //Authentication
  {
    route: "/login",
    title: "Login",
    page: <Pages.Login/>,
    access: RouteAccess.PUBLIC,
  },
  {
    route: "/sign-up",
    title: "Sign Up",
    page: <Pages.Signup/>,
    access: RouteAccess.PUBLIC
  },
  {
    route: "/",
    title: "Home",
    page: <Pages.AuthContinue/>,
    access: RouteAccess.PROTECTED
  },
  {
    route: "/access-pending",
    title: "Access Pending",
    page: <Pages.AccessPending/>,
    access: RouteAccess.PROTECTED
  },
  {
    route: "/access-denied",
    title: "Access Denied",
    page: <Pages.AccessDenied/>,
    access: RouteAccess.PROTECTED
  },


  // Stock Manager
  {
    route: "/not-found",
    title: "Not Found",
    page: <Pages.NotFoundPage/>,
    access: RouteAccess.PUBLIC,
    allowedRole: UserRole.STOCK_MANAGER
  },
  {
    route: "/distribution-runs",
    title: "Distribution Runs",
    page: <Pages.DistributionRuns/>,
    access: RouteAccess.PROTECTED,
    allowedRole: UserRole.STOCK_MANAGER
  },
  {
    route: "/stock-requests",
    title: "Stock Requests",
    page: <Pages.StockRequests/>,
    access: RouteAccess.PROTECTED,
    allowedRole: UserRole.STOCK_MANAGER
  },
  {
    route: "/stock-summary",
    title: "Stock Summary",
    page: <Pages.StockSummary/>,
    access: RouteAccess.PROTECTED,
    allowedRole: UserRole.STOCK_MANAGER
  },
  {
    route: "/return-approvals",
    title: "Return Approvals",
    page: <Pages.ReturnApprovals/>,
    access: RouteAccess.PROTECTED,
    allowedRole: UserRole.STOCK_MANAGER
  },


  // FDO
  {
    route: "/fdo",
    title: "Stock Requests",
    page: <Pages.FDOStockRequests/>,
    access: RouteAccess.PROTECTED,
    allowedRole: UserRole.FDO
  },
  {
    route: "/fdo/stock-requests",
    title: "Stock Requests",
    page: <Pages.FDOStockRequests/>,
    access: RouteAccess.PROTECTED,
    allowedRole: UserRole.FDO
  },
  {
    route: "/fdo/distribution",
    title: "Distributions",
    page: <Pages.FDODistribution/>,
    access: RouteAccess.PROTECTED,
    allowedRole: UserRole.FDO
  },
  {
    route: "/fdo/run-history",
    title: "Run History",
    page: <Pages.FDORunHistory/>,
    access: RouteAccess.PROTECTED,
    allowedRole: UserRole.FDO
  },

]