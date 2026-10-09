import { BarChart3, ClipboardList, PackageCheck, RotateCcw  } from "lucide-react";

export const sidebarNavigation = [

  { 
    label: "Stock Summary", 
    icon: BarChart3,
    path: "/stock-summary",
    activePaths: ["/", "/stock-summary"]
  },

  { 
    label: "Stock Requests",
    icon: ClipboardList,
    badge: 3,
    path: "/stock-requests"
  },

  { 
    label: "Distribution Runs",
    icon: PackageCheck,
    path: "/distribution-runs" 
  },

  { 
    label: "Return Approvals",
    icon: RotateCcw,
    badge: 2,
    path: "/return-approvals"
  }

];