import MainLayout from "../layouts/MainLayout";

const projects = [
  {
    image: "bg-[url(/images/portfolio/mobile/image-seraph.jpg)]",
    title: "Seraph Station",
    date: "September 2019",
  },
  {
    image: "bg-[url(/images/portfolio/mobile/image-eebox.jpg)]",
    title: "Eebox Building",
    date: "August 2017",
  },
  {
    image: "bg-[url(/images/portfolio/mobile/image-federal.jpg)]",
    title: "Federal II Tower",
    date: "March 2017",
  },
  {
    image: "bg-[url(/images/portfolio/mobile/image-del-sol.jpg)]",
    title: "Project Del Sol",
    date: "January 2016",
  },
  {
    image: "bg-[url(/images/portfolio/mobile/image-prototype.jpg)]",
    title: "Le Prototype",
    date: "October 2015",
  },
  {
    image: "bg-[url(/images/portfolio/mobile/image-228b.jpg)]",
    title: "228B Tower",
    date: "April 2015",
  },
  {
    image: "bg-[url(/images/portfolio/mobile/image-edelweiss.jpg)]",
    title: "Grand Edelweiss Hotel",
    date: "December 2013",
  },
  {
    image: "bg-[url(/images/portfolio/mobile/image-netcry.jpg)]",
    title: "Netcry Tower",
    date: "August 2012",
  },
  {
    image: "bg-[url(/images/portfolio/mobile/image-hypers.jpg)]",
    title: "Hypers",
    date: "January 2012",
  },
  {
    image: "bg-[url(/images/portfolio/mobile/image-sxiv.jpg)]",
    title: "SXIV Tower",
    date: "March 2011",
  },
  {
    image: "bg-[url(/images/portfolio/mobile/image-trinity.jpg)]",
    title: "Trinity Bank Tower",
    date: "September 2010",
  },
  {
    image: "bg-[url(/images/portfolio/mobile/image-paramour.jpg)]",
    title: "Project Paramour",
    date: "Febuary 2008",
  },
];

export default function Portfolio() {
  return (
    <MainLayout>
      <h2 className="sr-only">Our Projects</h2>
      <ul className="grid gap-6 p-8">
        {projects.map((el, index) => (
          <li
            key={index}
            className={`grid content-end p-6 min-h-[15rem] text-neutral-100 bg-neutral-600 bg-opacity-60 bg-blend-overlay bg-cover ${el.image}`}
          >
            <h3 className="font-bold text-4xl">{el.title}</h3>
            <p className="text-lg">{el.date}</p>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}
