import { Button } from '@cash-compass/ui/button';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  action: () => void;
};

const NavigationBtn = ({ children, action }: Props) => {
  return (
    <Button variant={'ghost'} onClick={action}>
      {children}
    </Button>
  );
};

export default NavigationBtn;
