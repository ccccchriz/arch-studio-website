import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import MainLayout from "../layouts/MainLayout";

const featured = [
  {
    image:
      "bg-[url(/images/home/mobile/image-hero-trinity.jpg)] tablet:bg-[url(/images/home/tablet/image-hero-trinity.jpg)] desktop:bg-[url(/images/home/desktop/image-hero-trinity.jpg)]",
    title: "Trinity Bank Tower",
  },
  {
    image:
      "bg-[url(/images/home/mobile/image-hero-seraph.jpg)] tablet:bg-[url(/images/home/tablet/image-hero-seraph.jpg)] desktop:bg-[url(/images/home/desktop/image-hero-seraph.jpg)]",
    title: "Seraph Station",
  },
  {
    image:
      "bg-[url(/images/home/mobile/image-hero-federal.jpg)] tablet:bg-[url(/images/home/tablet/image-hero-federal.jpg)] desktop:bg-[url(/images/home/desktop/image-hero-federal.jpg)]",
    title: "Federal II Tower",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <h1 className="sr-only">Arch Aritecture Studio</h1>
      <Carousel />
      <div className="px-8 text-neutral-600 mt-16 grid gap-6 mb-28 desktop:px-0">
        <div className="w-full max-w-16 border-t border-t-neutral-300"></div>
        <h2 className="text-5xl mt-10 font-bold">Welcome to Arch Studio</h2>
        <p>
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
        </p>
        <p>
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </p>
        <p>
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p>
      </div>
      <div className="min-h-[35rem] grid content-center gap-6 p-8 text-neutral-100 font-bold bg-cover bg-neutral-600 bg-opacity-60 bg-blend-overlay bg-[url(/images/home/mobile/image-small-team.jpg)] tablet:bg-[url(/images/home/tablet/image-small-team.jpg)] desktop:bg-[url(/images/home/desktop/image-small-team.jpg)]">
        <h2 className="text-5xl ">Small team, big ideas</h2>
        <Link
          to={"/about"}
          className="flex bg-neutral-600 text-lg px-8 py-6 justify-self-start items-center gap-6"
        >
          About Us
          <img
            src="/images/icons/icon-arrow.svg"
            alt=""
            className="filter brightness-0 invert w-6 h-5"
          />
        </Link>
      </div>
      <div className="px-8 grid gap-6 mt-16 desktop:px-0">
        <h2 className="text-neutral-600 text-5xl font-bold mb-4">Featured</h2>
        <ul className="grid gap-6 text-neutral-100 grid-cols-3">
          {featured.map((el, index) => (
            <li
              key={index}
              className={`min-h-60 desktop:min-h-[35rem] p-6 grid content-end ${el.image} bg-cover bg-neutral-600 bg-opacity-60 bg-blend-overlay`}
            >
              <h3 className="text-4xl font-bold">{el.title}</h3>
              <Link to={"/portfolio"} className="text-lg">
                View All Projects
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to={"/portfolio"}
          className="flex bg-neutral-600 text-lg px-8 py-6 text-neutral-100 justify-center items-center gap-6"
        >
          See All
          <img
            src="/images/icons/icon-arrow.svg"
            alt=""
            className="filter brightness-0 invert w-6 h-5"
          />
        </Link>
      </div>
    </MainLayout>
  );
}
