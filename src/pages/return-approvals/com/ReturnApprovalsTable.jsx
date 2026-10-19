import { useState } from "react"

import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardHeader } from "../../../components/ui/card";
import { pendingReturnApprovals } from "../../../data/mock/return-approvals";

import PendingVerificationTable from "./pending-verification/PendingVerificationTable";
import AcceptedReturnsTable from "./accepted-returns/AcceptedReturnsTable";

const ReturnApprovalsTable = () => {

  const [view, setView] = useState("pending");
  const isPending = view === "pending";
  const isAccepted = view === "accepted";

  return (
    <Card className="gap-0 rounded-2xl py-0 shadow-none">
    <CardHeader className="border-b px-4 py-4">
      <div role="tablist" aria-label="Stock request views" className="flex w-fit rounded-xl bg-muted p-1">
        <Button
          type="button"
          role="tab"
          size="sm"
          variant={isPending ? "outline" : "ghost"}
          aria-selected={isPending}
          className={isPending ? "bg-background shadow-sm" : "text-muted-foreground"}
          onClick={() => setView("pending")}
        >
          Pending Requests
          <Badge className="bg-[#f25522] px-1.5 text-white">
            {pendingReturnApprovals.length}
          </Badge>
        </Button>

        <Button
          type="button"
          role="tab"
          size="sm"
          variant={isAccepted ? "outline" : "ghost"}
          aria-selected={isAccepted}
          className={isAccepted ? "bg-background shadow-sm" : "text-muted-foreground"}
          onClick={() => setView("accepted")}
        >
          Request History
        </Button>
      </div>
    </CardHeader>

    {isPending ?<PendingVerificationTable /> :<AcceptedReturnsTable />}
  </Card>
  )
}

export default ReturnApprovalsTable