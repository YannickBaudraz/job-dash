import Model, { CreateModel } from './Model';

type Job = Model & {
  position: string;
  company: string;
  location: string;
  userId: string;
  address?: string;
  website?: string;
  email?: string;
  notes?: string;
  submissionDate?: Date;
  goalId?: string;
  statusId?: string;
  applicationTypeId?: string;
};

export type CreateJob = CreateModel<Job>;

export type { Job };
