import { useQuery } from '@tanstack/react-query';
import { getTransactionFields } from '@/services/TransactionFieldService';

export const useTransactionFields = () => {
  return useQuery({
    queryKey: ['transactionFields'],
    queryFn: getTransactionFields,
  });
};
