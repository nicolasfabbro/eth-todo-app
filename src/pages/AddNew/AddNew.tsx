import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Header from '../../components/Header';
import Container from '../../components/Container';
import { Todo } from '../../types/todoList';
import "./styles.scss";

const defaultTask = {
  title: '',
  description: '',
  isCompleted: false,
};

const AddNew = () => {
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState<Todo>(defaultTask);

  const resetForm = () => {
    setNewTask(defaultTask);
  }

  const createTask = () => {
    alert(`creating ${JSON.stringify(newTask)}`);
    resetForm();
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setNewTask({
      ...newTask,
      [field]: value,
    });
  };

  return (
    <>
      <Header leftElement={<ArrowBackIcon onClick={() => navigate(-1)} />} />
      <Container>
        <div className="add-new">
          <TextField
            label="Title"
            className="add-new__input"
            margin="normal"
            value={newTask.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
          <TextField
            label="Description"
            multiline
            rows={4}
            className="add-new__input"
            margin="normal"
            value={newTask.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={newTask.isCompleted}
                onChange={(e) => handleInputChange('isCompleted', e.target.checked)}
              />
            }
            label="Is completed"
          />
          <Button
            variant="contained"
            onClick={createTask}
            className="add-new__submit"
          >
            Create task
          </Button>
        </div>
      </Container>
    </>
  )
}

export default AddNew;
