import { useState, useEffect, useCallback } from 'react';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMetaMaskAccount } from '../../providers/MetaMaskProvider';
import { getTodoListContract } from '../../utils/contracts';
import Header from '../../components/Header';
import Container from '../../components/Container';
import { Todo } from '../../types/todoList';
import "./styles.scss";

const List = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loadingTodos, setLoadingTodos] = useState(false);
  const { ethereum, connectedAccount } = useMetaMaskAccount();
  const todosContract = getTodoListContract(ethereum);

  const getTodos = useCallback(() => async () => {
    if (todosContract && connectedAccount) {
      setLoadingTodos(true);

      try {
        const todos = await todosContract.getTodos();
        console.log('Retrieved todos...', todos);

        setTodos(todos);
      } catch (e) {
        console.error('Error trying to get the todo list: ', e);
      } finally {
        setLoadingTodos(false);
      }
    }
  }, [connectedAccount, todosContract]);

  const handleDelete = () => {
    console.log('Deleting...');
  }

  const handleChecked = (value: string) => {
    console.log('Change value to: ', value);
  }

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <>
      <Header
        leftElement={<LogoutIcon />}
        rightElement={<AddIcon />}
      />
      <Container className="todos">
        {loadingTodos
          ? <p>Loading list...</p>
          : (
            <ul className="todos__list">
              {
                todos.length
                  ? todos?.map(({ id, title, description, isCompleted}) => (
                    <li key={id} className="todos__item">
                      <div className="todos__item-title">{title}</div>
                      <input
                        type="checkbox"
                        name="isCompleted"
                        checked={isCompleted}
                        onChange={(e) => handleChecked(e.target.value)}
                      />
                      <DeleteIcon onClick={handleDelete} />
                    </li>
                  ))
                : <p className="todos__no-results">You don't have any tasks to do yet!</p>
              }
            </ul>
          )
        }
      </Container>
    </>
  )
}

export default List;
