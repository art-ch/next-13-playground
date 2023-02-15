import { Homepage } from '@/components/pages/HomePage/Homepage';

export default async function Home() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();

  return <Homepage data={data} />;
}
