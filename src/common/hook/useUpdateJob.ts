import { doc, updateDoc } from 'firebase/firestore';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirestore, useUser } from 'reactfire';
import { Job } from '../../model/Job';
import route from '../../routing/route';
import { JobFormInputs } from '../../view/form/JobForm';
import FirestoreModelConverter from '../converter/FirestoreModelConverter';
import modelConverter from '../converter/ModelConverter';
import { cleanBeforeSentToFirestore } from '../firebase/firebaseUtils';

export default function useUpdateJob() {
  const { data: user } = useUser();

  if (!user) throw new Error('User is not logged in.');

  const firestore = useFirestore();
  const navigate = useNavigate();

  return useCallback(async (data: JobFormInputs & { id: string }) => {
    const job = modelConverter.fromAddJobInputsToJob(data, user.uid);
    const jobForFirestore = cleanBeforeSentToFirestore(job);
    const jobRef = doc(firestore, 'jobs', data.id).withConverter(
      new FirestoreModelConverter<Job>().converter
    );
    await updateDoc<Job>(jobRef, jobForFirestore);
    navigate(route('jobs'));
  }, []);
}
