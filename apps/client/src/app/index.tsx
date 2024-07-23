import { AppProvider } from './main-provider';
import { RouterProvider } from '@tanstack/react-router';

import { router } from '@/lib/router';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
