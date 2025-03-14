import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@finbridge-manager-apps/ui';
import { Reorder } from 'framer-motion';
import { LogsIcon, TrashIcon } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
import useRecordStore, { RecordItem } from '../../../zustand/record-store';
import NewRecordModal from './modals/new-record-modal';
import { ProductModal } from './modals/product-modal';
import { ServiceModal } from './modals/service-modal';

const DocumentBody = () => {
  const items = useRecordStore((state) => state.items);
  const addItem = useRecordStore((state) => state.addItem);
  const removeItem = useRecordStore((state) => state.removeItem);
  const reorderItems = useRecordStore((state) => state.reorderItems);
  const [editingRow, setEditingRow] = useState<number | null>(null);
  const [tempValues, setTempValues] = useState<Partial<RecordItem>>({});

  const handleDoubleClick = (
    index: number,
    field: keyof RecordItem,
    value: string | number
  ) => {
    setEditingRow(index);
    setTempValues({ ...tempValues, [field]: value });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof RecordItem
  ) => {
    setTempValues({ ...tempValues, [field]: e.target.value });
  };

  const handleBlur = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], ...tempValues };
    addItem(updatedItems[index]);
    setEditingRow(null);
    setTempValues({});
  };

  return (
    <div className="mt-10">
      <Reorder.Group axis="y" values={items} onReorder={reorderItems}>
        <Table className="w-full">
          <TableHeader className="flex w-full justify-start text-left">
            <TableRow className="flex w-full pt-5">
              <TableHead className="w-[50px]"></TableHead>
              <TableHead className="w-[100px] text-left">Description</TableHead>
              <TableHead className="flex-1 text-left">Rate</TableHead>
              <TableHead className="flex-1 text-left">Qty</TableHead>
              <TableHead className="w-[100px] text-right">Line Total</TableHead>
              <TableHead className="w-[100px] text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <Reorder.Item key={item.description} value={item}>
                <TableRow className="flex w-full">
                  <TableCell className="w-[50px]">
                    <LogsIcon className="h-5 w-5 cursor-move" />
                  </TableCell>
                  <TableCell className="w-[100px] text-left font-medium">
                    {editingRow === index ? (
                      <Input
                        type="text"
                        value={tempValues.description ?? item.description}
                        onChange={(e) => handleChange(e, 'description')}
                        onBlur={() => handleBlur(index)}
                        className="h-3 w-20"
                      />
                    ) : (
                      <span
                        onDoubleClick={() =>
                          handleDoubleClick(
                            index,
                            'description',
                            item.description
                          )
                        }
                      >
                        {item.description}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="flex-1 text-left">
                    {editingRow === index ? (
                      <Input
                        type="text"
                        value={tempValues.rate ?? item.rate}
                        onChange={(e) => handleChange(e, 'rate')}
                        onBlur={() => handleBlur(index)}
                        className="h-3 w-20"
                      />
                    ) : (
                      <span
                        onDoubleClick={() =>
                          handleDoubleClick(index, 'rate', item.rate)
                        }
                      >
                        {item.rate}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="flex-1 text-left">
                    {editingRow === index ? (
                      <Input
                        type="text"
                        value={tempValues.quantity ?? item.quantity}
                        onChange={(e) => handleChange(e, 'quantity')}
                        onBlur={() => handleBlur(index)}
                        className="h-3 w-20"
                      />
                    ) : (
                      <span
                        onDoubleClick={() =>
                          handleDoubleClick(index, 'quantity', item.quantity)
                        }
                      >
                        {item.quantity}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="w-[100px] text-right">
                    {(item.quantity * item.rate).toFixed(2)}
                  </TableCell>
                  <TableCell className="flex w-[100px] justify-end text-left">
                    <TrashIcon
                      className="h-4 w-4 cursor-pointer"
                      onClick={() => removeItem(item.description)}
                    />
                  </TableCell>
                </TableRow>
              </Reorder.Item>
            ))}
          </TableBody>
        </Table>
      </Reorder.Group>
      <div>
        <NewRecordModal />
        <div className="flex flex-row items-center gap-3">
          <ProductModal />
          <ServiceModal />
        </div>
      </div>
    </div>
  );
};

export default DocumentBody;
