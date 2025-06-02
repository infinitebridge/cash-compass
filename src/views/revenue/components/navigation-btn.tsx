import { Button } from '@cash-compass/ui/button';
import clsx from 'clsx';
import { ReactNode } from 'react';

type NavigationBtnProps = {
  children: ReactNode;
  action: () => void;
  className?: string;
};

const NavigationBtn = ({ children, action, className }: NavigationBtnProps) => {
  return (
    <Button
      className={clsx('p-0', className)}
      variant={'ghost'}
      onClick={action}
    >
      {children}
    </Button>
  );
};

export default NavigationBtn;
