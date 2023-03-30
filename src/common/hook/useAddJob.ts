import { addDoc, collection } from 'firebase/firestore';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirestore, useUser } from 'reactfire';
import { CreateJob } from '../../model/Job';
import route from '../../routing/route';
import { JobFormInputs } from '../../view/form/JobForm';
import FirestoreModelConverter from '../converter/FirestoreModelConverter';
import modelConverter from '../converter/ModelConverter';
import { cleanBeforeSentToFirestore } from '../firebase/firebaseUtils';

export default function useAddJob() {
  const { data: user } = useUser();

  if (!user) throw new Error('User is not logged in.');

  const firestore = useFirestore();
  const navigate = useNavigate();

  return useCallback(async (data: JobFormInputs) => {
    const job = modelConverter.fromAddJobInputsToJob(data, user.uid);
    const jobForFirestore = cleanBeforeSentToFirestore(job);
    const jobsCollection = collection(firestore, 'jobs').withConverter(
      new FirestoreModelConverter<CreateJob>().converter
    );
    await addDoc(jobsCollection, jobForFirestore);
    navigate(route('jobs'));
  }, []);
}
