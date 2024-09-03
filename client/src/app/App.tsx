import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

import { Navbar } from 'widgets/Navbar';
import Footer from 'widgets/Footer/ui/Footer';
import { FeedBack } from 'widgets/FeedBack';
import SuccessApplication from 'widgets/SuccessApplication/ui/SuccessApplication';
import { useSelector } from 'react-redux';
import { getSuccessApplicationVisible } from 'widgets/SuccessApplication/model/selectors/SuccessApplicationSelectors';
import PopupImage from 'widgets/PopupImage/ui/PopupImage';
import { getPopupImagesVisible } from 'widgets/PopupImage/model/selectors/PopupSelectors';
import { getUserInited } from 'entities/User/model/selectors/UserSelector';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { UserActions } from 'entities/User/model/slice/UserSlice';
import ScrollToTop from 'features/ScrollToTop/ScrollToTop';

const App = () => {
  const dispatch = useAppDispatch();
  const popupSuccessApplicationVisible = useSelector(
    getSuccessApplicationVisible,
  );
  const popupImageVisible = useSelector(getPopupImagesVisible);
  const inited = useSelector(getUserInited);
  useEffect(() => {
    dispatch(UserActions.initAuthData());
  }, [dispatch]);


  return (
    <div className={classNames('app')}>
      <Navbar />
      <div className="content-page width-wrapper">
        {inited && (
          <>
            <AppRouter />
            <ScrollToTop />
          </>
        )}
      </div>
      {popupSuccessApplicationVisible && <SuccessApplication />}
      <FeedBack />
      <Footer />
      {popupImageVisible && <PopupImage />}
    </div>
  );
};
export default App;
