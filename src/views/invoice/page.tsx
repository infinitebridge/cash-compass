import ClientInfo from './components/client-info';
import DocumentBody from './components/document-body';
import PersonalInfo from './components/personal-info';
import TotalSection from './components/total-section';

const InvoicePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="ml-8 mt-2 min-h-[95vh] w-[84%] p-10 shadow-xl lg:w-[50%]">
        <PersonalInfo />
        <ClientInfo />
        <DocumentBody />
        <TotalSection />
      </div>
    </div>
  );
};

export default InvoicePage;
