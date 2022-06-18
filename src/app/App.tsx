import { Routing } from '@pages';
import 'shared/styles/index.scss';
import { withProviders } from './providers';

const App = () => (
  <Routing />
);

export default withProviders(App);
