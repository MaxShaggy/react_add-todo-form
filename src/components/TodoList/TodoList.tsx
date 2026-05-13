import cn from 'classnames';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';
import { TodoListProps } from '../../types';

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <article
          data-id={todo.id}
          className={cn('TodoInfo', {
            'TodoInfo--completed': todo.completed === true,
          })}
          key={todo.id}
        >
          <TodoInfo todo={todo} />
          {todo.user && <UserInfo user={todo.user} />}
        </article>
      ))}
    </section>
  );
};
