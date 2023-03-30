import { CreateJob } from '../../model/Job';
import { EditProfileFormInputs } from '../../view/form/EditProfileForm';
import { JobFormInputs } from '../../view/form/JobForm';

class ModelConverter {
  public fromAddJobInputsToJob(
    inputs: JobFormInputs,
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
      contactTypeId: inputs.contactType,
      website: inputs.website,
      email: inputs.email,
      submissionDate: submissionDate,
      notes: inputs.notes,
    };
  }

  public fromUserFormInputsToFirestoreUser(
    inputs: EditProfileFormInputs,
    userId: string
  ) {
    return {
      id: userId,
      name: inputs.name,
      email: inputs.email,
      location: inputs.location,
    };
  }
}

export default new ModelConverter();
