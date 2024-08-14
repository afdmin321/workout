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

const App = () => {
  const popupSuccessApplicationVisible = useSelector(
    getSuccessApplicationVisible,
  );
  const popupImageVisible = useSelector(getPopupImagesVisible);
  return (
    <div className={classNames('app')}>
      <Navbar />
      <div className="content-page width-wrapper">
        <AppRouter />
      </div>
      {popupSuccessApplicationVisible && <SuccessApplication />}
      <FeedBack />
      <Footer />
      {popupImageVisible && <PopupImage />}
    </div>
  );
};
export default App;
