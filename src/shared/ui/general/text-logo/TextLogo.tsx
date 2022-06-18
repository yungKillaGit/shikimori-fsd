import { APPLICATION_NAME } from '@config';
import clsx from 'clsx';

interface Props {
  className?: string;
}

const TextLogo = ({ className }: Props) => {
  return (
    <p className={clsx(className, 'font-logo text-brand-1 uppercase text-head2')}>
      {APPLICATION_NAME}
    </p>
  );
};

export default TextLogo;
