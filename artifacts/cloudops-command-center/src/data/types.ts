export type Environment = {
  id: string;
  name: string;
  region: string;
  status: 'Healthy' | 'Degraded' | 'Critical';
  services: number;
  version: string;
  deploymentStatus?: string;
  activeIncidents?: number;
  infrastructureStatus?: string;
  availability?: number;
};

export type Service = {
  id: string;
  name: string;
  team: string;
  tier: string;
  health: 'Healthy' | 'Degraded' | 'Critical';
  environment: string;
  region: string;
  version: string;
  dependencies: string[];
  owner: string;
  description: string;
  slo: number;
  repository?: string;
  language?: string;
  availability?: number;
  latencyMs?: number;
  errorRate?: number;
  documentation?: string;
  runbook?: string;
  lastDeployment?: string;
  incidentCount?: number;
  risk?: 'Low' | 'Medium' | 'High';
};

export type Deployment = {
  id: string;
  service: string;
  environment: string;
  version: string;
  status: 'Succeeded' | 'Failed' | 'Running' | 'Awaiting approval';
  author: string;
  time: string;
  duration: string;
  commit: string;
  branch?: string;
  pipeline?: string;
  approvalStatus?: string;
  requestedBy?: string;
  approvedBy?: string;
  approvalTimestamp?: string;
  riskAssessment?: string;
  changedFiles?: string[];
  testResults?: string;
  securityScan?: string;
  artifact?: string;
  logs?: string[];
};

export type Incident = {
  id: string;
  title: string;
  severity: 'SEV-1' | 'SEV-2' | 'SEV-3';
  status: 'Investigating' | 'Mitigating' | 'Resolved';
  service: string;
  environment: string;
  owner: string;
  started: string;
  acknowledged: boolean;
  impact: string;
  acknowledgedTime?: string;
  resolvedTime?: string;
  assignedEngineer?: string;
  incidentCommander?: string;
  affectedServices?: string[];
  timeline?: { time: string; event: string }[];
};

export type Alert = {
  id: string;
  title: string;
  severity: 'Critical' | 'Warning' | 'Info';
  status: 'Firing' | 'Acknowledged' | 'Resolved' | 'Suppressed';
  service: string;
  environment: string;
  source: string;
  time: string;
  currentValue?: string;
  threshold?: string;
  duration?: string;
  relatedDeployment?: string;
  relatedIncident?: string;
  suggestedRunbook?: string;
};

export type Server = {
  id: string;
  name: string;
  environment: string;
  region: string;
  type: string;
  cpu: number;
  memory: number;
  status: 'Healthy' | 'Warning' | 'Critical';
  service: string;
  privateIp?: string;
  publicIp?: string;
  os?: string;
  availabilityZone?: string;
  uptime?: string;
  disk?: number;
  applicationVersion?: string;
};

export type Metric = {
  time: string;
  latency: number;
  errorRate: number;
  throughput: number;
  cpu: number;
  memory?: number;
  disk?: number;
  availability?: number;
};

export type LogEntry = {
  id: string;
  time: string;
  level: 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';
  service: string;
  message: string;
  traceId: string;
  environment: string;
  requestId?: string;
};

export type Trace = {
  id: string;
  service: string;
  route: string;
  duration: number;
  status: 'OK' | 'Error';
  time: string;
  spans: { name: string; duration: number; service: string }[];
};

export type Change = {
  id: string;
  title: string;
  service: string;
  environment: string;
  requester: string;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Completed' | 'Scheduled' | 'Executing' | 'Rolled Back';
  risk: 'Low' | 'Medium' | 'High';
  window: string;
  description: string;
  approvedBy?: string;
  approvalTimestamp?: string;
  riskAssessment?: string;
  deployment?: string;
};

export type Runbook = {
  id: string;
  title: string;
  category: string;
  owner: string;
  updated: string;
  description: string;
  steps: string[];
  symptoms?: string[];
  possibleCauses?: string[];
  diagnosticCommands?: string[];
  mitigation?: string[];
  rollback?: string[];
  escalation?: string[];
  postIncidentActions?: string[];
};

export type CostRecord = {
  id: string;
  service: string;
  environment: string;
  category: string;
  current: number;
  previous: number;
  budget: number;
  date: string;
};

export type AuditEvent = {
  id: string;
  actor: string;
  action: string;
  resource: string;
  time: string;
  category: string;
  outcome: 'Success' | 'Denied';
  environment?: string;
  ip?: string;
};