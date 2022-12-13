import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from './redux/UserSlice';
import { getPosts } from './redux/PostsSlice';
import './App.css';
import ListUser from './components/ListUser';
import { Router } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);

    return (
      <Router>
        <div className="App">
          <ListUser />
        </div>
      </Router>
  );
}

export default App;
