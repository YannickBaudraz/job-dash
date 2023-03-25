import { CreateJob } from '../../model/Job';
import { AddJobInputs } from '../../view/form/NewJobForm';

class ModelConverter {
  public fromAddJobInputsToJob(
    inputs: AddJobInputs,
    userId: string
  ): CreateJob {
    const requiredFields = [
      inputs.position,
      inputs.company,
      inputs.location,
      userId,
    ];

    if (requiredFields.some(field => !field))
      throw new Error('Missing required fields', { cause: requiredFields });

    const submissionDate = inputs.submissionDate
      ? new Date(inputs.submissionDate)
      : undefined;

    return {
      userId,
      position: inputs.position,
      company: inputs.company,
      location: inputs.location,
      address: inputs.address,
      goalId: inputs.goal,
      statusId: inputs.status,
      applicationTypeId: inputs.applicationType,
      website: inputs.website,
      email: inputs.email,
      submissionDate: submissionDate,
      notes: inputs.notes,
    };
  }
}

export default new ModelConverter();
