# Cash Compass - Customer Creation Dialog Specifications

## Overview

The Customer Creation dialog is a critical component of the Cash Compass financial management system that enables users to create comprehensive customer profiles for billing, invoicing, and relationship management.

## Business Requirements

### Primary Use Cases

1. **New Customer Onboarding** - Sales team adding new clients to the system
2. **Invoice Creation** - Finance team needs customer data for billing
3. **Revenue Tracking** - Analytics team requires customer segmentation data
4. **Compliance & Reporting** - Legal/Tax teams need complete customer information

### Business Logic & Field Requirements

## Tab 1: Basic Information

### Customer Type Selection **(Required)**

- **Field Type**: Radio button selection (Company/Individual)
- **Default**: Company
- **Business Logic**:
  - Determines form field visibility and validation rules
  - Affects invoice formatting and legal compliance requirements
  - Impacts tax reporting classifications
- **Why Required**: Legal and tax implications differ between business and individual customers

### Company Name / Full Name **(Required)**

- **Field Type**: Text input
- **Max Length**: 100 characters
- **Business Logic**:
  - Primary identifier for customer
  - Used as default display name on invoices
  - Required for all financial transactions
  - Must be unique in system (backend validation)
- **Why Required**: Legal requirement for invoicing and contract purposes

### Display Name _(Optional)_

- **Field Type**: Text input
- **Max Length**: 100 characters
- **Default**: Auto-populates from Company Name
- **Business Logic**:
  - Used on customer-facing documents (invoices, statements)
  - Allows for branded/shortened names
  - Falls back to Company Name if empty
- **Why Optional**: Not all customers need different display names

### Industry _(Optional)_

- **Field Type**: Dropdown selection
- **Options**: Technology, Healthcare, Finance, Retail, Manufacturing, Consulting, Education, Other
- **Business Logic**:
  - Used for customer segmentation and reporting
  - Helps with industry-specific pricing and terms
  - Analytics for market analysis
- **Why Optional**: Not critical for basic transactions but valuable for business intelligence

### Customer Size _(Optional)_

- **Field Type**: Dropdown selection
- **Options**: Startup (1-10), Small (11-50), Medium (51-200), Large (201-1000), Enterprise (1000+)
- **Business Logic**:
  - Determines support tier and pricing strategies
  - Used for sales territory assignment
  - Risk assessment for credit terms
- **Why Optional**: Helpful for relationship management but not transaction-critical

### Customer Reference/ID _(Optional)_

- **Field Type**: Text input
- **Max Length**: 50 characters
- **Business Logic**:
  - Internal tracking and integration with external systems
  - Useful for migrating from legacy systems
  - Cross-reference with CRM/ERP systems
- **Why Optional**: Internal organizational tool, not required for core functionality

### Notes _(Optional)_

- **Field Type**: Textarea
- **Max Length**: 500 characters
- **Business Logic**:
  - Store important customer context
  - Special handling instructions
  - Account history or preferences
- **Why Optional**: Supplementary information for better service delivery

## Tab 2: Contact Details

### Contact Name **(Required)**

- **Field Type**: Text input
- **Max Length**: 100 characters
- **Business Logic**:
  - Primary contact for all communications
  - Required for invoice delivery and payment discussions
  - Legal point of contact for contracts
- **Why Required**: Must have a responsible party for all business communications

### Job Title _(Optional)_

- **Field Type**: Text input
- **Max Length**: 100 characters
- **Business Logic**:
  - Helps with appropriate communication level
  - Useful for escalation procedures
  - Professional courtesy in correspondence
- **Why Optional**: Contact function more important than title

### Email Address **(Required)**

- **Field Type**: Email input with validation
- **Validation**: RFC 5322 email format
- **Business Logic**:
  - Primary method for invoice delivery
  - Required for automated payment reminders
  - Legal requirement for electronic communications
  - Unique constraint (one primary email per customer)
- **Why Required**: Essential for digital invoice delivery and automated communications

### Phone Number _(Optional)_

- **Field Type**: Phone input with formatting
- **Format**: (XXX) XXX-XXXX for US numbers
- **Business Logic**:
  - Secondary contact method
  - Used for urgent payment issues
  - Customer service and support calls
- **Why Optional**: Email is primary contact method, phone is backup

### Address Fields _(All Optional)_

- **Address Line 1**: Street address
- **Address Line 2**: Suite/apartment details
- **City**: Municipality
- **State/Province**: Administrative region
- **ZIP/Postal Code**: Postal identifier
- **Country**: Default to "United States"

