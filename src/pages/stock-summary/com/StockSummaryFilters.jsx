import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"

import { monthOptions, warehouseOptions } from "../../../data/mock/stock-summary"

const StockSummaryFilters = () => {
  return (
    <div className="flex flex-wrap justify-end items-center gap-3">
      <Select items={warehouseOptions}  defaultValue="all">
        <SelectTrigger className="w-full max-w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>All Warehouses</SelectLabel>
            {warehouseOptions.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select items={monthOptions} defaultValue="2026-08">
        <SelectTrigger className="w-full max-w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select the Month</SelectLabel>
            {monthOptions.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default StockSummaryFilters