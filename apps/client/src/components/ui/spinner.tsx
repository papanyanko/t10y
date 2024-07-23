import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

type LoaderProps = {
  className?: string;
};

export const Spinner = ({ className = '' }: LoaderProps) => {
  return <Loader2 className={cn('animate-spin', className)} />;
};
