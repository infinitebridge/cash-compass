import {
  Avatar,
  AvatarFallback,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@finbridge-manager-apps/ui';

const Quotas = [
  {
    quotasTitle: 'Quota 1',
    totalAmount: 10000,
    stage: 'Initial',
    participants: ['p1', 'p2', 'p3'],
  },
  {
    quotasTitle: 'Quota 2',
    totalAmount: 15000,
    stage: 'Mid',
    participants: ['p1', 'p2', 'p3'],
  },
  {
    quotasTitle: 'Quota 3',
    totalAmount: 20000,
    stage: 'Final',
    participants: ['p1', 'p2', 'p3'],
  },
  {
    quotasTitle: 'Quota 4',
    totalAmount: 25000,
    stage: 'Completed',
    participants: ['p1', 'p2', 'p3'],
  },
];

export function QuotasTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Quotas Title</TableHead>
          <TableHead>Total Amount</TableHead>
          <TableHead>Stage</TableHead>
          <TableHead className="text-right">participants</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Quotas.map((quota, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{quota.quotasTitle}</TableCell>
            <TableCell>{quota.totalAmount}</TableCell>
            <TableCell>{quota.stage}</TableCell>
            <TableCell className="text-right">
              {quota.participants.map((participant) => (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Avatar className="-ml-2 border-2 border-white">
                        <AvatarFallback>
                          {participant.toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{participant}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
