import Carousel from "../components/Carousel";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="sr-only">Arch Aritecture Studio</h1>
      <Carousel />
    </MainLayout>
  );
}
