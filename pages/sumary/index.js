import MainLayout from '../../src/layouts/MainLayout';
import dynamic from 'next/dynamic';
const HomeLayout = dynamic(() => import('../../src/components/homecontainer'), { ssr: false });
const Index = () => {
  return (
    <MainLayout>
      <HomeLayout />
    </MainLayout>
  );
};

export default Index;
