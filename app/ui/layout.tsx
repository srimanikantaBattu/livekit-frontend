import { headers } from 'next/headers';
import { ConnectionProvider } from '@/hooks/useConnection';
import { getAppConfig } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const hdrs = await headers();
  const appConfig = await getAppConfig(hdrs);

  return (
    <ConnectionProvider appConfig={appConfig}>
      <div className="bg-muted/20 min-h-svh p-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <main className="space-y-20">{children}</main>
        </div>
      </div>
    </ConnectionProvider>
  );
}
