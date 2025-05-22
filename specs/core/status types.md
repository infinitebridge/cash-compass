# Status Types in Cash Compass

Based on the provided code files, I can identify the following status types used in the system:

## Revenue Status Types

1. **Received** - Payment has been completed/collected
2. **Expected** - Payment has been promised but not yet received
3. **Invoiced** - An invoice has been sent and payment is awaiting
4. **Overdue** - Payment is past the due date and hasn't been received
5. **Paid** - Payment has been received in full (used for invoices)

## Expense Status Types

1. **Draft** - Expense is saved but not submitted for approval
2. **Pending** - Expense is submitted and awaiting review/approval
3. **Approved** - Expense has been approved
4. **Rejected** - Expense has been declined/rejected

Each status type has a corresponding visual indicator (color-coded pill/badge) in the UI:

- Approved/Paid: Green (#D1FAE5 background, #065F46 text)
- Pending/Invoiced: Yellow/Blue (#FEF3C7/#EFF6FF background, #92400E/#1E40AF text)
- Rejected/Overdue: Red (#FEE2E2 background, #B91C1C text)
- Draft: Gray (#E5E7EB background, #374151 text)

These status types are used throughout the application to track the lifecycle of both revenue transactions and expenses.
