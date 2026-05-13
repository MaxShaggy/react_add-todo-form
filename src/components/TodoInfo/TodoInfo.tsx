import { TodoInfoProps } from '../../types';

export const TodoInfo = ({ todo }: TodoInfoProps) => {
  return (
    <div className="TodoInfo">
      <h2 className="TodoInfo__title">{todo.title}</h2>
    </div>
  );
};
