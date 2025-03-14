import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  category_transaction_type_enum: any;
  jsonb: any;
  numeric: any;
  person_role_enum: any;
  project_type_enum: any;
  timestamp: any;
  timestamptz: any;
  transaction_type_enum: any;
  user_business_role_enum: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['Boolean']>;
  readonly _gt?: InputMaybe<Scalars['Boolean']>;
  readonly _gte?: InputMaybe<Scalars['Boolean']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['Boolean']>;
  readonly _lte?: InputMaybe<Scalars['Boolean']>;
  readonly _neq?: InputMaybe<Scalars['Boolean']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['Int']>;
  readonly _gt?: InputMaybe<Scalars['Int']>;
  readonly _gte?: InputMaybe<Scalars['Int']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['Int']>;
  readonly _lte?: InputMaybe<Scalars['Int']>;
  readonly _neq?: InputMaybe<Scalars['Int']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['String']>;
  readonly _gt?: InputMaybe<Scalars['String']>;
  readonly _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  readonly _ilike?: InputMaybe<Scalars['String']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  readonly _iregex?: InputMaybe<Scalars['String']>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  readonly _like?: InputMaybe<Scalars['String']>;
  readonly _lt?: InputMaybe<Scalars['String']>;
  readonly _lte?: InputMaybe<Scalars['String']>;
  readonly _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  readonly _nilike?: InputMaybe<Scalars['String']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  readonly _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  readonly _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  readonly _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  readonly _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  readonly _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  readonly _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "account" */
export type Account = {
  readonly __typename?: 'account';
  readonly archived: Scalars['Boolean'];
  /** An object relationship */
  readonly business?: Maybe<Business>;
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at: Scalars['timestamp'];
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  /** An array relationship */
  readonly transactions: ReadonlyArray<Transaction>;
  /** An aggregate relationship */
  readonly transactions_aggregate: Transaction_Aggregate;
  readonly updated_at: Scalars['timestamp'];
  readonly uuid: Scalars['uuid'];
};

/** columns and relationships of "account" */
export type AccountTransactionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
  readonly __typename?: 'account_aggregate';
  readonly aggregate?: Maybe<Account_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Account>;
};

export type Account_Aggregate_Bool_Exp = {
  readonly bool_and?: InputMaybe<Account_Aggregate_Bool_Exp_Bool_And>;
  readonly bool_or?: InputMaybe<Account_Aggregate_Bool_Exp_Bool_Or>;
  readonly count?: InputMaybe<Account_Aggregate_Bool_Exp_Count>;
};

