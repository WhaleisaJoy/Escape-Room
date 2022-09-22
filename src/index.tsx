import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './components/app/app';
import { store } from './store';
import { fetchQuestsAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchQuestsAction());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
