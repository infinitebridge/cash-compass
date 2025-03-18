import * as React from 'react';
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  LayoutDashboard,
  Receipt,
  ArrowRightLeft,
  ReceiptText,
  CircleDollarSignIcon,
  TableOfContents,
} from 'lucide-react';
import { NavMain } from './nav-main';
import { NavProjects } from './nav-projects';
import { NavUser } from './nav-user';
import { BusinessSwitcher } from './business-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  Skeleton,
} from '@cash-compass/ui';
import { useGetBusinesses } from '../../hooks/use-get-businesses';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
    },
    {
      name: 'Evil Corp.',
      logo: Command,
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: 'Expenses',
      url: '#',
      icon: ReceiptText,
      isActive: false,
    },
    {
      title: 'Revenue',
      url: '#',
      icon: CircleDollarSignIcon,
      isActive: false,
    },
    {
      title: 'Invoices',
      url: '#',
      icon: Receipt,
      isActive: false,
    },
    {
      title: 'Cash Flow',
      url: '#',
      icon: ArrowRightLeft,
      isActive: false,
    },
    {
      title: 'Repports',
      url: '#',
      icon: TableOfContents,
      isActive: false,
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { businesses } = useGetBusinesses();
  const businessSwitchData = React.useMemo(() => {
    return (
      businesses?.map((business) => {
        return {
          name: business.name,
          logo: GalleryVerticalEnd,
        };
      }) ?? []
    );
  }, [businesses]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {businessSwitchData.length ? (
          <BusinessSwitcher businesses={businessSwitchData} />
        ) : (
          <Skeleton className="h-12" />
        )}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
