import JobApplicationType from './JobApplicationType';
import JobGoal from './JobGoal';
import JobStatus from './JobStatus';
import User from './User';

type Job = {
  id: string;
  position: string;
  company: string;
  location: string;
  user: User;
  address?: string;
  website?: string;
  email?: string;
  notes?: string;
  submissionDate?: Date;
  goal?: JobGoal;
  status?: JobStatus;
  applicationType?: JobApplicationType;
};

export type { Job };
