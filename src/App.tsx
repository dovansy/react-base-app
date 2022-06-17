import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '~/styles/index.scss';
import './App.css';
import { store } from './store';
import i18n from './utils/i18n';
import RootWrapper from './wappers/RootWrapper';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <BrowserRouter>
          <RootWrapper />
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
