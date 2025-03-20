import {
  Separator,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@cash-compass/ui';
import { AppSidebar } from './app-sidebar';
import { Outlet } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useGetUserBusinessAggregateQuery } from '../../graphql';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { SearchForm } from './search-form';
export default function Layout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  const { data: dataQuery, loading } = useGetUserBusinessAggregateQuery();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, userId]);

  useEffect(() => {
    if (!loading && !dataQuery?.user_business_aggregate.aggregate?.count) {
      // navigate('/onboarding');
      // #TODO: go to onboarding
      console.log('go to onboarding');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataQuery?.user_business_aggregate.aggregate?.count, loading]);

  if (!isLoaded || loading)
    return (
      <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
        <Loader2 className="text-muted-foreground animate-spin" />
      </div>
    );
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex sticky h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <SearchForm />
            {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
