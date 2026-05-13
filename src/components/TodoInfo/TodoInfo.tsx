import { TodoInfoProps } from '../../types';

export const TodoInfo = ({ todo }: TodoInfoProps) => {
  return <h2 className="TodoInfo__title">{todo.title}</h2>;
};
