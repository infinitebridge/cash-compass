# cash-compass

## Overview

cash-compass is a comprehensive financial management platform designed for small and medium businesses. Built with modern technologies including React, NestJS, and GraphQL, it provides a complete solution for expense tracking, revenue management, budgeting, and financial reporting.

### Key Features

- **Dashboard & Analytics**: Real-time financial insights and cash flow projections
- **Expense Management**: Track, categorize, and analyze business expenditures
- **Revenue Tracking**: Monitor income streams and customer relationships
- **Invoice Management**: Create and manage customer invoices
- **Budget Planning**: Set and monitor financial targets
- **Financial Reporting**: Generate comprehensive financial reports

## Project Architecture

This is an [Nx workspace](https://nx.dev) with the following structure:

- **Frontend**: React application with TypeScript and Tailwind CSS
- **Backend**: NestJS API with PostgreSQL database
- **UI Components**: Shared component library with Storybook
- **Blocks**: Reusable UI blocks and components
- **Utils**: Shared utility functions and helpers

## Documentation

### Core Specifications

- [Project Overview](./specs/core/overview.md) - High-level project description and architecture
- [Expense & Revenue Management](./specs/core/expense%20&%20Revenue%20Management.md) - Core financial management concepts
- [User Stories](./specs/core/user%20stories%20for%20expense%20&%20revenue%20management.md) - Detailed user stories and requirements
- [Categories vs Sources](./specs/core/category%20vs%20source.md) - Understanding categorization in the system
- [Transactions vs Revenue](./specs/core/transactions%20vs%20revenue.md) - Data model relationships
- [Tax Management](./specs/core/deductible%20vs.%20non-deductible%20taxes.md) - Tax handling and categorization
- [Status Types](./specs/core/status%20types.md) - System status definitions

### Feature Specifications

#### Dashboard

- [Cash Flow Projection Chart](./specs/dashboard/Cash%20Flow%20Projection%20Chart.md) - Dashboard analytics and projections

#### Expenses

- [Expense Creation UI](./specs/expenses/create-ui-doc.md) - Expense entry interface design
- [Expense User Stories](./specs/expenses/create-user-story.md) - Expense management workflows

#### Customers

- [Customer Creation Dialog](./specs/customers/Cash%20Compass%20-%20Customer%20Creation%20Dialog%20Specifications.md) - Customer management interface
