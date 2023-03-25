import { ComponentProps, forwardRef } from 'react';
import { CollectionName } from '../../../../model/Collection';
import EnumModel from '../../../../model/EnumModel';
import useLiveCollection from '../../../hook/useLiveCollection';
import ThemedSelect from './ThemedSelect';

type Ref = HTMLInputElement;
type Props = Omit<ComponentProps<typeof ThemedSelect>, 'options'> & {
  collection: Extract<CollectionName, 'goals' | 'status' | 'application_types'>;
};

const FirestoreSelect = forwardRef<Ref, Props>((props, ref) => {
  const { data } = useLiveCollection<EnumModel>(props.collection);

  return <ThemedSelect {...props} ref={ref} options={data} />;
});

FirestoreSelect.displayName = 'FirestoreSelect';

export default FirestoreSelect;
