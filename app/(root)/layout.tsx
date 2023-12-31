import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}