**Business Logic for Address**:

- Required for physical goods delivery
- Needed for tax jurisdiction determination
- Legal requirement for certain contract types
- Used for geographic sales reporting

**Why Optional**: Many service-based customers don't require physical address for basic invoicing

## Tab 3: Billing & Settings

### Default Payment Terms **(System Default)**

- **Field Type**: Dropdown selection
- **Default**: Net 30
- **Options**: Net 7, Net 15, Net 30, Due on Receipt, Custom
- **Business Logic**:
  - Automatically applied to all new invoices
  - Affects cash flow projections
  - Risk management for different customer tiers
- **Why Defaulted**: Standardizes payment expectations and cash flow planning

### Preferred Currency **(System Default)**

- **Field Type**: Dropdown selection
- **Default**: USD
- **Options**: USD, EUR, GBP, CAD, AUD
- **Business Logic**:
  - All invoices created in this currency
  - Affects accounting and reporting
  - Required for international customers
- **Why Defaulted**: Prevents currency confusion and accounting errors

### Tax ID/VAT Number _(Optional)_

- **Field Type**: Text input
- **Max Length**: 50 characters
- **Business Logic**:
  - Required for B2B tax compliance
  - Needed for tax-exempt customers
  - Regulatory reporting requirements
- **Why Optional**: Not all customers have tax IDs, but critical when applicable

### Customer Settings Checkboxes

All checkboxes have business logic implications:

#### Auto-send Invoices **(Default: Checked)**

- **Business Logic**: Automates invoice delivery, reduces manual work
- **Impact**: Affects accounts receivable workflow

#### Send Payment Reminders **(Default: Checked)**

- **Business Logic**: Automated collections process, improves cash flow
- **Impact**: Reduces overdue accounts

#### Apply Tax by Default **(Default: Unchecked)**

- **Business Logic**: Determines tax calculation on invoices
- **Impact**: Compliance with local tax regulations

#### Preferred Customer **(Default: Unchecked)**

- **Business Logic**: Special pricing, priority support, extended terms
- **Impact**: Revenue and relationship management

### Customer Tags _(Optional)_

- **Field Type**: Dynamic tag input
- **Examples**: "Enterprise", "High-Value", "VIP", "Government"
- **Business Logic**:
  - Customer segmentation for reporting
  - Filtering and search capabilities
  - Marketing campaign targeting
- **Why Optional**: Organizational tool, not transaction-critical

## Technical Requirements

### Validation Rules

1. **Email uniqueness**: Must be unique across all customers
2. **Required field validation**: Cannot submit with empty required fields
3. **Email format validation**: Must be valid email format
4. **Phone formatting**: Auto-format US phone numbers
5. **Character limits**: Enforce maximum lengths for all text fields

### Data Storage Requirements

- **Customer ID**: Auto-generated UUID
- **Created timestamp**: System-generated
- **Created by**: User ID of creator
- **Last modified**: System-maintained
- **Status**: Active/Inactive flag

### Integration Points

1. **Invoice System**: Customer data auto-populates invoices
2. **Payment Processing**: Contact info for payment notifications
3. **Reporting System**: Customer data for analytics
4. **CRM Integration**: Sync with external customer management systems

### Security Considerations

- **PII Protection**: Email and phone are personally identifiable information
- **Access Control**: Role-based permissions for customer creation/editing
- **Audit Trail**: Log all customer data changes
- **Data Retention**: Comply with data protection regulations

## Success Criteria

1. **User Experience**: Form completion in under 3 minutes
2. **Data Quality**: 95% of required fields completed correctly
3. **System Integration**: Customer data immediately available in invoice creation
4. **Compliance**: All regulatory requirements met for customer data collection

## Error Handling

1. **Validation Errors**: Clear, specific error messages
2. **Network Issues**: Save draft and retry capability
3. **Duplicate Detection**: Warning for potential duplicate customers
4. **Required Field Guidance**: Visual indicators for incomplete required fields

## Future Enhancements

1. **Bulk Import**: CSV import for multiple customers
2. **Advanced Search**: Filter customers by multiple criteria
3. **Custom Fields**: Industry-specific additional fields
4. **API Integration**: External system customer sync
5. **Customer Portal**: Self-service customer information updates

This specification ensures the development team understands both the technical requirements and business value of each field, enabling them to make informed decisions during implementation and future enhancements.
