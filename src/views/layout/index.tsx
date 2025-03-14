import { useAuth } from '@clerk/clerk-react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../../components/header';
import { SheetProvider } from '../../providers/sheet-provider';

import { Loader2 } from 'lucide-react';
import { useEffect, useMemo } from 'react';

import { Toaster } from 'sonner';
import { useGetUserBusinessAggregateQuery } from '../../graphql';

const NO_LAYOUT_PATH = ['onboarding', 'invoice', 'settings'];

const UserLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { data, loading } = useGetUserBusinessAggregateQuery();

  const pathnameIncluded = useMemo(() => {
    const cleanPathname = pathname.replace(/^\/+/, '');
    return !NO_LAYOUT_PATH.includes(cleanPathname);
  }, [pathname]);

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, userId]);

  useEffect(() => {
    if (!loading && !data?.user_business_aggregate.aggregate?.count) {
      navigate('/onboarding');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.user_business_aggregate.aggregate?.count, loading]);

  if (!isLoaded || loading)
    return (
      <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
        <Loader2 className="text-muted-foreground animate-spin" />
      </div>
    );

  return (
    <div>
      {pathnameIncluded ? <Header /> : null}
      <Toaster position="bottom-right" richColors />
      <SheetProvider />
      <Outlet />
    </div>
  );
};

export default UserLayout;
