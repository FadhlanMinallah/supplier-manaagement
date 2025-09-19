import type { Metadata } from 'next';
import { ConfigProvider } from 'antd';
import MainLayout from '@/components/layout/MainLayout';
import '@/styles/tailwind.css';
// import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Supplier Management',
  description: 'Supplier Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#1890ff',
              },
            }}
          >
            <MainLayout>{children}</MainLayout>
          </ConfigProvider>
      </body>
    </html>
  );
}