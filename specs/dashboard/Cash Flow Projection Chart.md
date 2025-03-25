# Cash Flow Projection Chart Documentation

## Overview

The Cash Flow Projection chart is a critical financial visualization tool that forecasts your business's future cash position by combining current cash balances with expected inflows and outflows over time. This document explains its purpose, implementation, data sources, and best practices.

## Purpose and Benefits

### Strategic Importance

- **Cash Visibility**: Provides clear insight into future cash availability
- **Risk Mitigation**: Identifies potential cash shortages before they occur
- **Opportunity Identification**: Highlights periods of cash surplus for potential investment
- **Decision Support**: Informs timing of major purchases, hiring decisions, and financing needs

### Key Business Questions Answered

- When might we face a cash shortage?
- Do we have sufficient cash to meet upcoming obligations?
- When is the optimal time to make major expenditures?
- Do we need to accelerate collections or arrange financing?
- Is our cash position improving or deteriorating over time?

## Technical Implementation

### Data Structure

The Cash Flow Projection requires the following data points:

```javascript
// Example data structure
const cashFlowData = [
  {
    date: 'Today', // Date point for projection
    cashPosition: 152890, // Cumulative cash balance
    inflows: [], // Expected incoming cash for this date
    outflows: [], // Expected outgoing cash for this date
  },
  {
    date: 'Mar 25',
    cashPosition: 158740,
    inflows: [8750], // Customer payment expected
    outflows: [5000], // Tax payment due
  },
  // Additional future dates...
];
```

### Chart Configuration

The chart uses three distinct datasets:

1. **Cash Position Line**:

   - Continuous line showing projected cash balance
   - Uses data points from the `cashPosition` field
   - Typically shown with area fill for emphasis

2. **Expected Inflows**:

   - Point markers (no connecting lines)
   - Shows specific expected receipt dates and amounts
   - Represented by the `inflows` arrays

3. **Expected Outflows**:
   - Point markers (no connecting lines)
   - Shows specific expected payment dates and amounts
   - Represented by the `outflows` arrays

### Chart.js Implementation

```javascript
const cashFlowChart = new Chart(cashFlowCtx, {
  type: 'line',
  data: {
    labels: ['Today', 'Mar 25', 'Apr 1', 'Apr 8', 'Apr 15', 'Apr 22', 'Apr 30'],
    datasets: [
      {
        label: 'Cash Position',
        data: [152890, 158740, 167500, 162300, 175600, 168900, 182500],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.3,
      },
      {
        label: 'Expected Inflows',
        data: [0, 8750, 15000, 0, 20000, 0, 25000],
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: 0,
        pointBackgroundColor: 'rgb(16, 185, 129)',
        pointRadius: 5,
        showLine: false,
      },
      {
        label: 'Expected Outflows',
        data: [0, 5000, 0, 8000, 0, 12000, 0],
        borderColor: 'rgb(239, 68, 68)',
        borderWidth: 0,
        pointBackgroundColor: 'rgb(239, 68, 68)',
        pointRadius: 5,
        showLine: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Amount ($)',
        },
      },
    },
  },
});
```

## Data Sources and Calculation

### Primary Data Sources

1. **Current Cash Position**:

   - Bank account balances
   - Cash in hand
   - Short-term, highly liquid investments

2. **Accounts Receivable**:

   - Outstanding invoices with due dates
   - Recurring revenue subscriptions
   - Contracts with scheduled payments
   - Historical customer payment patterns

3. **Accounts Payable**:
   - Outstanding bills with due dates
   - Regular expenses (rent, utilities, payroll)
   - Scheduled loan payments
   - Planned purchases

### Calculation Methodology

```javascript
function calculateCashFlowProjection(currentCash, projectionDays = 90) {
  // Initialize results array with starting position
  const projections = [
    {
      date: new Date(),
      cashPosition: currentCash,
      inflows: [],
      outflows: [],
    },
  ];

  // Get expected transactions within the projection period
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + projectionDays);

  // Get expected revenues (filter for expected payment date, not invoice date)
  const expectedRevenues = getExpectedRevenues(new Date(), endDate);

  // Get expected expenses (filter for expected payment date, not expense date)
  const expectedExpenses = getExpectedExpenses(new Date(), endDate);

  // Combine and sort all transactions by date
  const allTransactions = [...expectedRevenues, ...expectedExpenses].sort(
    (a, b) => a.date - b.date
  );

  // Group transactions by date
  const transactionsByDate = groupByDate(allTransactions);

  // Generate daily cash positions
  let runningCashBalance = currentCash;

  for (const dateString of Object.keys(transactionsByDate).sort()) {
    const dateTransactions = transactionsByDate[dateString];

    const dayInflows = dateTransactions
      .filter((t) => t.type === 'revenue')
      .map((t) => t.amount);

    const dayOutflows = dateTransactions
      .filter((t) => t.type === 'expense')
      .map((t) => t.amount);

    // Calculate totals
    const totalInflow = dayInflows.reduce((sum, val) => sum + val, 0);
    const totalOutflow = dayOutflows.reduce((sum, val) => sum + val, 0);

    // Update running balance
    runningCashBalance += totalInflow - totalOutflow;

    // Add to projections
    projections.push({
      date: new Date(dateString),
      cashPosition: runningCashBalance,
      inflows: dayInflows.length > 0 ? dayInflows : [],
      outflows: dayOutflows.length > 0 ? dayOutflows : [],
    });
  }

  return projections;
}

// Helper function to get expected revenues
function getExpectedRevenues(startDate, endDate) {
  const revenues = [];

  // 1. Get open invoices with payment due dates in the period
  const openInvoices = db.invoices.filter(
    (inv) =>
      inv.status !== 'paid' &&
      inv.dueDate >= startDate &&
      inv.dueDate <= endDate
  );

  for (const invoice of openInvoices) {
    // Apply payment probability based on customer history and age
    const probability = calculatePaymentProbability(invoice);
    const expectedAmount = invoice.amount * probability;

    revenues.push({
      type: 'revenue',
      date: invoice.dueDate,
      amount: expectedAmount,
      source: `Invoice #${invoice.number}`,
      probability,
    });
  }

  // 2. Get recurring revenue entries
  const recurringRevenues = db.subscriptions.filter(
    (sub) => sub.status === 'active'
  );

  for (const subscription of recurringRevenues) {
    // Calculate next billing dates within the period
    const billingDates = getNextBillingDates(subscription, startDate, endDate);

    for (const date of billingDates) {
      revenues.push({
        type: 'revenue',
        date: date,
        amount: subscription.amount,
        source: `Subscription: ${subscription.name}`,
        probability: 0.95, // High probability for recurring revenue
      });
    }
  }

  // Add additional revenue sources...

  return revenues;
}

