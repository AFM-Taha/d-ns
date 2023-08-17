import Card from '@/components/ui/base-ui/cards/Card';
import Card1 from '@/components/ui/base-ui/cards/Card1';

const HomePage = () => {
  const a = {
    title:
      '  EE PAY AS YOU GO 4G prepaid sim card with preloader US $150.50 for  calls, everything in one package',
    nsln: '123456789012',
    condition: 'New without tag',
    size: 'M',
    color: 'Blue',
    quantity: 1,
  };
  return (
    <section className=" mt-40 ">
      <Card {...a} />

{/*       <Card1 /> */}
    </section>
  );
};

export default HomePage;
