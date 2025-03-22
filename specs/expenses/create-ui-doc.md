# FinanceFlow Expense Form Documentation

## Overview

The expense form is a core component of the FinanceFlow application that allows users to create, edit and manage expense records. This document provides technical specifications for developers implementing or modifying the expense form component.

## Form Structure

The expense form is organized into three tabs:

1. **Basic Info** - Essential information about the expense
2. **Details** - Additional information including receipt upload
3. **Allocation** - Project, department, and budget tracking information

## Form Validation Rules

### Basic Info Tab

- **Expense Date**: Required, must not be in the future
- **Amount**: Required, must be positive number with up to 2 decimal places
- **Vendor**: Required, min 2 chars, max 100 chars
- **Category**: Required, must be one of the predefined categories
- **Description**: Optional, max 500 chars

### Details Tab

- **Payment Method**: Optional, must be one of the predefined methods
- **Receipt File**: Optional, allowed formats: JPG, JPEG, PNG, PDF
- **Notes**: Optional, max 500 chars
- **Tax Deductible**: Optional boolean

### Allocation Tab

- **Project**: Optional, must be a valid project ID if provided
- **Department**: Optional, must be a valid department ID if provided
- **Tags**: Optional, each tag max 50 chars
- **Budget Tracking**: Optional boolean

## UI Components

### Form Fields

#### Basic Info Tab

- **Expense Date**: Date picker
- **Amount**: Currency input with $ prefix
- **Vendor**: Text input with autocomplete from previous vendors
- **Category**: Dropdown select with predefined categories
- **Description**: Textarea

#### Details Tab

- **Payment Method**: Dropdown select with predefined methods
- **Receipt**: File uploader with drag-and-drop support
- **Notes**: Textarea
- **Tax Deductible**: Checkbox

#### Allocation Tab

- **Project**: Dropdown select with loaded projects
- **Department**: Dropdown select with loaded departments
- **Tags**: Tag input with autocomplete
- **Budget Tracking**: Checkbox

## Predefined Values

### Categories

- Office Supplies
- Travel & Accommodation
- Software & Subscriptions
- Marketing & Advertising
- Professional Services
- Rent & Utilities
- Equipment & Maintenance
- Meals & Entertainment
- Other

### Payment Methods

- Credit Card
- Debit Card
- Bank Transfer
- Cash
- Check
- Company Card
- Reimbursement

## Workflow

1. User clicks "New Expense" button
2. Form opens with Basic Info tab active
3. User fills required fields and optional fields as needed
4. User can navigate between tabs via tab buttons or Next/Previous buttons
5. Form validates inputs on tab change and on submission
6. On successful submission, form closes and expense list updates
7. On error, validation messages appear and form stays open

## Events

The form dispatches the following events:

- `expense-created`: When an expense is successfully created
- `expense-updated`: When an expense is successfully updated
- `expense-form-closed`: When the form is closed

## Error Handling

- Field validation errors display inline below each field
- Server errors display at the top of the form
- Network errors show a toast notification

## Accessibility Requirements

- All form fields must have associated labels
- Error messages must be announced to screen readers
- Tab navigation must follow a logical order
- Form must be navigable with keyboard only
- Color is not the only indicator of state

## Mobile Considerations

- Form adapts to smaller screens with responsive layout
- Date picker optimized for mobile touch
- File upload supports mobile camera integration
- Tab navigation collapses to dropdown on very small screens

## Security Considerations

- All inputs must be sanitized server-side
- CSRF protection implemented in form submission
- File uploads validated for type, size, and content
- Rate limiting applied to form submissions