export type Account_Aggregate_Bool_Exp_Bool_And = {
  readonly arguments: Account_Select_Column_Account_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Account_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Account_Aggregate_Bool_Exp_Bool_Or = {
  readonly arguments: Account_Select_Column_Account_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Account_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Account_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Account_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Account_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  readonly __typename?: 'account_aggregate_fields';
  readonly avg?: Maybe<Account_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Account_Max_Fields>;
  readonly min?: Maybe<Account_Min_Fields>;
  readonly stddev?: Maybe<Account_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Account_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Account_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Account_Sum_Fields>;
  readonly var_pop?: Maybe<Account_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Account_Var_Samp_Fields>;
  readonly variance?: Maybe<Account_Variance_Fields>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "account" */
export type Account_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Account_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Account_Max_Order_By>;
  readonly min?: InputMaybe<Account_Min_Order_By>;
  readonly stddev?: InputMaybe<Account_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Account_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Account_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Account_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Account_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Account_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Account_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "account" */
export type Account_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Account_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** aggregate avg on columns */
export type Account_Avg_Fields = {
  readonly __typename?: 'account_avg_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "account" */
export type Account_Avg_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Account_Bool_Exp>>;
  readonly _not?: InputMaybe<Account_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Account_Bool_Exp>>;
  readonly archived?: InputMaybe<Boolean_Comparison_Exp>;
  readonly business?: InputMaybe<Business_Bool_Exp>;
  readonly business_id?: InputMaybe<Int_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly transactions?: InputMaybe<Transaction_Bool_Exp>;
  readonly transactions_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>;
  readonly updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "account" */
export const enum Account_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_54115ee388cdb6d86bb4bf5b2ea = 'PK_54115ee388cdb6d86bb4bf5b2ea',
  /** unique or primary key constraint on columns "name" */
  Uq_414d4052f22837655ff312168cb = 'UQ_414d4052f22837655ff312168cb',
}

/** input type for incrementing numeric columns in table "account" */
export type Account_Inc_Input = {
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business?: InputMaybe<Business_Obj_Rel_Insert_Input>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly transactions?: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  readonly __typename?: 'account_max_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "account" */
export type Account_Max_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  readonly __typename?: 'account_min_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "account" */
export type Account_Min_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "account" */
export type Account_Mutation_Response = {
  readonly __typename?: 'account_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Account>;
};

/** input type for inserting object relation for remote table "account" */
export type Account_Obj_Rel_Insert_Input = {
  readonly data: Account_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** on_conflict condition type for table "account" */
export type Account_On_Conflict = {
  readonly constraint: Account_Constraint;
  readonly update_columns?: ReadonlyArray<Account_Update_Column>;
  readonly where?: InputMaybe<Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  readonly archived?: InputMaybe<Order_By>;
  readonly business?: InputMaybe<Business_Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "account" */
export const enum Account_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** select "account_aggregate_bool_exp_bool_and_arguments_columns" columns of table "account" */
export const enum Account_Select_Column_Account_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** select "account_aggregate_bool_exp_bool_or_arguments_columns" columns of table "account" */
export const enum Account_Select_Column_Account_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Account_Stddev_Fields = {
  readonly __typename?: 'account_stddev_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "account" */
export type Account_Stddev_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Account_Stddev_Pop_Fields = {
  readonly __typename?: 'account_stddev_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "account" */
export type Account_Stddev_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Account_Stddev_Samp_Fields = {
  readonly __typename?: 'account_stddev_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "account" */
export type Account_Stddev_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "account" */
export type Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Account_Sum_Fields = {
  readonly __typename?: 'account_sum_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "account" */
export type Account_Sum_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** update columns of table "account" */
export const enum Account_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

export type Account_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Account_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Account_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Account_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Account_Var_Pop_Fields = {
  readonly __typename?: 'account_var_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "account" */
export type Account_Var_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Account_Var_Samp_Fields = {
  readonly __typename?: 'account_var_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "account" */
export type Account_Var_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Account_Variance_Fields = {
  readonly __typename?: 'account_variance_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "account" */
export type Account_Variance_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** columns and relationships of "business" */
export type Business = {
  readonly __typename?: 'business';
  /** An array relationship */
  readonly accounts: ReadonlyArray<Account>;
  /** An aggregate relationship */
  readonly accounts_aggregate: Account_Aggregate;
  readonly archived: Scalars['Boolean'];
  /** An array relationship */
  readonly category_transactions: ReadonlyArray<Category_Transaction>;
  /** An aggregate relationship */
  readonly category_transactions_aggregate: Category_Transaction_Aggregate;
  /** An array relationship */
  readonly companies: ReadonlyArray<Company>;
  /** An aggregate relationship */
  readonly companies_aggregate: Company_Aggregate;
  readonly created_at: Scalars['timestamp'];
  readonly description?: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  /** An array relationship */
  readonly products: ReadonlyArray<Product>;
  /** An aggregate relationship */
  readonly products_aggregate: Product_Aggregate;
  /** An array relationship */
  readonly projects: ReadonlyArray<Project>;
  /** An aggregate relationship */
  readonly projects_aggregate: Project_Aggregate;
  /** An array relationship */
  readonly services: ReadonlyArray<Service>;
  /** An aggregate relationship */
  readonly services_aggregate: Service_Aggregate;
  /** An array relationship */
  readonly taxes: ReadonlyArray<Tax>;
  /** An aggregate relationship */
  readonly taxes_aggregate: Tax_Aggregate;
  readonly updated_at: Scalars['timestamp'];
  /** An array relationship */
  readonly user_businesses: ReadonlyArray<User_Business>;
  /** An aggregate relationship */
  readonly user_businesses_aggregate: User_Business_Aggregate;
  readonly uuid: Scalars['uuid'];
};

/** columns and relationships of "business" */
export type BusinessAccountsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessCategory_TransactionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Category_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Category_Transaction_Order_By>>;
  where?: InputMaybe<Category_Transaction_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessCategory_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Category_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Category_Transaction_Order_By>>;
  where?: InputMaybe<Category_Transaction_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessCompaniesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessCompanies_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessProductsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessProducts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessProjectsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessProjects_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessServicesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessServices_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessTaxesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Tax_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Tax_Order_By>>;
  where?: InputMaybe<Tax_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessTaxes_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Tax_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Tax_Order_By>>;
  where?: InputMaybe<Tax_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessUser_BusinessesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<User_Business_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<User_Business_Order_By>>;
  where?: InputMaybe<User_Business_Bool_Exp>;
};

/** columns and relationships of "business" */
export type BusinessUser_Businesses_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<User_Business_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<User_Business_Order_By>>;
  where?: InputMaybe<User_Business_Bool_Exp>;
};

/** aggregated selection of "business" */
export type Business_Aggregate = {
  readonly __typename?: 'business_aggregate';
  readonly aggregate?: Maybe<Business_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Business>;
};

/** aggregate fields of "business" */
export type Business_Aggregate_Fields = {
  readonly __typename?: 'business_aggregate_fields';
  readonly avg?: Maybe<Business_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Business_Max_Fields>;
  readonly min?: Maybe<Business_Min_Fields>;
  readonly stddev?: Maybe<Business_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Business_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Business_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Business_Sum_Fields>;
  readonly var_pop?: Maybe<Business_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Business_Var_Samp_Fields>;
  readonly variance?: Maybe<Business_Variance_Fields>;
};

/** aggregate fields of "business" */
export type Business_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Business_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Business_Avg_Fields = {
  readonly __typename?: 'business_avg_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "business". All fields are combined with a logical 'AND'. */
export type Business_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Business_Bool_Exp>>;
  readonly _not?: InputMaybe<Business_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Business_Bool_Exp>>;
  readonly accounts?: InputMaybe<Account_Bool_Exp>;
  readonly accounts_aggregate?: InputMaybe<Account_Aggregate_Bool_Exp>;
  readonly archived?: InputMaybe<Boolean_Comparison_Exp>;
  readonly category_transactions?: InputMaybe<Category_Transaction_Bool_Exp>;
  readonly category_transactions_aggregate?: InputMaybe<Category_Transaction_Aggregate_Bool_Exp>;
  readonly companies?: InputMaybe<Company_Bool_Exp>;
  readonly companies_aggregate?: InputMaybe<Company_Aggregate_Bool_Exp>;
  readonly created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly products?: InputMaybe<Product_Bool_Exp>;
  readonly products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  readonly projects?: InputMaybe<Project_Bool_Exp>;
  readonly projects_aggregate?: InputMaybe<Project_Aggregate_Bool_Exp>;
  readonly services?: InputMaybe<Service_Bool_Exp>;
  readonly services_aggregate?: InputMaybe<Service_Aggregate_Bool_Exp>;
  readonly taxes?: InputMaybe<Tax_Bool_Exp>;
  readonly taxes_aggregate?: InputMaybe<Tax_Aggregate_Bool_Exp>;
  readonly updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly user_businesses?: InputMaybe<User_Business_Bool_Exp>;
  readonly user_businesses_aggregate?: InputMaybe<User_Business_Aggregate_Bool_Exp>;
  readonly uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "business" */
export const enum Business_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_0bd850da8dafab992e2e9b058e5 = 'PK_0bd850da8dafab992e2e9b058e5',
}

/** input type for incrementing numeric columns in table "business" */
export type Business_Inc_Input = {
  readonly id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "business" */
export type Business_Insert_Input = {
  readonly accounts?: InputMaybe<Account_Arr_Rel_Insert_Input>;
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly category_transactions?: InputMaybe<Category_Transaction_Arr_Rel_Insert_Input>;
  readonly companies?: InputMaybe<Company_Arr_Rel_Insert_Input>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  readonly projects?: InputMaybe<Project_Arr_Rel_Insert_Input>;
  readonly services?: InputMaybe<Service_Arr_Rel_Insert_Input>;
  readonly taxes?: InputMaybe<Tax_Arr_Rel_Insert_Input>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly user_businesses?: InputMaybe<User_Business_Arr_Rel_Insert_Input>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Business_Max_Fields = {
  readonly __typename?: 'business_max_fields';
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Business_Min_Fields = {
  readonly __typename?: 'business_min_fields';
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "business" */
export type Business_Mutation_Response = {
  readonly __typename?: 'business_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Business>;
};

/** input type for inserting object relation for remote table "business" */
export type Business_Obj_Rel_Insert_Input = {
  readonly data: Business_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Business_On_Conflict>;
};

/** on_conflict condition type for table "business" */
export type Business_On_Conflict = {
  readonly constraint: Business_Constraint;
  readonly update_columns?: ReadonlyArray<Business_Update_Column>;
  readonly where?: InputMaybe<Business_Bool_Exp>;
};

/** Ordering options when selecting data from "business". */
export type Business_Order_By = {
  readonly accounts_aggregate?: InputMaybe<Account_Aggregate_Order_By>;
  readonly archived?: InputMaybe<Order_By>;
  readonly category_transactions_aggregate?: InputMaybe<Category_Transaction_Aggregate_Order_By>;
  readonly companies_aggregate?: InputMaybe<Company_Aggregate_Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  readonly projects_aggregate?: InputMaybe<Project_Aggregate_Order_By>;
  readonly services_aggregate?: InputMaybe<Service_Aggregate_Order_By>;
  readonly taxes_aggregate?: InputMaybe<Tax_Aggregate_Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly user_businesses_aggregate?: InputMaybe<User_Business_Aggregate_Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: business */
export type Business_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "business" */
export const enum Business_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "business" */
export type Business_Set_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Business_Stddev_Fields = {
  readonly __typename?: 'business_stddev_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Business_Stddev_Pop_Fields = {
  readonly __typename?: 'business_stddev_pop_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Business_Stddev_Samp_Fields = {
  readonly __typename?: 'business_stddev_samp_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "business" */
export type Business_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Business_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Business_Stream_Cursor_Value_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Business_Sum_Fields = {
  readonly __typename?: 'business_sum_fields';
  readonly id?: Maybe<Scalars['Int']>;
};

/** update columns of table "business" */
export const enum Business_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

export type Business_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Business_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Business_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Business_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Business_Var_Pop_Fields = {
  readonly __typename?: 'business_var_pop_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Business_Var_Samp_Fields = {
  readonly __typename?: 'business_var_samp_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Business_Variance_Fields = {
  readonly __typename?: 'business_variance_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "category_transaction" */
export type Category_Transaction = {
  readonly __typename?: 'category_transaction';
  readonly archived: Scalars['Boolean'];
  /** An object relationship */
  readonly business?: Maybe<Business>;
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at: Scalars['timestamp'];
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  /** An array relationship */
  readonly products: ReadonlyArray<Product>;
  /** An aggregate relationship */
  readonly products_aggregate: Product_Aggregate;
  /** An array relationship */
  readonly services: ReadonlyArray<Service>;
  /** An aggregate relationship */
  readonly services_aggregate: Service_Aggregate;
  /** An array relationship */
  readonly transactions: ReadonlyArray<Transaction>;
  /** An aggregate relationship */
  readonly transactions_aggregate: Transaction_Aggregate;
  readonly type: Scalars['category_transaction_type_enum'];
  readonly updated_at: Scalars['timestamp'];
  readonly uuid: Scalars['uuid'];
};

/** columns and relationships of "category_transaction" */
export type Category_TransactionProductsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** columns and relationships of "category_transaction" */
export type Category_TransactionProducts_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** columns and relationships of "category_transaction" */
export type Category_TransactionServicesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};

/** columns and relationships of "category_transaction" */
export type Category_TransactionServices_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};

/** columns and relationships of "category_transaction" */
export type Category_TransactionTransactionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** columns and relationships of "category_transaction" */
export type Category_TransactionTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "category_transaction" */
export type Category_Transaction_Aggregate = {
  readonly __typename?: 'category_transaction_aggregate';
  readonly aggregate?: Maybe<Category_Transaction_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Category_Transaction>;
};

export type Category_Transaction_Aggregate_Bool_Exp = {
  readonly bool_and?: InputMaybe<Category_Transaction_Aggregate_Bool_Exp_Bool_And>;
  readonly bool_or?: InputMaybe<Category_Transaction_Aggregate_Bool_Exp_Bool_Or>;
  readonly count?: InputMaybe<Category_Transaction_Aggregate_Bool_Exp_Count>;
};

export type Category_Transaction_Aggregate_Bool_Exp_Bool_And = {
  readonly arguments: Category_Transaction_Select_Column_Category_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Category_Transaction_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Category_Transaction_Aggregate_Bool_Exp_Bool_Or = {
  readonly arguments: Category_Transaction_Select_Column_Category_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Category_Transaction_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Category_Transaction_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<
    ReadonlyArray<Category_Transaction_Select_Column>
  >;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Category_Transaction_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "category_transaction" */
export type Category_Transaction_Aggregate_Fields = {
  readonly __typename?: 'category_transaction_aggregate_fields';
  readonly avg?: Maybe<Category_Transaction_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Category_Transaction_Max_Fields>;
  readonly min?: Maybe<Category_Transaction_Min_Fields>;
  readonly stddev?: Maybe<Category_Transaction_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Category_Transaction_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Category_Transaction_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Category_Transaction_Sum_Fields>;
  readonly var_pop?: Maybe<Category_Transaction_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Category_Transaction_Var_Samp_Fields>;
  readonly variance?: Maybe<Category_Transaction_Variance_Fields>;
};

/** aggregate fields of "category_transaction" */
export type Category_Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Category_Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "category_transaction" */
export type Category_Transaction_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Category_Transaction_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Category_Transaction_Max_Order_By>;
  readonly min?: InputMaybe<Category_Transaction_Min_Order_By>;
  readonly stddev?: InputMaybe<Category_Transaction_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Category_Transaction_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Category_Transaction_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Category_Transaction_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Category_Transaction_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Category_Transaction_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Category_Transaction_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "category_transaction" */
export type Category_Transaction_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Category_Transaction_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Category_Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Category_Transaction_Avg_Fields = {
  readonly __typename?: 'category_transaction_avg_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "category_transaction" */
export type Category_Transaction_Avg_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "category_transaction". All fields are combined with a logical 'AND'. */
export type Category_Transaction_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Category_Transaction_Bool_Exp>>;
  readonly _not?: InputMaybe<Category_Transaction_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Category_Transaction_Bool_Exp>>;
  readonly archived?: InputMaybe<Boolean_Comparison_Exp>;
  readonly business?: InputMaybe<Business_Bool_Exp>;
  readonly business_id?: InputMaybe<Int_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly products?: InputMaybe<Product_Bool_Exp>;
  readonly products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  readonly services?: InputMaybe<Service_Bool_Exp>;
  readonly services_aggregate?: InputMaybe<Service_Aggregate_Bool_Exp>;
  readonly transactions?: InputMaybe<Transaction_Bool_Exp>;
  readonly transactions_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>;
  readonly type?: InputMaybe<Category_Transaction_Type_Enum_Comparison_Exp>;
  readonly updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "category_transaction" */
export const enum Category_Transaction_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_0f5b6f44a9219cae60c192f14e2 = 'PK_0f5b6f44a9219cae60c192f14e2',
  /** unique or primary key constraint on columns "name" */
  Uq_8d6c37003798fb06a3982653d46 = 'UQ_8d6c37003798fb06a3982653d46',
}

/** input type for incrementing numeric columns in table "category_transaction" */
export type Category_Transaction_Inc_Input = {
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "category_transaction" */
export type Category_Transaction_Insert_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business?: InputMaybe<Business_Obj_Rel_Insert_Input>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  readonly services?: InputMaybe<Service_Arr_Rel_Insert_Input>;
  readonly transactions?: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
  readonly type?: InputMaybe<Scalars['category_transaction_type_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Category_Transaction_Max_Fields = {
  readonly __typename?: 'category_transaction_max_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['category_transaction_type_enum']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "category_transaction" */
export type Category_Transaction_Max_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Category_Transaction_Min_Fields = {
  readonly __typename?: 'category_transaction_min_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['category_transaction_type_enum']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "category_transaction" */
export type Category_Transaction_Min_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "category_transaction" */
export type Category_Transaction_Mutation_Response = {
  readonly __typename?: 'category_transaction_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Category_Transaction>;
};

/** input type for inserting object relation for remote table "category_transaction" */
export type Category_Transaction_Obj_Rel_Insert_Input = {
  readonly data: Category_Transaction_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Category_Transaction_On_Conflict>;
};

/** on_conflict condition type for table "category_transaction" */
export type Category_Transaction_On_Conflict = {
  readonly constraint: Category_Transaction_Constraint;
  readonly update_columns?: ReadonlyArray<Category_Transaction_Update_Column>;
  readonly where?: InputMaybe<Category_Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "category_transaction". */
export type Category_Transaction_Order_By = {
  readonly archived?: InputMaybe<Order_By>;
  readonly business?: InputMaybe<Business_Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  readonly services_aggregate?: InputMaybe<Service_Aggregate_Order_By>;
  readonly transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: category_transaction */
export type Category_Transaction_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "category_transaction" */
export const enum Category_Transaction_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** select "category_transaction_aggregate_bool_exp_bool_and_arguments_columns" columns of table "category_transaction" */
export const enum Category_Transaction_Select_Column_Category_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** select "category_transaction_aggregate_bool_exp_bool_or_arguments_columns" columns of table "category_transaction" */
export const enum Category_Transaction_Select_Column_Category_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** input type for updating data in table "category_transaction" */
export type Category_Transaction_Set_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<Scalars['category_transaction_type_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Category_Transaction_Stddev_Fields = {
  readonly __typename?: 'category_transaction_stddev_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "category_transaction" */
export type Category_Transaction_Stddev_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Category_Transaction_Stddev_Pop_Fields = {
  readonly __typename?: 'category_transaction_stddev_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "category_transaction" */
export type Category_Transaction_Stddev_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Category_Transaction_Stddev_Samp_Fields = {
  readonly __typename?: 'category_transaction_stddev_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "category_transaction" */
export type Category_Transaction_Stddev_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "category_transaction" */
export type Category_Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Category_Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Category_Transaction_Stream_Cursor_Value_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<Scalars['category_transaction_type_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Category_Transaction_Sum_Fields = {
  readonly __typename?: 'category_transaction_sum_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "category_transaction" */
export type Category_Transaction_Sum_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "category_transaction_type_enum". All fields are combined with logical 'AND'. */
export type Category_Transaction_Type_Enum_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['category_transaction_type_enum']>;
  readonly _gt?: InputMaybe<Scalars['category_transaction_type_enum']>;
  readonly _gte?: InputMaybe<Scalars['category_transaction_type_enum']>;
  readonly _in?: InputMaybe<
    ReadonlyArray<Scalars['category_transaction_type_enum']>
  >;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['category_transaction_type_enum']>;
  readonly _lte?: InputMaybe<Scalars['category_transaction_type_enum']>;
  readonly _neq?: InputMaybe<Scalars['category_transaction_type_enum']>;
  readonly _nin?: InputMaybe<
    ReadonlyArray<Scalars['category_transaction_type_enum']>
  >;
};

/** update columns of table "category_transaction" */
export const enum Category_Transaction_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

export type Category_Transaction_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Category_Transaction_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Category_Transaction_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Category_Transaction_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Category_Transaction_Var_Pop_Fields = {
  readonly __typename?: 'category_transaction_var_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "category_transaction" */
export type Category_Transaction_Var_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Category_Transaction_Var_Samp_Fields = {
  readonly __typename?: 'category_transaction_var_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "category_transaction" */
export type Category_Transaction_Var_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Category_Transaction_Variance_Fields = {
  readonly __typename?: 'category_transaction_variance_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "category_transaction" */
export type Category_Transaction_Variance_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** columns and relationships of "company" */
export type Company = {
  readonly __typename?: 'company';
  readonly address?: Maybe<Scalars['String']>;
  readonly archived: Scalars['Boolean'];
  /** An object relationship */
  readonly business?: Maybe<Business>;
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly business_phone?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly created_at: Scalars['timestamp'];
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  /** An array relationship */
  readonly people: ReadonlyArray<Person>;
  /** An aggregate relationship */
  readonly people_aggregate: Person_Aggregate;
  readonly updated_at: Scalars['timestamp'];
  readonly uuid: Scalars['uuid'];
};

/** columns and relationships of "company" */
export type CompanyPeopleArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};

/** columns and relationships of "company" */
export type CompanyPeople_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};

/** aggregated selection of "company" */
export type Company_Aggregate = {
  readonly __typename?: 'company_aggregate';
  readonly aggregate?: Maybe<Company_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Company>;
};

export type Company_Aggregate_Bool_Exp = {
  readonly bool_and?: InputMaybe<Company_Aggregate_Bool_Exp_Bool_And>;
  readonly bool_or?: InputMaybe<Company_Aggregate_Bool_Exp_Bool_Or>;
  readonly count?: InputMaybe<Company_Aggregate_Bool_Exp_Count>;
};

export type Company_Aggregate_Bool_Exp_Bool_And = {
  readonly arguments: Company_Select_Column_Company_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Company_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Company_Aggregate_Bool_Exp_Bool_Or = {
  readonly arguments: Company_Select_Column_Company_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Company_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Company_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Company_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Company_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "company" */
export type Company_Aggregate_Fields = {
  readonly __typename?: 'company_aggregate_fields';
  readonly avg?: Maybe<Company_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Company_Max_Fields>;
  readonly min?: Maybe<Company_Min_Fields>;
  readonly stddev?: Maybe<Company_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Company_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Company_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Company_Sum_Fields>;
  readonly var_pop?: Maybe<Company_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Company_Var_Samp_Fields>;
  readonly variance?: Maybe<Company_Variance_Fields>;
};

/** aggregate fields of "company" */
export type Company_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Company_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "company" */
export type Company_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Company_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Company_Max_Order_By>;
  readonly min?: InputMaybe<Company_Min_Order_By>;
  readonly stddev?: InputMaybe<Company_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Company_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Company_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Company_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Company_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Company_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Company_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "company" */
export type Company_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Company_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Company_On_Conflict>;
};

/** aggregate avg on columns */
export type Company_Avg_Fields = {
  readonly __typename?: 'company_avg_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "company" */
export type Company_Avg_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "company". All fields are combined with a logical 'AND'. */
export type Company_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Company_Bool_Exp>>;
  readonly _not?: InputMaybe<Company_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Company_Bool_Exp>>;
  readonly address?: InputMaybe<String_Comparison_Exp>;
  readonly archived?: InputMaybe<Boolean_Comparison_Exp>;
  readonly business?: InputMaybe<Business_Bool_Exp>;
  readonly business_id?: InputMaybe<Int_Comparison_Exp>;
  readonly business_phone?: InputMaybe<String_Comparison_Exp>;
  readonly country?: InputMaybe<String_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly people?: InputMaybe<Person_Bool_Exp>;
  readonly people_aggregate?: InputMaybe<Person_Aggregate_Bool_Exp>;
  readonly updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "company" */
export const enum Company_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_056f7854a7afdba7cbd6d45fc20 = 'PK_056f7854a7afdba7cbd6d45fc20',
}

/** input type for incrementing numeric columns in table "company" */
export type Company_Inc_Input = {
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "company" */
export type Company_Insert_Input = {
  readonly address?: InputMaybe<Scalars['String']>;
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business?: InputMaybe<Business_Obj_Rel_Insert_Input>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly business_phone?: InputMaybe<Scalars['String']>;
  readonly country?: InputMaybe<Scalars['String']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly people?: InputMaybe<Person_Arr_Rel_Insert_Input>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Company_Max_Fields = {
  readonly __typename?: 'company_max_fields';
  readonly address?: Maybe<Scalars['String']>;
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly business_phone?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "company" */
export type Company_Max_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly business_phone?: InputMaybe<Order_By>;
  readonly country?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Company_Min_Fields = {
  readonly __typename?: 'company_min_fields';
  readonly address?: Maybe<Scalars['String']>;
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly business_phone?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "company" */
export type Company_Min_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly business_phone?: InputMaybe<Order_By>;
  readonly country?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "company" */
export type Company_Mutation_Response = {
  readonly __typename?: 'company_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Company>;
};

/** input type for inserting object relation for remote table "company" */
export type Company_Obj_Rel_Insert_Input = {
  readonly data: Company_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Company_On_Conflict>;
};

/** on_conflict condition type for table "company" */
export type Company_On_Conflict = {
  readonly constraint: Company_Constraint;
  readonly update_columns?: ReadonlyArray<Company_Update_Column>;
  readonly where?: InputMaybe<Company_Bool_Exp>;
};

/** Ordering options when selecting data from "company". */
export type Company_Order_By = {
  readonly address?: InputMaybe<Order_By>;
  readonly archived?: InputMaybe<Order_By>;
  readonly business?: InputMaybe<Business_Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly business_phone?: InputMaybe<Order_By>;
  readonly country?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly people_aggregate?: InputMaybe<Person_Aggregate_Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: company */
export type Company_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "company" */
export const enum Company_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  BusinessPhone = 'business_phone',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** select "company_aggregate_bool_exp_bool_and_arguments_columns" columns of table "company" */
export const enum Company_Select_Column_Company_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** select "company_aggregate_bool_exp_bool_or_arguments_columns" columns of table "company" */
export const enum Company_Select_Column_Company_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** input type for updating data in table "company" */
export type Company_Set_Input = {
  readonly address?: InputMaybe<Scalars['String']>;
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly business_phone?: InputMaybe<Scalars['String']>;
  readonly country?: InputMaybe<Scalars['String']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Company_Stddev_Fields = {
  readonly __typename?: 'company_stddev_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "company" */
export type Company_Stddev_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Company_Stddev_Pop_Fields = {
  readonly __typename?: 'company_stddev_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "company" */
export type Company_Stddev_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Company_Stddev_Samp_Fields = {
  readonly __typename?: 'company_stddev_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "company" */
export type Company_Stddev_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "company" */
export type Company_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Company_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Company_Stream_Cursor_Value_Input = {
  readonly address?: InputMaybe<Scalars['String']>;
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly business_phone?: InputMaybe<Scalars['String']>;
  readonly country?: InputMaybe<Scalars['String']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Company_Sum_Fields = {
  readonly __typename?: 'company_sum_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "company" */
export type Company_Sum_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** update columns of table "company" */
export const enum Company_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  BusinessPhone = 'business_phone',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

export type Company_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Company_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Company_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Company_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Company_Var_Pop_Fields = {
  readonly __typename?: 'company_var_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "company" */
export type Company_Var_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Company_Var_Samp_Fields = {
  readonly __typename?: 'company_var_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "company" */
export type Company_Var_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Company_Variance_Fields = {
  readonly __typename?: 'company_variance_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "company" */
export type Company_Variance_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export const enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

export type Custom_User_Business_Mutation_Response = {
  readonly __typename?: 'custom_user_business_mutation_response';
  readonly id: Scalars['Int'];
};

export type Jsonb_Cast_Exp = {
  readonly String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  readonly _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  readonly _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  readonly _contains?: InputMaybe<Scalars['jsonb']>;
  readonly _eq?: InputMaybe<Scalars['jsonb']>;
  readonly _gt?: InputMaybe<Scalars['jsonb']>;
  readonly _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  readonly _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  readonly _has_keys_all?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  readonly _has_keys_any?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['jsonb']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['jsonb']>;
  readonly _lte?: InputMaybe<Scalars['jsonb']>;
  readonly _neq?: InputMaybe<Scalars['jsonb']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  readonly __typename?: 'mutation_root';
  readonly create_custom_user_business?: Maybe<Custom_User_Business_Mutation_Response>;
  /** delete data from the table: "account" */
  readonly delete_account?: Maybe<Account_Mutation_Response>;
  /** delete single row from the table: "account" */
  readonly delete_account_by_pk?: Maybe<Account>;
  /** delete data from the table: "business" */
  readonly delete_business?: Maybe<Business_Mutation_Response>;
  /** delete single row from the table: "business" */
  readonly delete_business_by_pk?: Maybe<Business>;
  /** delete data from the table: "category_transaction" */
  readonly delete_category_transaction?: Maybe<Category_Transaction_Mutation_Response>;
  /** delete single row from the table: "category_transaction" */
  readonly delete_category_transaction_by_pk?: Maybe<Category_Transaction>;
  /** delete data from the table: "company" */
  readonly delete_company?: Maybe<Company_Mutation_Response>;
  /** delete single row from the table: "company" */
  readonly delete_company_by_pk?: Maybe<Company>;
  /** delete data from the table: "person" */
  readonly delete_person?: Maybe<Person_Mutation_Response>;
  /** delete single row from the table: "person" */
  readonly delete_person_by_pk?: Maybe<Person>;
  /** delete data from the table: "product" */
  readonly delete_product?: Maybe<Product_Mutation_Response>;
  /** delete single row from the table: "product" */
  readonly delete_product_by_pk?: Maybe<Product>;
  /** delete data from the table: "project" */
  readonly delete_project?: Maybe<Project_Mutation_Response>;
  /** delete single row from the table: "project" */
  readonly delete_project_by_pk?: Maybe<Project>;
  /** delete data from the table: "project_products" */
  readonly delete_project_products?: Maybe<Project_Products_Mutation_Response>;
  /** delete single row from the table: "project_products" */
  readonly delete_project_products_by_pk?: Maybe<Project_Products>;
  /** delete data from the table: "project_services" */
  readonly delete_project_services?: Maybe<Project_Services_Mutation_Response>;
  /** delete single row from the table: "project_services" */
  readonly delete_project_services_by_pk?: Maybe<Project_Services>;
  /** delete data from the table: "service" */
  readonly delete_service?: Maybe<Service_Mutation_Response>;
  /** delete single row from the table: "service" */
  readonly delete_service_by_pk?: Maybe<Service>;
  /** delete data from the table: "tax" */
  readonly delete_tax?: Maybe<Tax_Mutation_Response>;
  /** delete single row from the table: "tax" */
  readonly delete_tax_by_pk?: Maybe<Tax>;
  /** delete data from the table: "transaction" */
  readonly delete_transaction?: Maybe<Transaction_Mutation_Response>;
  /** delete single row from the table: "transaction" */
  readonly delete_transaction_by_pk?: Maybe<Transaction>;
  /** delete data from the table: "user" */
  readonly delete_user?: Maybe<User_Mutation_Response>;
  /** delete data from the table: "user_business" */
  readonly delete_user_business?: Maybe<User_Business_Mutation_Response>;
  /** delete single row from the table: "user_business" */
  readonly delete_user_business_by_pk?: Maybe<User_Business>;
  /** delete single row from the table: "user" */
  readonly delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "account" */
  readonly insert_account?: Maybe<Account_Mutation_Response>;
  /** insert a single row into the table: "account" */
  readonly insert_account_one?: Maybe<Account>;
  /** insert data into the table: "business" */
  readonly insert_business?: Maybe<Business_Mutation_Response>;
  /** insert a single row into the table: "business" */
  readonly insert_business_one?: Maybe<Business>;
  /** insert data into the table: "category_transaction" */
  readonly insert_category_transaction?: Maybe<Category_Transaction_Mutation_Response>;
  /** insert a single row into the table: "category_transaction" */
  readonly insert_category_transaction_one?: Maybe<Category_Transaction>;
  /** insert data into the table: "company" */
  readonly insert_company?: Maybe<Company_Mutation_Response>;
  /** insert a single row into the table: "company" */
  readonly insert_company_one?: Maybe<Company>;
  /** insert data into the table: "person" */
  readonly insert_person?: Maybe<Person_Mutation_Response>;
  /** insert a single row into the table: "person" */
  readonly insert_person_one?: Maybe<Person>;
  /** insert data into the table: "product" */
  readonly insert_product?: Maybe<Product_Mutation_Response>;
  /** insert a single row into the table: "product" */
  readonly insert_product_one?: Maybe<Product>;
  /** insert data into the table: "project" */
  readonly insert_project?: Maybe<Project_Mutation_Response>;
  /** insert a single row into the table: "project" */
  readonly insert_project_one?: Maybe<Project>;
  /** insert data into the table: "project_products" */
  readonly insert_project_products?: Maybe<Project_Products_Mutation_Response>;
  /** insert a single row into the table: "project_products" */
  readonly insert_project_products_one?: Maybe<Project_Products>;
  /** insert data into the table: "project_services" */
  readonly insert_project_services?: Maybe<Project_Services_Mutation_Response>;
  /** insert a single row into the table: "project_services" */
  readonly insert_project_services_one?: Maybe<Project_Services>;
  /** insert data into the table: "service" */
  readonly insert_service?: Maybe<Service_Mutation_Response>;
  /** insert a single row into the table: "service" */
  readonly insert_service_one?: Maybe<Service>;
  /** insert data into the table: "tax" */
  readonly insert_tax?: Maybe<Tax_Mutation_Response>;
  /** insert a single row into the table: "tax" */
  readonly insert_tax_one?: Maybe<Tax>;
  /** insert data into the table: "transaction" */
  readonly insert_transaction?: Maybe<Transaction_Mutation_Response>;
  /** insert a single row into the table: "transaction" */
  readonly insert_transaction_one?: Maybe<Transaction>;
  /** insert data into the table: "user" */
  readonly insert_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user_business" */
  readonly insert_user_business?: Maybe<User_Business_Mutation_Response>;
  /** insert a single row into the table: "user_business" */
  readonly insert_user_business_one?: Maybe<User_Business>;
  /** insert a single row into the table: "user" */
  readonly insert_user_one?: Maybe<User>;
  /** update data of the table: "account" */
  readonly update_account?: Maybe<Account_Mutation_Response>;
  /** update single row of the table: "account" */
  readonly update_account_by_pk?: Maybe<Account>;
  /** update multiples rows of table: "account" */
  readonly update_account_many?: Maybe<
    ReadonlyArray<Maybe<Account_Mutation_Response>>
  >;
  /** update data of the table: "business" */
  readonly update_business?: Maybe<Business_Mutation_Response>;
  /** update single row of the table: "business" */
  readonly update_business_by_pk?: Maybe<Business>;
  /** update multiples rows of table: "business" */
  readonly update_business_many?: Maybe<
    ReadonlyArray<Maybe<Business_Mutation_Response>>
  >;
  /** update data of the table: "category_transaction" */
  readonly update_category_transaction?: Maybe<Category_Transaction_Mutation_Response>;
  /** update single row of the table: "category_transaction" */
  readonly update_category_transaction_by_pk?: Maybe<Category_Transaction>;
  /** update multiples rows of table: "category_transaction" */
  readonly update_category_transaction_many?: Maybe<
    ReadonlyArray<Maybe<Category_Transaction_Mutation_Response>>
  >;
  /** update data of the table: "company" */
  readonly update_company?: Maybe<Company_Mutation_Response>;
  /** update single row of the table: "company" */
  readonly update_company_by_pk?: Maybe<Company>;
  /** update multiples rows of table: "company" */
  readonly update_company_many?: Maybe<
    ReadonlyArray<Maybe<Company_Mutation_Response>>
  >;
  /** update data of the table: "person" */
  readonly update_person?: Maybe<Person_Mutation_Response>;
  /** update single row of the table: "person" */
  readonly update_person_by_pk?: Maybe<Person>;
  /** update multiples rows of table: "person" */
  readonly update_person_many?: Maybe<
    ReadonlyArray<Maybe<Person_Mutation_Response>>
  >;
  /** update data of the table: "product" */
  readonly update_product?: Maybe<Product_Mutation_Response>;
  /** update single row of the table: "product" */
  readonly update_product_by_pk?: Maybe<Product>;
  /** update multiples rows of table: "product" */
  readonly update_product_many?: Maybe<
    ReadonlyArray<Maybe<Product_Mutation_Response>>
  >;
  /** update data of the table: "project" */
  readonly update_project?: Maybe<Project_Mutation_Response>;
  /** update single row of the table: "project" */
  readonly update_project_by_pk?: Maybe<Project>;
  /** update multiples rows of table: "project" */
  readonly update_project_many?: Maybe<
    ReadonlyArray<Maybe<Project_Mutation_Response>>
  >;
  /** update data of the table: "project_products" */
  readonly update_project_products?: Maybe<Project_Products_Mutation_Response>;
  /** update single row of the table: "project_products" */
  readonly update_project_products_by_pk?: Maybe<Project_Products>;
  /** update multiples rows of table: "project_products" */
  readonly update_project_products_many?: Maybe<
    ReadonlyArray<Maybe<Project_Products_Mutation_Response>>
  >;
  /** update data of the table: "project_services" */
  readonly update_project_services?: Maybe<Project_Services_Mutation_Response>;
  /** update single row of the table: "project_services" */
  readonly update_project_services_by_pk?: Maybe<Project_Services>;
  /** update multiples rows of table: "project_services" */
  readonly update_project_services_many?: Maybe<
    ReadonlyArray<Maybe<Project_Services_Mutation_Response>>
  >;
  /** update data of the table: "service" */
  readonly update_service?: Maybe<Service_Mutation_Response>;
  /** update single row of the table: "service" */
  readonly update_service_by_pk?: Maybe<Service>;
  /** update multiples rows of table: "service" */
  readonly update_service_many?: Maybe<
    ReadonlyArray<Maybe<Service_Mutation_Response>>
  >;
  /** update data of the table: "tax" */
  readonly update_tax?: Maybe<Tax_Mutation_Response>;
  /** update single row of the table: "tax" */
  readonly update_tax_by_pk?: Maybe<Tax>;
  /** update multiples rows of table: "tax" */
  readonly update_tax_many?: Maybe<ReadonlyArray<Maybe<Tax_Mutation_Response>>>;
  /** update data of the table: "transaction" */
  readonly update_transaction?: Maybe<Transaction_Mutation_Response>;
  /** update single row of the table: "transaction" */
  readonly update_transaction_by_pk?: Maybe<Transaction>;
  /** update multiples rows of table: "transaction" */
  readonly update_transaction_many?: Maybe<
    ReadonlyArray<Maybe<Transaction_Mutation_Response>>
  >;
  /** update data of the table: "user" */
  readonly update_user?: Maybe<User_Mutation_Response>;
  /** update data of the table: "user_business" */
  readonly update_user_business?: Maybe<User_Business_Mutation_Response>;
  /** update single row of the table: "user_business" */
  readonly update_user_business_by_pk?: Maybe<User_Business>;
  /** update multiples rows of table: "user_business" */
  readonly update_user_business_many?: Maybe<
    ReadonlyArray<Maybe<User_Business_Mutation_Response>>
  >;
  /** update single row of the table: "user" */
  readonly update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  readonly update_user_many?: Maybe<
    ReadonlyArray<Maybe<User_Mutation_Response>>
  >;
};

/** mutation root */
export type Mutation_RootCreate_Custom_User_BusinessArgs = {
  business_description: Scalars['String'];
  current_billing_method: Scalars['String'];
  industry_type: Scalars['String'];
  name: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
  where: Account_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_BusinessArgs = {
  where: Business_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Business_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Category_TransactionArgs = {
  where: Category_Transaction_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Category_Transaction_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_CompanyArgs = {
  where: Company_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Company_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_PersonArgs = {
  where: Person_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Person_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_ProjectArgs = {
  where: Project_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Project_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Project_ProductsArgs = {
  where: Project_Products_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Project_Products_By_PkArgs = {
  product_id: Scalars['Int'];
  project_id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Project_ServicesArgs = {
  where: Project_Services_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Project_Services_By_PkArgs = {
  project_id: Scalars['Int'];
  service_id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_ServiceArgs = {
  where: Service_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Service_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_TaxArgs = {
  where: Tax_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tax_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_TransactionArgs = {
  where: Transaction_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Transaction_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_BusinessArgs = {
  where: User_Business_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Business_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
  objects: ReadonlyArray<Account_Insert_Input>;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
  object: Account_Insert_Input;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_BusinessArgs = {
  objects: ReadonlyArray<Business_Insert_Input>;
  on_conflict?: InputMaybe<Business_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Business_OneArgs = {
  object: Business_Insert_Input;
  on_conflict?: InputMaybe<Business_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Category_TransactionArgs = {
  objects: ReadonlyArray<Category_Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Category_Transaction_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Category_Transaction_OneArgs = {
  object: Category_Transaction_Insert_Input;
  on_conflict?: InputMaybe<Category_Transaction_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CompanyArgs = {
  objects: ReadonlyArray<Company_Insert_Input>;
  on_conflict?: InputMaybe<Company_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Company_OneArgs = {
  object: Company_Insert_Input;
  on_conflict?: InputMaybe<Company_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PersonArgs = {
  objects: ReadonlyArray<Person_Insert_Input>;
  on_conflict?: InputMaybe<Person_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Person_OneArgs = {
  object: Person_Insert_Input;
  on_conflict?: InputMaybe<Person_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: ReadonlyArray<Product_Insert_Input>;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProjectArgs = {
  objects: ReadonlyArray<Project_Insert_Input>;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_OneArgs = {
  object: Project_Insert_Input;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_ProductsArgs = {
  objects: ReadonlyArray<Project_Products_Insert_Input>;
  on_conflict?: InputMaybe<Project_Products_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_Products_OneArgs = {
  object: Project_Products_Insert_Input;
  on_conflict?: InputMaybe<Project_Products_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_ServicesArgs = {
  objects: ReadonlyArray<Project_Services_Insert_Input>;
  on_conflict?: InputMaybe<Project_Services_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_Services_OneArgs = {
  object: Project_Services_Insert_Input;
  on_conflict?: InputMaybe<Project_Services_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ServiceArgs = {
  objects: ReadonlyArray<Service_Insert_Input>;
  on_conflict?: InputMaybe<Service_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Service_OneArgs = {
  object: Service_Insert_Input;
  on_conflict?: InputMaybe<Service_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TaxArgs = {
  objects: ReadonlyArray<Tax_Insert_Input>;
  on_conflict?: InputMaybe<Tax_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tax_OneArgs = {
  object: Tax_Insert_Input;
  on_conflict?: InputMaybe<Tax_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TransactionArgs = {
  objects: ReadonlyArray<Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Transaction_OneArgs = {
  object: Transaction_Insert_Input;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: ReadonlyArray<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_BusinessArgs = {
  objects: ReadonlyArray<User_Business_Insert_Input>;
  on_conflict?: InputMaybe<User_Business_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Business_OneArgs = {
  object: User_Business_Insert_Input;
  on_conflict?: InputMaybe<User_Business_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
  _inc?: InputMaybe<Account_Inc_Input>;
  _set?: InputMaybe<Account_Set_Input>;
  where: Account_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
  _inc?: InputMaybe<Account_Inc_Input>;
  _set?: InputMaybe<Account_Set_Input>;
  pk_columns: Account_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Account_ManyArgs = {
  updates: ReadonlyArray<Account_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_BusinessArgs = {
  _inc?: InputMaybe<Business_Inc_Input>;
  _set?: InputMaybe<Business_Set_Input>;
  where: Business_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Business_By_PkArgs = {
  _inc?: InputMaybe<Business_Inc_Input>;
  _set?: InputMaybe<Business_Set_Input>;
  pk_columns: Business_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Business_ManyArgs = {
  updates: ReadonlyArray<Business_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Category_TransactionArgs = {
  _inc?: InputMaybe<Category_Transaction_Inc_Input>;
  _set?: InputMaybe<Category_Transaction_Set_Input>;
  where: Category_Transaction_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Category_Transaction_By_PkArgs = {
  _inc?: InputMaybe<Category_Transaction_Inc_Input>;
  _set?: InputMaybe<Category_Transaction_Set_Input>;
  pk_columns: Category_Transaction_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Category_Transaction_ManyArgs = {
  updates: ReadonlyArray<Category_Transaction_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_CompanyArgs = {
  _inc?: InputMaybe<Company_Inc_Input>;
  _set?: InputMaybe<Company_Set_Input>;
  where: Company_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Company_By_PkArgs = {
  _inc?: InputMaybe<Company_Inc_Input>;
  _set?: InputMaybe<Company_Set_Input>;
  pk_columns: Company_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Company_ManyArgs = {
  updates: ReadonlyArray<Company_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PersonArgs = {
  _inc?: InputMaybe<Person_Inc_Input>;
  _set?: InputMaybe<Person_Set_Input>;
  where: Person_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Person_By_PkArgs = {
  _inc?: InputMaybe<Person_Inc_Input>;
  _set?: InputMaybe<Person_Set_Input>;
  pk_columns: Person_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Person_ManyArgs = {
  updates: ReadonlyArray<Person_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _inc?: InputMaybe<Product_Inc_Input>;
  _set?: InputMaybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _inc?: InputMaybe<Product_Inc_Input>;
  _set?: InputMaybe<Product_Set_Input>;
  pk_columns: Product_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Product_ManyArgs = {
  updates: ReadonlyArray<Product_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ProjectArgs = {
  _inc?: InputMaybe<Project_Inc_Input>;
  _set?: InputMaybe<Project_Set_Input>;
  where: Project_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Project_By_PkArgs = {
  _inc?: InputMaybe<Project_Inc_Input>;
  _set?: InputMaybe<Project_Set_Input>;
  pk_columns: Project_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Project_ManyArgs = {
  updates: ReadonlyArray<Project_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Project_ProductsArgs = {
  _inc?: InputMaybe<Project_Products_Inc_Input>;
  _set?: InputMaybe<Project_Products_Set_Input>;
  where: Project_Products_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Project_Products_By_PkArgs = {
  _inc?: InputMaybe<Project_Products_Inc_Input>;
  _set?: InputMaybe<Project_Products_Set_Input>;
  pk_columns: Project_Products_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Project_Products_ManyArgs = {
  updates: ReadonlyArray<Project_Products_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Project_ServicesArgs = {
  _inc?: InputMaybe<Project_Services_Inc_Input>;
  _set?: InputMaybe<Project_Services_Set_Input>;
  where: Project_Services_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Project_Services_By_PkArgs = {
  _inc?: InputMaybe<Project_Services_Inc_Input>;
  _set?: InputMaybe<Project_Services_Set_Input>;
  pk_columns: Project_Services_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Project_Services_ManyArgs = {
  updates: ReadonlyArray<Project_Services_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ServiceArgs = {
  _inc?: InputMaybe<Service_Inc_Input>;
  _set?: InputMaybe<Service_Set_Input>;
  where: Service_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Service_By_PkArgs = {
  _inc?: InputMaybe<Service_Inc_Input>;
  _set?: InputMaybe<Service_Set_Input>;
  pk_columns: Service_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Service_ManyArgs = {
  updates: ReadonlyArray<Service_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_TaxArgs = {
  _inc?: InputMaybe<Tax_Inc_Input>;
  _set?: InputMaybe<Tax_Set_Input>;
  where: Tax_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Tax_By_PkArgs = {
  _inc?: InputMaybe<Tax_Inc_Input>;
  _set?: InputMaybe<Tax_Set_Input>;
  pk_columns: Tax_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Tax_ManyArgs = {
  updates: ReadonlyArray<Tax_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_TransactionArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Transaction_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  pk_columns: Transaction_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Transaction_ManyArgs = {
  updates: ReadonlyArray<Transaction_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _inc?: InputMaybe<User_Inc_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_BusinessArgs = {
  _inc?: InputMaybe<User_Business_Inc_Input>;
  _set?: InputMaybe<User_Business_Set_Input>;
  where: User_Business_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Business_By_PkArgs = {
  _inc?: InputMaybe<User_Business_Inc_Input>;
  _set?: InputMaybe<User_Business_Set_Input>;
  pk_columns: User_Business_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Business_ManyArgs = {
  updates: ReadonlyArray<User_Business_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _inc?: InputMaybe<User_Inc_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: ReadonlyArray<User_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['numeric']>;
  readonly _gt?: InputMaybe<Scalars['numeric']>;
  readonly _gte?: InputMaybe<Scalars['numeric']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['numeric']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['numeric']>;
  readonly _lte?: InputMaybe<Scalars['numeric']>;
  readonly _neq?: InputMaybe<Scalars['numeric']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['numeric']>>;
};

/** column ordering options */
export const enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "person" */
export type Person = {
  readonly __typename?: 'person';
  readonly archived: Scalars['Boolean'];
  /** An object relationship */
  readonly company?: Maybe<Company>;
  readonly company_id?: Maybe<Scalars['Int']>;
  readonly created_at: Scalars['timestamp'];
  readonly email?: Maybe<Scalars['String']>;
  readonly first_name: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly last_name: Scalars['String'];
  readonly phone?: Maybe<Scalars['String']>;
  /** An array relationship */
  readonly projects: ReadonlyArray<Project>;
  /** An aggregate relationship */
  readonly projects_aggregate: Project_Aggregate;
  readonly role?: Maybe<Scalars['person_role_enum']>;
  /** An array relationship */
  readonly transactions: ReadonlyArray<Transaction>;
  /** An aggregate relationship */
  readonly transactions_aggregate: Transaction_Aggregate;
  readonly updated_at: Scalars['timestamp'];
  readonly uuid: Scalars['uuid'];
  readonly whatsapp_phone?: Maybe<Scalars['String']>;
};

/** columns and relationships of "person" */
export type PersonProjectsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** columns and relationships of "person" */
export type PersonProjects_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** columns and relationships of "person" */
export type PersonTransactionsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** columns and relationships of "person" */
export type PersonTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "person" */
export type Person_Aggregate = {
  readonly __typename?: 'person_aggregate';
  readonly aggregate?: Maybe<Person_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Person>;
};

export type Person_Aggregate_Bool_Exp = {
  readonly bool_and?: InputMaybe<Person_Aggregate_Bool_Exp_Bool_And>;
  readonly bool_or?: InputMaybe<Person_Aggregate_Bool_Exp_Bool_Or>;
  readonly count?: InputMaybe<Person_Aggregate_Bool_Exp_Count>;
};

export type Person_Aggregate_Bool_Exp_Bool_And = {
  readonly arguments: Person_Select_Column_Person_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Person_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Person_Aggregate_Bool_Exp_Bool_Or = {
  readonly arguments: Person_Select_Column_Person_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Person_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Person_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Person_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Person_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "person" */
export type Person_Aggregate_Fields = {
  readonly __typename?: 'person_aggregate_fields';
  readonly avg?: Maybe<Person_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Person_Max_Fields>;
  readonly min?: Maybe<Person_Min_Fields>;
  readonly stddev?: Maybe<Person_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Person_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Person_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Person_Sum_Fields>;
  readonly var_pop?: Maybe<Person_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Person_Var_Samp_Fields>;
  readonly variance?: Maybe<Person_Variance_Fields>;
};

/** aggregate fields of "person" */
export type Person_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Person_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "person" */
export type Person_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Person_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Person_Max_Order_By>;
  readonly min?: InputMaybe<Person_Min_Order_By>;
  readonly stddev?: InputMaybe<Person_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Person_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Person_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Person_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Person_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Person_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Person_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "person" */
export type Person_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Person_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Person_On_Conflict>;
};

/** aggregate avg on columns */
export type Person_Avg_Fields = {
  readonly __typename?: 'person_avg_fields';
  readonly company_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "person" */
export type Person_Avg_Order_By = {
  readonly company_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "person". All fields are combined with a logical 'AND'. */
export type Person_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Person_Bool_Exp>>;
  readonly _not?: InputMaybe<Person_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Person_Bool_Exp>>;
  readonly archived?: InputMaybe<Boolean_Comparison_Exp>;
  readonly company?: InputMaybe<Company_Bool_Exp>;
  readonly company_id?: InputMaybe<Int_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly email?: InputMaybe<String_Comparison_Exp>;
  readonly first_name?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly last_name?: InputMaybe<String_Comparison_Exp>;
  readonly phone?: InputMaybe<String_Comparison_Exp>;
  readonly projects?: InputMaybe<Project_Bool_Exp>;
  readonly projects_aggregate?: InputMaybe<Project_Aggregate_Bool_Exp>;
  readonly role?: InputMaybe<Person_Role_Enum_Comparison_Exp>;
  readonly transactions?: InputMaybe<Transaction_Bool_Exp>;
  readonly transactions_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>;
  readonly updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly uuid?: InputMaybe<Uuid_Comparison_Exp>;
  readonly whatsapp_phone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "person" */
export const enum Person_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_5fdaf670315c4b7e70cce85daa3 = 'PK_5fdaf670315c4b7e70cce85daa3',
}

/** input type for incrementing numeric columns in table "person" */
export type Person_Inc_Input = {
  readonly company_id?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "person" */
export type Person_Insert_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  readonly company_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly first_name?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly last_name?: InputMaybe<Scalars['String']>;
  readonly phone?: InputMaybe<Scalars['String']>;
  readonly projects?: InputMaybe<Project_Arr_Rel_Insert_Input>;
  readonly role?: InputMaybe<Scalars['person_role_enum']>;
  readonly transactions?: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
  readonly whatsapp_phone?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Person_Max_Fields = {
  readonly __typename?: 'person_max_fields';
  readonly company_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly first_name?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly last_name?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly role?: Maybe<Scalars['person_role_enum']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
  readonly whatsapp_phone?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "person" */
export type Person_Max_Order_By = {
  readonly company_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly first_name?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly last_name?: InputMaybe<Order_By>;
  readonly phone?: InputMaybe<Order_By>;
  readonly role?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
  readonly whatsapp_phone?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Person_Min_Fields = {
  readonly __typename?: 'person_min_fields';
  readonly company_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly first_name?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly last_name?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly role?: Maybe<Scalars['person_role_enum']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
  readonly whatsapp_phone?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "person" */
export type Person_Min_Order_By = {
  readonly company_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly first_name?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly last_name?: InputMaybe<Order_By>;
  readonly phone?: InputMaybe<Order_By>;
  readonly role?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
  readonly whatsapp_phone?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "person" */
export type Person_Mutation_Response = {
  readonly __typename?: 'person_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Person>;
};

/** input type for inserting object relation for remote table "person" */
export type Person_Obj_Rel_Insert_Input = {
  readonly data: Person_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Person_On_Conflict>;
};

/** on_conflict condition type for table "person" */
export type Person_On_Conflict = {
  readonly constraint: Person_Constraint;
  readonly update_columns?: ReadonlyArray<Person_Update_Column>;
  readonly where?: InputMaybe<Person_Bool_Exp>;
};

/** Ordering options when selecting data from "person". */
export type Person_Order_By = {
  readonly archived?: InputMaybe<Order_By>;
  readonly company?: InputMaybe<Company_Order_By>;
  readonly company_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly email?: InputMaybe<Order_By>;
  readonly first_name?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly last_name?: InputMaybe<Order_By>;
  readonly phone?: InputMaybe<Order_By>;
  readonly projects_aggregate?: InputMaybe<Project_Aggregate_Order_By>;
  readonly role?: InputMaybe<Order_By>;
  readonly transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
  readonly whatsapp_phone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person */
export type Person_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "person_role_enum". All fields are combined with logical 'AND'. */
export type Person_Role_Enum_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['person_role_enum']>;
  readonly _gt?: InputMaybe<Scalars['person_role_enum']>;
  readonly _gte?: InputMaybe<Scalars['person_role_enum']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['person_role_enum']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['person_role_enum']>;
  readonly _lte?: InputMaybe<Scalars['person_role_enum']>;
  readonly _neq?: InputMaybe<Scalars['person_role_enum']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['person_role_enum']>>;
};

/** select columns of table "person" */
export const enum Person_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  WhatsappPhone = 'whatsapp_phone',
}

/** select "person_aggregate_bool_exp_bool_and_arguments_columns" columns of table "person" */
export const enum Person_Select_Column_Person_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** select "person_aggregate_bool_exp_bool_or_arguments_columns" columns of table "person" */
export const enum Person_Select_Column_Person_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** input type for updating data in table "person" */
export type Person_Set_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly company_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly first_name?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly last_name?: InputMaybe<Scalars['String']>;
  readonly phone?: InputMaybe<Scalars['String']>;
  readonly role?: InputMaybe<Scalars['person_role_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
  readonly whatsapp_phone?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Person_Stddev_Fields = {
  readonly __typename?: 'person_stddev_fields';
  readonly company_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "person" */
export type Person_Stddev_Order_By = {
  readonly company_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Person_Stddev_Pop_Fields = {
  readonly __typename?: 'person_stddev_pop_fields';
  readonly company_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "person" */
export type Person_Stddev_Pop_Order_By = {
  readonly company_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Person_Stddev_Samp_Fields = {
  readonly __typename?: 'person_stddev_samp_fields';
  readonly company_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "person" */
export type Person_Stddev_Samp_Order_By = {
  readonly company_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "person" */
export type Person_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Person_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Stream_Cursor_Value_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly company_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly first_name?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly last_name?: InputMaybe<Scalars['String']>;
  readonly phone?: InputMaybe<Scalars['String']>;
  readonly role?: InputMaybe<Scalars['person_role_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
  readonly whatsapp_phone?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Person_Sum_Fields = {
  readonly __typename?: 'person_sum_fields';
  readonly company_id?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "person" */
export type Person_Sum_Order_By = {
  readonly company_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** update columns of table "person" */
export const enum Person_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  WhatsappPhone = 'whatsapp_phone',
}

export type Person_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Person_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Person_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Person_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Person_Var_Pop_Fields = {
  readonly __typename?: 'person_var_pop_fields';
  readonly company_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "person" */
export type Person_Var_Pop_Order_By = {
  readonly company_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Person_Var_Samp_Fields = {
  readonly __typename?: 'person_var_samp_fields';
  readonly company_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "person" */
export type Person_Var_Samp_Order_By = {
  readonly company_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Person_Variance_Fields = {
  readonly __typename?: 'person_variance_fields';
  readonly company_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "person" */
export type Person_Variance_Order_By = {
  readonly company_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** columns and relationships of "product" */
export type Product = {
  readonly __typename?: 'product';
  readonly archived: Scalars['Boolean'];
  /** An object relationship */
  readonly business?: Maybe<Business>;
  readonly business_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  readonly category_transaction?: Maybe<Category_Transaction>;
  readonly created_at: Scalars['timestamp'];
  readonly current_stock?: Maybe<Scalars['Int']>;
  readonly description: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly income_category_id?: Maybe<Scalars['Int']>;
  readonly initial_price: Scalars['numeric'];
  readonly initial_stock?: Maybe<Scalars['Int']>;
  readonly name: Scalars['String'];
  /** An array relationship */
  readonly project_products: ReadonlyArray<Project_Products>;
  /** An aggregate relationship */
  readonly project_products_aggregate: Project_Products_Aggregate;
  readonly rate: Scalars['numeric'];
  readonly updated_at: Scalars['timestamp'];
  readonly uuid: Scalars['uuid'];
};

/** columns and relationships of "product" */
export type ProductProject_ProductsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Products_Order_By>>;
  where?: InputMaybe<Project_Products_Bool_Exp>;
};

/** columns and relationships of "product" */
export type ProductProject_Products_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Products_Order_By>>;
  where?: InputMaybe<Project_Products_Bool_Exp>;
};

/** aggregated selection of "product" */
export type Product_Aggregate = {
  readonly __typename?: 'product_aggregate';
  readonly aggregate?: Maybe<Product_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Product>;
};

export type Product_Aggregate_Bool_Exp = {
  readonly bool_and?: InputMaybe<Product_Aggregate_Bool_Exp_Bool_And>;
  readonly bool_or?: InputMaybe<Product_Aggregate_Bool_Exp_Bool_Or>;
  readonly count?: InputMaybe<Product_Aggregate_Bool_Exp_Count>;
};

export type Product_Aggregate_Bool_Exp_Bool_And = {
  readonly arguments: Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Product_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Product_Aggregate_Bool_Exp_Bool_Or = {
  readonly arguments: Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Product_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Product_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Product_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Product_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
  readonly __typename?: 'product_aggregate_fields';
  readonly avg?: Maybe<Product_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Product_Max_Fields>;
  readonly min?: Maybe<Product_Min_Fields>;
  readonly stddev?: Maybe<Product_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Product_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Product_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Product_Sum_Fields>;
  readonly var_pop?: Maybe<Product_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Product_Var_Samp_Fields>;
  readonly variance?: Maybe<Product_Variance_Fields>;
};

/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product" */
export type Product_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Product_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Product_Max_Order_By>;
  readonly min?: InputMaybe<Product_Min_Order_By>;
  readonly stddev?: InputMaybe<Product_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Product_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Product_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Product_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Product_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Product_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product" */
export type Product_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Product_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Avg_Fields = {
  readonly __typename?: 'product_avg_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly current_stock?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly initial_price?: Maybe<Scalars['Float']>;
  readonly initial_stock?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product" */
export type Product_Avg_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly current_stock?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly initial_price?: InputMaybe<Order_By>;
  readonly initial_stock?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Product_Bool_Exp>>;
  readonly _not?: InputMaybe<Product_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Product_Bool_Exp>>;
  readonly archived?: InputMaybe<Boolean_Comparison_Exp>;
  readonly business?: InputMaybe<Business_Bool_Exp>;
  readonly business_id?: InputMaybe<Int_Comparison_Exp>;
  readonly category_transaction?: InputMaybe<Category_Transaction_Bool_Exp>;
  readonly created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly current_stock?: InputMaybe<Int_Comparison_Exp>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly income_category_id?: InputMaybe<Int_Comparison_Exp>;
  readonly initial_price?: InputMaybe<Numeric_Comparison_Exp>;
  readonly initial_stock?: InputMaybe<Int_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly project_products?: InputMaybe<Project_Products_Bool_Exp>;
  readonly project_products_aggregate?: InputMaybe<Project_Products_Aggregate_Bool_Exp>;
  readonly rate?: InputMaybe<Numeric_Comparison_Exp>;
  readonly updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product" */
export const enum Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  PkBebc9158e480b949565b4dc7a82 = 'PK_bebc9158e480b949565b4dc7a82',
}

/** input type for incrementing numeric columns in table "product" */
export type Product_Inc_Input = {
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly current_stock?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly income_category_id?: InputMaybe<Scalars['Int']>;
  readonly initial_price?: InputMaybe<Scalars['numeric']>;
  readonly initial_stock?: InputMaybe<Scalars['Int']>;
  readonly rate?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business?: InputMaybe<Business_Obj_Rel_Insert_Input>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly category_transaction?: InputMaybe<Category_Transaction_Obj_Rel_Insert_Input>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly current_stock?: InputMaybe<Scalars['Int']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly income_category_id?: InputMaybe<Scalars['Int']>;
  readonly initial_price?: InputMaybe<Scalars['numeric']>;
  readonly initial_stock?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly project_products?: InputMaybe<Project_Products_Arr_Rel_Insert_Input>;
  readonly rate?: InputMaybe<Scalars['numeric']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  readonly __typename?: 'product_max_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly current_stock?: Maybe<Scalars['Int']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly income_category_id?: Maybe<Scalars['Int']>;
  readonly initial_price?: Maybe<Scalars['numeric']>;
  readonly initial_stock?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly rate?: Maybe<Scalars['numeric']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product" */
export type Product_Max_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly current_stock?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly initial_price?: InputMaybe<Order_By>;
  readonly initial_stock?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  readonly __typename?: 'product_min_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly current_stock?: Maybe<Scalars['Int']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly income_category_id?: Maybe<Scalars['Int']>;
  readonly initial_price?: Maybe<Scalars['numeric']>;
  readonly initial_stock?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly rate?: Maybe<Scalars['numeric']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product" */
export type Product_Min_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly current_stock?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly initial_price?: InputMaybe<Order_By>;
  readonly initial_stock?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  readonly __typename?: 'product_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Product>;
};

/** input type for inserting object relation for remote table "product" */
export type Product_Obj_Rel_Insert_Input = {
  readonly data: Product_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** on_conflict condition type for table "product" */
export type Product_On_Conflict = {
  readonly constraint: Product_Constraint;
  readonly update_columns?: ReadonlyArray<Product_Update_Column>;
  readonly where?: InputMaybe<Product_Bool_Exp>;
};

/** Ordering options when selecting data from "product". */
export type Product_Order_By = {
  readonly archived?: InputMaybe<Order_By>;
  readonly business?: InputMaybe<Business_Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly category_transaction?: InputMaybe<Category_Transaction_Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly current_stock?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly initial_price?: InputMaybe<Order_By>;
  readonly initial_stock?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly project_products_aggregate?: InputMaybe<Project_Products_Aggregate_Order_By>;
  readonly rate?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product */
export type Product_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "product" */
export const enum Product_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentStock = 'current_stock',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IncomeCategoryId = 'income_category_id',
  /** column name */
  InitialPrice = 'initial_price',
  /** column name */
  InitialStock = 'initial_stock',
  /** column name */
  Name = 'name',
  /** column name */
  Rate = 'rate',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** select "product_aggregate_bool_exp_bool_and_arguments_columns" columns of table "product" */
export const enum Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** select "product_aggregate_bool_exp_bool_or_arguments_columns" columns of table "product" */
export const enum Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly current_stock?: InputMaybe<Scalars['Int']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly income_category_id?: InputMaybe<Scalars['Int']>;
  readonly initial_price?: InputMaybe<Scalars['numeric']>;
  readonly initial_stock?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly rate?: InputMaybe<Scalars['numeric']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  readonly __typename?: 'product_stddev_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly current_stock?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly initial_price?: Maybe<Scalars['Float']>;
  readonly initial_stock?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product" */
export type Product_Stddev_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly current_stock?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly initial_price?: InputMaybe<Order_By>;
  readonly initial_stock?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  readonly __typename?: 'product_stddev_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly current_stock?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly initial_price?: Maybe<Scalars['Float']>;
  readonly initial_stock?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product" */
export type Product_Stddev_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly current_stock?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly initial_price?: InputMaybe<Order_By>;
  readonly initial_stock?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  readonly __typename?: 'product_stddev_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly current_stock?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly initial_price?: Maybe<Scalars['Float']>;
  readonly initial_stock?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product" */
export type Product_Stddev_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly current_stock?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly initial_price?: InputMaybe<Order_By>;
  readonly initial_stock?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product" */
export type Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Product_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Stream_Cursor_Value_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly current_stock?: InputMaybe<Scalars['Int']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly income_category_id?: InputMaybe<Scalars['Int']>;
  readonly initial_price?: InputMaybe<Scalars['numeric']>;
  readonly initial_stock?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly rate?: InputMaybe<Scalars['numeric']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  readonly __typename?: 'product_sum_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly current_stock?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly income_category_id?: Maybe<Scalars['Int']>;
  readonly initial_price?: Maybe<Scalars['numeric']>;
  readonly initial_stock?: Maybe<Scalars['Int']>;
  readonly rate?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "product" */
export type Product_Sum_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly current_stock?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly initial_price?: InputMaybe<Order_By>;
  readonly initial_stock?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** update columns of table "product" */
export const enum Product_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentStock = 'current_stock',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IncomeCategoryId = 'income_category_id',
  /** column name */
  InitialPrice = 'initial_price',
  /** column name */
  InitialStock = 'initial_stock',
  /** column name */
  Name = 'name',
  /** column name */
  Rate = 'rate',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

export type Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Product_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Product_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Product_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Var_Pop_Fields = {
  readonly __typename?: 'product_var_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly current_stock?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly initial_price?: Maybe<Scalars['Float']>;
  readonly initial_stock?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product" */
export type Product_Var_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly current_stock?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly initial_price?: InputMaybe<Order_By>;
  readonly initial_stock?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  readonly __typename?: 'product_var_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly current_stock?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly initial_price?: Maybe<Scalars['Float']>;
  readonly initial_stock?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product" */
export type Product_Var_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly current_stock?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly initial_price?: InputMaybe<Order_By>;
  readonly initial_stock?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  readonly __typename?: 'product_variance_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly current_stock?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly initial_price?: Maybe<Scalars['Float']>;
  readonly initial_stock?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product" */
export type Product_Variance_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly current_stock?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly initial_price?: InputMaybe<Order_By>;
  readonly initial_stock?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** columns and relationships of "project" */
export type Project = {
  readonly __typename?: 'project';
  readonly archived: Scalars['Boolean'];
  /** An object relationship */
  readonly business?: Maybe<Business>;
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly client_id?: Maybe<Scalars['Int']>;
  readonly created_at: Scalars['timestamp'];
  readonly description: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  /** An object relationship */
  readonly person?: Maybe<Person>;
  /** An array relationship */
  readonly project_products: ReadonlyArray<Project_Products>;
  /** An aggregate relationship */
  readonly project_products_aggregate: Project_Products_Aggregate;
  /** An array relationship */
  readonly project_services: ReadonlyArray<Project_Services>;
  /** An aggregate relationship */
  readonly project_services_aggregate: Project_Services_Aggregate;
  readonly type: Scalars['project_type_enum'];
  readonly updated_at: Scalars['timestamp'];
  readonly uuid: Scalars['uuid'];
};

/** columns and relationships of "project" */
export type ProjectProject_ProductsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Products_Order_By>>;
  where?: InputMaybe<Project_Products_Bool_Exp>;
};

/** columns and relationships of "project" */
export type ProjectProject_Products_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Products_Order_By>>;
  where?: InputMaybe<Project_Products_Bool_Exp>;
};

/** columns and relationships of "project" */
export type ProjectProject_ServicesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Services_Order_By>>;
  where?: InputMaybe<Project_Services_Bool_Exp>;
};

/** columns and relationships of "project" */
export type ProjectProject_Services_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Services_Order_By>>;
  where?: InputMaybe<Project_Services_Bool_Exp>;
};

/** aggregated selection of "project" */
export type Project_Aggregate = {
  readonly __typename?: 'project_aggregate';
  readonly aggregate?: Maybe<Project_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Project>;
};

export type Project_Aggregate_Bool_Exp = {
  readonly bool_and?: InputMaybe<Project_Aggregate_Bool_Exp_Bool_And>;
  readonly bool_or?: InputMaybe<Project_Aggregate_Bool_Exp_Bool_Or>;
  readonly count?: InputMaybe<Project_Aggregate_Bool_Exp_Count>;
};

export type Project_Aggregate_Bool_Exp_Bool_And = {
  readonly arguments: Project_Select_Column_Project_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Project_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Project_Aggregate_Bool_Exp_Bool_Or = {
  readonly arguments: Project_Select_Column_Project_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Project_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Project_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Project_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Project_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "project" */
export type Project_Aggregate_Fields = {
  readonly __typename?: 'project_aggregate_fields';
  readonly avg?: Maybe<Project_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Project_Max_Fields>;
  readonly min?: Maybe<Project_Min_Fields>;
  readonly stddev?: Maybe<Project_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Project_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Project_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Project_Sum_Fields>;
  readonly var_pop?: Maybe<Project_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Project_Var_Samp_Fields>;
  readonly variance?: Maybe<Project_Variance_Fields>;
};

/** aggregate fields of "project" */
export type Project_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Project_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project" */
export type Project_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Project_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Project_Max_Order_By>;
  readonly min?: InputMaybe<Project_Min_Order_By>;
  readonly stddev?: InputMaybe<Project_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Project_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Project_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Project_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Project_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Project_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Project_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "project" */
export type Project_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Project_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** aggregate avg on columns */
export type Project_Avg_Fields = {
  readonly __typename?: 'project_avg_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly client_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "project" */
export type Project_Avg_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "project". All fields are combined with a logical 'AND'. */
export type Project_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Project_Bool_Exp>>;
  readonly _not?: InputMaybe<Project_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Project_Bool_Exp>>;
  readonly archived?: InputMaybe<Boolean_Comparison_Exp>;
  readonly business?: InputMaybe<Business_Bool_Exp>;
  readonly business_id?: InputMaybe<Int_Comparison_Exp>;
  readonly client_id?: InputMaybe<Int_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly person?: InputMaybe<Person_Bool_Exp>;
  readonly project_products?: InputMaybe<Project_Products_Bool_Exp>;
  readonly project_products_aggregate?: InputMaybe<Project_Products_Aggregate_Bool_Exp>;
  readonly project_services?: InputMaybe<Project_Services_Bool_Exp>;
  readonly project_services_aggregate?: InputMaybe<Project_Services_Aggregate_Bool_Exp>;
  readonly type?: InputMaybe<Project_Type_Enum_Comparison_Exp>;
  readonly updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "project" */
export const enum Project_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_4d68b1358bb5b766d3e78f32f57 = 'PK_4d68b1358bb5b766d3e78f32f57',
}

/** input type for incrementing numeric columns in table "project" */
export type Project_Inc_Input = {
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly client_id?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "project" */
export type Project_Insert_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business?: InputMaybe<Business_Obj_Rel_Insert_Input>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly client_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly person?: InputMaybe<Person_Obj_Rel_Insert_Input>;
  readonly project_products?: InputMaybe<Project_Products_Arr_Rel_Insert_Input>;
  readonly project_services?: InputMaybe<Project_Services_Arr_Rel_Insert_Input>;
  readonly type?: InputMaybe<Scalars['project_type_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Project_Max_Fields = {
  readonly __typename?: 'project_max_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly client_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['project_type_enum']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "project" */
export type Project_Max_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Min_Fields = {
  readonly __typename?: 'project_min_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly client_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['project_type_enum']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "project" */
export type Project_Min_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "project" */
export type Project_Mutation_Response = {
  readonly __typename?: 'project_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Project>;
};

/** input type for inserting object relation for remote table "project" */
export type Project_Obj_Rel_Insert_Input = {
  readonly data: Project_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** on_conflict condition type for table "project" */
export type Project_On_Conflict = {
  readonly constraint: Project_Constraint;
  readonly update_columns?: ReadonlyArray<Project_Update_Column>;
  readonly where?: InputMaybe<Project_Bool_Exp>;
};

/** Ordering options when selecting data from "project". */
export type Project_Order_By = {
  readonly archived?: InputMaybe<Order_By>;
  readonly business?: InputMaybe<Business_Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly person?: InputMaybe<Person_Order_By>;
  readonly project_products_aggregate?: InputMaybe<Project_Products_Aggregate_Order_By>;
  readonly project_services_aggregate?: InputMaybe<Project_Services_Aggregate_Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project */
export type Project_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** columns and relationships of "project_products" */
export type Project_Products = {
  readonly __typename?: 'project_products';
  /** An object relationship */
  readonly product: Product;
  readonly product_id: Scalars['Int'];
  /** An object relationship */
  readonly project: Project;
  readonly project_id: Scalars['Int'];
};

/** aggregated selection of "project_products" */
export type Project_Products_Aggregate = {
  readonly __typename?: 'project_products_aggregate';
  readonly aggregate?: Maybe<Project_Products_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Project_Products>;
};

export type Project_Products_Aggregate_Bool_Exp = {
  readonly count?: InputMaybe<Project_Products_Aggregate_Bool_Exp_Count>;
};

export type Project_Products_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<
    ReadonlyArray<Project_Products_Select_Column>
  >;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Project_Products_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "project_products" */
export type Project_Products_Aggregate_Fields = {
  readonly __typename?: 'project_products_aggregate_fields';
  readonly avg?: Maybe<Project_Products_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Project_Products_Max_Fields>;
  readonly min?: Maybe<Project_Products_Min_Fields>;
  readonly stddev?: Maybe<Project_Products_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Project_Products_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Project_Products_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Project_Products_Sum_Fields>;
  readonly var_pop?: Maybe<Project_Products_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Project_Products_Var_Samp_Fields>;
  readonly variance?: Maybe<Project_Products_Variance_Fields>;
};

/** aggregate fields of "project_products" */
export type Project_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Project_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_products" */
export type Project_Products_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Project_Products_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Project_Products_Max_Order_By>;
  readonly min?: InputMaybe<Project_Products_Min_Order_By>;
  readonly stddev?: InputMaybe<Project_Products_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Project_Products_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Project_Products_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Project_Products_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Project_Products_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Project_Products_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Project_Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "project_products" */
export type Project_Products_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Project_Products_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Project_Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Project_Products_Avg_Fields = {
  readonly __typename?: 'project_products_avg_fields';
  readonly product_id?: Maybe<Scalars['Float']>;
  readonly project_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "project_products" */
export type Project_Products_Avg_Order_By = {
  readonly product_id?: InputMaybe<Order_By>;
  readonly project_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "project_products". All fields are combined with a logical 'AND'. */
export type Project_Products_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Project_Products_Bool_Exp>>;
  readonly _not?: InputMaybe<Project_Products_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Project_Products_Bool_Exp>>;
  readonly product?: InputMaybe<Product_Bool_Exp>;
  readonly product_id?: InputMaybe<Int_Comparison_Exp>;
  readonly project?: InputMaybe<Project_Bool_Exp>;
  readonly project_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_products" */
export const enum Project_Products_Constraint {
  /** unique or primary key constraint on columns "product_id", "project_id" */
  Pk_471ea4e27ea35bbe9cbb346793b = 'PK_471ea4e27ea35bbe9cbb346793b',
}

/** input type for incrementing numeric columns in table "project_products" */
export type Project_Products_Inc_Input = {
  readonly product_id?: InputMaybe<Scalars['Int']>;
  readonly project_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "project_products" */
export type Project_Products_Insert_Input = {
  readonly product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  readonly product_id?: InputMaybe<Scalars['Int']>;
  readonly project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  readonly project_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Project_Products_Max_Fields = {
  readonly __typename?: 'project_products_max_fields';
  readonly product_id?: Maybe<Scalars['Int']>;
  readonly project_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "project_products" */
export type Project_Products_Max_Order_By = {
  readonly product_id?: InputMaybe<Order_By>;
  readonly project_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Products_Min_Fields = {
  readonly __typename?: 'project_products_min_fields';
  readonly product_id?: Maybe<Scalars['Int']>;
  readonly project_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "project_products" */
export type Project_Products_Min_Order_By = {
  readonly product_id?: InputMaybe<Order_By>;
  readonly project_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "project_products" */
export type Project_Products_Mutation_Response = {
  readonly __typename?: 'project_products_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Project_Products>;
};

/** on_conflict condition type for table "project_products" */
export type Project_Products_On_Conflict = {
  readonly constraint: Project_Products_Constraint;
  readonly update_columns?: ReadonlyArray<Project_Products_Update_Column>;
  readonly where?: InputMaybe<Project_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "project_products". */
export type Project_Products_Order_By = {
  readonly product?: InputMaybe<Product_Order_By>;
  readonly product_id?: InputMaybe<Order_By>;
  readonly project?: InputMaybe<Project_Order_By>;
  readonly project_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project_products */
export type Project_Products_Pk_Columns_Input = {
  readonly product_id: Scalars['Int'];
  readonly project_id: Scalars['Int'];
};

/** select columns of table "project_products" */
export const enum Project_Products_Select_Column {
  /** column name */
  ProductId = 'product_id',
  /** column name */
  ProjectId = 'project_id',
}

/** input type for updating data in table "project_products" */
export type Project_Products_Set_Input = {
  readonly product_id?: InputMaybe<Scalars['Int']>;
  readonly project_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Project_Products_Stddev_Fields = {
  readonly __typename?: 'project_products_stddev_fields';
  readonly product_id?: Maybe<Scalars['Float']>;
  readonly project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "project_products" */
export type Project_Products_Stddev_Order_By = {
  readonly product_id?: InputMaybe<Order_By>;
  readonly project_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Project_Products_Stddev_Pop_Fields = {
  readonly __typename?: 'project_products_stddev_pop_fields';
  readonly product_id?: Maybe<Scalars['Float']>;
  readonly project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "project_products" */
export type Project_Products_Stddev_Pop_Order_By = {
  readonly product_id?: InputMaybe<Order_By>;
  readonly project_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Project_Products_Stddev_Samp_Fields = {
  readonly __typename?: 'project_products_stddev_samp_fields';
  readonly product_id?: Maybe<Scalars['Float']>;
  readonly project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "project_products" */
export type Project_Products_Stddev_Samp_Order_By = {
  readonly product_id?: InputMaybe<Order_By>;
  readonly project_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "project_products" */
export type Project_Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Project_Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Products_Stream_Cursor_Value_Input = {
  readonly product_id?: InputMaybe<Scalars['Int']>;
  readonly project_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Project_Products_Sum_Fields = {
  readonly __typename?: 'project_products_sum_fields';
  readonly product_id?: Maybe<Scalars['Int']>;
  readonly project_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "project_products" */
export type Project_Products_Sum_Order_By = {
  readonly product_id?: InputMaybe<Order_By>;
  readonly project_id?: InputMaybe<Order_By>;
};

/** update columns of table "project_products" */
export const enum Project_Products_Update_Column {
  /** column name */
  ProductId = 'product_id',
  /** column name */
  ProjectId = 'project_id',
}

export type Project_Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Project_Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Project_Products_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Project_Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Project_Products_Var_Pop_Fields = {
  readonly __typename?: 'project_products_var_pop_fields';
  readonly product_id?: Maybe<Scalars['Float']>;
  readonly project_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "project_products" */
export type Project_Products_Var_Pop_Order_By = {
  readonly product_id?: InputMaybe<Order_By>;
  readonly project_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Project_Products_Var_Samp_Fields = {
  readonly __typename?: 'project_products_var_samp_fields';
  readonly product_id?: Maybe<Scalars['Float']>;
  readonly project_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "project_products" */
export type Project_Products_Var_Samp_Order_By = {
  readonly product_id?: InputMaybe<Order_By>;
  readonly project_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Project_Products_Variance_Fields = {
  readonly __typename?: 'project_products_variance_fields';
  readonly product_id?: Maybe<Scalars['Float']>;
  readonly project_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "project_products" */
export type Project_Products_Variance_Order_By = {
  readonly product_id?: InputMaybe<Order_By>;
  readonly project_id?: InputMaybe<Order_By>;
};

/** select columns of table "project" */
export const enum Project_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** select "project_aggregate_bool_exp_bool_and_arguments_columns" columns of table "project" */
export const enum Project_Select_Column_Project_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** select "project_aggregate_bool_exp_bool_or_arguments_columns" columns of table "project" */
export const enum Project_Select_Column_Project_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** columns and relationships of "project_services" */
export type Project_Services = {
  readonly __typename?: 'project_services';
  /** An object relationship */
  readonly project: Project;
  readonly project_id: Scalars['Int'];
  /** An object relationship */
  readonly service: Service;
  readonly service_id: Scalars['Int'];
};

/** aggregated selection of "project_services" */
export type Project_Services_Aggregate = {
  readonly __typename?: 'project_services_aggregate';
  readonly aggregate?: Maybe<Project_Services_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Project_Services>;
};

export type Project_Services_Aggregate_Bool_Exp = {
  readonly count?: InputMaybe<Project_Services_Aggregate_Bool_Exp_Count>;
};

export type Project_Services_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<
    ReadonlyArray<Project_Services_Select_Column>
  >;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Project_Services_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "project_services" */
export type Project_Services_Aggregate_Fields = {
  readonly __typename?: 'project_services_aggregate_fields';
  readonly avg?: Maybe<Project_Services_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Project_Services_Max_Fields>;
  readonly min?: Maybe<Project_Services_Min_Fields>;
  readonly stddev?: Maybe<Project_Services_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Project_Services_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Project_Services_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Project_Services_Sum_Fields>;
  readonly var_pop?: Maybe<Project_Services_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Project_Services_Var_Samp_Fields>;
  readonly variance?: Maybe<Project_Services_Variance_Fields>;
};

/** aggregate fields of "project_services" */
export type Project_Services_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Project_Services_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_services" */
export type Project_Services_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Project_Services_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Project_Services_Max_Order_By>;
  readonly min?: InputMaybe<Project_Services_Min_Order_By>;
  readonly stddev?: InputMaybe<Project_Services_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Project_Services_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Project_Services_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Project_Services_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Project_Services_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Project_Services_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Project_Services_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "project_services" */
export type Project_Services_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Project_Services_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Project_Services_On_Conflict>;
};

/** aggregate avg on columns */
export type Project_Services_Avg_Fields = {
  readonly __typename?: 'project_services_avg_fields';
  readonly project_id?: Maybe<Scalars['Float']>;
  readonly service_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "project_services" */
export type Project_Services_Avg_Order_By = {
  readonly project_id?: InputMaybe<Order_By>;
  readonly service_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "project_services". All fields are combined with a logical 'AND'. */
export type Project_Services_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Project_Services_Bool_Exp>>;
  readonly _not?: InputMaybe<Project_Services_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Project_Services_Bool_Exp>>;
  readonly project?: InputMaybe<Project_Bool_Exp>;
  readonly project_id?: InputMaybe<Int_Comparison_Exp>;
  readonly service?: InputMaybe<Service_Bool_Exp>;
  readonly service_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_services" */
export const enum Project_Services_Constraint {
  /** unique or primary key constraint on columns "project_id", "service_id" */
  PkE7eaef0bb0960538ee83f00c6ae = 'PK_e7eaef0bb0960538ee83f00c6ae',
}

/** input type for incrementing numeric columns in table "project_services" */
export type Project_Services_Inc_Input = {
  readonly project_id?: InputMaybe<Scalars['Int']>;
  readonly service_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "project_services" */
export type Project_Services_Insert_Input = {
  readonly project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  readonly project_id?: InputMaybe<Scalars['Int']>;
  readonly service?: InputMaybe<Service_Obj_Rel_Insert_Input>;
  readonly service_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Project_Services_Max_Fields = {
  readonly __typename?: 'project_services_max_fields';
  readonly project_id?: Maybe<Scalars['Int']>;
  readonly service_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "project_services" */
export type Project_Services_Max_Order_By = {
  readonly project_id?: InputMaybe<Order_By>;
  readonly service_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Services_Min_Fields = {
  readonly __typename?: 'project_services_min_fields';
  readonly project_id?: Maybe<Scalars['Int']>;
  readonly service_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "project_services" */
export type Project_Services_Min_Order_By = {
  readonly project_id?: InputMaybe<Order_By>;
  readonly service_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "project_services" */
export type Project_Services_Mutation_Response = {
  readonly __typename?: 'project_services_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Project_Services>;
};

/** on_conflict condition type for table "project_services" */
export type Project_Services_On_Conflict = {
  readonly constraint: Project_Services_Constraint;
  readonly update_columns?: ReadonlyArray<Project_Services_Update_Column>;
  readonly where?: InputMaybe<Project_Services_Bool_Exp>;
};

/** Ordering options when selecting data from "project_services". */
export type Project_Services_Order_By = {
  readonly project?: InputMaybe<Project_Order_By>;
  readonly project_id?: InputMaybe<Order_By>;
  readonly service?: InputMaybe<Service_Order_By>;
  readonly service_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project_services */
export type Project_Services_Pk_Columns_Input = {
  readonly project_id: Scalars['Int'];
  readonly service_id: Scalars['Int'];
};

/** select columns of table "project_services" */
export const enum Project_Services_Select_Column {
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  ServiceId = 'service_id',
}

/** input type for updating data in table "project_services" */
export type Project_Services_Set_Input = {
  readonly project_id?: InputMaybe<Scalars['Int']>;
  readonly service_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Project_Services_Stddev_Fields = {
  readonly __typename?: 'project_services_stddev_fields';
  readonly project_id?: Maybe<Scalars['Float']>;
  readonly service_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "project_services" */
export type Project_Services_Stddev_Order_By = {
  readonly project_id?: InputMaybe<Order_By>;
  readonly service_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Project_Services_Stddev_Pop_Fields = {
  readonly __typename?: 'project_services_stddev_pop_fields';
  readonly project_id?: Maybe<Scalars['Float']>;
  readonly service_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "project_services" */
export type Project_Services_Stddev_Pop_Order_By = {
  readonly project_id?: InputMaybe<Order_By>;
  readonly service_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Project_Services_Stddev_Samp_Fields = {
  readonly __typename?: 'project_services_stddev_samp_fields';
  readonly project_id?: Maybe<Scalars['Float']>;
  readonly service_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "project_services" */
export type Project_Services_Stddev_Samp_Order_By = {
  readonly project_id?: InputMaybe<Order_By>;
  readonly service_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "project_services" */
export type Project_Services_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Project_Services_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Services_Stream_Cursor_Value_Input = {
  readonly project_id?: InputMaybe<Scalars['Int']>;
  readonly service_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Project_Services_Sum_Fields = {
  readonly __typename?: 'project_services_sum_fields';
  readonly project_id?: Maybe<Scalars['Int']>;
  readonly service_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "project_services" */
export type Project_Services_Sum_Order_By = {
  readonly project_id?: InputMaybe<Order_By>;
  readonly service_id?: InputMaybe<Order_By>;
};

/** update columns of table "project_services" */
export const enum Project_Services_Update_Column {
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  ServiceId = 'service_id',
}

export type Project_Services_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Project_Services_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Project_Services_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Project_Services_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Project_Services_Var_Pop_Fields = {
  readonly __typename?: 'project_services_var_pop_fields';
  readonly project_id?: Maybe<Scalars['Float']>;
  readonly service_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "project_services" */
export type Project_Services_Var_Pop_Order_By = {
  readonly project_id?: InputMaybe<Order_By>;
  readonly service_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Project_Services_Var_Samp_Fields = {
  readonly __typename?: 'project_services_var_samp_fields';
  readonly project_id?: Maybe<Scalars['Float']>;
  readonly service_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "project_services" */
export type Project_Services_Var_Samp_Order_By = {
  readonly project_id?: InputMaybe<Order_By>;
  readonly service_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Project_Services_Variance_Fields = {
  readonly __typename?: 'project_services_variance_fields';
  readonly project_id?: Maybe<Scalars['Float']>;
  readonly service_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "project_services" */
export type Project_Services_Variance_Order_By = {
  readonly project_id?: InputMaybe<Order_By>;
  readonly service_id?: InputMaybe<Order_By>;
};

/** input type for updating data in table "project" */
export type Project_Set_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly client_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<Scalars['project_type_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Project_Stddev_Fields = {
  readonly __typename?: 'project_stddev_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly client_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "project" */
export type Project_Stddev_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Project_Stddev_Pop_Fields = {
  readonly __typename?: 'project_stddev_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly client_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "project" */
export type Project_Stddev_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Project_Stddev_Samp_Fields = {
  readonly __typename?: 'project_stddev_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly client_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "project" */
export type Project_Stddev_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "project" */
export type Project_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Project_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Stream_Cursor_Value_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly client_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<Scalars['project_type_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Project_Sum_Fields = {
  readonly __typename?: 'project_sum_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly client_id?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "project" */
export type Project_Sum_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "project_type_enum". All fields are combined with logical 'AND'. */
export type Project_Type_Enum_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['project_type_enum']>;
  readonly _gt?: InputMaybe<Scalars['project_type_enum']>;
  readonly _gte?: InputMaybe<Scalars['project_type_enum']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['project_type_enum']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['project_type_enum']>;
  readonly _lte?: InputMaybe<Scalars['project_type_enum']>;
  readonly _neq?: InputMaybe<Scalars['project_type_enum']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['project_type_enum']>>;
};

/** update columns of table "project" */
export const enum Project_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

export type Project_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Project_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Project_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Project_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Project_Var_Pop_Fields = {
  readonly __typename?: 'project_var_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly client_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "project" */
export type Project_Var_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Project_Var_Samp_Fields = {
  readonly __typename?: 'project_var_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly client_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "project" */
export type Project_Var_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Project_Variance_Fields = {
  readonly __typename?: 'project_variance_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly client_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "project" */
export type Project_Variance_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly client_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  readonly __typename?: 'query_root';
  /** fetch data from the table: "account" */
  readonly account: ReadonlyArray<Account>;
  /** fetch aggregated fields from the table: "account" */
  readonly account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  readonly account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "business" */
  readonly business: ReadonlyArray<Business>;
  /** fetch aggregated fields from the table: "business" */
  readonly business_aggregate: Business_Aggregate;
  /** fetch data from the table: "business" using primary key columns */
  readonly business_by_pk?: Maybe<Business>;
  /** fetch data from the table: "category_transaction" */
  readonly category_transaction: ReadonlyArray<Category_Transaction>;
  /** fetch aggregated fields from the table: "category_transaction" */
  readonly category_transaction_aggregate: Category_Transaction_Aggregate;
  /** fetch data from the table: "category_transaction" using primary key columns */
  readonly category_transaction_by_pk?: Maybe<Category_Transaction>;
  /** fetch data from the table: "company" */
  readonly company: ReadonlyArray<Company>;
  /** fetch aggregated fields from the table: "company" */
  readonly company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  readonly company_by_pk?: Maybe<Company>;
  /** fetch data from the table: "person" */
  readonly person: ReadonlyArray<Person>;
  /** fetch aggregated fields from the table: "person" */
  readonly person_aggregate: Person_Aggregate;
  /** fetch data from the table: "person" using primary key columns */
  readonly person_by_pk?: Maybe<Person>;
  /** fetch data from the table: "product" */
  readonly product: ReadonlyArray<Product>;
  /** fetch aggregated fields from the table: "product" */
  readonly product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  readonly product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "project" */
  readonly project: ReadonlyArray<Project>;
  /** fetch aggregated fields from the table: "project" */
  readonly project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  readonly project_by_pk?: Maybe<Project>;
  /** An array relationship */
  readonly project_products: ReadonlyArray<Project_Products>;
  /** An aggregate relationship */
  readonly project_products_aggregate: Project_Products_Aggregate;
  /** fetch data from the table: "project_products" using primary key columns */
  readonly project_products_by_pk?: Maybe<Project_Products>;
  /** An array relationship */
  readonly project_services: ReadonlyArray<Project_Services>;
  /** An aggregate relationship */
  readonly project_services_aggregate: Project_Services_Aggregate;
  /** fetch data from the table: "project_services" using primary key columns */
  readonly project_services_by_pk?: Maybe<Project_Services>;
  /** fetch data from the table: "service" */
  readonly service: ReadonlyArray<Service>;
  /** fetch aggregated fields from the table: "service" */
  readonly service_aggregate: Service_Aggregate;
  /** fetch data from the table: "service" using primary key columns */
  readonly service_by_pk?: Maybe<Service>;
  /** fetch data from the table: "tax" */
  readonly tax: ReadonlyArray<Tax>;
  /** fetch aggregated fields from the table: "tax" */
  readonly tax_aggregate: Tax_Aggregate;
  /** fetch data from the table: "tax" using primary key columns */
  readonly tax_by_pk?: Maybe<Tax>;
  /** fetch data from the table: "transaction" */
  readonly transaction: ReadonlyArray<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  readonly transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  readonly transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "user" */
  readonly user: ReadonlyArray<User>;
  /** fetch aggregated fields from the table: "user" */
  readonly user_aggregate: User_Aggregate;
  /** fetch data from the table: "user_business" */
  readonly user_business: ReadonlyArray<User_Business>;
  /** fetch aggregated fields from the table: "user_business" */
  readonly user_business_aggregate: User_Business_Aggregate;
  /** fetch data from the table: "user_business" using primary key columns */
  readonly user_business_by_pk?: Maybe<User_Business>;
  /** fetch data from the table: "user" using primary key columns */
  readonly user_by_pk?: Maybe<User>;
};

export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};

export type Query_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};

export type Query_RootAccount_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootBusinessArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Business_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Business_Order_By>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

export type Query_RootBusiness_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Business_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Business_Order_By>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

export type Query_RootBusiness_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootCategory_TransactionArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Category_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Category_Transaction_Order_By>>;
  where?: InputMaybe<Category_Transaction_Bool_Exp>;
};

export type Query_RootCategory_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Category_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Category_Transaction_Order_By>>;
  where?: InputMaybe<Category_Transaction_Bool_Exp>;
};

export type Query_RootCategory_Transaction_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootCompanyArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};

export type Query_RootCompany_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};

export type Query_RootCompany_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootPersonArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};

export type Query_RootPerson_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};

export type Query_RootPerson_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootProductArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

export type Query_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

export type Query_RootProduct_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootProjectArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Query_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Query_RootProject_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootProject_ProductsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Products_Order_By>>;
  where?: InputMaybe<Project_Products_Bool_Exp>;
};

export type Query_RootProject_Products_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Products_Order_By>>;
  where?: InputMaybe<Project_Products_Bool_Exp>;
};

export type Query_RootProject_Products_By_PkArgs = {
  product_id: Scalars['Int'];
  project_id: Scalars['Int'];
};

export type Query_RootProject_ServicesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Services_Order_By>>;
  where?: InputMaybe<Project_Services_Bool_Exp>;
};

export type Query_RootProject_Services_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Services_Order_By>>;
  where?: InputMaybe<Project_Services_Bool_Exp>;
};

export type Query_RootProject_Services_By_PkArgs = {
  project_id: Scalars['Int'];
  service_id: Scalars['Int'];
};

export type Query_RootServiceArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};

export type Query_RootService_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};

export type Query_RootService_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootTaxArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Tax_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Tax_Order_By>>;
  where?: InputMaybe<Tax_Bool_Exp>;
};

export type Query_RootTax_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Tax_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Tax_Order_By>>;
  where?: InputMaybe<Tax_Bool_Exp>;
};

export type Query_RootTax_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

export type Query_RootTransaction_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_BusinessArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<User_Business_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<User_Business_Order_By>>;
  where?: InputMaybe<User_Business_Bool_Exp>;
};

export type Query_RootUser_Business_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<User_Business_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<User_Business_Order_By>>;
  where?: InputMaybe<User_Business_Bool_Exp>;
};

export type Query_RootUser_Business_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "service" */
export type Service = {
  readonly __typename?: 'service';
  readonly archived: Scalars['Boolean'];
  readonly auto_add: Scalars['Boolean'];
  readonly billable: Scalars['Boolean'];
  /** An object relationship */
  readonly business?: Maybe<Business>;
  readonly business_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  readonly category_transaction?: Maybe<Category_Transaction>;
  readonly created_at: Scalars['timestamp'];
  readonly description: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly income_category_id?: Maybe<Scalars['Int']>;
  readonly name: Scalars['String'];
  /** An array relationship */
  readonly project_services: ReadonlyArray<Project_Services>;
  /** An aggregate relationship */
  readonly project_services_aggregate: Project_Services_Aggregate;
  readonly rate: Scalars['numeric'];
  readonly updated_at: Scalars['timestamp'];
  readonly uuid: Scalars['uuid'];
};

/** columns and relationships of "service" */
export type ServiceProject_ServicesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Services_Order_By>>;
  where?: InputMaybe<Project_Services_Bool_Exp>;
};

/** columns and relationships of "service" */
export type ServiceProject_Services_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Services_Order_By>>;
  where?: InputMaybe<Project_Services_Bool_Exp>;
};

/** aggregated selection of "service" */
export type Service_Aggregate = {
  readonly __typename?: 'service_aggregate';
  readonly aggregate?: Maybe<Service_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Service>;
};

export type Service_Aggregate_Bool_Exp = {
  readonly bool_and?: InputMaybe<Service_Aggregate_Bool_Exp_Bool_And>;
  readonly bool_or?: InputMaybe<Service_Aggregate_Bool_Exp_Bool_Or>;
  readonly count?: InputMaybe<Service_Aggregate_Bool_Exp_Count>;
};

export type Service_Aggregate_Bool_Exp_Bool_And = {
  readonly arguments: Service_Select_Column_Service_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Service_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Service_Aggregate_Bool_Exp_Bool_Or = {
  readonly arguments: Service_Select_Column_Service_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Service_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Service_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Service_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Service_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "service" */
export type Service_Aggregate_Fields = {
  readonly __typename?: 'service_aggregate_fields';
  readonly avg?: Maybe<Service_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Service_Max_Fields>;
  readonly min?: Maybe<Service_Min_Fields>;
  readonly stddev?: Maybe<Service_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Service_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Service_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Service_Sum_Fields>;
  readonly var_pop?: Maybe<Service_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Service_Var_Samp_Fields>;
  readonly variance?: Maybe<Service_Variance_Fields>;
};

/** aggregate fields of "service" */
export type Service_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Service_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "service" */
export type Service_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Service_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Service_Max_Order_By>;
  readonly min?: InputMaybe<Service_Min_Order_By>;
  readonly stddev?: InputMaybe<Service_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Service_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Service_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Service_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Service_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Service_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Service_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "service" */
export type Service_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Service_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Service_On_Conflict>;
};

/** aggregate avg on columns */
export type Service_Avg_Fields = {
  readonly __typename?: 'service_avg_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "service" */
export type Service_Avg_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "service". All fields are combined with a logical 'AND'. */
export type Service_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Service_Bool_Exp>>;
  readonly _not?: InputMaybe<Service_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Service_Bool_Exp>>;
  readonly archived?: InputMaybe<Boolean_Comparison_Exp>;
  readonly auto_add?: InputMaybe<Boolean_Comparison_Exp>;
  readonly billable?: InputMaybe<Boolean_Comparison_Exp>;
  readonly business?: InputMaybe<Business_Bool_Exp>;
  readonly business_id?: InputMaybe<Int_Comparison_Exp>;
  readonly category_transaction?: InputMaybe<Category_Transaction_Bool_Exp>;
  readonly created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly description?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly income_category_id?: InputMaybe<Int_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly project_services?: InputMaybe<Project_Services_Bool_Exp>;
  readonly project_services_aggregate?: InputMaybe<Project_Services_Aggregate_Bool_Exp>;
  readonly rate?: InputMaybe<Numeric_Comparison_Exp>;
  readonly updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "service" */
export const enum Service_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_85a21558c006647cd76fdce044b = 'PK_85a21558c006647cd76fdce044b',
}

/** input type for incrementing numeric columns in table "service" */
export type Service_Inc_Input = {
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly income_category_id?: InputMaybe<Scalars['Int']>;
  readonly rate?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "service" */
export type Service_Insert_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly auto_add?: InputMaybe<Scalars['Boolean']>;
  readonly billable?: InputMaybe<Scalars['Boolean']>;
  readonly business?: InputMaybe<Business_Obj_Rel_Insert_Input>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly category_transaction?: InputMaybe<Category_Transaction_Obj_Rel_Insert_Input>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly income_category_id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly project_services?: InputMaybe<Project_Services_Arr_Rel_Insert_Input>;
  readonly rate?: InputMaybe<Scalars['numeric']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Service_Max_Fields = {
  readonly __typename?: 'service_max_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly income_category_id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly rate?: Maybe<Scalars['numeric']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "service" */
export type Service_Max_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Service_Min_Fields = {
  readonly __typename?: 'service_min_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly income_category_id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly rate?: Maybe<Scalars['numeric']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "service" */
export type Service_Min_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "service" */
export type Service_Mutation_Response = {
  readonly __typename?: 'service_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Service>;
};

/** input type for inserting object relation for remote table "service" */
export type Service_Obj_Rel_Insert_Input = {
  readonly data: Service_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Service_On_Conflict>;
};

/** on_conflict condition type for table "service" */
export type Service_On_Conflict = {
  readonly constraint: Service_Constraint;
  readonly update_columns?: ReadonlyArray<Service_Update_Column>;
  readonly where?: InputMaybe<Service_Bool_Exp>;
};

/** Ordering options when selecting data from "service". */
export type Service_Order_By = {
  readonly archived?: InputMaybe<Order_By>;
  readonly auto_add?: InputMaybe<Order_By>;
  readonly billable?: InputMaybe<Order_By>;
  readonly business?: InputMaybe<Business_Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly category_transaction?: InputMaybe<Category_Transaction_Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly description?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly project_services_aggregate?: InputMaybe<Project_Services_Aggregate_Order_By>;
  readonly rate?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: service */
export type Service_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "service" */
export const enum Service_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  AutoAdd = 'auto_add',
  /** column name */
  Billable = 'billable',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IncomeCategoryId = 'income_category_id',
  /** column name */
  Name = 'name',
  /** column name */
  Rate = 'rate',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** select "service_aggregate_bool_exp_bool_and_arguments_columns" columns of table "service" */
export const enum Service_Select_Column_Service_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  AutoAdd = 'auto_add',
  /** column name */
  Billable = 'billable',
}

/** select "service_aggregate_bool_exp_bool_or_arguments_columns" columns of table "service" */
export const enum Service_Select_Column_Service_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  AutoAdd = 'auto_add',
  /** column name */
  Billable = 'billable',
}

/** input type for updating data in table "service" */
export type Service_Set_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly auto_add?: InputMaybe<Scalars['Boolean']>;
  readonly billable?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly income_category_id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly rate?: InputMaybe<Scalars['numeric']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Service_Stddev_Fields = {
  readonly __typename?: 'service_stddev_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "service" */
export type Service_Stddev_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Service_Stddev_Pop_Fields = {
  readonly __typename?: 'service_stddev_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "service" */
export type Service_Stddev_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Service_Stddev_Samp_Fields = {
  readonly __typename?: 'service_stddev_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "service" */
export type Service_Stddev_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "service" */
export type Service_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Service_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Service_Stream_Cursor_Value_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly auto_add?: InputMaybe<Scalars['Boolean']>;
  readonly billable?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly income_category_id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly rate?: InputMaybe<Scalars['numeric']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Service_Sum_Fields = {
  readonly __typename?: 'service_sum_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly income_category_id?: Maybe<Scalars['Int']>;
  readonly rate?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "service" */
export type Service_Sum_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** update columns of table "service" */
export const enum Service_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  AutoAdd = 'auto_add',
  /** column name */
  Billable = 'billable',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IncomeCategoryId = 'income_category_id',
  /** column name */
  Name = 'name',
  /** column name */
  Rate = 'rate',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

export type Service_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Service_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Service_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Service_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Service_Var_Pop_Fields = {
  readonly __typename?: 'service_var_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "service" */
export type Service_Var_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Service_Var_Samp_Fields = {
  readonly __typename?: 'service_var_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "service" */
export type Service_Var_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Service_Variance_Fields = {
  readonly __typename?: 'service_variance_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly income_category_id?: Maybe<Scalars['Float']>;
  readonly rate?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "service" */
export type Service_Variance_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly income_category_id?: InputMaybe<Order_By>;
  readonly rate?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  readonly __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  readonly account: ReadonlyArray<Account>;
  /** fetch aggregated fields from the table: "account" */
  readonly account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  readonly account_by_pk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "account" */
  readonly account_stream: ReadonlyArray<Account>;
  /** fetch data from the table: "business" */
  readonly business: ReadonlyArray<Business>;
  /** fetch aggregated fields from the table: "business" */
  readonly business_aggregate: Business_Aggregate;
  /** fetch data from the table: "business" using primary key columns */
  readonly business_by_pk?: Maybe<Business>;
  /** fetch data from the table in a streaming manner: "business" */
  readonly business_stream: ReadonlyArray<Business>;
  /** fetch data from the table: "category_transaction" */
  readonly category_transaction: ReadonlyArray<Category_Transaction>;
  /** fetch aggregated fields from the table: "category_transaction" */
  readonly category_transaction_aggregate: Category_Transaction_Aggregate;
  /** fetch data from the table: "category_transaction" using primary key columns */
  readonly category_transaction_by_pk?: Maybe<Category_Transaction>;
  /** fetch data from the table in a streaming manner: "category_transaction" */
  readonly category_transaction_stream: ReadonlyArray<Category_Transaction>;
  /** fetch data from the table: "company" */
  readonly company: ReadonlyArray<Company>;
  /** fetch aggregated fields from the table: "company" */
  readonly company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  readonly company_by_pk?: Maybe<Company>;
  /** fetch data from the table in a streaming manner: "company" */
  readonly company_stream: ReadonlyArray<Company>;
  /** fetch data from the table: "person" */
  readonly person: ReadonlyArray<Person>;
  /** fetch aggregated fields from the table: "person" */
  readonly person_aggregate: Person_Aggregate;
  /** fetch data from the table: "person" using primary key columns */
  readonly person_by_pk?: Maybe<Person>;
  /** fetch data from the table in a streaming manner: "person" */
  readonly person_stream: ReadonlyArray<Person>;
  /** fetch data from the table: "product" */
  readonly product: ReadonlyArray<Product>;
  /** fetch aggregated fields from the table: "product" */
  readonly product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  readonly product_by_pk?: Maybe<Product>;
  /** fetch data from the table in a streaming manner: "product" */
  readonly product_stream: ReadonlyArray<Product>;
  /** fetch data from the table: "project" */
  readonly project: ReadonlyArray<Project>;
  /** fetch aggregated fields from the table: "project" */
  readonly project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  readonly project_by_pk?: Maybe<Project>;
  /** An array relationship */
  readonly project_products: ReadonlyArray<Project_Products>;
  /** An aggregate relationship */
  readonly project_products_aggregate: Project_Products_Aggregate;
  /** fetch data from the table: "project_products" using primary key columns */
  readonly project_products_by_pk?: Maybe<Project_Products>;
  /** fetch data from the table in a streaming manner: "project_products" */
  readonly project_products_stream: ReadonlyArray<Project_Products>;
  /** An array relationship */
  readonly project_services: ReadonlyArray<Project_Services>;
  /** An aggregate relationship */
  readonly project_services_aggregate: Project_Services_Aggregate;
  /** fetch data from the table: "project_services" using primary key columns */
  readonly project_services_by_pk?: Maybe<Project_Services>;
  /** fetch data from the table in a streaming manner: "project_services" */
  readonly project_services_stream: ReadonlyArray<Project_Services>;
  /** fetch data from the table in a streaming manner: "project" */
  readonly project_stream: ReadonlyArray<Project>;
  /** fetch data from the table: "service" */
  readonly service: ReadonlyArray<Service>;
  /** fetch aggregated fields from the table: "service" */
  readonly service_aggregate: Service_Aggregate;
  /** fetch data from the table: "service" using primary key columns */
  readonly service_by_pk?: Maybe<Service>;
  /** fetch data from the table in a streaming manner: "service" */
  readonly service_stream: ReadonlyArray<Service>;
  /** fetch data from the table: "tax" */
  readonly tax: ReadonlyArray<Tax>;
  /** fetch aggregated fields from the table: "tax" */
  readonly tax_aggregate: Tax_Aggregate;
  /** fetch data from the table: "tax" using primary key columns */
  readonly tax_by_pk?: Maybe<Tax>;
  /** fetch data from the table in a streaming manner: "tax" */
  readonly tax_stream: ReadonlyArray<Tax>;
  /** fetch data from the table: "transaction" */
  readonly transaction: ReadonlyArray<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  readonly transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  readonly transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table in a streaming manner: "transaction" */
  readonly transaction_stream: ReadonlyArray<Transaction>;
  /** fetch data from the table: "user" */
  readonly user: ReadonlyArray<User>;
  /** fetch aggregated fields from the table: "user" */
  readonly user_aggregate: User_Aggregate;
  /** fetch data from the table: "user_business" */
  readonly user_business: ReadonlyArray<User_Business>;
  /** fetch aggregated fields from the table: "user_business" */
  readonly user_business_aggregate: User_Business_Aggregate;
  /** fetch data from the table: "user_business" using primary key columns */
  readonly user_business_by_pk?: Maybe<User_Business>;
  /** fetch data from the table in a streaming manner: "user_business" */
  readonly user_business_stream: ReadonlyArray<User_Business>;
  /** fetch data from the table: "user" using primary key columns */
  readonly user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  readonly user_stream: ReadonlyArray<User>;
};

export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};

export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};

export type Subscription_RootAccount_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootAccount_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Bool_Exp>;
};

export type Subscription_RootBusinessArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Business_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Business_Order_By>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

export type Subscription_RootBusiness_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Business_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Business_Order_By>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

export type Subscription_RootBusiness_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootBusiness_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Business_Stream_Cursor_Input>>;
  where?: InputMaybe<Business_Bool_Exp>;
};

export type Subscription_RootCategory_TransactionArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Category_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Category_Transaction_Order_By>>;
  where?: InputMaybe<Category_Transaction_Bool_Exp>;
};

export type Subscription_RootCategory_Transaction_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Category_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Category_Transaction_Order_By>>;
  where?: InputMaybe<Category_Transaction_Bool_Exp>;
};

export type Subscription_RootCategory_Transaction_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootCategory_Transaction_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Category_Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Category_Transaction_Bool_Exp>;
};

export type Subscription_RootCompanyArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};

export type Subscription_RootCompany_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};

export type Subscription_RootCompany_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootCompany_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Company_Stream_Cursor_Input>>;
  where?: InputMaybe<Company_Bool_Exp>;
};

export type Subscription_RootPersonArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};

export type Subscription_RootPerson_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};

export type Subscription_RootPerson_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootPerson_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Person_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Bool_Exp>;
};

export type Subscription_RootProductArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

export type Subscription_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootProduct_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Product_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

export type Subscription_RootProjectArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Subscription_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Subscription_RootProject_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootProject_ProductsArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Products_Order_By>>;
  where?: InputMaybe<Project_Products_Bool_Exp>;
};

export type Subscription_RootProject_Products_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Products_Order_By>>;
  where?: InputMaybe<Project_Products_Bool_Exp>;
};

export type Subscription_RootProject_Products_By_PkArgs = {
  product_id: Scalars['Int'];
  project_id: Scalars['Int'];
};

export type Subscription_RootProject_Products_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Project_Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Products_Bool_Exp>;
};

export type Subscription_RootProject_ServicesArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Services_Order_By>>;
  where?: InputMaybe<Project_Services_Bool_Exp>;
};

export type Subscription_RootProject_Services_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Project_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Project_Services_Order_By>>;
  where?: InputMaybe<Project_Services_Bool_Exp>;
};

export type Subscription_RootProject_Services_By_PkArgs = {
  project_id: Scalars['Int'];
  service_id: Scalars['Int'];
};

export type Subscription_RootProject_Services_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Project_Services_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Services_Bool_Exp>;
};

export type Subscription_RootProject_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Project_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Subscription_RootServiceArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};

export type Subscription_RootService_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};

export type Subscription_RootService_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootService_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Service_Stream_Cursor_Input>>;
  where?: InputMaybe<Service_Bool_Exp>;
};

export type Subscription_RootTaxArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Tax_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Tax_Order_By>>;
  where?: InputMaybe<Tax_Bool_Exp>;
};

export type Subscription_RootTax_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Tax_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Tax_Order_By>>;
  where?: InputMaybe<Tax_Bool_Exp>;
};

export type Subscription_RootTax_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootTax_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Tax_Stream_Cursor_Input>>;
  where?: InputMaybe<Tax_Bool_Exp>;
};

export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

export type Subscription_RootTransaction_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_BusinessArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<User_Business_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<User_Business_Order_By>>;
  where?: InputMaybe<User_Business_Bool_Exp>;
};

export type Subscription_RootUser_Business_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<User_Business_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<User_Business_Order_By>>;
  where?: InputMaybe<User_Business_Bool_Exp>;
};

export type Subscription_RootUser_Business_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootUser_Business_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<User_Business_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Business_Bool_Exp>;
};

export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: ReadonlyArray<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** columns and relationships of "tax" */
export type Tax = {
  readonly __typename?: 'tax';
  readonly amount: Scalars['numeric'];
  readonly archived: Scalars['Boolean'];
  /** An object relationship */
  readonly business?: Maybe<Business>;
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at: Scalars['timestamp'];
  readonly default: Scalars['Boolean'];
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly updated_at: Scalars['timestamp'];
  readonly uuid: Scalars['uuid'];
};

/** aggregated selection of "tax" */
export type Tax_Aggregate = {
  readonly __typename?: 'tax_aggregate';
  readonly aggregate?: Maybe<Tax_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Tax>;
};

export type Tax_Aggregate_Bool_Exp = {
  readonly bool_and?: InputMaybe<Tax_Aggregate_Bool_Exp_Bool_And>;
  readonly bool_or?: InputMaybe<Tax_Aggregate_Bool_Exp_Bool_Or>;
  readonly count?: InputMaybe<Tax_Aggregate_Bool_Exp_Count>;
};

export type Tax_Aggregate_Bool_Exp_Bool_And = {
  readonly arguments: Tax_Select_Column_Tax_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Tax_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Tax_Aggregate_Bool_Exp_Bool_Or = {
  readonly arguments: Tax_Select_Column_Tax_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Tax_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Tax_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Tax_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Tax_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "tax" */
export type Tax_Aggregate_Fields = {
  readonly __typename?: 'tax_aggregate_fields';
  readonly avg?: Maybe<Tax_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Tax_Max_Fields>;
  readonly min?: Maybe<Tax_Min_Fields>;
  readonly stddev?: Maybe<Tax_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Tax_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Tax_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Tax_Sum_Fields>;
  readonly var_pop?: Maybe<Tax_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Tax_Var_Samp_Fields>;
  readonly variance?: Maybe<Tax_Variance_Fields>;
};

/** aggregate fields of "tax" */
export type Tax_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Tax_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tax" */
export type Tax_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Tax_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Tax_Max_Order_By>;
  readonly min?: InputMaybe<Tax_Min_Order_By>;
  readonly stddev?: InputMaybe<Tax_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Tax_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Tax_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Tax_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Tax_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Tax_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Tax_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tax" */
export type Tax_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Tax_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Tax_On_Conflict>;
};

/** aggregate avg on columns */
export type Tax_Avg_Fields = {
  readonly __typename?: 'tax_avg_fields';
  readonly amount?: Maybe<Scalars['Float']>;
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tax" */
export type Tax_Avg_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tax". All fields are combined with a logical 'AND'. */
export type Tax_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Tax_Bool_Exp>>;
  readonly _not?: InputMaybe<Tax_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Tax_Bool_Exp>>;
  readonly amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly archived?: InputMaybe<Boolean_Comparison_Exp>;
  readonly business?: InputMaybe<Business_Bool_Exp>;
  readonly business_id?: InputMaybe<Int_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly default?: InputMaybe<Boolean_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "tax" */
export const enum Tax_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_2c1e62c595571139e2fb0e9c319 = 'PK_2c1e62c595571139e2fb0e9c319',
  /** unique or primary key constraint on columns "name" */
  UqBebe5cca6542f9e7ddfc806dab8 = 'UQ_bebe5cca6542f9e7ddfc806dab8',
}

/** input type for incrementing numeric columns in table "tax" */
export type Tax_Inc_Input = {
  readonly amount?: InputMaybe<Scalars['numeric']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "tax" */
export type Tax_Insert_Input = {
  readonly amount?: InputMaybe<Scalars['numeric']>;
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business?: InputMaybe<Business_Obj_Rel_Insert_Input>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly default?: InputMaybe<Scalars['Boolean']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Tax_Max_Fields = {
  readonly __typename?: 'tax_max_fields';
  readonly amount?: Maybe<Scalars['numeric']>;
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "tax" */
export type Tax_Max_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tax_Min_Fields = {
  readonly __typename?: 'tax_min_fields';
  readonly amount?: Maybe<Scalars['numeric']>;
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "tax" */
export type Tax_Min_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tax" */
export type Tax_Mutation_Response = {
  readonly __typename?: 'tax_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Tax>;
};

/** on_conflict condition type for table "tax" */
export type Tax_On_Conflict = {
  readonly constraint: Tax_Constraint;
  readonly update_columns?: ReadonlyArray<Tax_Update_Column>;
  readonly where?: InputMaybe<Tax_Bool_Exp>;
};

/** Ordering options when selecting data from "tax". */
export type Tax_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly archived?: InputMaybe<Order_By>;
  readonly business?: InputMaybe<Business_Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly default?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tax */
export type Tax_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "tax" */
export const enum Tax_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Default = 'default',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** select "tax_aggregate_bool_exp_bool_and_arguments_columns" columns of table "tax" */
export const enum Tax_Select_Column_Tax_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Default = 'default',
}

/** select "tax_aggregate_bool_exp_bool_or_arguments_columns" columns of table "tax" */
export const enum Tax_Select_Column_Tax_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Default = 'default',
}

/** input type for updating data in table "tax" */
export type Tax_Set_Input = {
  readonly amount?: InputMaybe<Scalars['numeric']>;
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly default?: InputMaybe<Scalars['Boolean']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Tax_Stddev_Fields = {
  readonly __typename?: 'tax_stddev_fields';
  readonly amount?: Maybe<Scalars['Float']>;
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tax" */
export type Tax_Stddev_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tax_Stddev_Pop_Fields = {
  readonly __typename?: 'tax_stddev_pop_fields';
  readonly amount?: Maybe<Scalars['Float']>;
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tax" */
export type Tax_Stddev_Pop_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tax_Stddev_Samp_Fields = {
  readonly __typename?: 'tax_stddev_samp_fields';
  readonly amount?: Maybe<Scalars['Float']>;
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tax" */
export type Tax_Stddev_Samp_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "tax" */
export type Tax_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Tax_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tax_Stream_Cursor_Value_Input = {
  readonly amount?: InputMaybe<Scalars['numeric']>;
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly default?: InputMaybe<Scalars['Boolean']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Tax_Sum_Fields = {
  readonly __typename?: 'tax_sum_fields';
  readonly amount?: Maybe<Scalars['numeric']>;
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tax" */
export type Tax_Sum_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** update columns of table "tax" */
export const enum Tax_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Default = 'default',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

export type Tax_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Tax_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Tax_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Tax_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tax_Var_Pop_Fields = {
  readonly __typename?: 'tax_var_pop_fields';
  readonly amount?: Maybe<Scalars['Float']>;
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tax" */
export type Tax_Var_Pop_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tax_Var_Samp_Fields = {
  readonly __typename?: 'tax_var_samp_fields';
  readonly amount?: Maybe<Scalars['Float']>;
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tax" */
export type Tax_Var_Samp_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tax_Variance_Fields = {
  readonly __typename?: 'tax_variance_fields';
  readonly amount?: Maybe<Scalars['Float']>;
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tax" */
export type Tax_Variance_Order_By = {
  readonly amount?: InputMaybe<Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['timestamp']>;
  readonly _gt?: InputMaybe<Scalars['timestamp']>;
  readonly _gte?: InputMaybe<Scalars['timestamp']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamp']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['timestamp']>;
  readonly _lte?: InputMaybe<Scalars['timestamp']>;
  readonly _neq?: InputMaybe<Scalars['timestamp']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['timestamptz']>;
  readonly _gt?: InputMaybe<Scalars['timestamptz']>;
  readonly _gte?: InputMaybe<Scalars['timestamptz']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['timestamptz']>;
  readonly _lte?: InputMaybe<Scalars['timestamptz']>;
  readonly _neq?: InputMaybe<Scalars['timestamptz']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  readonly __typename?: 'transaction';
  /** An object relationship */
  readonly account?: Maybe<Account>;
  readonly account_id?: Maybe<Scalars['Int']>;
  readonly amount: Scalars['numeric'];
  readonly archived: Scalars['Boolean'];
  readonly category_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  readonly category_transaction?: Maybe<Category_Transaction>;
  readonly created_at: Scalars['timestamp'];
  readonly date: Scalars['timestamptz'];
  readonly id: Scalars['Int'];
  readonly note: Scalars['String'];
  readonly payee_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  readonly person?: Maybe<Person>;
  readonly type: Scalars['transaction_type_enum'];
  readonly updated_at: Scalars['timestamp'];
  readonly uuid: Scalars['uuid'];
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  readonly __typename?: 'transaction_aggregate';
  readonly aggregate?: Maybe<Transaction_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Transaction>;
};

export type Transaction_Aggregate_Bool_Exp = {
  readonly bool_and?: InputMaybe<Transaction_Aggregate_Bool_Exp_Bool_And>;
  readonly bool_or?: InputMaybe<Transaction_Aggregate_Bool_Exp_Bool_Or>;
  readonly count?: InputMaybe<Transaction_Aggregate_Bool_Exp_Count>;
};

export type Transaction_Aggregate_Bool_Exp_Bool_And = {
  readonly arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Transaction_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Bool_Or = {
  readonly arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Transaction_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<Transaction_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  readonly __typename?: 'transaction_aggregate_fields';
  readonly avg?: Maybe<Transaction_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<Transaction_Max_Fields>;
  readonly min?: Maybe<Transaction_Min_Fields>;
  readonly stddev?: Maybe<Transaction_Stddev_Fields>;
  readonly stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  readonly sum?: Maybe<Transaction_Sum_Fields>;
  readonly var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  readonly var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  readonly variance?: Maybe<Transaction_Variance_Fields>;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  readonly avg?: InputMaybe<Transaction_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Transaction_Max_Order_By>;
  readonly min?: InputMaybe<Transaction_Min_Order_By>;
  readonly stddev?: InputMaybe<Transaction_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<Transaction_Sum_Order_By>;
  readonly var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<Transaction_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transaction" */
export type Transaction_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Transaction_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  readonly __typename?: 'transaction_avg_fields';
  readonly account_id?: Maybe<Scalars['Float']>;
  readonly amount?: Maybe<Scalars['Float']>;
  readonly category_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly payee_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  readonly account_id?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly category_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly payee_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Transaction_Bool_Exp>>;
  readonly _not?: InputMaybe<Transaction_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<Transaction_Bool_Exp>>;
  readonly account?: InputMaybe<Account_Bool_Exp>;
  readonly account_id?: InputMaybe<Int_Comparison_Exp>;
  readonly amount?: InputMaybe<Numeric_Comparison_Exp>;
  readonly archived?: InputMaybe<Boolean_Comparison_Exp>;
  readonly category_id?: InputMaybe<Int_Comparison_Exp>;
  readonly category_transaction?: InputMaybe<Category_Transaction_Bool_Exp>;
  readonly created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly date?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly note?: InputMaybe<String_Comparison_Exp>;
  readonly payee_id?: InputMaybe<Int_Comparison_Exp>;
  readonly person?: InputMaybe<Person_Bool_Exp>;
  readonly type?: InputMaybe<Transaction_Type_Enum_Comparison_Exp>;
  readonly updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction" */
export const enum Transaction_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_89eadb93a89810556e1cbcd6ab9 = 'PK_89eadb93a89810556e1cbcd6ab9',
}

/** input type for incrementing numeric columns in table "transaction" */
export type Transaction_Inc_Input = {
  readonly account_id?: InputMaybe<Scalars['Int']>;
  readonly amount?: InputMaybe<Scalars['numeric']>;
  readonly category_id?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly payee_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "transaction" */
export type Transaction_Insert_Input = {
  readonly account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  readonly account_id?: InputMaybe<Scalars['Int']>;
  readonly amount?: InputMaybe<Scalars['numeric']>;
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly category_id?: InputMaybe<Scalars['Int']>;
  readonly category_transaction?: InputMaybe<Category_Transaction_Obj_Rel_Insert_Input>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly date?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly note?: InputMaybe<Scalars['String']>;
  readonly payee_id?: InputMaybe<Scalars['Int']>;
  readonly person?: InputMaybe<Person_Obj_Rel_Insert_Input>;
  readonly type?: InputMaybe<Scalars['transaction_type_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  readonly __typename?: 'transaction_max_fields';
  readonly account_id?: Maybe<Scalars['Int']>;
  readonly amount?: Maybe<Scalars['numeric']>;
  readonly category_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly date?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly note?: Maybe<Scalars['String']>;
  readonly payee_id?: Maybe<Scalars['Int']>;
  readonly type?: Maybe<Scalars['transaction_type_enum']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  readonly account_id?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly category_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly date?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly note?: InputMaybe<Order_By>;
  readonly payee_id?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  readonly __typename?: 'transaction_min_fields';
  readonly account_id?: Maybe<Scalars['Int']>;
  readonly amount?: Maybe<Scalars['numeric']>;
  readonly category_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly date?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly note?: Maybe<Scalars['String']>;
  readonly payee_id?: Maybe<Scalars['Int']>;
  readonly type?: Maybe<Scalars['transaction_type_enum']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  readonly account_id?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly category_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly date?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly note?: InputMaybe<Order_By>;
  readonly payee_id?: InputMaybe<Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction" */
export type Transaction_Mutation_Response = {
  readonly __typename?: 'transaction_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Transaction>;
};

/** on_conflict condition type for table "transaction" */
export type Transaction_On_Conflict = {
  readonly constraint: Transaction_Constraint;
  readonly update_columns?: ReadonlyArray<Transaction_Update_Column>;
  readonly where?: InputMaybe<Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  readonly account?: InputMaybe<Account_Order_By>;
  readonly account_id?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly archived?: InputMaybe<Order_By>;
  readonly category_id?: InputMaybe<Order_By>;
  readonly category_transaction?: InputMaybe<Category_Transaction_Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly date?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly note?: InputMaybe<Order_By>;
  readonly payee_id?: InputMaybe<Order_By>;
  readonly person?: InputMaybe<Person_Order_By>;
  readonly type?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction */
export type Transaction_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** select columns of table "transaction" */
export const enum Transaction_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  Archived = 'archived',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  PayeeId = 'payee_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** select "transaction_aggregate_bool_exp_bool_and_arguments_columns" columns of table "transaction" */
export const enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** select "transaction_aggregate_bool_exp_bool_or_arguments_columns" columns of table "transaction" */
export const enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
}

/** input type for updating data in table "transaction" */
export type Transaction_Set_Input = {
  readonly account_id?: InputMaybe<Scalars['Int']>;
  readonly amount?: InputMaybe<Scalars['numeric']>;
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly category_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly date?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly note?: InputMaybe<Scalars['String']>;
  readonly payee_id?: InputMaybe<Scalars['Int']>;
  readonly type?: InputMaybe<Scalars['transaction_type_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  readonly __typename?: 'transaction_stddev_fields';
  readonly account_id?: Maybe<Scalars['Float']>;
  readonly amount?: Maybe<Scalars['Float']>;
  readonly category_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly payee_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  readonly account_id?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly category_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly payee_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  readonly __typename?: 'transaction_stddev_pop_fields';
  readonly account_id?: Maybe<Scalars['Float']>;
  readonly amount?: Maybe<Scalars['Float']>;
  readonly category_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly payee_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  readonly account_id?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly category_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly payee_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  readonly __typename?: 'transaction_stddev_samp_fields';
  readonly account_id?: Maybe<Scalars['Float']>;
  readonly amount?: Maybe<Scalars['Float']>;
  readonly category_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly payee_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  readonly account_id?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly category_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly payee_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  readonly account_id?: InputMaybe<Scalars['Int']>;
  readonly amount?: InputMaybe<Scalars['numeric']>;
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly category_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly date?: InputMaybe<Scalars['timestamptz']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly note?: InputMaybe<Scalars['String']>;
  readonly payee_id?: InputMaybe<Scalars['Int']>;
  readonly type?: InputMaybe<Scalars['transaction_type_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  readonly __typename?: 'transaction_sum_fields';
  readonly account_id?: Maybe<Scalars['Int']>;
  readonly amount?: Maybe<Scalars['numeric']>;
  readonly category_id?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly payee_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  readonly account_id?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly category_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly payee_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "transaction_type_enum". All fields are combined with logical 'AND'. */
export type Transaction_Type_Enum_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['transaction_type_enum']>;
  readonly _gt?: InputMaybe<Scalars['transaction_type_enum']>;
  readonly _gte?: InputMaybe<Scalars['transaction_type_enum']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['transaction_type_enum']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['transaction_type_enum']>;
  readonly _lte?: InputMaybe<Scalars['transaction_type_enum']>;
  readonly _neq?: InputMaybe<Scalars['transaction_type_enum']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['transaction_type_enum']>>;
};

/** update columns of table "transaction" */
export const enum Transaction_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  Archived = 'archived',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  PayeeId = 'payee_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

export type Transaction_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<Transaction_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Transaction_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: Transaction_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  readonly __typename?: 'transaction_var_pop_fields';
  readonly account_id?: Maybe<Scalars['Float']>;
  readonly amount?: Maybe<Scalars['Float']>;
  readonly category_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly payee_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  readonly account_id?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly category_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly payee_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  readonly __typename?: 'transaction_var_samp_fields';
  readonly account_id?: Maybe<Scalars['Float']>;
  readonly amount?: Maybe<Scalars['Float']>;
  readonly category_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly payee_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  readonly account_id?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly category_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly payee_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  readonly __typename?: 'transaction_variance_fields';
  readonly account_id?: Maybe<Scalars['Float']>;
  readonly amount?: Maybe<Scalars['Float']>;
  readonly category_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly payee_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  readonly account_id?: InputMaybe<Order_By>;
  readonly amount?: InputMaybe<Order_By>;
  readonly category_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly payee_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user" */
export type User = {
  readonly __typename?: 'user';
  readonly archived: Scalars['Boolean'];
  readonly birthday?: Maybe<Scalars['String']>;
  readonly clerk_id: Scalars['String'];
  readonly created_at: Scalars['timestamp'];
  readonly email_addresses?: Maybe<Scalars['jsonb']>;
  readonly external_accounts?: Maybe<Scalars['jsonb']>;
  readonly first_name: Scalars['String'];
  readonly gender?: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly image_url: Scalars['String'];
  readonly last_name: Scalars['String'];
  readonly last_sign_in_at?: Maybe<Scalars['timestamp']>;
  readonly object: Scalars['String'];
  readonly password_enabled: Scalars['Boolean'];
  readonly phone_numbers?: Maybe<Scalars['jsonb']>;
  readonly primary_email_address_id: Scalars['String'];
  readonly primary_phone_number_id?: Maybe<Scalars['String']>;
  readonly primary_web3_wallet_id?: Maybe<Scalars['String']>;
  readonly private_metadata: Scalars['jsonb'];
  readonly profile_image_url: Scalars['String'];
  readonly public_metadata: Scalars['jsonb'];
  readonly two_factor_enabled: Scalars['Boolean'];
  readonly unsafe_metadata: Scalars['jsonb'];
  readonly updated_at: Scalars['timestamp'];
  /** An array relationship */
  readonly userBusinessesByUserId: ReadonlyArray<User_Business>;
  /** An aggregate relationship */
  readonly userBusinessesByUserId_aggregate: User_Business_Aggregate;
  readonly username?: Maybe<Scalars['String']>;
  readonly uuid: Scalars['uuid'];
  readonly web3_wallets?: Maybe<Scalars['jsonb']>;
};

/** columns and relationships of "user" */
export type UserEmail_AddressesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "user" */
export type UserExternal_AccountsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "user" */
export type UserPhone_NumbersArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "user" */
export type UserPrivate_MetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "user" */
export type UserPublic_MetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "user" */
export type UserUnsafe_MetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "user" */
export type UserUserBusinessesByUserIdArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<User_Business_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<User_Business_Order_By>>;
  where?: InputMaybe<User_Business_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserUserBusinessesByUserId_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<User_Business_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<User_Business_Order_By>>;
  where?: InputMaybe<User_Business_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserWeb3_WalletsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  readonly __typename?: 'user_aggregate';
  readonly aggregate?: Maybe<User_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  readonly __typename?: 'user_aggregate_fields';
  readonly avg?: Maybe<User_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<User_Max_Fields>;
  readonly min?: Maybe<User_Min_Fields>;
  readonly stddev?: Maybe<User_Stddev_Fields>;
  readonly stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  readonly sum?: Maybe<User_Sum_Fields>;
  readonly var_pop?: Maybe<User_Var_Pop_Fields>;
  readonly var_samp?: Maybe<User_Var_Samp_Fields>;
  readonly variance?: Maybe<User_Variance_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Append_Input = {
  readonly email_addresses?: InputMaybe<Scalars['jsonb']>;
  readonly external_accounts?: InputMaybe<Scalars['jsonb']>;
  readonly phone_numbers?: InputMaybe<Scalars['jsonb']>;
  readonly private_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly public_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly unsafe_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly web3_wallets?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  readonly __typename?: 'user_avg_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<User_Bool_Exp>>;
  readonly _not?: InputMaybe<User_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<User_Bool_Exp>>;
  readonly archived?: InputMaybe<Boolean_Comparison_Exp>;
  readonly birthday?: InputMaybe<String_Comparison_Exp>;
  readonly clerk_id?: InputMaybe<String_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly email_addresses?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly external_accounts?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly first_name?: InputMaybe<String_Comparison_Exp>;
  readonly gender?: InputMaybe<String_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly image_url?: InputMaybe<String_Comparison_Exp>;
  readonly last_name?: InputMaybe<String_Comparison_Exp>;
  readonly last_sign_in_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly object?: InputMaybe<String_Comparison_Exp>;
  readonly password_enabled?: InputMaybe<Boolean_Comparison_Exp>;
  readonly phone_numbers?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly primary_email_address_id?: InputMaybe<String_Comparison_Exp>;
  readonly primary_phone_number_id?: InputMaybe<String_Comparison_Exp>;
  readonly primary_web3_wallet_id?: InputMaybe<String_Comparison_Exp>;
  readonly private_metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly profile_image_url?: InputMaybe<String_Comparison_Exp>;
  readonly public_metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly two_factor_enabled?: InputMaybe<Boolean_Comparison_Exp>;
  readonly unsafe_metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  readonly updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly userBusinessesByUserId?: InputMaybe<User_Business_Bool_Exp>;
  readonly userBusinessesByUserId_aggregate?: InputMaybe<User_Business_Aggregate_Bool_Exp>;
  readonly username?: InputMaybe<String_Comparison_Exp>;
  readonly uuid?: InputMaybe<Uuid_Comparison_Exp>;
  readonly web3_wallets?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** columns and relationships of "user_business" */
export type User_Business = {
  readonly __typename?: 'user_business';
  readonly archived: Scalars['Boolean'];
  /** An object relationship */
  readonly business?: Maybe<Business>;
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at: Scalars['timestamp'];
  readonly id: Scalars['Int'];
  readonly is_default: Scalars['Boolean'];
  readonly role: Scalars['user_business_role_enum'];
  readonly updated_at: Scalars['timestamp'];
  /** An object relationship */
  readonly user?: Maybe<User>;
  readonly user_id?: Maybe<Scalars['Int']>;
  readonly uuid: Scalars['uuid'];
};

/** aggregated selection of "user_business" */
export type User_Business_Aggregate = {
  readonly __typename?: 'user_business_aggregate';
  readonly aggregate?: Maybe<User_Business_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<User_Business>;
};

export type User_Business_Aggregate_Bool_Exp = {
  readonly bool_and?: InputMaybe<User_Business_Aggregate_Bool_Exp_Bool_And>;
  readonly bool_or?: InputMaybe<User_Business_Aggregate_Bool_Exp_Bool_Or>;
  readonly count?: InputMaybe<User_Business_Aggregate_Bool_Exp_Count>;
};

export type User_Business_Aggregate_Bool_Exp_Bool_And = {
  readonly arguments: User_Business_Select_Column_User_Business_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<User_Business_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type User_Business_Aggregate_Bool_Exp_Bool_Or = {
  readonly arguments: User_Business_Select_Column_User_Business_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<User_Business_Bool_Exp>;
  readonly predicate: Boolean_Comparison_Exp;
};

export type User_Business_Aggregate_Bool_Exp_Count = {
  readonly arguments?: InputMaybe<ReadonlyArray<User_Business_Select_Column>>;
  readonly distinct?: InputMaybe<Scalars['Boolean']>;
  readonly filter?: InputMaybe<User_Business_Bool_Exp>;
  readonly predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_business" */
export type User_Business_Aggregate_Fields = {
  readonly __typename?: 'user_business_aggregate_fields';
  readonly avg?: Maybe<User_Business_Avg_Fields>;
  readonly count: Scalars['Int'];
  readonly max?: Maybe<User_Business_Max_Fields>;
  readonly min?: Maybe<User_Business_Min_Fields>;
  readonly stddev?: Maybe<User_Business_Stddev_Fields>;
  readonly stddev_pop?: Maybe<User_Business_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<User_Business_Stddev_Samp_Fields>;
  readonly sum?: Maybe<User_Business_Sum_Fields>;
  readonly var_pop?: Maybe<User_Business_Var_Pop_Fields>;
  readonly var_samp?: Maybe<User_Business_Var_Samp_Fields>;
  readonly variance?: Maybe<User_Business_Variance_Fields>;
};

/** aggregate fields of "user_business" */
export type User_Business_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<User_Business_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_business" */
export type User_Business_Aggregate_Order_By = {
  readonly avg?: InputMaybe<User_Business_Avg_Order_By>;
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<User_Business_Max_Order_By>;
  readonly min?: InputMaybe<User_Business_Min_Order_By>;
  readonly stddev?: InputMaybe<User_Business_Stddev_Order_By>;
  readonly stddev_pop?: InputMaybe<User_Business_Stddev_Pop_Order_By>;
  readonly stddev_samp?: InputMaybe<User_Business_Stddev_Samp_Order_By>;
  readonly sum?: InputMaybe<User_Business_Sum_Order_By>;
  readonly var_pop?: InputMaybe<User_Business_Var_Pop_Order_By>;
  readonly var_samp?: InputMaybe<User_Business_Var_Samp_Order_By>;
  readonly variance?: InputMaybe<User_Business_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_business" */
export type User_Business_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<User_Business_Insert_Input>;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<User_Business_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Business_Avg_Fields = {
  readonly __typename?: 'user_business_avg_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_business" */
export type User_Business_Avg_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_business". All fields are combined with a logical 'AND'. */
export type User_Business_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<User_Business_Bool_Exp>>;
  readonly _not?: InputMaybe<User_Business_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<User_Business_Bool_Exp>>;
  readonly archived?: InputMaybe<Boolean_Comparison_Exp>;
  readonly business?: InputMaybe<Business_Bool_Exp>;
  readonly business_id?: InputMaybe<Int_Comparison_Exp>;
  readonly created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly id?: InputMaybe<Int_Comparison_Exp>;
  readonly is_default?: InputMaybe<Boolean_Comparison_Exp>;
  readonly role?: InputMaybe<User_Business_Role_Enum_Comparison_Exp>;
  readonly updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  readonly user?: InputMaybe<User_Bool_Exp>;
  readonly user_id?: InputMaybe<Int_Comparison_Exp>;
  readonly uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_business" */
export const enum User_Business_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_5a4bd96d9a519d4d20a21231b9f = 'PK_5a4bd96d9a519d4d20a21231b9f',
}

/** input type for incrementing numeric columns in table "user_business" */
export type User_Business_Inc_Input = {
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_business" */
export type User_Business_Insert_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business?: InputMaybe<Business_Obj_Rel_Insert_Input>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly is_default?: InputMaybe<Scalars['Boolean']>;
  readonly role?: InputMaybe<Scalars['user_business_role_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  readonly user_id?: InputMaybe<Scalars['Int']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Business_Max_Fields = {
  readonly __typename?: 'user_business_max_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly role?: Maybe<Scalars['user_business_role_enum']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly user_id?: Maybe<Scalars['Int']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_business" */
export type User_Business_Max_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly role?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Business_Min_Fields = {
  readonly __typename?: 'user_business_min_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly role?: Maybe<Scalars['user_business_role_enum']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly user_id?: Maybe<Scalars['Int']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_business" */
export type User_Business_Min_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly role?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_business" */
export type User_Business_Mutation_Response = {
  readonly __typename?: 'user_business_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<User_Business>;
};

/** on_conflict condition type for table "user_business" */
export type User_Business_On_Conflict = {
  readonly constraint: User_Business_Constraint;
  readonly update_columns?: ReadonlyArray<User_Business_Update_Column>;
  readonly where?: InputMaybe<User_Business_Bool_Exp>;
};

/** Ordering options when selecting data from "user_business". */
export type User_Business_Order_By = {
  readonly archived?: InputMaybe<Order_By>;
  readonly business?: InputMaybe<Business_Order_By>;
  readonly business_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly is_default?: InputMaybe<Order_By>;
  readonly role?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly user?: InputMaybe<User_Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_business */
export type User_Business_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "user_business_role_enum". All fields are combined with logical 'AND'. */
export type User_Business_Role_Enum_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['user_business_role_enum']>;
  readonly _gt?: InputMaybe<Scalars['user_business_role_enum']>;
  readonly _gte?: InputMaybe<Scalars['user_business_role_enum']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['user_business_role_enum']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['user_business_role_enum']>;
  readonly _lte?: InputMaybe<Scalars['user_business_role_enum']>;
  readonly _neq?: InputMaybe<Scalars['user_business_role_enum']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['user_business_role_enum']>>;
};

/** select columns of table "user_business" */
export const enum User_Business_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'is_default',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid',
}

/** select "user_business_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_business" */
export const enum User_Business_Select_Column_User_Business_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  IsDefault = 'is_default',
}

/** select "user_business_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_business" */
export const enum User_Business_Select_Column_User_Business_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  IsDefault = 'is_default',
}

/** input type for updating data in table "user_business" */
export type User_Business_Set_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly is_default?: InputMaybe<Scalars['Boolean']>;
  readonly role?: InputMaybe<Scalars['user_business_role_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly user_id?: InputMaybe<Scalars['Int']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Business_Stddev_Fields = {
  readonly __typename?: 'user_business_stddev_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_business" */
export type User_Business_Stddev_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Business_Stddev_Pop_Fields = {
  readonly __typename?: 'user_business_stddev_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_business" */
export type User_Business_Stddev_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Business_Stddev_Samp_Fields = {
  readonly __typename?: 'user_business_stddev_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_business" */
export type User_Business_Stddev_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_business" */
export type User_Business_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: User_Business_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Business_Stream_Cursor_Value_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly business_id?: InputMaybe<Scalars['Int']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly is_default?: InputMaybe<Scalars['Boolean']>;
  readonly role?: InputMaybe<Scalars['user_business_role_enum']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly user_id?: InputMaybe<Scalars['Int']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type User_Business_Sum_Fields = {
  readonly __typename?: 'user_business_sum_fields';
  readonly business_id?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_business" */
export type User_Business_Sum_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_business" */
export const enum User_Business_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  BusinessId = 'business_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'is_default',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid',
}

export type User_Business_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<User_Business_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<User_Business_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: User_Business_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Business_Var_Pop_Fields = {
  readonly __typename?: 'user_business_var_pop_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_business" */
export type User_Business_Var_Pop_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Business_Var_Samp_Fields = {
  readonly __typename?: 'user_business_var_samp_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_business" */
export type User_Business_Var_Samp_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Business_Variance_Fields = {
  readonly __typename?: 'user_business_variance_fields';
  readonly business_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
  readonly user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_business" */
export type User_Business_Variance_Order_By = {
  readonly business_id?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly user_id?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "user" */
export const enum User_Constraint {
  /** unique or primary key constraint on columns "id" */
  PkCace4a159ff9f2512dd42373760 = 'PK_cace4a159ff9f2512dd42373760',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Delete_At_Path_Input = {
  readonly email_addresses?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly external_accounts?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly phone_numbers?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly private_metadata?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly public_metadata?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly unsafe_metadata?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly web3_wallets?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Delete_Elem_Input = {
  readonly email_addresses?: InputMaybe<Scalars['Int']>;
  readonly external_accounts?: InputMaybe<Scalars['Int']>;
  readonly phone_numbers?: InputMaybe<Scalars['Int']>;
  readonly private_metadata?: InputMaybe<Scalars['Int']>;
  readonly public_metadata?: InputMaybe<Scalars['Int']>;
  readonly unsafe_metadata?: InputMaybe<Scalars['Int']>;
  readonly web3_wallets?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Delete_Key_Input = {
  readonly email_addresses?: InputMaybe<Scalars['String']>;
  readonly external_accounts?: InputMaybe<Scalars['String']>;
  readonly phone_numbers?: InputMaybe<Scalars['String']>;
  readonly private_metadata?: InputMaybe<Scalars['String']>;
  readonly public_metadata?: InputMaybe<Scalars['String']>;
  readonly unsafe_metadata?: InputMaybe<Scalars['String']>;
  readonly web3_wallets?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  readonly id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly birthday?: InputMaybe<Scalars['String']>;
  readonly clerk_id?: InputMaybe<Scalars['String']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly email_addresses?: InputMaybe<Scalars['jsonb']>;
  readonly external_accounts?: InputMaybe<Scalars['jsonb']>;
  readonly first_name?: InputMaybe<Scalars['String']>;
  readonly gender?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly image_url?: InputMaybe<Scalars['String']>;
  readonly last_name?: InputMaybe<Scalars['String']>;
  readonly last_sign_in_at?: InputMaybe<Scalars['timestamp']>;
  readonly object?: InputMaybe<Scalars['String']>;
  readonly password_enabled?: InputMaybe<Scalars['Boolean']>;
  readonly phone_numbers?: InputMaybe<Scalars['jsonb']>;
  readonly primary_email_address_id?: InputMaybe<Scalars['String']>;
  readonly primary_phone_number_id?: InputMaybe<Scalars['String']>;
  readonly primary_web3_wallet_id?: InputMaybe<Scalars['String']>;
  readonly private_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly profile_image_url?: InputMaybe<Scalars['String']>;
  readonly public_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly two_factor_enabled?: InputMaybe<Scalars['Boolean']>;
  readonly unsafe_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly userBusinessesByUserId?: InputMaybe<User_Business_Arr_Rel_Insert_Input>;
  readonly username?: InputMaybe<Scalars['String']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
  readonly web3_wallets?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  readonly __typename?: 'user_max_fields';
  readonly birthday?: Maybe<Scalars['String']>;
  readonly clerk_id?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly first_name?: Maybe<Scalars['String']>;
  readonly gender?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly image_url?: Maybe<Scalars['String']>;
  readonly last_name?: Maybe<Scalars['String']>;
  readonly last_sign_in_at?: Maybe<Scalars['timestamp']>;
  readonly object?: Maybe<Scalars['String']>;
  readonly primary_email_address_id?: Maybe<Scalars['String']>;
  readonly primary_phone_number_id?: Maybe<Scalars['String']>;
  readonly primary_web3_wallet_id?: Maybe<Scalars['String']>;
  readonly profile_image_url?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly username?: Maybe<Scalars['String']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  readonly __typename?: 'user_min_fields';
  readonly birthday?: Maybe<Scalars['String']>;
  readonly clerk_id?: Maybe<Scalars['String']>;
  readonly created_at?: Maybe<Scalars['timestamp']>;
  readonly first_name?: Maybe<Scalars['String']>;
  readonly gender?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly image_url?: Maybe<Scalars['String']>;
  readonly last_name?: Maybe<Scalars['String']>;
  readonly last_sign_in_at?: Maybe<Scalars['timestamp']>;
  readonly object?: Maybe<Scalars['String']>;
  readonly primary_email_address_id?: Maybe<Scalars['String']>;
  readonly primary_phone_number_id?: Maybe<Scalars['String']>;
  readonly primary_web3_wallet_id?: Maybe<Scalars['String']>;
  readonly profile_image_url?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamp']>;
  readonly username?: Maybe<Scalars['String']>;
  readonly uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  readonly __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  readonly data: User_Insert_Input;
  /** upsert condition */
  readonly on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  readonly constraint: User_Constraint;
  readonly update_columns?: ReadonlyArray<User_Update_Column>;
  readonly where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  readonly archived?: InputMaybe<Order_By>;
  readonly birthday?: InputMaybe<Order_By>;
  readonly clerk_id?: InputMaybe<Order_By>;
  readonly created_at?: InputMaybe<Order_By>;
  readonly email_addresses?: InputMaybe<Order_By>;
  readonly external_accounts?: InputMaybe<Order_By>;
  readonly first_name?: InputMaybe<Order_By>;
  readonly gender?: InputMaybe<Order_By>;
  readonly id?: InputMaybe<Order_By>;
  readonly image_url?: InputMaybe<Order_By>;
  readonly last_name?: InputMaybe<Order_By>;
  readonly last_sign_in_at?: InputMaybe<Order_By>;
  readonly object?: InputMaybe<Order_By>;
  readonly password_enabled?: InputMaybe<Order_By>;
  readonly phone_numbers?: InputMaybe<Order_By>;
  readonly primary_email_address_id?: InputMaybe<Order_By>;
  readonly primary_phone_number_id?: InputMaybe<Order_By>;
  readonly primary_web3_wallet_id?: InputMaybe<Order_By>;
  readonly private_metadata?: InputMaybe<Order_By>;
  readonly profile_image_url?: InputMaybe<Order_By>;
  readonly public_metadata?: InputMaybe<Order_By>;
  readonly two_factor_enabled?: InputMaybe<Order_By>;
  readonly unsafe_metadata?: InputMaybe<Order_By>;
  readonly updated_at?: InputMaybe<Order_By>;
  readonly userBusinessesByUserId_aggregate?: InputMaybe<User_Business_Aggregate_Order_By>;
  readonly username?: InputMaybe<Order_By>;
  readonly uuid?: InputMaybe<Order_By>;
  readonly web3_wallets?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  readonly id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Prepend_Input = {
  readonly email_addresses?: InputMaybe<Scalars['jsonb']>;
  readonly external_accounts?: InputMaybe<Scalars['jsonb']>;
  readonly phone_numbers?: InputMaybe<Scalars['jsonb']>;
  readonly private_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly public_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly unsafe_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly web3_wallets?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "user" */
export const enum User_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  ClerkId = 'clerk_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmailAddresses = 'email_addresses',
  /** column name */
  ExternalAccounts = 'external_accounts',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Object = 'object',
  /** column name */
  PasswordEnabled = 'password_enabled',
  /** column name */
  PhoneNumbers = 'phone_numbers',
  /** column name */
  PrimaryEmailAddressId = 'primary_email_address_id',
  /** column name */
  PrimaryPhoneNumberId = 'primary_phone_number_id',
  /** column name */
  PrimaryWeb3WalletId = 'primary_web3_wallet_id',
  /** column name */
  PrivateMetadata = 'private_metadata',
  /** column name */
  ProfileImageUrl = 'profile_image_url',
  /** column name */
  PublicMetadata = 'public_metadata',
  /** column name */
  TwoFactorEnabled = 'two_factor_enabled',
  /** column name */
  UnsafeMetadata = 'unsafe_metadata',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  Web3Wallets = 'web3_wallets',
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly birthday?: InputMaybe<Scalars['String']>;
  readonly clerk_id?: InputMaybe<Scalars['String']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly email_addresses?: InputMaybe<Scalars['jsonb']>;
  readonly external_accounts?: InputMaybe<Scalars['jsonb']>;
  readonly first_name?: InputMaybe<Scalars['String']>;
  readonly gender?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly image_url?: InputMaybe<Scalars['String']>;
  readonly last_name?: InputMaybe<Scalars['String']>;
  readonly last_sign_in_at?: InputMaybe<Scalars['timestamp']>;
  readonly object?: InputMaybe<Scalars['String']>;
  readonly password_enabled?: InputMaybe<Scalars['Boolean']>;
  readonly phone_numbers?: InputMaybe<Scalars['jsonb']>;
  readonly primary_email_address_id?: InputMaybe<Scalars['String']>;
  readonly primary_phone_number_id?: InputMaybe<Scalars['String']>;
  readonly primary_web3_wallet_id?: InputMaybe<Scalars['String']>;
  readonly private_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly profile_image_url?: InputMaybe<Scalars['String']>;
  readonly public_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly two_factor_enabled?: InputMaybe<Scalars['Boolean']>;
  readonly unsafe_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly username?: InputMaybe<Scalars['String']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
  readonly web3_wallets?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  readonly __typename?: 'user_stddev_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  readonly __typename?: 'user_stddev_pop_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  readonly __typename?: 'user_stddev_samp_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  readonly archived?: InputMaybe<Scalars['Boolean']>;
  readonly birthday?: InputMaybe<Scalars['String']>;
  readonly clerk_id?: InputMaybe<Scalars['String']>;
  readonly created_at?: InputMaybe<Scalars['timestamp']>;
  readonly email_addresses?: InputMaybe<Scalars['jsonb']>;
  readonly external_accounts?: InputMaybe<Scalars['jsonb']>;
  readonly first_name?: InputMaybe<Scalars['String']>;
  readonly gender?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly image_url?: InputMaybe<Scalars['String']>;
  readonly last_name?: InputMaybe<Scalars['String']>;
  readonly last_sign_in_at?: InputMaybe<Scalars['timestamp']>;
  readonly object?: InputMaybe<Scalars['String']>;
  readonly password_enabled?: InputMaybe<Scalars['Boolean']>;
  readonly phone_numbers?: InputMaybe<Scalars['jsonb']>;
  readonly primary_email_address_id?: InputMaybe<Scalars['String']>;
  readonly primary_phone_number_id?: InputMaybe<Scalars['String']>;
  readonly primary_web3_wallet_id?: InputMaybe<Scalars['String']>;
  readonly private_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly profile_image_url?: InputMaybe<Scalars['String']>;
  readonly public_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly two_factor_enabled?: InputMaybe<Scalars['Boolean']>;
  readonly unsafe_metadata?: InputMaybe<Scalars['jsonb']>;
  readonly updated_at?: InputMaybe<Scalars['timestamp']>;
  readonly username?: InputMaybe<Scalars['String']>;
  readonly uuid?: InputMaybe<Scalars['uuid']>;
  readonly web3_wallets?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  readonly __typename?: 'user_sum_fields';
  readonly id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export const enum User_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  ClerkId = 'clerk_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmailAddresses = 'email_addresses',
  /** column name */
  ExternalAccounts = 'external_accounts',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Object = 'object',
  /** column name */
  PasswordEnabled = 'password_enabled',
  /** column name */
  PhoneNumbers = 'phone_numbers',
  /** column name */
  PrimaryEmailAddressId = 'primary_email_address_id',
  /** column name */
  PrimaryPhoneNumberId = 'primary_phone_number_id',
  /** column name */
  PrimaryWeb3WalletId = 'primary_web3_wallet_id',
  /** column name */
  PrivateMetadata = 'private_metadata',
  /** column name */
  ProfileImageUrl = 'profile_image_url',
  /** column name */
  PublicMetadata = 'public_metadata',
  /** column name */
  TwoFactorEnabled = 'two_factor_enabled',
  /** column name */
  UnsafeMetadata = 'unsafe_metadata',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  Web3Wallets = 'web3_wallets',
}

export type User_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  readonly _append?: InputMaybe<User_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  readonly _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  readonly _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  readonly _delete_key?: InputMaybe<User_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  readonly _inc?: InputMaybe<User_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  readonly _prepend?: InputMaybe<User_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  readonly where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  readonly __typename?: 'user_var_pop_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  readonly __typename?: 'user_var_samp_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  readonly __typename?: 'user_variance_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['uuid']>;
  readonly _gt?: InputMaybe<Scalars['uuid']>;
  readonly _gte?: InputMaybe<Scalars['uuid']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['uuid']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['uuid']>;
  readonly _lte?: InputMaybe<Scalars['uuid']>;
  readonly _neq?: InputMaybe<Scalars['uuid']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['uuid']>>;
};

export type InsertAccountMutationVariables = Exact<{
  object: Account_Insert_Input;
}>;

export type InsertAccountMutation = {
  readonly __typename?: 'mutation_root';
  readonly insert_account_one?: {
    readonly __typename?: 'account';
    readonly id: number;
    readonly name: string;
  } | null;
};

export type DeleteAccountByPkMutationVariables = Exact<{
  deleteAccountByPkId: Scalars['Int'];
}>;

export type DeleteAccountByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly delete_account_by_pk?: {
    readonly __typename?: 'account';
    readonly id: number;
  } | null;
};

export type UpdateAccountByPkMutationVariables = Exact<{
  pkColumns: Account_Pk_Columns_Input;
  set?: InputMaybe<Account_Set_Input>;
}>;

export type UpdateAccountByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly update_account_by_pk?: {
    readonly __typename?: 'account';
    readonly id: number;
    readonly name: string;
  } | null;
};

export type InsertBusinessMutationVariables = Exact<{
  object: Business_Insert_Input;
}>;

export type InsertBusinessMutation = {
  readonly __typename?: 'mutation_root';
  readonly insert_business_one?: {
    readonly __typename?: 'business';
    readonly id: number;
  } | null;
};

export type UpdateBusinessByPkMutationVariables = Exact<{
  pkColumns: Business_Pk_Columns_Input;
  set?: InputMaybe<Business_Set_Input>;
}>;

export type UpdateBusinessByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly update_business_by_pk?: {
    readonly __typename?: 'business';
    readonly id: number;
    readonly companies: ReadonlyArray<{
      readonly __typename?: 'company';
      readonly id: number;
    }>;
  } | null;
};

export type InsertCategoryMutationVariables = Exact<{
  object: Category_Transaction_Insert_Input;
}>;

export type InsertCategoryMutation = {
  readonly __typename?: 'mutation_root';
  readonly insert_category_transaction_one?: {
    readonly __typename?: 'category_transaction';
    readonly id: number;
    readonly name: string;
    readonly type: any;
  } | null;
};

export type DeleteCategoryByPkMutationVariables = Exact<{
  deleteCategoryTransactionByPkId: Scalars['Int'];
}>;

export type DeleteCategoryByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly delete_category_transaction_by_pk?: {
    readonly __typename?: 'category_transaction';
    readonly id: number;
  } | null;
};

export type UpdateCategoryTransactionByPkMutationVariables = Exact<{
  pkColumns: Category_Transaction_Pk_Columns_Input;
  set?: InputMaybe<Category_Transaction_Set_Input>;
}>;

export type UpdateCategoryTransactionByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly update_category_transaction_by_pk?: {
    readonly __typename?: 'category_transaction';
    readonly id: number;
  } | null;
};

export type InsertCompanyMutationVariables = Exact<{
  object: Company_Insert_Input;
}>;

export type InsertCompanyMutation = {
  readonly __typename?: 'mutation_root';
  readonly insert_company_one?: {
    readonly __typename?: 'company';
    readonly id: number;
  } | null;
};

export type DeleteCompanyByPkMutationVariables = Exact<{
  deleteCompanyByPkId: Scalars['Int'];
}>;

export type DeleteCompanyByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly delete_company_by_pk?: {
    readonly __typename?: 'company';
    readonly id: number;
  } | null;
};

export type UpdateCompanyByPkMutationVariables = Exact<{
  pkColumns: Company_Pk_Columns_Input;
  set?: InputMaybe<Company_Set_Input>;
}>;

export type UpdateCompanyByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly update_company_by_pk?: {
    readonly __typename?: 'company';
    readonly id: number;
  } | null;
};

export type InsertPersonMutationVariables = Exact<{
  object: Person_Insert_Input;
}>;

export type InsertPersonMutation = {
  readonly __typename?: 'mutation_root';
  readonly insert_person_one?: {
    readonly __typename?: 'person';
    readonly id: number;
  } | null;
};

export type DeletePersonByPkMutationVariables = Exact<{
  deletePersonByPkId: Scalars['Int'];
}>;

export type DeletePersonByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly delete_person_by_pk?: {
    readonly __typename?: 'person';
    readonly id: number;
  } | null;
};

export type UpdatePersonByPkMutationVariables = Exact<{
  pkColumns: Person_Pk_Columns_Input;
  set?: InputMaybe<Person_Set_Input>;
}>;

export type UpdatePersonByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly update_person_by_pk?: {
    readonly __typename?: 'person';
    readonly id: number;
  } | null;
};

export type InsertProductMutationVariables = Exact<{
  object: Product_Insert_Input;
}>;

export type InsertProductMutation = {
  readonly __typename?: 'mutation_root';
  readonly insert_product_one?: {
    readonly __typename?: 'product';
    readonly id: number;
  } | null;
};

export type DeleteProductByPkMutationVariables = Exact<{
  deleteProductByPkId: Scalars['Int'];
}>;

export type DeleteProductByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly delete_product_by_pk?: {
    readonly __typename?: 'product';
    readonly id: number;
  } | null;
};

export type UpdateProductByPkMutationVariables = Exact<{
  pkColumns: Product_Pk_Columns_Input;
  set?: InputMaybe<Product_Set_Input>;
}>;

export type UpdateProductByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly update_product_by_pk?: {
    readonly __typename?: 'product';
    readonly id: number;
  } | null;
};

export type InsertProjectMutationVariables = Exact<{
  object: Project_Insert_Input;
}>;

export type InsertProjectMutation = {
  readonly __typename?: 'mutation_root';
  readonly insert_project_one?: {
    readonly __typename?: 'project';
    readonly id: number;
  } | null;
};

export type UpdateProjectByPkMutationVariables = Exact<{
  pkColumns: Project_Pk_Columns_Input;
  set?: InputMaybe<Project_Set_Input>;
}>;

export type UpdateProjectByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly update_project_by_pk?: {
    readonly __typename?: 'project';
    readonly id: number;
  } | null;
};

export type DeleteProjectByPkMutationVariables = Exact<{
  deleteProjectByPkId: Scalars['Int'];
}>;

export type DeleteProjectByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly delete_project_by_pk?: {
    readonly __typename?: 'project';
    readonly id: number;
  } | null;
};

export type InsertServiceMutationVariables = Exact<{
  object: Service_Insert_Input;
}>;

export type InsertServiceMutation = {
  readonly __typename?: 'mutation_root';
  readonly insert_service_one?: {
    readonly __typename?: 'service';
    readonly id: number;
  } | null;
};

export type DeleteServiceByPkMutationVariables = Exact<{
  deleteServiceByPkId: Scalars['Int'];
}>;

export type DeleteServiceByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly delete_service_by_pk?: {
    readonly __typename?: 'service';
    readonly id: number;
  } | null;
};

export type UpdateServiceByPkMutationVariables = Exact<{
  pkColumns: Service_Pk_Columns_Input;
  set?: InputMaybe<Service_Set_Input>;
}>;

export type UpdateServiceByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly update_service_by_pk?: {
    readonly __typename?: 'service';
    readonly id: number;
  } | null;
};

export type InsertTaxMutationVariables = Exact<{
  object: Tax_Insert_Input;
}>;

export type InsertTaxMutation = {
  readonly __typename?: 'mutation_root';
  readonly insert_tax_one?: {
    readonly __typename?: 'tax';
    readonly name: string;
    readonly default: boolean;
    readonly business_id?: number | null;
    readonly amount: any;
  } | null;
};

export type UdpateTaxByPkMutationVariables = Exact<{
  pkColumns: Tax_Pk_Columns_Input;
  set?: InputMaybe<Tax_Set_Input>;
}>;

export type UdpateTaxByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly update_tax_by_pk?: {
    readonly __typename?: 'tax';
    readonly id: number;
  } | null;
};

export type InsertTransactionMutationVariables = Exact<{
  object: Transaction_Insert_Input;
}>;

export type InsertTransactionMutation = {
  readonly __typename?: 'mutation_root';
  readonly insert_transaction_one?: {
    readonly __typename?: 'transaction';
    readonly id: number;
  } | null;
};

export type DeleteTransactionByPkMutationVariables = Exact<{
  deleteTransactionByPkId: Scalars['Int'];
}>;

export type DeleteTransactionByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly delete_transaction_by_pk?: {
    readonly __typename?: 'transaction';
    readonly id: number;
  } | null;
};

export type UpdateTransactionByPkMutationVariables = Exact<{
  pkColumns: Transaction_Pk_Columns_Input;
  set?: InputMaybe<Transaction_Set_Input>;
}>;

export type UpdateTransactionByPkMutation = {
  readonly __typename?: 'mutation_root';
  readonly update_transaction_by_pk?: {
    readonly __typename?: 'transaction';
    readonly id: number;
  } | null;
};

export type DeleteTransactionsByIdsMutationVariables = Exact<{
  where: Transaction_Bool_Exp;
}>;

export type DeleteTransactionsByIdsMutation = {
  readonly __typename?: 'mutation_root';
  readonly delete_transaction?: {
    readonly __typename?: 'transaction_mutation_response';
    readonly affected_rows: number;
  } | null;
};

export type CreateCustomUserBusinessMutationVariables = Exact<{
  businessDescription: Scalars['String'];
  currentBillingMethod: Scalars['String'];
  industryType: Scalars['String'];
  name: Scalars['String'];
}>;

export type CreateCustomUserBusinessMutation = {
  readonly __typename?: 'mutation_root';
  readonly create_custom_user_business?: {
    readonly __typename?: 'custom_user_business_mutation_response';
    readonly id: number;
  } | null;
};

export type GetAccountsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<Account_Order_By> | Account_Order_By>;
  where?: InputMaybe<Account_Bool_Exp>;
  transactionsAggregateIncomeWhere?: InputMaybe<Transaction_Bool_Exp>;
  transactionsAggregateExpenseWhere?: InputMaybe<Transaction_Bool_Exp>;
  transactionsAggregateTypeWhere?: InputMaybe<Transaction_Bool_Exp>;
}>;

export type GetAccountsQuery = {
  readonly __typename?: 'query_root';
  readonly account: ReadonlyArray<{
    readonly __typename?: 'account';
    readonly id: number;
    readonly name: string;
    readonly created_at: any;
    readonly uuid: any;
    readonly transaction_aggregate_income: {
      readonly __typename?: 'transaction_aggregate';
      readonly aggregate?: {
        readonly __typename?: 'transaction_aggregate_fields';
        readonly sum?: {
          readonly __typename?: 'transaction_sum_fields';
          readonly amount?: any | null;
        } | null;
      } | null;
    };
    readonly transaction_aggregate_expense: {
      readonly __typename?: 'transaction_aggregate';
      readonly aggregate?: {
        readonly __typename?: 'transaction_aggregate_fields';
        readonly sum?: {
          readonly __typename?: 'transaction_sum_fields';
          readonly amount?: any | null;
        } | null;
      } | null;
    };
    readonly transaction_aggregate_by_type: {
      readonly __typename?: 'transaction_aggregate';
      readonly aggregate?: {
        readonly __typename?: 'transaction_aggregate_fields';
        readonly count: number;
      } | null;
    };
  }>;
};

export type GetBusinessesQueryVariables = Exact<{
  orderBy?: InputMaybe<ReadonlyArray<Business_Order_By> | Business_Order_By>;
}>;

export type GetBusinessesQuery = {
  readonly __typename?: 'query_root';
  readonly business: ReadonlyArray<{
    readonly __typename?: 'business';
    readonly name: string;
    readonly id: number;
    readonly description?: string | null;
    readonly created_at: any;
  }>;
};

export type GetBusinessByPkQueryVariables = Exact<{
  businessByPkId: Scalars['Int'];
}>;

export type GetBusinessByPkQuery = {
  readonly __typename?: 'query_root';
  readonly business_by_pk?: {
    readonly __typename?: 'business';
    readonly description?: string | null;
    readonly id: number;
    readonly name: string;
    readonly companies: ReadonlyArray<{
      readonly __typename?: 'company';
      readonly business_phone?: string | null;
    }>;
  } | null;
};

export type GetCategoryTransactionQueryVariables = Exact<{
  where?: InputMaybe<Category_Transaction_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<
    ReadonlyArray<Category_Transaction_Order_By> | Category_Transaction_Order_By
  >;
  transactionsAggregateWhere2?: InputMaybe<Transaction_Bool_Exp>;
}>;

export type GetCategoryTransactionQuery = {
  readonly __typename?: 'query_root';
  readonly category_transaction: ReadonlyArray<{
    readonly __typename?: 'category_transaction';
    readonly name: string;
    readonly id: number;
    readonly type: any;
    readonly created_at: any;
    readonly transactions_aggregate: {
      readonly __typename?: 'transaction_aggregate';
      readonly aggregate?: {
        readonly __typename?: 'transaction_aggregate_fields';
        readonly count: number;
        readonly sum?: {
          readonly __typename?: 'transaction_sum_fields';
          readonly amount?: any | null;
        } | null;
      } | null;
    };
    readonly services_aggregate: {
      readonly __typename?: 'service_aggregate';
      readonly aggregate?: {
        readonly __typename?: 'service_aggregate_fields';
        readonly count: number;
      } | null;
    };
  }>;
};

export type GetCategoryTransactionOverviewQueryVariables = Exact<{
  where?: InputMaybe<Category_Transaction_Bool_Exp>;
}>;

export type GetCategoryTransactionOverviewQuery = {
  readonly __typename?: 'query_root';
  readonly category_transaction: ReadonlyArray<{
    readonly __typename?: 'category_transaction';
    readonly id: number;
    readonly name: string;
    readonly transactions_aggregate: {
      readonly __typename?: 'transaction_aggregate';
      readonly aggregate?: {
        readonly __typename?: 'transaction_aggregate_fields';
        readonly sum?: {
          readonly __typename?: 'transaction_sum_fields';
          readonly amount?: any | null;
        } | null;
      } | null;
    };
  }>;
};

export type GetCompaniesQueryVariables = Exact<{
  where?: InputMaybe<Company_Bool_Exp>;
}>;

export type GetCompaniesQuery = {
  readonly __typename?: 'query_root';
  readonly company: ReadonlyArray<{
    readonly __typename?: 'company';
    readonly address?: string | null;
    readonly business_phone?: string | null;
    readonly country?: string | null;
    readonly id: number;
    readonly name: string;
    readonly created_at: any;
    readonly people: ReadonlyArray<{
      readonly __typename?: 'person';
      readonly first_name: string;
      readonly last_name: string;
      readonly id: number;
    }>;
  }>;
};

export type GetCompanyByPkQueryVariables = Exact<{
  companyByPkId: Scalars['Int'];
}>;

export type GetCompanyByPkQuery = {
  readonly __typename?: 'query_root';
  readonly company_by_pk?: {
    readonly __typename?: 'company';
    readonly address?: string | null;
    readonly business_phone?: string | null;
    readonly country?: string | null;
    readonly id: number;
    readonly name: string;
    readonly people: ReadonlyArray<{
      readonly __typename?: 'person';
      readonly id: number;
      readonly first_name: string;
      readonly last_name: string;
      readonly phone?: string | null;
      readonly email?: string | null;
    }>;
  } | null;
};

export type GetPeopleQueryVariables = Exact<{
  where?: InputMaybe<Person_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReadonlyArray<Person_Order_By> | Person_Order_By>;
}>;

export type GetPeopleQuery = {
  readonly __typename?: 'query_root';
  readonly person: ReadonlyArray<{
    readonly __typename?: 'person';
    readonly email?: string | null;
    readonly first_name: string;
    readonly id: number;
    readonly last_name: string;
    readonly phone?: string | null;
    readonly role?: any | null;
    readonly whatsapp_phone?: string | null;
    readonly company?: {
      readonly __typename?: 'company';
      readonly id: number;
      readonly name: string;
    } | null;
    readonly projects_aggregate: {
      readonly __typename?: 'project_aggregate';
      readonly aggregate?: {
        readonly __typename?: 'project_aggregate_fields';
        readonly count: number;
      } | null;
    };
  }>;
};

export type GetPeopleAggregateQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Person_Bool_Exp>;
  orderBy?: InputMaybe<ReadonlyArray<Person_Order_By> | Person_Order_By>;
}>;

export type GetPeopleAggregateQuery = {
  readonly __typename?: 'query_root';
  readonly person_aggregate: {
    readonly __typename?: 'person_aggregate';
    readonly aggregate?: {
      readonly __typename?: 'person_aggregate_fields';
      readonly count: number;
    } | null;
  };
};

export type GetPersonByPkQueryVariables = Exact<{
  personByPkId: Scalars['Int'];
}>;

export type GetPersonByPkQuery = {
  readonly __typename?: 'query_root';
  readonly person_by_pk?: {
    readonly __typename?: 'person';
    readonly email?: string | null;
    readonly first_name: string;
    readonly id: number;
    readonly last_name: string;
    readonly phone?: string | null;
    readonly role?: any | null;
    readonly whatsapp_phone?: string | null;
    readonly company_id?: number | null;
  } | null;
};

export type GetProductsQueryVariables = Exact<{
  where?: InputMaybe<Product_Bool_Exp>;
  orderBy?: InputMaybe<ReadonlyArray<Product_Order_By> | Product_Order_By>;
}>;

export type GetProductsQuery = {
  readonly __typename?: 'query_root';
  readonly product: ReadonlyArray<{
    readonly __typename?: 'product';
    readonly id: number;
    readonly description: string;
    readonly current_stock?: number | null;
    readonly income_category_id?: number | null;
    readonly initial_stock?: number | null;
    readonly name: string;
    readonly rate: any;
    readonly created_at: any;
    readonly category_transaction?: {
      readonly __typename?: 'category_transaction';
      readonly id: number;
      readonly name: string;
    } | null;
    readonly project_products_aggregate: {
      readonly __typename?: 'project_products_aggregate';
      readonly aggregate?: {
        readonly __typename?: 'project_products_aggregate_fields';
        readonly count: number;
      } | null;
    };
  }>;
};

export type GetProjectsQueryVariables = Exact<{
  orderBy?: InputMaybe<ReadonlyArray<Project_Order_By> | Project_Order_By>;
  where?: InputMaybe<Project_Bool_Exp>;
}>;

export type GetProjectsQuery = {
  readonly __typename?: 'query_root';
  readonly project: ReadonlyArray<{
    readonly __typename?: 'project';
    readonly id: number;
    readonly description: string;
    readonly created_at: any;
    readonly name: string;
    readonly type: any;
    readonly person?: {
      readonly __typename?: 'person';
      readonly first_name: string;
      readonly last_name: string;
    } | null;
    readonly project_products_aggregate: {
      readonly __typename?: 'project_products_aggregate';
      readonly aggregate?: {
        readonly __typename?: 'project_products_aggregate_fields';
        readonly count: number;
      } | null;
    };
  }>;
};

export type GetProjectAggregateQueryVariables = Exact<{
  where?: InputMaybe<Project_Bool_Exp>;
}>;

export type GetProjectAggregateQuery = {
  readonly __typename?: 'query_root';
  readonly project_aggregate: {
    readonly __typename?: 'project_aggregate';
    readonly aggregate?: {
      readonly __typename?: 'project_aggregate_fields';
      readonly count: number;
    } | null;
  };
};

export type GetServicesQueryVariables = Exact<{
  where?: InputMaybe<Service_Bool_Exp>;
  orderBy?: InputMaybe<ReadonlyArray<Service_Order_By> | Service_Order_By>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;

export type GetServicesQuery = {
  readonly __typename?: 'query_root';
  readonly service: ReadonlyArray<{
    readonly __typename?: 'service';
    readonly auto_add: boolean;
    readonly billable: boolean;
    readonly description: string;
    readonly id: number;
    readonly income_category_id?: number | null;
    readonly name: string;
    readonly rate: any;
    readonly created_at: any;
    readonly category_transaction?: {
      readonly __typename?: 'category_transaction';
      readonly name: string;
      readonly id: number;
      readonly services_aggregate: {
        readonly __typename?: 'service_aggregate';
        readonly aggregate?: {
          readonly __typename?: 'service_aggregate_fields';
          readonly count: number;
        } | null;
      };
    } | null;
  }>;
};

export type GetTaxByBusinessIdQueryVariables = Exact<{
  where?: InputMaybe<Tax_Bool_Exp>;
}>;

export type GetTaxByBusinessIdQuery = {
  readonly __typename?: 'query_root';
  readonly tax: ReadonlyArray<{
    readonly __typename?: 'tax';
    readonly amount: any;
    readonly business_id?: number | null;
    readonly default: boolean;
    readonly id: number;
    readonly name: string;
  }>;
};

export type GetTransactionsQueryVariables = Exact<{
  where?: InputMaybe<Transaction_Bool_Exp>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<
    ReadonlyArray<Transaction_Order_By> | Transaction_Order_By
  >;
  limit?: InputMaybe<Scalars['Int']>;
}>;

export type GetTransactionsQuery = {
  readonly __typename?: 'query_root';
  readonly transaction: ReadonlyArray<{
    readonly __typename?: 'transaction';
    readonly amount: any;
    readonly date: any;
    readonly created_at: any;
    readonly id: number;
    readonly note: string;
    readonly type: any;
    readonly account?: {
      readonly __typename?: 'account';
      readonly id: number;
      readonly name: string;
    } | null;
    readonly category_transaction?: {
      readonly __typename?: 'category_transaction';
      readonly id: number;
      readonly name: string;
    } | null;
    readonly person?: {
      readonly __typename?: 'person';
      readonly last_name: string;
      readonly first_name: string;
      readonly id: number;
      readonly company?: {
        readonly __typename?: 'company';
        readonly id: number;
        readonly name: string;
      } | null;
    } | null;
  }>;
};

export type GetCountTransactionsQueryVariables = Exact<{
  where?: InputMaybe<Transaction_Bool_Exp>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<
    ReadonlyArray<Transaction_Order_By> | Transaction_Order_By
  >;
  limit?: InputMaybe<Scalars['Int']>;
}>;

export type GetCountTransactionsQuery = {
  readonly __typename?: 'query_root';
  readonly transaction_aggregate: {
    readonly __typename?: 'transaction_aggregate';
    readonly aggregate?: {
      readonly __typename?: 'transaction_aggregate_fields';
      readonly count: number;
    } | null;
  };
};

export type GetTotalAmountByTypeQueryVariables = Exact<{
  where?: InputMaybe<Transaction_Bool_Exp>;
}>;

export type GetTotalAmountByTypeQuery = {
  readonly __typename?: 'query_root';
  readonly transaction_aggregate: {
    readonly __typename?: 'transaction_aggregate';
    readonly aggregate?: {
      readonly __typename?: 'transaction_aggregate_fields';
      readonly sum?: {
        readonly __typename?: 'transaction_sum_fields';
        readonly amount?: any | null;
      } | null;
    } | null;
  };
};

export type GetUserBusinessAggregateQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetUserBusinessAggregateQuery = {
  readonly __typename?: 'query_root';
  readonly user_business_aggregate: {
    readonly __typename?: 'user_business_aggregate';
    readonly aggregate?: {
      readonly __typename?: 'user_business_aggregate_fields';
      readonly count: number;
    } | null;
  };
};

export const AccountFragmentFragmentDoc = gql`
  fragment AccountFragment on account {
    id
    name
    created_at
  }
`;
export const InsertAccountDocument = gql`
  mutation InsertAccount($object: account_insert_input!) {
    insert_account_one(object: $object) {
      id
      name
    }
  }
`;
export type InsertAccountMutationFn = Apollo.MutationFunction<
  InsertAccountMutation,
  InsertAccountMutationVariables
>;

/**
 * __useInsertAccountMutation__
 *
 * To run a mutation, you first call `useInsertAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertAccountMutation, { data, loading, error }] = useInsertAccountMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertAccountMutation,
    InsertAccountMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertAccountMutation,
    InsertAccountMutationVariables
  >(InsertAccountDocument, options);
}
export type InsertAccountMutationHookResult = ReturnType<
  typeof useInsertAccountMutation
>;
export type InsertAccountMutationResult =
  Apollo.MutationResult<InsertAccountMutation>;
export type InsertAccountMutationOptions = Apollo.BaseMutationOptions<
  InsertAccountMutation,
  InsertAccountMutationVariables
>;
export const DeleteAccountByPkDocument = gql`
  mutation DeleteAccountByPk($deleteAccountByPkId: Int!) {
    delete_account_by_pk(id: $deleteAccountByPkId) {
      id
    }
  }
`;
export type DeleteAccountByPkMutationFn = Apollo.MutationFunction<
  DeleteAccountByPkMutation,
  DeleteAccountByPkMutationVariables
>;

/**
 * __useDeleteAccountByPkMutation__
 *
 * To run a mutation, you first call `useDeleteAccountByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountByPkMutation, { data, loading, error }] = useDeleteAccountByPkMutation({
 *   variables: {
 *      deleteAccountByPkId: // value for 'deleteAccountByPkId'
 *   },
 * });
 */
export function useDeleteAccountByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAccountByPkMutation,
    DeleteAccountByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteAccountByPkMutation,
    DeleteAccountByPkMutationVariables
  >(DeleteAccountByPkDocument, options);
}
export type DeleteAccountByPkMutationHookResult = ReturnType<
  typeof useDeleteAccountByPkMutation
>;
export type DeleteAccountByPkMutationResult =
  Apollo.MutationResult<DeleteAccountByPkMutation>;
export type DeleteAccountByPkMutationOptions = Apollo.BaseMutationOptions<
  DeleteAccountByPkMutation,
  DeleteAccountByPkMutationVariables
>;
export const UpdateAccountByPkDocument = gql`
  mutation UpdateAccountByPk(
    $pkColumns: account_pk_columns_input!
    $set: account_set_input
  ) {
    update_account_by_pk(pk_columns: $pkColumns, _set: $set) {
      id
      name
    }
  }
`;
export type UpdateAccountByPkMutationFn = Apollo.MutationFunction<
  UpdateAccountByPkMutation,
  UpdateAccountByPkMutationVariables
>;

/**
 * __useUpdateAccountByPkMutation__
 *
 * To run a mutation, you first call `useUpdateAccountByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountByPkMutation, { data, loading, error }] = useUpdateAccountByPkMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateAccountByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAccountByPkMutation,
    UpdateAccountByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateAccountByPkMutation,
    UpdateAccountByPkMutationVariables
  >(UpdateAccountByPkDocument, options);
}
export type UpdateAccountByPkMutationHookResult = ReturnType<
  typeof useUpdateAccountByPkMutation
>;
export type UpdateAccountByPkMutationResult =
  Apollo.MutationResult<UpdateAccountByPkMutation>;
export type UpdateAccountByPkMutationOptions = Apollo.BaseMutationOptions<
  UpdateAccountByPkMutation,
  UpdateAccountByPkMutationVariables
>;
export const InsertBusinessDocument = gql`
  mutation InsertBusiness($object: business_insert_input!) {
    insert_business_one(object: $object) {
      id
    }
  }
`;
export type InsertBusinessMutationFn = Apollo.MutationFunction<
  InsertBusinessMutation,
  InsertBusinessMutationVariables
>;

/**
 * __useInsertBusinessMutation__
 *
 * To run a mutation, you first call `useInsertBusinessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertBusinessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertBusinessMutation, { data, loading, error }] = useInsertBusinessMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertBusinessMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertBusinessMutation,
    InsertBusinessMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertBusinessMutation,
    InsertBusinessMutationVariables
  >(InsertBusinessDocument, options);
}
export type InsertBusinessMutationHookResult = ReturnType<
  typeof useInsertBusinessMutation
>;
export type InsertBusinessMutationResult =
  Apollo.MutationResult<InsertBusinessMutation>;
export type InsertBusinessMutationOptions = Apollo.BaseMutationOptions<
  InsertBusinessMutation,
  InsertBusinessMutationVariables
>;
export const UpdateBusinessByPkDocument = gql`
  mutation UpdateBusinessByPk(
    $pkColumns: business_pk_columns_input!
    $set: business_set_input
  ) {
    update_business_by_pk(pk_columns: $pkColumns, _set: $set) {
      id
      companies {
        id
      }
    }
  }
`;
export type UpdateBusinessByPkMutationFn = Apollo.MutationFunction<
  UpdateBusinessByPkMutation,
  UpdateBusinessByPkMutationVariables
>;

/**
 * __useUpdateBusinessByPkMutation__
 *
 * To run a mutation, you first call `useUpdateBusinessByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBusinessByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBusinessByPkMutation, { data, loading, error }] = useUpdateBusinessByPkMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateBusinessByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBusinessByPkMutation,
    UpdateBusinessByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateBusinessByPkMutation,
    UpdateBusinessByPkMutationVariables
  >(UpdateBusinessByPkDocument, options);
}
export type UpdateBusinessByPkMutationHookResult = ReturnType<
  typeof useUpdateBusinessByPkMutation
>;
export type UpdateBusinessByPkMutationResult =
  Apollo.MutationResult<UpdateBusinessByPkMutation>;
export type UpdateBusinessByPkMutationOptions = Apollo.BaseMutationOptions<
  UpdateBusinessByPkMutation,
  UpdateBusinessByPkMutationVariables
>;
export const InsertCategoryDocument = gql`
  mutation InsertCategory($object: category_transaction_insert_input!) {
    insert_category_transaction_one(object: $object) {
      id
      name
      type
    }
  }
`;
export type InsertCategoryMutationFn = Apollo.MutationFunction<
  InsertCategoryMutation,
  InsertCategoryMutationVariables
>;

/**
 * __useInsertCategoryMutation__
 *
 * To run a mutation, you first call `useInsertCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCategoryMutation, { data, loading, error }] = useInsertCategoryMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertCategoryMutation,
    InsertCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertCategoryMutation,
    InsertCategoryMutationVariables
  >(InsertCategoryDocument, options);
}
export type InsertCategoryMutationHookResult = ReturnType<
  typeof useInsertCategoryMutation
>;
export type InsertCategoryMutationResult =
  Apollo.MutationResult<InsertCategoryMutation>;
export type InsertCategoryMutationOptions = Apollo.BaseMutationOptions<
  InsertCategoryMutation,
  InsertCategoryMutationVariables
>;
export const DeleteCategoryByPkDocument = gql`
  mutation DeleteCategoryByPk($deleteCategoryTransactionByPkId: Int!) {
    delete_category_transaction_by_pk(id: $deleteCategoryTransactionByPkId) {
      id
    }
  }
`;
export type DeleteCategoryByPkMutationFn = Apollo.MutationFunction<
  DeleteCategoryByPkMutation,
  DeleteCategoryByPkMutationVariables
>;

/**
 * __useDeleteCategoryByPkMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryByPkMutation, { data, loading, error }] = useDeleteCategoryByPkMutation({
 *   variables: {
 *      deleteCategoryTransactionByPkId: // value for 'deleteCategoryTransactionByPkId'
 *   },
 * });
 */
export function useDeleteCategoryByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCategoryByPkMutation,
    DeleteCategoryByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCategoryByPkMutation,
    DeleteCategoryByPkMutationVariables
  >(DeleteCategoryByPkDocument, options);
}
export type DeleteCategoryByPkMutationHookResult = ReturnType<
  typeof useDeleteCategoryByPkMutation
>;
export type DeleteCategoryByPkMutationResult =
  Apollo.MutationResult<DeleteCategoryByPkMutation>;
export type DeleteCategoryByPkMutationOptions = Apollo.BaseMutationOptions<
  DeleteCategoryByPkMutation,
  DeleteCategoryByPkMutationVariables
>;
export const UpdateCategoryTransactionByPkDocument = gql`
  mutation UpdateCategoryTransactionByPk(
    $pkColumns: category_transaction_pk_columns_input!
    $set: category_transaction_set_input
  ) {
    update_category_transaction_by_pk(pk_columns: $pkColumns, _set: $set) {
      id
    }
  }
`;
export type UpdateCategoryTransactionByPkMutationFn = Apollo.MutationFunction<
  UpdateCategoryTransactionByPkMutation,
  UpdateCategoryTransactionByPkMutationVariables
>;

/**
 * __useUpdateCategoryTransactionByPkMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryTransactionByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryTransactionByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryTransactionByPkMutation, { data, loading, error }] = useUpdateCategoryTransactionByPkMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateCategoryTransactionByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCategoryTransactionByPkMutation,
    UpdateCategoryTransactionByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCategoryTransactionByPkMutation,
    UpdateCategoryTransactionByPkMutationVariables
  >(UpdateCategoryTransactionByPkDocument, options);
}
export type UpdateCategoryTransactionByPkMutationHookResult = ReturnType<
  typeof useUpdateCategoryTransactionByPkMutation
>;
export type UpdateCategoryTransactionByPkMutationResult =
  Apollo.MutationResult<UpdateCategoryTransactionByPkMutation>;
export type UpdateCategoryTransactionByPkMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateCategoryTransactionByPkMutation,
    UpdateCategoryTransactionByPkMutationVariables
  >;
export const InsertCompanyDocument = gql`
  mutation InsertCompany($object: company_insert_input!) {
    insert_company_one(object: $object) {
      id
    }
  }
`;
export type InsertCompanyMutationFn = Apollo.MutationFunction<
  InsertCompanyMutation,
  InsertCompanyMutationVariables
>;

/**
 * __useInsertCompanyMutation__
 *
 * To run a mutation, you first call `useInsertCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCompanyMutation, { data, loading, error }] = useInsertCompanyMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertCompanyMutation,
    InsertCompanyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertCompanyMutation,
    InsertCompanyMutationVariables
  >(InsertCompanyDocument, options);
}
export type InsertCompanyMutationHookResult = ReturnType<
  typeof useInsertCompanyMutation
>;
export type InsertCompanyMutationResult =
  Apollo.MutationResult<InsertCompanyMutation>;
export type InsertCompanyMutationOptions = Apollo.BaseMutationOptions<
  InsertCompanyMutation,
  InsertCompanyMutationVariables
>;
export const DeleteCompanyByPkDocument = gql`
  mutation DeleteCompanyByPk($deleteCompanyByPkId: Int!) {
    delete_company_by_pk(id: $deleteCompanyByPkId) {
      id
    }
  }
`;
export type DeleteCompanyByPkMutationFn = Apollo.MutationFunction<
  DeleteCompanyByPkMutation,
  DeleteCompanyByPkMutationVariables
>;

/**
 * __useDeleteCompanyByPkMutation__
 *
 * To run a mutation, you first call `useDeleteCompanyByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompanyByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCompanyByPkMutation, { data, loading, error }] = useDeleteCompanyByPkMutation({
 *   variables: {
 *      deleteCompanyByPkId: // value for 'deleteCompanyByPkId'
 *   },
 * });
 */
export function useDeleteCompanyByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCompanyByPkMutation,
    DeleteCompanyByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCompanyByPkMutation,
    DeleteCompanyByPkMutationVariables
  >(DeleteCompanyByPkDocument, options);
}
export type DeleteCompanyByPkMutationHookResult = ReturnType<
  typeof useDeleteCompanyByPkMutation
>;
export type DeleteCompanyByPkMutationResult =
  Apollo.MutationResult<DeleteCompanyByPkMutation>;
export type DeleteCompanyByPkMutationOptions = Apollo.BaseMutationOptions<
  DeleteCompanyByPkMutation,
  DeleteCompanyByPkMutationVariables
>;
export const UpdateCompanyByPkDocument = gql`
  mutation UpdateCompanyByPk(
    $pkColumns: company_pk_columns_input!
    $set: company_set_input
  ) {
    update_company_by_pk(pk_columns: $pkColumns, _set: $set) {
      id
    }
  }
`;
export type UpdateCompanyByPkMutationFn = Apollo.MutationFunction<
  UpdateCompanyByPkMutation,
  UpdateCompanyByPkMutationVariables
>;

/**
 * __useUpdateCompanyByPkMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyByPkMutation, { data, loading, error }] = useUpdateCompanyByPkMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateCompanyByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCompanyByPkMutation,
    UpdateCompanyByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCompanyByPkMutation,
    UpdateCompanyByPkMutationVariables
  >(UpdateCompanyByPkDocument, options);
}
export type UpdateCompanyByPkMutationHookResult = ReturnType<
  typeof useUpdateCompanyByPkMutation
>;
export type UpdateCompanyByPkMutationResult =
  Apollo.MutationResult<UpdateCompanyByPkMutation>;
export type UpdateCompanyByPkMutationOptions = Apollo.BaseMutationOptions<
  UpdateCompanyByPkMutation,
  UpdateCompanyByPkMutationVariables
>;
export const InsertPersonDocument = gql`
  mutation InsertPerson($object: person_insert_input!) {
    insert_person_one(object: $object) {
      id
    }
  }
`;
export type InsertPersonMutationFn = Apollo.MutationFunction<
  InsertPersonMutation,
  InsertPersonMutationVariables
>;

/**
 * __useInsertPersonMutation__
 *
 * To run a mutation, you first call `useInsertPersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPersonMutation, { data, loading, error }] = useInsertPersonMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertPersonMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertPersonMutation,
    InsertPersonMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertPersonMutation,
    InsertPersonMutationVariables
  >(InsertPersonDocument, options);
}
export type InsertPersonMutationHookResult = ReturnType<
  typeof useInsertPersonMutation
>;
export type InsertPersonMutationResult =
  Apollo.MutationResult<InsertPersonMutation>;
export type InsertPersonMutationOptions = Apollo.BaseMutationOptions<
  InsertPersonMutation,
  InsertPersonMutationVariables
>;
export const DeletePersonByPkDocument = gql`
  mutation DeletePersonByPk($deletePersonByPkId: Int!) {
    delete_person_by_pk(id: $deletePersonByPkId) {
      id
    }
  }
`;
export type DeletePersonByPkMutationFn = Apollo.MutationFunction<
  DeletePersonByPkMutation,
  DeletePersonByPkMutationVariables
>;

/**
 * __useDeletePersonByPkMutation__
 *
 * To run a mutation, you first call `useDeletePersonByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePersonByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePersonByPkMutation, { data, loading, error }] = useDeletePersonByPkMutation({
 *   variables: {
 *      deletePersonByPkId: // value for 'deletePersonByPkId'
 *   },
 * });
 */
export function useDeletePersonByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePersonByPkMutation,
    DeletePersonByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeletePersonByPkMutation,
    DeletePersonByPkMutationVariables
  >(DeletePersonByPkDocument, options);
}
export type DeletePersonByPkMutationHookResult = ReturnType<
  typeof useDeletePersonByPkMutation
>;
export type DeletePersonByPkMutationResult =
  Apollo.MutationResult<DeletePersonByPkMutation>;
export type DeletePersonByPkMutationOptions = Apollo.BaseMutationOptions<
  DeletePersonByPkMutation,
  DeletePersonByPkMutationVariables
>;
export const UpdatePersonByPkDocument = gql`
  mutation UpdatePersonByPk(
    $pkColumns: person_pk_columns_input!
    $set: person_set_input
  ) {
    update_person_by_pk(pk_columns: $pkColumns, _set: $set) {
      id
    }
  }
`;
export type UpdatePersonByPkMutationFn = Apollo.MutationFunction<
  UpdatePersonByPkMutation,
  UpdatePersonByPkMutationVariables
>;

/**
 * __useUpdatePersonByPkMutation__
 *
 * To run a mutation, you first call `useUpdatePersonByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePersonByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePersonByPkMutation, { data, loading, error }] = useUpdatePersonByPkMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdatePersonByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePersonByPkMutation,
    UpdatePersonByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdatePersonByPkMutation,
    UpdatePersonByPkMutationVariables
  >(UpdatePersonByPkDocument, options);
}
export type UpdatePersonByPkMutationHookResult = ReturnType<
  typeof useUpdatePersonByPkMutation
>;
export type UpdatePersonByPkMutationResult =
  Apollo.MutationResult<UpdatePersonByPkMutation>;
export type UpdatePersonByPkMutationOptions = Apollo.BaseMutationOptions<
  UpdatePersonByPkMutation,
  UpdatePersonByPkMutationVariables
>;
export const InsertProductDocument = gql`
  mutation InsertProduct($object: product_insert_input!) {
    insert_product_one(object: $object) {
      id
    }
  }
`;
export type InsertProductMutationFn = Apollo.MutationFunction<
  InsertProductMutation,
  InsertProductMutationVariables
>;

/**
 * __useInsertProductMutation__
 *
 * To run a mutation, you first call `useInsertProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertProductMutation, { data, loading, error }] = useInsertProductMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertProductMutation,
    InsertProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertProductMutation,
    InsertProductMutationVariables
  >(InsertProductDocument, options);
}
export type InsertProductMutationHookResult = ReturnType<
  typeof useInsertProductMutation
>;
export type InsertProductMutationResult =
  Apollo.MutationResult<InsertProductMutation>;
export type InsertProductMutationOptions = Apollo.BaseMutationOptions<
  InsertProductMutation,
  InsertProductMutationVariables
>;
export const DeleteProductByPkDocument = gql`
  mutation DeleteProductByPk($deleteProductByPkId: Int!) {
    delete_product_by_pk(id: $deleteProductByPkId) {
      id
    }
  }
`;
export type DeleteProductByPkMutationFn = Apollo.MutationFunction<
  DeleteProductByPkMutation,
  DeleteProductByPkMutationVariables
>;

/**
 * __useDeleteProductByPkMutation__
 *
 * To run a mutation, you first call `useDeleteProductByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductByPkMutation, { data, loading, error }] = useDeleteProductByPkMutation({
 *   variables: {
 *      deleteProductByPkId: // value for 'deleteProductByPkId'
 *   },
 * });
 */
export function useDeleteProductByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductByPkMutation,
    DeleteProductByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteProductByPkMutation,
    DeleteProductByPkMutationVariables
  >(DeleteProductByPkDocument, options);
}
export type DeleteProductByPkMutationHookResult = ReturnType<
  typeof useDeleteProductByPkMutation
>;
export type DeleteProductByPkMutationResult =
  Apollo.MutationResult<DeleteProductByPkMutation>;
export type DeleteProductByPkMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductByPkMutation,
  DeleteProductByPkMutationVariables
>;
export const UpdateProductByPkDocument = gql`
  mutation UpdateProductByPk(
    $pkColumns: product_pk_columns_input!
    $set: product_set_input
  ) {
    update_product_by_pk(pk_columns: $pkColumns, _set: $set) {
      id
    }
  }
`;
export type UpdateProductByPkMutationFn = Apollo.MutationFunction<
  UpdateProductByPkMutation,
  UpdateProductByPkMutationVariables
>;

/**
 * __useUpdateProductByPkMutation__
 *
 * To run a mutation, you first call `useUpdateProductByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductByPkMutation, { data, loading, error }] = useUpdateProductByPkMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateProductByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductByPkMutation,
    UpdateProductByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProductByPkMutation,
    UpdateProductByPkMutationVariables
  >(UpdateProductByPkDocument, options);
}
export type UpdateProductByPkMutationHookResult = ReturnType<
  typeof useUpdateProductByPkMutation
>;
export type UpdateProductByPkMutationResult =
  Apollo.MutationResult<UpdateProductByPkMutation>;
export type UpdateProductByPkMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductByPkMutation,
  UpdateProductByPkMutationVariables
>;
export const InsertProjectDocument = gql`
  mutation InsertProject($object: project_insert_input!) {
    insert_project_one(object: $object) {
      id
    }
  }
`;
export type InsertProjectMutationFn = Apollo.MutationFunction<
  InsertProjectMutation,
  InsertProjectMutationVariables
>;

/**
 * __useInsertProjectMutation__
 *
 * To run a mutation, you first call `useInsertProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertProjectMutation, { data, loading, error }] = useInsertProjectMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertProjectMutation,
    InsertProjectMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertProjectMutation,
    InsertProjectMutationVariables
  >(InsertProjectDocument, options);
}
export type InsertProjectMutationHookResult = ReturnType<
  typeof useInsertProjectMutation
>;
export type InsertProjectMutationResult =
  Apollo.MutationResult<InsertProjectMutation>;
export type InsertProjectMutationOptions = Apollo.BaseMutationOptions<
  InsertProjectMutation,
  InsertProjectMutationVariables
>;
export const UpdateProjectByPkDocument = gql`
  mutation UpdateProjectByPk(
    $pkColumns: project_pk_columns_input!
    $set: project_set_input
  ) {
    update_project_by_pk(pk_columns: $pkColumns, _set: $set) {
      id
    }
  }
`;
export type UpdateProjectByPkMutationFn = Apollo.MutationFunction<
  UpdateProjectByPkMutation,
  UpdateProjectByPkMutationVariables
>;

/**
 * __useUpdateProjectByPkMutation__
 *
 * To run a mutation, you first call `useUpdateProjectByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectByPkMutation, { data, loading, error }] = useUpdateProjectByPkMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateProjectByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProjectByPkMutation,
    UpdateProjectByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProjectByPkMutation,
    UpdateProjectByPkMutationVariables
  >(UpdateProjectByPkDocument, options);
}
export type UpdateProjectByPkMutationHookResult = ReturnType<
  typeof useUpdateProjectByPkMutation
>;
export type UpdateProjectByPkMutationResult =
  Apollo.MutationResult<UpdateProjectByPkMutation>;
export type UpdateProjectByPkMutationOptions = Apollo.BaseMutationOptions<
  UpdateProjectByPkMutation,
  UpdateProjectByPkMutationVariables
>;
export const DeleteProjectByPkDocument = gql`
  mutation DeleteProjectByPk($deleteProjectByPkId: Int!) {
    delete_project_by_pk(id: $deleteProjectByPkId) {
      id
    }
  }
`;
export type DeleteProjectByPkMutationFn = Apollo.MutationFunction<
  DeleteProjectByPkMutation,
  DeleteProjectByPkMutationVariables
>;

/**
 * __useDeleteProjectByPkMutation__
 *
 * To run a mutation, you first call `useDeleteProjectByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectByPkMutation, { data, loading, error }] = useDeleteProjectByPkMutation({
 *   variables: {
 *      deleteProjectByPkId: // value for 'deleteProjectByPkId'
 *   },
 * });
 */
export function useDeleteProjectByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProjectByPkMutation,
    DeleteProjectByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteProjectByPkMutation,
    DeleteProjectByPkMutationVariables
  >(DeleteProjectByPkDocument, options);
}
export type DeleteProjectByPkMutationHookResult = ReturnType<
  typeof useDeleteProjectByPkMutation
>;
export type DeleteProjectByPkMutationResult =
  Apollo.MutationResult<DeleteProjectByPkMutation>;
export type DeleteProjectByPkMutationOptions = Apollo.BaseMutationOptions<
  DeleteProjectByPkMutation,
  DeleteProjectByPkMutationVariables
>;
export const InsertServiceDocument = gql`
  mutation InsertService($object: service_insert_input!) {
    insert_service_one(object: $object) {
      id
    }
  }
`;
export type InsertServiceMutationFn = Apollo.MutationFunction<
  InsertServiceMutation,
  InsertServiceMutationVariables
>;

/**
 * __useInsertServiceMutation__
 *
 * To run a mutation, you first call `useInsertServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertServiceMutation, { data, loading, error }] = useInsertServiceMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertServiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertServiceMutation,
    InsertServiceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertServiceMutation,
    InsertServiceMutationVariables
  >(InsertServiceDocument, options);
}
export type InsertServiceMutationHookResult = ReturnType<
  typeof useInsertServiceMutation
>;
export type InsertServiceMutationResult =
  Apollo.MutationResult<InsertServiceMutation>;
export type InsertServiceMutationOptions = Apollo.BaseMutationOptions<
  InsertServiceMutation,
  InsertServiceMutationVariables
>;
export const DeleteServiceByPkDocument = gql`
  mutation DeleteServiceByPk($deleteServiceByPkId: Int!) {
    delete_service_by_pk(id: $deleteServiceByPkId) {
      id
    }
  }
`;
export type DeleteServiceByPkMutationFn = Apollo.MutationFunction<
  DeleteServiceByPkMutation,
  DeleteServiceByPkMutationVariables
>;

/**
 * __useDeleteServiceByPkMutation__
 *
 * To run a mutation, you first call `useDeleteServiceByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteServiceByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteServiceByPkMutation, { data, loading, error }] = useDeleteServiceByPkMutation({
 *   variables: {
 *      deleteServiceByPkId: // value for 'deleteServiceByPkId'
 *   },
 * });
 */
export function useDeleteServiceByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteServiceByPkMutation,
    DeleteServiceByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteServiceByPkMutation,
    DeleteServiceByPkMutationVariables
  >(DeleteServiceByPkDocument, options);
}
export type DeleteServiceByPkMutationHookResult = ReturnType<
  typeof useDeleteServiceByPkMutation
>;
export type DeleteServiceByPkMutationResult =
  Apollo.MutationResult<DeleteServiceByPkMutation>;
export type DeleteServiceByPkMutationOptions = Apollo.BaseMutationOptions<
  DeleteServiceByPkMutation,
  DeleteServiceByPkMutationVariables
>;
export const UpdateServiceByPkDocument = gql`
  mutation UpdateServiceByPk(
    $pkColumns: service_pk_columns_input!
    $set: service_set_input
  ) {
    update_service_by_pk(pk_columns: $pkColumns, _set: $set) {
      id
    }
  }
`;
export type UpdateServiceByPkMutationFn = Apollo.MutationFunction<
  UpdateServiceByPkMutation,
  UpdateServiceByPkMutationVariables
>;

/**
 * __useUpdateServiceByPkMutation__
 *
 * To run a mutation, you first call `useUpdateServiceByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceByPkMutation, { data, loading, error }] = useUpdateServiceByPkMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateServiceByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateServiceByPkMutation,
    UpdateServiceByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateServiceByPkMutation,
    UpdateServiceByPkMutationVariables
  >(UpdateServiceByPkDocument, options);
}
export type UpdateServiceByPkMutationHookResult = ReturnType<
  typeof useUpdateServiceByPkMutation
>;
export type UpdateServiceByPkMutationResult =
  Apollo.MutationResult<UpdateServiceByPkMutation>;
export type UpdateServiceByPkMutationOptions = Apollo.BaseMutationOptions<
  UpdateServiceByPkMutation,
  UpdateServiceByPkMutationVariables
>;
export const InsertTaxDocument = gql`
  mutation InsertTax($object: tax_insert_input!) {
    insert_tax_one(object: $object) {
      name
      default
      business_id
      amount
    }
  }
`;
export type InsertTaxMutationFn = Apollo.MutationFunction<
  InsertTaxMutation,
  InsertTaxMutationVariables
>;

/**
 * __useInsertTaxMutation__
 *
 * To run a mutation, you first call `useInsertTaxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTaxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTaxMutation, { data, loading, error }] = useInsertTaxMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertTaxMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertTaxMutation,
    InsertTaxMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertTaxMutation, InsertTaxMutationVariables>(
    InsertTaxDocument,
    options
  );
}
export type InsertTaxMutationHookResult = ReturnType<
  typeof useInsertTaxMutation
>;
export type InsertTaxMutationResult = Apollo.MutationResult<InsertTaxMutation>;
export type InsertTaxMutationOptions = Apollo.BaseMutationOptions<
  InsertTaxMutation,
  InsertTaxMutationVariables
>;
export const UdpateTaxByPkDocument = gql`
  mutation UdpateTaxByPk(
    $pkColumns: tax_pk_columns_input!
    $set: tax_set_input
  ) {
    update_tax_by_pk(pk_columns: $pkColumns, _set: $set) {
      id
    }
  }
`;
export type UdpateTaxByPkMutationFn = Apollo.MutationFunction<
  UdpateTaxByPkMutation,
  UdpateTaxByPkMutationVariables
>;

/**
 * __useUdpateTaxByPkMutation__
 *
 * To run a mutation, you first call `useUdpateTaxByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUdpateTaxByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [udpateTaxByPkMutation, { data, loading, error }] = useUdpateTaxByPkMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUdpateTaxByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UdpateTaxByPkMutation,
    UdpateTaxByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UdpateTaxByPkMutation,
    UdpateTaxByPkMutationVariables
  >(UdpateTaxByPkDocument, options);
}
export type UdpateTaxByPkMutationHookResult = ReturnType<
  typeof useUdpateTaxByPkMutation
>;
export type UdpateTaxByPkMutationResult =
  Apollo.MutationResult<UdpateTaxByPkMutation>;
export type UdpateTaxByPkMutationOptions = Apollo.BaseMutationOptions<
  UdpateTaxByPkMutation,
  UdpateTaxByPkMutationVariables
>;
export const InsertTransactionDocument = gql`
  mutation InsertTransaction($object: transaction_insert_input!) {
    insert_transaction_one(object: $object) {
      id
    }
  }
`;
export type InsertTransactionMutationFn = Apollo.MutationFunction<
  InsertTransactionMutation,
  InsertTransactionMutationVariables
>;

/**
 * __useInsertTransactionMutation__
 *
 * To run a mutation, you first call `useInsertTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTransactionMutation, { data, loading, error }] = useInsertTransactionMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertTransactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertTransactionMutation,
    InsertTransactionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertTransactionMutation,
    InsertTransactionMutationVariables
  >(InsertTransactionDocument, options);
}
export type InsertTransactionMutationHookResult = ReturnType<
  typeof useInsertTransactionMutation
>;
export type InsertTransactionMutationResult =
  Apollo.MutationResult<InsertTransactionMutation>;
export type InsertTransactionMutationOptions = Apollo.BaseMutationOptions<
  InsertTransactionMutation,
  InsertTransactionMutationVariables
>;
export const DeleteTransactionByPkDocument = gql`
  mutation DeleteTransactionByPk($deleteTransactionByPkId: Int!) {
    delete_transaction_by_pk(id: $deleteTransactionByPkId) {
      id
    }
  }
`;
export type DeleteTransactionByPkMutationFn = Apollo.MutationFunction<
  DeleteTransactionByPkMutation,
  DeleteTransactionByPkMutationVariables
>;

/**
 * __useDeleteTransactionByPkMutation__
 *
 * To run a mutation, you first call `useDeleteTransactionByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTransactionByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTransactionByPkMutation, { data, loading, error }] = useDeleteTransactionByPkMutation({
 *   variables: {
 *      deleteTransactionByPkId: // value for 'deleteTransactionByPkId'
 *   },
 * });
 */
export function useDeleteTransactionByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTransactionByPkMutation,
    DeleteTransactionByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteTransactionByPkMutation,
    DeleteTransactionByPkMutationVariables
  >(DeleteTransactionByPkDocument, options);
}
export type DeleteTransactionByPkMutationHookResult = ReturnType<
  typeof useDeleteTransactionByPkMutation
>;
export type DeleteTransactionByPkMutationResult =
  Apollo.MutationResult<DeleteTransactionByPkMutation>;
export type DeleteTransactionByPkMutationOptions = Apollo.BaseMutationOptions<
  DeleteTransactionByPkMutation,
  DeleteTransactionByPkMutationVariables
>;
export const UpdateTransactionByPkDocument = gql`
  mutation UpdateTransactionByPk(
    $pkColumns: transaction_pk_columns_input!
    $set: transaction_set_input
  ) {
    update_transaction_by_pk(pk_columns: $pkColumns, _set: $set) {
      id
    }
  }
`;
export type UpdateTransactionByPkMutationFn = Apollo.MutationFunction<
  UpdateTransactionByPkMutation,
  UpdateTransactionByPkMutationVariables
>;

/**
 * __useUpdateTransactionByPkMutation__
 *
 * To run a mutation, you first call `useUpdateTransactionByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransactionByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransactionByPkMutation, { data, loading, error }] = useUpdateTransactionByPkMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateTransactionByPkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTransactionByPkMutation,
    UpdateTransactionByPkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateTransactionByPkMutation,
    UpdateTransactionByPkMutationVariables
  >(UpdateTransactionByPkDocument, options);
}
export type UpdateTransactionByPkMutationHookResult = ReturnType<
  typeof useUpdateTransactionByPkMutation
>;
export type UpdateTransactionByPkMutationResult =
  Apollo.MutationResult<UpdateTransactionByPkMutation>;
export type UpdateTransactionByPkMutationOptions = Apollo.BaseMutationOptions<
  UpdateTransactionByPkMutation,
  UpdateTransactionByPkMutationVariables
>;
export const DeleteTransactionsByIdsDocument = gql`
  mutation DeleteTransactionsByIds($where: transaction_bool_exp!) {
    delete_transaction(where: $where) {
      affected_rows
    }
  }
`;
export type DeleteTransactionsByIdsMutationFn = Apollo.MutationFunction<
  DeleteTransactionsByIdsMutation,
  DeleteTransactionsByIdsMutationVariables
>;

/**
 * __useDeleteTransactionsByIdsMutation__
 *
 * To run a mutation, you first call `useDeleteTransactionsByIdsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTransactionsByIdsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTransactionsByIdsMutation, { data, loading, error }] = useDeleteTransactionsByIdsMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteTransactionsByIdsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTransactionsByIdsMutation,
    DeleteTransactionsByIdsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteTransactionsByIdsMutation,
    DeleteTransactionsByIdsMutationVariables
  >(DeleteTransactionsByIdsDocument, options);
}
export type DeleteTransactionsByIdsMutationHookResult = ReturnType<
  typeof useDeleteTransactionsByIdsMutation
>;
export type DeleteTransactionsByIdsMutationResult =
  Apollo.MutationResult<DeleteTransactionsByIdsMutation>;
export type DeleteTransactionsByIdsMutationOptions = Apollo.BaseMutationOptions<
  DeleteTransactionsByIdsMutation,
  DeleteTransactionsByIdsMutationVariables
>;
export const CreateCustomUserBusinessDocument = gql`
  mutation CreateCustomUserBusiness(
    $businessDescription: String!
    $currentBillingMethod: String!
    $industryType: String!
    $name: String!
  ) {
    create_custom_user_business(
      business_description: $businessDescription
      current_billing_method: $currentBillingMethod
      industry_type: $industryType
      name: $name
    ) {
      id
    }
  }
`;
export type CreateCustomUserBusinessMutationFn = Apollo.MutationFunction<
  CreateCustomUserBusinessMutation,
  CreateCustomUserBusinessMutationVariables
>;

/**
 * __useCreateCustomUserBusinessMutation__
 *
 * To run a mutation, you first call `useCreateCustomUserBusinessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomUserBusinessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomUserBusinessMutation, { data, loading, error }] = useCreateCustomUserBusinessMutation({
 *   variables: {
 *      businessDescription: // value for 'businessDescription'
 *      currentBillingMethod: // value for 'currentBillingMethod'
 *      industryType: // value for 'industryType'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateCustomUserBusinessMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCustomUserBusinessMutation,
    CreateCustomUserBusinessMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCustomUserBusinessMutation,
    CreateCustomUserBusinessMutationVariables
  >(CreateCustomUserBusinessDocument, options);
}
export type CreateCustomUserBusinessMutationHookResult = ReturnType<
  typeof useCreateCustomUserBusinessMutation
>;
export type CreateCustomUserBusinessMutationResult =
  Apollo.MutationResult<CreateCustomUserBusinessMutation>;
export type CreateCustomUserBusinessMutationOptions =
  Apollo.BaseMutationOptions<
    CreateCustomUserBusinessMutation,
    CreateCustomUserBusinessMutationVariables
  >;
export const GetAccountsDocument = gql`
  query GetAccounts(
    $limit: Int
    $offset: Int
    $orderBy: [account_order_by!]
    $where: account_bool_exp
    $transactionsAggregateIncomeWhere: transaction_bool_exp
    $transactionsAggregateExpenseWhere: transaction_bool_exp
    $transactionsAggregateTypeWhere: transaction_bool_exp
  ) {
    account(limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
      id
      name
      created_at
      uuid
      transaction_aggregate_income: transactions_aggregate(
        where: $transactionsAggregateIncomeWhere
      ) {
        aggregate {
          sum {
            amount
          }
        }
      }
      transaction_aggregate_expense: transactions_aggregate(
        where: $transactionsAggregateExpenseWhere
      ) {
        aggregate {
          sum {
            amount
          }
        }
      }
      transaction_aggregate_by_type: transactions_aggregate(
        where: $transactionsAggregateTypeWhere
      ) {
        aggregate {
          count
        }
      }
    }
  }
`;

/**
 * __useGetAccountsQuery__
 *
 * To run a query within a React component, call `useGetAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *      transactionsAggregateIncomeWhere: // value for 'transactionsAggregateIncomeWhere'
 *      transactionsAggregateExpenseWhere: // value for 'transactionsAggregateExpenseWhere'
 *      transactionsAggregateTypeWhere: // value for 'transactionsAggregateTypeWhere'
 *   },
 * });
 */
export function useGetAccountsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAccountsQuery,
    GetAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAccountsQuery, GetAccountsQueryVariables>(
    GetAccountsDocument,
    options
  );
}
export function useGetAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAccountsQuery,
    GetAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAccountsQuery, GetAccountsQueryVariables>(
    GetAccountsDocument,
    options
  );
}
export type GetAccountsQueryHookResult = ReturnType<typeof useGetAccountsQuery>;
export type GetAccountsLazyQueryHookResult = ReturnType<
  typeof useGetAccountsLazyQuery
>;
export type GetAccountsQueryResult = Apollo.QueryResult<
  GetAccountsQuery,
  GetAccountsQueryVariables
>;
export function refetchGetAccountsQuery(variables?: GetAccountsQueryVariables) {
  return { query: GetAccountsDocument, variables: variables };
}
export const GetBusinessesDocument = gql`
  query GetBusinesses($orderBy: [business_order_by!]) {
    business(order_by: $orderBy) {
      name
      id
      description
      created_at
    }
  }
`;

/**
 * __useGetBusinessesQuery__
 *
 * To run a query within a React component, call `useGetBusinessesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBusinessesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBusinessesQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetBusinessesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBusinessesQuery,
    GetBusinessesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBusinessesQuery, GetBusinessesQueryVariables>(
    GetBusinessesDocument,
    options
  );
}
export function useGetBusinessesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBusinessesQuery,
    GetBusinessesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBusinessesQuery, GetBusinessesQueryVariables>(
    GetBusinessesDocument,
    options
  );
}
export type GetBusinessesQueryHookResult = ReturnType<
  typeof useGetBusinessesQuery
>;
export type GetBusinessesLazyQueryHookResult = ReturnType<
  typeof useGetBusinessesLazyQuery
>;
export type GetBusinessesQueryResult = Apollo.QueryResult<
  GetBusinessesQuery,
  GetBusinessesQueryVariables
>;
export function refetchGetBusinessesQuery(
  variables?: GetBusinessesQueryVariables
) {
  return { query: GetBusinessesDocument, variables: variables };
}
export const GetBusinessByPkDocument = gql`
  query GetBusinessByPk($businessByPkId: Int!) {
    business_by_pk(id: $businessByPkId) {
      description
      id
      name
      companies {
        business_phone
      }
    }
  }
`;

/**
 * __useGetBusinessByPkQuery__
 *
 * To run a query within a React component, call `useGetBusinessByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBusinessByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBusinessByPkQuery({
 *   variables: {
 *      businessByPkId: // value for 'businessByPkId'
 *   },
 * });
 */
export function useGetBusinessByPkQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetBusinessByPkQuery,
    GetBusinessByPkQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBusinessByPkQuery, GetBusinessByPkQueryVariables>(
    GetBusinessByPkDocument,
    options
  );
}
export function useGetBusinessByPkLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBusinessByPkQuery,
    GetBusinessByPkQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetBusinessByPkQuery,
    GetBusinessByPkQueryVariables
  >(GetBusinessByPkDocument, options);
}
export type GetBusinessByPkQueryHookResult = ReturnType<
  typeof useGetBusinessByPkQuery
>;
export type GetBusinessByPkLazyQueryHookResult = ReturnType<
  typeof useGetBusinessByPkLazyQuery
>;
export type GetBusinessByPkQueryResult = Apollo.QueryResult<
  GetBusinessByPkQuery,
  GetBusinessByPkQueryVariables
>;
export function refetchGetBusinessByPkQuery(
  variables: GetBusinessByPkQueryVariables
) {
  return { query: GetBusinessByPkDocument, variables: variables };
}
export const GetCategoryTransactionDocument = gql`
  query GetCategoryTransaction(
    $where: category_transaction_bool_exp
    $limit: Int
    $offset: Int
    $orderBy: [category_transaction_order_by!]
    $transactionsAggregateWhere2: transaction_bool_exp
  ) {
    category_transaction(
      where: $where
      limit: $limit
      offset: $offset
      order_by: $orderBy
    ) {
      name
      id
      type
      created_at
      transactions_aggregate(where: $transactionsAggregateWhere2) {
        aggregate {
          count
          sum {
            amount
          }
        }
      }
      services_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

/**
 * __useGetCategoryTransactionQuery__
 *
 * To run a query within a React component, call `useGetCategoryTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryTransactionQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      transactionsAggregateWhere2: // value for 'transactionsAggregateWhere2'
 *   },
 * });
 */
export function useGetCategoryTransactionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCategoryTransactionQuery,
    GetCategoryTransactionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCategoryTransactionQuery,
    GetCategoryTransactionQueryVariables
  >(GetCategoryTransactionDocument, options);
}
export function useGetCategoryTransactionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoryTransactionQuery,
    GetCategoryTransactionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCategoryTransactionQuery,
    GetCategoryTransactionQueryVariables
  >(GetCategoryTransactionDocument, options);
}
export type GetCategoryTransactionQueryHookResult = ReturnType<
  typeof useGetCategoryTransactionQuery
>;
export type GetCategoryTransactionLazyQueryHookResult = ReturnType<
  typeof useGetCategoryTransactionLazyQuery
>;
export type GetCategoryTransactionQueryResult = Apollo.QueryResult<
  GetCategoryTransactionQuery,
  GetCategoryTransactionQueryVariables
>;
export function refetchGetCategoryTransactionQuery(
  variables?: GetCategoryTransactionQueryVariables
) {
  return { query: GetCategoryTransactionDocument, variables: variables };
}
export const GetCategoryTransactionOverviewDocument = gql`
  query GetCategoryTransactionOverview($where: category_transaction_bool_exp) {
    category_transaction(where: $where) {
      id
      name
      transactions_aggregate {
        aggregate {
          sum {
            amount
          }
        }
      }
    }
  }
`;

/**
 * __useGetCategoryTransactionOverviewQuery__
 *
 * To run a query within a React component, call `useGetCategoryTransactionOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryTransactionOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryTransactionOverviewQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetCategoryTransactionOverviewQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCategoryTransactionOverviewQuery,
    GetCategoryTransactionOverviewQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCategoryTransactionOverviewQuery,
    GetCategoryTransactionOverviewQueryVariables
  >(GetCategoryTransactionOverviewDocument, options);
}
export function useGetCategoryTransactionOverviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoryTransactionOverviewQuery,
    GetCategoryTransactionOverviewQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCategoryTransactionOverviewQuery,
    GetCategoryTransactionOverviewQueryVariables
  >(GetCategoryTransactionOverviewDocument, options);
}
export type GetCategoryTransactionOverviewQueryHookResult = ReturnType<
  typeof useGetCategoryTransactionOverviewQuery
>;
export type GetCategoryTransactionOverviewLazyQueryHookResult = ReturnType<
  typeof useGetCategoryTransactionOverviewLazyQuery
>;
export type GetCategoryTransactionOverviewQueryResult = Apollo.QueryResult<
  GetCategoryTransactionOverviewQuery,
  GetCategoryTransactionOverviewQueryVariables
>;
export function refetchGetCategoryTransactionOverviewQuery(
  variables?: GetCategoryTransactionOverviewQueryVariables
) {
  return {
    query: GetCategoryTransactionOverviewDocument,
    variables: variables,
  };
}
export const GetCompaniesDocument = gql`
  query GetCompanies($where: company_bool_exp) {
    company(where: $where) {
      address
      business_phone
      country
      id
      name
      people {
        first_name
        last_name
        id
      }
      created_at
    }
  }
`;

/**
 * __useGetCompaniesQuery__
 *
 * To run a query within a React component, call `useGetCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompaniesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetCompaniesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCompaniesQuery,
    GetCompaniesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(
    GetCompaniesDocument,
    options
  );
}
export function useGetCompaniesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCompaniesQuery,
    GetCompaniesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(
    GetCompaniesDocument,
    options
  );
}
export type GetCompaniesQueryHookResult = ReturnType<
  typeof useGetCompaniesQuery
>;
export type GetCompaniesLazyQueryHookResult = ReturnType<
  typeof useGetCompaniesLazyQuery
>;
export type GetCompaniesQueryResult = Apollo.QueryResult<
  GetCompaniesQuery,
  GetCompaniesQueryVariables
>;
export function refetchGetCompaniesQuery(
  variables?: GetCompaniesQueryVariables
) {
  return { query: GetCompaniesDocument, variables: variables };
}
export const GetCompanyByPkDocument = gql`
  query GetCompanyByPk($companyByPkId: Int!) {
    company_by_pk(id: $companyByPkId) {
      address
      business_phone
      country
      id
      name
      people {
        id
        first_name
        last_name
        phone
        email
      }
    }
  }
`;

/**
 * __useGetCompanyByPkQuery__
 *
 * To run a query within a React component, call `useGetCompanyByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyByPkQuery({
 *   variables: {
 *      companyByPkId: // value for 'companyByPkId'
 *   },
 * });
 */
export function useGetCompanyByPkQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCompanyByPkQuery,
    GetCompanyByPkQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCompanyByPkQuery, GetCompanyByPkQueryVariables>(
    GetCompanyByPkDocument,
    options
  );
}
export function useGetCompanyByPkLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCompanyByPkQuery,
    GetCompanyByPkQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCompanyByPkQuery, GetCompanyByPkQueryVariables>(
    GetCompanyByPkDocument,
    options
  );
}
export type GetCompanyByPkQueryHookResult = ReturnType<
  typeof useGetCompanyByPkQuery
>;
export type GetCompanyByPkLazyQueryHookResult = ReturnType<
  typeof useGetCompanyByPkLazyQuery
>;
export type GetCompanyByPkQueryResult = Apollo.QueryResult<
  GetCompanyByPkQuery,
  GetCompanyByPkQueryVariables
>;
export function refetchGetCompanyByPkQuery(
  variables: GetCompanyByPkQueryVariables
) {
  return { query: GetCompanyByPkDocument, variables: variables };
}
export const GetPeopleDocument = gql`
  query GetPeople(
    $where: person_bool_exp
    $limit: Int
    $offset: Int
    $orderBy: [person_order_by!]
  ) {
    person(where: $where, limit: $limit, offset: $offset, order_by: $orderBy) {
      email
      first_name
      id
      last_name
      phone
      role
      whatsapp_phone
      company {
        id
        name
      }
      projects_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

/**
 * __useGetPeopleQuery__
 *
 * To run a query within a React component, call `useGetPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPeopleQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetPeopleQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPeopleQuery, GetPeopleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPeopleQuery, GetPeopleQueryVariables>(
    GetPeopleDocument,
    options
  );
}
export function useGetPeopleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPeopleQuery,
    GetPeopleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPeopleQuery, GetPeopleQueryVariables>(
    GetPeopleDocument,
    options
  );
}
export type GetPeopleQueryHookResult = ReturnType<typeof useGetPeopleQuery>;
export type GetPeopleLazyQueryHookResult = ReturnType<
  typeof useGetPeopleLazyQuery
>;
export type GetPeopleQueryResult = Apollo.QueryResult<
  GetPeopleQuery,
  GetPeopleQueryVariables
>;
export function refetchGetPeopleQuery(variables?: GetPeopleQueryVariables) {
  return { query: GetPeopleDocument, variables: variables };
}
export const GetPeopleAggregateDocument = gql`
  query GetPeopleAggregate(
    $limit: Int
    $offset: Int
    $where: person_bool_exp
    $orderBy: [person_order_by!]
  ) {
    person_aggregate(
      limit: $limit
      offset: $offset
      where: $where
      order_by: $orderBy
    ) {
      aggregate {
        count
      }
    }
  }
`;

/**
 * __useGetPeopleAggregateQuery__
 *
 * To run a query within a React component, call `useGetPeopleAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPeopleAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPeopleAggregateQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetPeopleAggregateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPeopleAggregateQuery,
    GetPeopleAggregateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPeopleAggregateQuery,
    GetPeopleAggregateQueryVariables
  >(GetPeopleAggregateDocument, options);
}
export function useGetPeopleAggregateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPeopleAggregateQuery,
    GetPeopleAggregateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPeopleAggregateQuery,
    GetPeopleAggregateQueryVariables
  >(GetPeopleAggregateDocument, options);
}
export type GetPeopleAggregateQueryHookResult = ReturnType<
  typeof useGetPeopleAggregateQuery
>;
export type GetPeopleAggregateLazyQueryHookResult = ReturnType<
  typeof useGetPeopleAggregateLazyQuery
>;
export type GetPeopleAggregateQueryResult = Apollo.QueryResult<
  GetPeopleAggregateQuery,
  GetPeopleAggregateQueryVariables
>;
export function refetchGetPeopleAggregateQuery(
  variables?: GetPeopleAggregateQueryVariables
) {
  return { query: GetPeopleAggregateDocument, variables: variables };
}
export const GetPersonByPkDocument = gql`
  query GetPersonByPk($personByPkId: Int!) {
    person_by_pk(id: $personByPkId) {
      email
      first_name
      id
      last_name
      phone
      role
      whatsapp_phone
      company_id
    }
  }
`;

/**
 * __useGetPersonByPkQuery__
 *
 * To run a query within a React component, call `useGetPersonByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonByPkQuery({
 *   variables: {
 *      personByPkId: // value for 'personByPkId'
 *   },
 * });
 */
export function useGetPersonByPkQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPersonByPkQuery,
    GetPersonByPkQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPersonByPkQuery, GetPersonByPkQueryVariables>(
    GetPersonByPkDocument,
    options
  );
}
export function useGetPersonByPkLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPersonByPkQuery,
    GetPersonByPkQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPersonByPkQuery, GetPersonByPkQueryVariables>(
    GetPersonByPkDocument,
    options
  );
}
export type GetPersonByPkQueryHookResult = ReturnType<
  typeof useGetPersonByPkQuery
>;
export type GetPersonByPkLazyQueryHookResult = ReturnType<
  typeof useGetPersonByPkLazyQuery
>;
export type GetPersonByPkQueryResult = Apollo.QueryResult<
  GetPersonByPkQuery,
  GetPersonByPkQueryVariables
>;
export function refetchGetPersonByPkQuery(
  variables: GetPersonByPkQueryVariables
) {
  return { query: GetPersonByPkDocument, variables: variables };
}
export const GetProductsDocument = gql`
  query GetProducts($where: product_bool_exp, $orderBy: [product_order_by!]) {
    product(where: $where, order_by: $orderBy) {
      id
      description
      current_stock
      income_category_id
      initial_stock
      name
      rate
      category_transaction {
        id
        name
      }
      project_products_aggregate {
        aggregate {
          count
        }
      }
      created_at
    }
  }
`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    options
  );
}
export function useGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    options
  );
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<
  typeof useGetProductsLazyQuery
>;
export type GetProductsQueryResult = Apollo.QueryResult<
  GetProductsQuery,
  GetProductsQueryVariables
>;
export function refetchGetProductsQuery(variables?: GetProductsQueryVariables) {
  return { query: GetProductsDocument, variables: variables };
}
export const GetProjectsDocument = gql`
  query GetProjects($orderBy: [project_order_by!], $where: project_bool_exp) {
    project(order_by: $orderBy, where: $where) {
      id
      description
      created_at
      name
      type
      person {
        first_name
        last_name
      }
      project_products_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetProjectsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProjectsQuery,
    GetProjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(
    GetProjectsDocument,
    options
  );
}
export function useGetProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProjectsQuery,
    GetProjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(
    GetProjectsDocument,
    options
  );
}
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<
  typeof useGetProjectsLazyQuery
>;
export type GetProjectsQueryResult = Apollo.QueryResult<
  GetProjectsQuery,
  GetProjectsQueryVariables
>;
export function refetchGetProjectsQuery(variables?: GetProjectsQueryVariables) {
  return { query: GetProjectsDocument, variables: variables };
}
export const GetProjectAggregateDocument = gql`
  query GetProjectAggregate($where: project_bool_exp) {
    project_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

/**
 * __useGetProjectAggregateQuery__
 *
 * To run a query within a React component, call `useGetProjectAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectAggregateQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetProjectAggregateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProjectAggregateQuery,
    GetProjectAggregateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProjectAggregateQuery,
    GetProjectAggregateQueryVariables
  >(GetProjectAggregateDocument, options);
}
export function useGetProjectAggregateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProjectAggregateQuery,
    GetProjectAggregateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProjectAggregateQuery,
    GetProjectAggregateQueryVariables
  >(GetProjectAggregateDocument, options);
}
export type GetProjectAggregateQueryHookResult = ReturnType<
  typeof useGetProjectAggregateQuery
>;
export type GetProjectAggregateLazyQueryHookResult = ReturnType<
  typeof useGetProjectAggregateLazyQuery
>;
export type GetProjectAggregateQueryResult = Apollo.QueryResult<
  GetProjectAggregateQuery,
  GetProjectAggregateQueryVariables
>;
export function refetchGetProjectAggregateQuery(
  variables?: GetProjectAggregateQueryVariables
) {
  return { query: GetProjectAggregateDocument, variables: variables };
}
export const GetServicesDocument = gql`
  query GetServices(
    $where: service_bool_exp
    $orderBy: [service_order_by!]
    $offset: Int
    $limit: Int
  ) {
    service(where: $where, order_by: $orderBy, offset: $offset, limit: $limit) {
      auto_add
      billable
      description
      id
      income_category_id
      name
      category_transaction {
        name
        id
        services_aggregate {
          aggregate {
            count
          }
        }
      }
      rate
      created_at
    }
  }
`;

/**
 * __useGetServicesQuery__
 *
 * To run a query within a React component, call `useGetServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServicesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetServicesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetServicesQuery,
    GetServicesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetServicesQuery, GetServicesQueryVariables>(
    GetServicesDocument,
    options
  );
}
export function useGetServicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetServicesQuery,
    GetServicesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetServicesQuery, GetServicesQueryVariables>(
    GetServicesDocument,
    options
  );
}
export type GetServicesQueryHookResult = ReturnType<typeof useGetServicesQuery>;
export type GetServicesLazyQueryHookResult = ReturnType<
  typeof useGetServicesLazyQuery
>;
export type GetServicesQueryResult = Apollo.QueryResult<
  GetServicesQuery,
  GetServicesQueryVariables
>;
export function refetchGetServicesQuery(variables?: GetServicesQueryVariables) {
  return { query: GetServicesDocument, variables: variables };
}
export const GetTaxByBusinessIdDocument = gql`
  query GetTaxByBusinessId($where: tax_bool_exp) {
    tax(where: $where) {
      amount
      business_id
      default
      id
      name
    }
  }
`;

/**
 * __useGetTaxByBusinessIdQuery__
 *
 * To run a query within a React component, call `useGetTaxByBusinessIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaxByBusinessIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaxByBusinessIdQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetTaxByBusinessIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTaxByBusinessIdQuery,
    GetTaxByBusinessIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetTaxByBusinessIdQuery,
    GetTaxByBusinessIdQueryVariables
  >(GetTaxByBusinessIdDocument, options);
}
export function useGetTaxByBusinessIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTaxByBusinessIdQuery,
    GetTaxByBusinessIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTaxByBusinessIdQuery,
    GetTaxByBusinessIdQueryVariables
  >(GetTaxByBusinessIdDocument, options);
}
export type GetTaxByBusinessIdQueryHookResult = ReturnType<
  typeof useGetTaxByBusinessIdQuery
>;
export type GetTaxByBusinessIdLazyQueryHookResult = ReturnType<
  typeof useGetTaxByBusinessIdLazyQuery
>;
export type GetTaxByBusinessIdQueryResult = Apollo.QueryResult<
  GetTaxByBusinessIdQuery,
  GetTaxByBusinessIdQueryVariables
>;
export function refetchGetTaxByBusinessIdQuery(
  variables?: GetTaxByBusinessIdQueryVariables
) {
  return { query: GetTaxByBusinessIdDocument, variables: variables };
}
export const GetTransactionsDocument = gql`
  query GetTransactions(
    $where: transaction_bool_exp
    $offset: Int
    $orderBy: [transaction_order_by!]
    $limit: Int
  ) {
    transaction(
      where: $where
      offset: $offset
      order_by: $orderBy
      limit: $limit
    ) {
      account {
        id
        name
      }
      amount
      category_transaction {
        id
        name
      }
      person {
        last_name
        first_name
        id
        company {
          id
          name
        }
      }
      date
      created_at
      id
      note
      type
    }
  }
`;

/**
 * __useGetTransactionsQuery__
 *
 * To run a query within a React component, call `useGetTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetTransactionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTransactionsQuery,
    GetTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(
    GetTransactionsDocument,
    options
  );
}
export function useGetTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTransactionsQuery,
    GetTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTransactionsQuery,
    GetTransactionsQueryVariables
  >(GetTransactionsDocument, options);
}
export type GetTransactionsQueryHookResult = ReturnType<
  typeof useGetTransactionsQuery
>;
export type GetTransactionsLazyQueryHookResult = ReturnType<
  typeof useGetTransactionsLazyQuery
>;
export type GetTransactionsQueryResult = Apollo.QueryResult<
  GetTransactionsQuery,
  GetTransactionsQueryVariables
>;
export function refetchGetTransactionsQuery(
  variables?: GetTransactionsQueryVariables
) {
  return { query: GetTransactionsDocument, variables: variables };
}
export const GetCountTransactionsDocument = gql`
  query GetCountTransactions(
    $where: transaction_bool_exp
    $offset: Int
    $orderBy: [transaction_order_by!]
    $limit: Int
  ) {
    transaction_aggregate(
      where: $where
      offset: $offset
      order_by: $orderBy
      limit: $limit
    ) {
      aggregate {
        count
      }
    }
  }
`;

/**
 * __useGetCountTransactionsQuery__
 *
 * To run a query within a React component, call `useGetCountTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountTransactionsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetCountTransactionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCountTransactionsQuery,
    GetCountTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCountTransactionsQuery,
    GetCountTransactionsQueryVariables
  >(GetCountTransactionsDocument, options);
}
export function useGetCountTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCountTransactionsQuery,
    GetCountTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCountTransactionsQuery,
    GetCountTransactionsQueryVariables
  >(GetCountTransactionsDocument, options);
}
export type GetCountTransactionsQueryHookResult = ReturnType<
  typeof useGetCountTransactionsQuery
>;
export type GetCountTransactionsLazyQueryHookResult = ReturnType<
  typeof useGetCountTransactionsLazyQuery
>;
export type GetCountTransactionsQueryResult = Apollo.QueryResult<
  GetCountTransactionsQuery,
  GetCountTransactionsQueryVariables
>;
export function refetchGetCountTransactionsQuery(
  variables?: GetCountTransactionsQueryVariables
) {
  return { query: GetCountTransactionsDocument, variables: variables };
}
export const GetTotalAmountByTypeDocument = gql`
  query GetTotalAmountByType($where: transaction_bool_exp) {
    transaction_aggregate(where: $where) {
      aggregate {
        sum {
          amount
        }
      }
    }
  }
`;

/**
 * __useGetTotalAmountByTypeQuery__
 *
 * To run a query within a React component, call `useGetTotalAmountByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalAmountByTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalAmountByTypeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetTotalAmountByTypeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTotalAmountByTypeQuery,
    GetTotalAmountByTypeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetTotalAmountByTypeQuery,
    GetTotalAmountByTypeQueryVariables
  >(GetTotalAmountByTypeDocument, options);
}
export function useGetTotalAmountByTypeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTotalAmountByTypeQuery,
    GetTotalAmountByTypeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTotalAmountByTypeQuery,
    GetTotalAmountByTypeQueryVariables
  >(GetTotalAmountByTypeDocument, options);
}
export type GetTotalAmountByTypeQueryHookResult = ReturnType<
  typeof useGetTotalAmountByTypeQuery
>;
export type GetTotalAmountByTypeLazyQueryHookResult = ReturnType<
  typeof useGetTotalAmountByTypeLazyQuery
>;
export type GetTotalAmountByTypeQueryResult = Apollo.QueryResult<
  GetTotalAmountByTypeQuery,
  GetTotalAmountByTypeQueryVariables
>;
export function refetchGetTotalAmountByTypeQuery(
  variables?: GetTotalAmountByTypeQueryVariables
) {
  return { query: GetTotalAmountByTypeDocument, variables: variables };
}
export const GetUserBusinessAggregateDocument = gql`
  query GetUserBusinessAggregate {
    user_business_aggregate {
      aggregate {
        count
      }
    }
  }
`;

/**
 * __useGetUserBusinessAggregateQuery__
 *
 * To run a query within a React component, call `useGetUserBusinessAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBusinessAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBusinessAggregateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserBusinessAggregateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserBusinessAggregateQuery,
    GetUserBusinessAggregateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUserBusinessAggregateQuery,
    GetUserBusinessAggregateQueryVariables
  >(GetUserBusinessAggregateDocument, options);
}
export function useGetUserBusinessAggregateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserBusinessAggregateQuery,
    GetUserBusinessAggregateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserBusinessAggregateQuery,
    GetUserBusinessAggregateQueryVariables
  >(GetUserBusinessAggregateDocument, options);
}
export type GetUserBusinessAggregateQueryHookResult = ReturnType<
  typeof useGetUserBusinessAggregateQuery
>;
export type GetUserBusinessAggregateLazyQueryHookResult = ReturnType<
  typeof useGetUserBusinessAggregateLazyQuery
>;
export type GetUserBusinessAggregateQueryResult = Apollo.QueryResult<
  GetUserBusinessAggregateQuery,
  GetUserBusinessAggregateQueryVariables
>;
export function refetchGetUserBusinessAggregateQuery(
  variables?: GetUserBusinessAggregateQueryVariables
) {
  return { query: GetUserBusinessAggregateDocument, variables: variables };
}

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
