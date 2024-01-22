import MainLayout from "../layouts/MainLayout";

const projects = [
  {
    image:
      "bg-[url(/images/portfolio/mobile/image-seraph.jpg)] tablet:bg-[url(/images/portfolio/tablet/image-seraph.jpg)] desktop:bg-[url(/images/portfolio/desktop/image-seraph.jpg)]",
    title: "Seraph Station",
    date: "September 2019",
  },
  {
    image:
      "bg-[url(/images/portfolio/mobile/image-eebox.jpg)] tablet:bg-[url(/images/portfolio/tablet/image-eebox.jpg)] desktop:bg-[url(/images/portfolio/desktop/image-eebox.jpg)]",
    title: "Eebox Building",
    date: "August 2017",
  },
  {
    image:
      "bg-[url(/images/portfolio/mobile/image-federal.jpg)] tablet:bg-[url(/images/portfolio/tablet/image-federal.jpg)] desktop:bg-[url(/images/portfolio/desktop/image-federal.jpg)]",
    title: "Federal II Tower",
    date: "March 2017",
  },
  {
    image:
      "bg-[url(/images/portfolio/mobile/image-del-sol.jpg)] tablet:bg-[url(/images/portfolio/tablet/image-del-sol.jpg)] desktop:bg-[url(/images/portfolio/desktop/image-del-sol.jpg)]",
    title: "Project Del Sol",
    date: "January 2016",
  },
  {
    image:
      "bg-[url(/images/portfolio/mobile/image-prototype.jpg)] tablet:bg-[url(/images/portfolio/tablet/image-prototype.jpg)] desktop:bg-[url(/images/portfolio/desktop/image-prototype.jpg)]",
    title: "Le Prototype",
    date: "October 2015",
  },
  {
    image:
      "bg-[url(/images/portfolio/mobile/image-228b.jpg)] tablet:bg-[url(/images/portfolio/tablet/image-228b.jpg)] desktop:bg-[url(/images/portfolio/desktop/image-228b.jpg)]",
    title: "228B Tower",
    date: "April 2015",
  },
  {
    image:
      "bg-[url(/images/portfolio/mobile/image-edelweiss.jpg)] tablet:bg-[url(/images/portfolio/tablet/image-edelweiss.jpg)] desktop:bg-[url(/images/portfolio/desktop/image-edelweiss.jpg)]",
    title: "Grand Edelweiss Hotel",
    date: "December 2013",
  },
  {
    image:
      "bg-[url(/images/portfolio/mobile/image-netcry.jpg)] tablet:bg-[url(/images/portfolio/tablet/image-netcry.jpg)] desktop:bg-[url(/images/portfolio/desktop/image-netcry.jpg)]",
    title: "Netcry Tower",
    date: "August 2012",
  },
  {
    image:
      "bg-[url(/images/portfolio/mobile/image-hypers.jpg)] tablet:bg-[url(/images/portfolio/tablet/image-hypers.jpg)] desktop:bg-[url(/images/portfolio/desktop/image-hypers.jpg)]",
    title: "Hypers",
    date: "January 2012",
  },
  {
    image:
      "bg-[url(/images/portfolio/mobile/image-sxiv.jpg)] tablet:bg-[url(/images/portfolio/tablet/image-sxiv.jpg)] desktop:bg-[url(/images/portfolio/desktop/image-sxiv.jpg)]",
    title: "SXIV Tower",
    date: "March 2011",
  },
  {
    image:
      "bg-[url(/images/portfolio/mobile/image-trinity.jpg)] tablet:bg-[url(/images/portfolio/tablet/image-trinity.jpg)] desktop:bg-[url(/images/portfolio/desktop/image-trinity.jpg)]",
    title: "Trinity Bank Tower",
    date: "September 2010",
  },
  {
    image:
      "bg-[url(/images/portfolio/mobile/image-paramour.jpg)] tablet:bg-[url(/images/portfolio/tablet/image-paramour.jpg)] desktop:bg-[url(/images/portfolio/desktop/image-paramour.jpg)]",
    title: "Project Paramour",
    date: "Febuary 2008",
  },
];

export default function Portfolio() {
  return (
    <MainLayout>
      <h2 className="sr-only">Our Projects</h2>
      <ul className="grid gap-6 p-8 desktop:grid-cols-3 desktop:max-w-[70rem]">
        {projects.map((el, index) => (
          <li
            key={index}
            className={`grid content-end p-6 min-h-[15rem] desktop:min-h-[35rem] text-neutral-100 bg-neutral-600 bg-opacity-60 bg-blend-overlay bg-cover bg-center ${el.image}`}
          >
            <h3 className="font-bold text-4xl">{el.title}</h3>
            <p className="text-lg">{el.date}</p>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}
