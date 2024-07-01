import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className={classNames('app')}>
      <Navbar />
      <div className="content-page">
        <AppRouter />
      </div>
    </div>
  );
};
export default App;
