import RevenueTrend from './revenue-trend';

const RevenueOverview = () => {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-5">
        <RevenueTrend />
      </div>
    </div>
  );
};

export default RevenueOverview;
