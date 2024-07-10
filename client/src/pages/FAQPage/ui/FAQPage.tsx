import { FC, memo } from 'react';
import cls from './FAQPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropDown } from 'widgets/DropDown';

interface Props {
  className?: string;
}
const FAQPage: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  return (
    <div className={classNames(cls.FAQPage, {}, [className])} {...otherProps}>
      <DropDown question="asdjff fadjf adsjf ?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem fugit
        dolores magni rerum cumque accusantium ducimus illum, possimus, autem,
        laudantium velit alias hic aut porro. Itaque unde molestiae eum nesciunt
        tempore veniam nobis ut officia, deserunt exercitationem odio, libero
        neque necessitatibus cupiditate autem assumenda harum labore ipsa! Harum
        debitis molestiae, porro tempora accusantium, eveniet voluptatibus eius
        fugiat ipsa, vitae commodi eum facere iste nostrum. Accusantium in natus
        mollitia magni enim saepe itaque maxime facere autem laudantium voluptas
        doloremque ipsum ea ex molestiae, at dolorem perspiciatis assumenda?
        Itaque, odit! Accusantium, fuga! Eos soluta reiciendis nemo a quia
        exercitationem odio, repellendus, ullam itaque sit at amet temporibus
        quae, cum molestiae? Rerum maxime provident, et recusandae, porro
        molestiae consequatur vitae, officiis voluptas at tempore quo?
        Consequatur aliquid vero optio voluptatem nostrum et qui iusto? Odio
        eaque, laudantium doloremque nesciunt aperiam omnis autem est at harum
        perspiciatis nobis facere molestias deserunt velit odit ipsum alias
        voluptate ducimus soluta tempora tenetur iste a. Commodi, voluptatum rem
        obcaecati minima earum tenetur natus perspiciatis voluptas. Sunt ipsa
        adipisci quae tempora corrupti dolorum ipsam nemo. Aperiam iure dicta
        aspernatur laborum nihil exercitationem explicabo consequatur nulla
        earum omnis praesentium nisi suscipit tenetur, quo incidunt, deleniti
        repellat doloribus quaerat.
      </DropDown>
      <DropDown question="asdjff fadjf adsjf ?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem fugit
        dolores magni rerum cumque accusantium ducimus illum, possimus, autem,
        laudantium velit alias hic aut porro. Itaque unde molestiae eum nesciunt
        tempore veniam nobis ut officia, deserunt exercitationem odio, libero
        neque necessitatibus cupiditate autem assumenda harum labore ipsa! Harum
        debitis molestiae, porro tempora accusantium, eveniet voluptatibus eius
        fugiat ipsa, vitae commodi eum facere iste nostrum. Accusantium in natus
        mollitia magni enim saepe itaque maxime facere autem laudantium voluptas
        doloremque ipsum ea ex molestiae, at dolorem perspiciatis assumenda?
        Itaque, odit! Accusantium, fuga! Eos soluta reiciendis nemo a quia
        exercitationem odio, repellendus, ullam itaque sit at amet temporibus
        quae, cum molestiae? Rerum maxime provident, et recusandae, porro
        molestiae consequatur vitae, officiis voluptas at tempore quo?
        Consequatur aliquid vero optio voluptatem nostrum et qui iusto? Odio
        eaque, laudantium doloremque nesciunt aperiam omnis autem est at harum
        perspiciatis nobis facere molestias deserunt velit odit ipsum alias
        voluptate ducimus soluta tempora tenetur iste a. Commodi, voluptatum rem
        obcaecati minima earum tenetur natus perspiciatis voluptas. Sunt ipsa
        adipisci quae tempora corrupti dolorum ipsam nemo. Aperiam iure dicta
        aspernatur laborum nihil exercitationem explicabo consequatur nulla
        earum omnis praesentium nisi suscipit tenetur, quo incidunt, deleniti
        repellat doloribus quaerat.
      </DropDown>
    </div>
  );
};

export default memo(FAQPage);
