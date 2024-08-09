import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

import { Navbar } from 'widgets/Navbar';
import Footer from 'widgets/Footer/ui/Footer';
import { FeedBack } from 'widgets/FeedBack';
import SuccessApplication from 'widgets/SuccessApplication/ui/SuccessApplication';

const App = () => {
  return (
    <div className={classNames('app')}>
      <Navbar />
      <div className="content-page width-wrapper">
        <AppRouter />
      </div>
      <SuccessApplication />
      <FeedBack />
      <Footer />
    </div>
  );
};
export default App;
