# Financial Transaction Classification Specification

## Overview

This specification defines the distinction between **Category** and **Source** fields in the Cash Compass financial management system to ensure consistent data classification and reporting.

## Field Definitions

### Category

**Purpose**: Classifies the type/nature of the financial transaction  
**Data Type**: Predefined enumeration (dropdown selection)  
**Required**: Yes  
**Scope**: Business logic classification for reporting and analytics

### Source

**Purpose**: Identifies the origin entity of the transaction  
**Data Type**: String (with optional predefined suggestions)  
**Required**: Yes for Revenue, Optional for Expenses  
**Scope**: Entity tracking for relationship management

---

## Revenue Transaction Specification

### Revenue Category

| Value                  | Display Name         | Description                                        |
| ---------------------- | -------------------- | -------------------------------------------------- |
| `product_sales`        | Product Sales        | Revenue from selling physical/digital products     |
| `service_revenue`      | Service Revenue      | Revenue from consulting, professional services     |
| `subscription_revenue` | Subscription Revenue | Recurring revenue from subscriptions/SaaS          |
| `licensing_revenue`    | Licensing Revenue    | Revenue from licensing IP, software, content       |
| `other_income`         | Other Income         | Miscellaneous revenue not fitting other categories |

### Revenue Source

- **Field Type**: Customer/Client entity
- **Examples**: "ABC Inc", "XYZ Corporation", "Global Solutions Ltd"
- **Validation**: Must be existing customer or create new customer record
- **Relationship**: Links to Customer Management system

---

## Expense Transaction Specification

### Expense Category

| Value                    | Display Name             | Description                                     |
| ------------------------ | ------------------------ | ----------------------------------------------- |
| `office_supplies`        | Office Supplies          | Paper, pens, furniture, basic office materials  |
| `travel_accommodation`   | Travel & Accommodation   | Business travel, hotels, transportation         |
| `software_subscriptions` | Software & Subscriptions | SaaS tools, software licenses, digital services |
| `marketing_advertising`  | Marketing & Advertising  | Ads, campaigns, promotional materials           |
| `professional_services`  | Professional Services    | Legal, accounting, consulting fees              |
| `rent_utilities`         | Rent & Utilities         | Office rent, electricity, internet, phone       |
| `equipment_maintenance`  | Equipment & Maintenance  | Hardware, repairs, equipment purchases          |
| `meals_entertainment`    | Meals & Entertainment    | Business meals, client entertainment            |
| `insurance`              | Insurance                | Business insurance premiums                     |
| `taxes_fees`             | Taxes & Fees             | Government fees, business licenses              |

### Expense Source

- **Field Type**: Vendor/Supplier entity
- **Examples**: "Adobe", "Delta Airlines", "Staples", "Ocean Grill"
- **Validation**: Free text with autocomplete from existing vendors
- **Relationship**: Links to Vendor Management system

---

## Database Schema

### Revenue Table

```sql
CREATE TABLE revenues (
    id UUID PRIMARY KEY,
    amount DECIMAL(12,2) NOT NULL,
    revenue_category VARCHAR(50) NOT NULL, -- from revenue category enum
    customer_source VARCHAR(255) NOT NULL, -- customer name/ID
    customer_id UUID REFERENCES customers(id),
    description TEXT,
    transaction_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### Expense Table

```sql
CREATE TABLE expenses (
    id UUID PRIMARY KEY,
    amount DECIMAL(12,2) NOT NULL,
    expense_category VARCHAR(50) NOT NULL, -- from expense category enum
    vendor_source VARCHAR(255), -- vendor name
    vendor_id UUID REFERENCES vendors(id),
    description TEXT,
    transaction_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## API Specification

### Revenue Endpoints

#### POST /api/revenues

```json
{
  "amount": 5000.0,
  "revenue_category": "service_revenue",
  "customer_source": "XYZ Corporation",
  "customer_id": "uuid-here",
  "description": "Monthly consulting retainer",
  "transaction_date": "2025-03-21"
}
```

#### GET /api/revenues/categories

```json
{
  "categories": [
    {
      "value": "product_sales",
      "label": "Product Sales",
      "description": "Revenue from selling physical/digital products"
    }
  ]
}
```

### Expense Endpoints

#### POST /api/expenses

```json
{
  "amount": 59.99,
  "expense_category": "software_subscriptions",
  "vendor_source": "Adobe",
  "vendor_id": "uuid-here",
  "description": "Adobe Creative Cloud subscription",
  "transaction_date": "2025-03-17"
}
```

---

## UI Form Specifications

### Revenue Form Fields

```html
<!-- Required Fields -->
<label>Revenue Category *</label>
<select name="revenue_category" required>
  <option value="">Select category</option>
  <option value="product_sales">Product Sales</option>
  <option value="service_revenue">Service Revenue</option>
  <option value="subscription_revenue">Subscription Revenue</option>
  <option value="licensing_revenue">Licensing Revenue</option>
  <option value="other_income">Other Income</option>
</select>

<label>Customer *</label>
<select name="customer_source" required>
  <option value="">Select customer</option>
  <!-- Populated from customers API -->
</select>
```

### Expense Form Fields

```html
<!-- Required Fields -->
<label>Expense Category *</label>
<select name="expense_category" required>
  <option value="">Select category</option>
  <option value="office_supplies">Office Supplies</option>
  <option value="travel_accommodation">Travel & Accommodation</option>
  <option value="software_subscriptions">Software & Subscriptions</option>
  <!-- ... other options -->
</select>

<label>Vendor</label>
<input type="text" name="vendor_source" placeholder="Enter vendor name" />
```

---

## Reporting & Analytics

### Category-based Reports

- Revenue by Category (pie chart)
- Expense by Category (pie chart)
- Category trends over time
- Budget vs Actual by Category

### Source-based Reports

- Top Revenue Customers
- Top Expense Vendors
- Customer/Vendor payment histories
- Relationship profitability analysis

---

## Validation Rules

### Category Validation

- Must be from predefined enum values
- Case-insensitive matching
- Required field for all transactions

### Source Validation

- Revenue: Must reference existing customer or create new
- Expense: Free text, optional vendor linking
- Maximum 255 characters
- Trim whitespace, normalize formatting

---

## Migration Strategy

1. **Phase 1**: Update database schema to separate category/source
2. **Phase 2**: Update API endpoints to use new structure
3. **Phase 3**: Update UI forms and validation
4. **Phase 4**: Migrate existing data using mapping rules
5. **Phase 5**: Update reporting dashboards

This specification ensures clear separation of concerns between transaction classification (category) and entity relationships (source), enabling better data organization and more meaningful business intelligence.
