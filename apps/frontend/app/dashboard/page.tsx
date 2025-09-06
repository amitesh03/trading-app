import React from 'react'
import Charts from '@/components/Charts'
function Dashboard() {
  return (
    <div>
      <h1 className='text-2xl font-medium font p-4'>
        Welcome Back!Alex.

<div>

<Charts/>
</div>
      

        {/* Todo:
        Total Portfolio Value
        24h P&L (Profit & Loss)
        Active Positions
        Cash Balance
        Recent activity feed (last few trades/orders)
        Quick actions (e.g., "Buy Bitcoin", "View Markets")
        Mini charts (e.g., portfolio value trend over 7 days) */}
      </h1>
    </div>
  )
}

export default Dashboard