// Helper function to get expected expenses
function getExpectedExpenses(startDate, endDate) {
  const expenses = [];

  // 1. Get scheduled bills due in the period
  const bills = db.bills.filter(
    (bill) =>
      bill.status !== 'paid' &&
      bill.dueDate >= startDate &&
      bill.dueDate <= endDate
  );

  for (const bill of bills) {
    expenses.push({
      type: 'expense',
      date: bill.dueDate,
      amount: bill.amount,
      source: `Bill: ${bill.vendor}`,
    });
  }

  // 2. Get recurring expenses
  const recurringExpenses = db.recurringExpenses.filter(
    (exp) => exp.status === 'active'
  );

  for (const recurring of recurringExpenses) {
    // Calculate next payment dates within the period
    const paymentDates = getNextPaymentDates(recurring, startDate, endDate);

    for (const date of paymentDates) {
      expenses.push({
        type: 'expense',
        date: date,
        amount: recurring.amount,
        source: `Recurring: ${recurring.description}`,
      });
    }
  }

  // 3. Get planned payments (taxes, bonuses, etc.)
  const plannedPayments = db.plannedPayments.filter(
    (payment) => payment.date >= startDate && payment.date <= endDate
  );

  for (const payment of plannedPayments) {
    expenses.push({
      type: 'expense',
      date: payment.date,
      amount: payment.amount,
      source: payment.description,
    });
  }

  return expenses;
}
```

## Best Practices for Cash Flow Projections

### Accuracy Improvements

1. **Use Probability Weighting**:

   - Apply confidence factors to expected payments based on:
     - Customer payment history
     - Invoice age
     - Economic conditions
     - Industry patterns

2. **Account for Timing Variations**:

   - Adjust for customer payment patterns (historically early/late)
   - Include buffer days for check clearing and fund availability
   - Consider weekend/holiday impacts on payment processing

3. **Include Buffer Amounts**:
   - Add contingency for unexpected expenses
   - Include cushion for payment timing delays
   - Account for potential refunds or returns

### Update Frequency

- **Weekly Updates**: For businesses with tight cash flow or high transaction volume
- **Bi-Weekly Updates**: For stable businesses with moderate transaction volume
- **Monthly Updates**: Minimum recommendation for all businesses

### Time Horizon Recommendations

- **Short-term (30 days)**: Detailed daily projections
- **Medium-term (90 days)**: Weekly or bi-weekly projections
- **Long-term (12 months)**: Monthly projections

## Dashboard Integration

### Connections to Other Financial Reports

- **Income Statement**: Provides revenue and expense forecasts
- **Balance Sheet**: Provides current cash position baseline
- **Accounts Receivable Aging**: Informs expected inflow timing
- **Accounts Payable Report**: Informs expected outflow timing

### Interactive Features

- **Date Range Selector**: Allow users to adjust projection timeframe
- **Scenario Testing**: Enable "what-if" simulations for different payment timings
- **Drill-Down**: Provide detailed breakdown of specific date's cash movements
- **Threshold Alerts**: Highlight dates where cash falls below defined thresholds

## Data Maintenance Recommendations

### Regular Review Process

1. Update current cash balances (daily ideal, weekly minimum)
2. Verify upcoming known transactions (weekly)
3. Review and adjust probability factors (monthly)
4. Validate projections against actual cash flow (monthly)
5. Refine projection model based on accuracy analysis (quarterly)

### Data Quality Checks

- Verify that all recurring transactions are included
- Check for duplicate transactions
- Confirm that large, irregular expenses are accounted for
- Validate that seasonal patterns are properly reflected

## Conclusion

The Cash Flow Projection chart transforms raw financial data into actionable intelligence about your business's future liquidity. By combining current cash position with expected cash movements, it provides critical foresight for financial planning and risk management. Regular maintenance and consistent methodology will ensure this tool remains one of the most valuable components of your financial dashboard.
