import { ClipboardList, History, Truck  } from "lucide-react";

export const sidebarNavigationFDO = [

  { 
    label: "Stock Requests",
    icon: ClipboardList,
    badge: 3,
    path: "/fdo/stock-requests",
    activePaths: ["/fdo", "/fdo/stock-requests"]
  },

  { 
    label: "Distributions",
    icon: Truck,
    path: "/fdo/distribution" 
  },

  { 
    label: "Run History",
    icon: History,
    path: "/fdo/run-history"
  }

];

export const sidebarProfileFDO = {
  name: "Pasindu Lakshan",
  role: "Field Distribution Officer",
  detail: "pasindulakshan@gmail.com"
}

export const sidebarHeaderFDO = {
  title: "Stock Flow",
  subtitle: "FDO Portal",
}