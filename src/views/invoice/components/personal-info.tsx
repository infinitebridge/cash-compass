import { Button } from '@finbridge-manager-apps/ui';
import { PersonalInfoModal } from './modals/personal-info-modal';

const PersonalInfo = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <Button variant={'outline'} className="h-44 w-52">
          Company Logo
        </Button>
        <div>
          <p className="text-sm">Mr john Doe's Company Name</p>
          <p className="text-sm">Phone Number</p>
          <PersonalInfoModal />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
