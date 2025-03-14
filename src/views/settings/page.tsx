import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@finbridge-manager-apps/ui';
import { FaSpinner } from 'react-icons/fa';
import { useGetBusinessByPkQuery } from '../../graphql';
import { useBusinessStore } from '../../hooks/use-business-store';
import BasicInformationForm from './components/BasicInformationForm';
import FinancialForm from './components/FinancialForm';
import LogoUploader from './components/LogoUploader';

const SettingsPage = () => {
  const { businessId } = useBusinessStore();
  const { data: business, loading } = useGetBusinessByPkQuery({
    variables: {
      businessByPkId: Number(businessId),
    },
  });

  if (loading) {
    return (
      <FaSpinner className="flex animate-spin items-center justify-center" />
    );
  }

  return (
    <div className="flex min-h-screen items-start justify-center p-6">
      <div className="w-full max-w-4xl">
        <h2 className="mb-6 text-left text-2xl font-semibold">Settings</h2>
        <p className="mb-3 text-xl font-semibold">Business Profile</p>
        <div className="flex flex-col gap-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Basic Information</AccordionTrigger>
              <AccordionContent>
                <BasicInformationForm business={business} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Tax and Financial Information</AccordionTrigger>
              <AccordionContent>
                <FinancialForm />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Brand Appearance</AccordionTrigger>
              <AccordionContent>
                <LogoUploader
                  onFileSelect={() => {
                    return '';
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
