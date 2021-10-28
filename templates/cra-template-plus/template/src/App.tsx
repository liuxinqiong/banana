import { Provider } from 'react-redux';

import configureStore from '@/store';
import RootRoute from '@/pages';

function App() {
  return (
    <Provider store={configureStore()}>
      <RootRoute />
    </Provider>
  );
}
export default App;
