import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import { Checkbox } from '@mui/material';
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
  const navigate = useNavigate();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loadingTodos, setLoadingTodos] = useState(false);
  const { ethereum, connectedAccount } = useMetaMaskAccount();
  const todosContract = getTodoListContract(ethereum);

  const getTodos = async () => {
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
  };

  const handleDelete = () => {
    alert('Delete feature is not implemented yet!');
  }

  const handleChecked = (value: boolean) => {
    alert('Mark as done items is not implemented yet!');
    console.log('Fail trying to change value to: ', value);
  }

  useEffect(() => {
    getTodos();
  }, [!!todosContract, connectedAccount]);

  return (
    <>
      <Header
        leftElement={<LogoutIcon />}
        rightElement={<AddIcon onClick={() => navigate('/add-new')} />}
      />
      <Container className="todos">
        {loadingTodos
          ? <p>Loading list...</p>
          : (
            <ul className="todos__list">
              {
                todos.length
                  ? todos?.map(({ id, title, isCompleted}) => (
                    <li key={id} className={classnames('todos__item', {
                      'todos__item--completed': isCompleted,
                    })}>
                      <div className="todos__item-title">{title}</div>
                      <Checkbox
                        className="todos__item-checkbox"
                        checked={isCompleted}
                        onChange={(e) => handleChecked(e.target.checked)}
                      />
                      <DeleteIcon onClick={handleDelete} className="todos__item-delete" />
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
