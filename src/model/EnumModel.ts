import Model from './Model';

type EnumModel = Model & {
  slug: string;
  name: string;
};

export default EnumModel;
