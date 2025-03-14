import {
  Breadcrumb,
  Separator,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
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
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
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
            </Breadcrumb>
          </div>
        </header>
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
