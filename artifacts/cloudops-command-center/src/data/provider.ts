import { alerts, auditEvents, changes, costs, deployments, environments, incidents, logs, metrics, runbooks, servers, services, traces } from './fixtures';
import type { Alert, AuditEvent, Change, CostRecord, Deployment, Environment, Incident, LogEntry, Metric, Runbook, Server, Service, Trace } from './types';

export interface DataProvider {
  getEnvironments(): Promise<Environment[]>; getServices(): Promise<Service[]>; getDeployments(): Promise<Deployment[]>;
  getIncidents(): Promise<Incident[]>; getAlerts(): Promise<Alert[]>; getServers(): Promise<Server[]>;
  getMetrics(): Promise<Metric[]>; getLogs(): Promise<LogEntry[]>; getTraces(): Promise<Trace[]>;
  getChanges(): Promise<Change[]>; getRunbooks(): Promise<Runbook[]>; getCosts(): Promise<CostRecord[]>; getAuditEvents(): Promise<AuditEvent[]>;
}
const copy = <T,>(value: T): Promise<T> => Promise.resolve(structuredClone(value));
export class MockDataProvider implements DataProvider {
  getEnvironments(){return copy(environments)} getServices(){return copy(services)} getDeployments(){return copy(deployments)}
  getIncidents(){return copy(incidents)} getAlerts(){return copy(alerts)} getServers(){return copy(servers)}
  getMetrics(){return copy(metrics)} getLogs(){return copy(logs)} getTraces(){return copy(traces)}
  getChanges(){return copy(changes)} getRunbooks(){return copy(runbooks)} getCosts(){return copy(costs)} getAuditEvents(){return copy(auditEvents)}
}
export const dataProvider: DataProvider = new MockDataProvider();