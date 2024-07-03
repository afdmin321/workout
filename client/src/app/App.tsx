import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Navbar } from 'widgets/Navbar';
import Footer from 'widgets/Footer/ui/Footer';

const App = () => {
  return (
    <div className={classNames('app')}>
      <Navbar />
      <div className="content-page width-wrapper">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
};
export default App;
