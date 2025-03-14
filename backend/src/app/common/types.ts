export interface EventType<T> {
  created_at: string;
  delivery_info: DeliveryInfo;
  event: Event<T>;
  id: string;
  table: Table;
  trigger: Trigger;
}

export interface DeliveryInfo {
  current_retry: number;
  max_retries: number;
}

export interface Event<T> {
  data: Data<T>;
  op: string;
  session_variables: SessionVariables;
  trace_context: TraceContext;
}

export interface Data<T> {
  new: T;
  old: T;
}

export interface SessionVariables {
  'x-hasura-role': string;
  'x-hasura-user-id': string;
}

export interface TraceContext {
  sampling_state: string;
  span_id: string;
  trace_id: string;
}

export interface Table {
  name: string;
  schema: string;
}

export interface Trigger {
  name: string;
}
