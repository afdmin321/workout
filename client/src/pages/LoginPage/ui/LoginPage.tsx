import { FC, memo } from 'react';
import cls from './LoginPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from 'features/AuthByUsername';

interface Props {
     className?: string;
  }
const LoginPage: FC<Props> = (props: Props) => {
 const { className, ...otherProps } = props;
  return (
    <section className={classNames(cls.LoginPage, {}, [className])} {...otherProps}>
        <LoginForm/>
    </section>
  )
};

export default memo(LoginPage);
