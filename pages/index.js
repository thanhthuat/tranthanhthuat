import MainLayout from '../src/layouts/MainLayout';


import DataChart from '../src/components/Chart';

const Index = () => {
  return (
    <MainLayout>
      <DataChart />
    </MainLayout>
  );
};
export default Index;
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
