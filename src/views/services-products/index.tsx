import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import ProductsPage from '../products';
import ServicesPage from '../services';

function ServicesProductsPage() {
  const [searchParam] = useSearchParams();
  const servcices = searchParam.get('service') ?? 'products';
  const { search, pathname } = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const params = new URLSearchParams(search);
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.get('service')) {
      // Clone the params so you don't mutate the original
      const newParams = new URLSearchParams(params);
      // Add your new parameters
      newParams.set('service', 'products');
      navigate(`${pathname}?${newParams.toString()}`);
    }
  }, [navigate, params, pathname]);

  return (
    <div>{servcices === 'products' ? <ProductsPage /> : <ServicesPage />}</div>
  );
}

export default ServicesProductsPage;
