import Model, { CreateModel } from './Model';

type Job = Model & {
  userId: string;
  position: string;
  company: string;
  location: string;
  address: string;
  statusId: string;
  applicationTypeId: string;
  goalId: string;
  website?: string;
  email?: string;
  notes?: string;
  submissionDate?: Date;
};

export type CreateJob = CreateModel<Job>;

export type { Job };
