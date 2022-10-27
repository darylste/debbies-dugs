import classNames from 'classnames';

import styles from './Spacer.module.scss';

type sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ISpacerProps {
  children?: React.ReactNode;
  top?: sizes;
  right?: sizes;
  bottom?: sizes;
  left?: sizes;
}

const Spacer: React.FC<ISpacerProps> = ({
  children,
  top,
  right,
  bottom,
  left,
}) => {
  return (
    <div
      className={classNames(
        styles.spacer,
        styles[`top-${top}`],
        styles[`right-${right}`],
        styles[`bottom-${bottom}`],
        styles[`left-${left}`]
      )}
    >
      {children}
    </div>
  );
};

export default Spacer;
