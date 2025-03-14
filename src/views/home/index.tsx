import { DataGrid } from '../../components/data-grid';
import DataCharts from './data-charts';

const Home = () => {
  return (
    <div>
      <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
        <DataGrid />
        <DataCharts />
      </div>
    </div>
  );
};

export default Home;
