type Model = {
  id: string;
};

export type CreateModel<T extends Model> = Omit<T, 'id'>;

export default Model;
