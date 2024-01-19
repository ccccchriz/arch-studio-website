interface dataType {
  image: string;
  name: string;
  description: string;
}

const data: dataType[] = [
  {
    image: "da",
    name: "Project Paramour",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  },
  {
    image: "da",
    name: "Project Paramoursdg",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  },
  {
    image: "da",
    name: "Project Paramourgsd",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  },
];

export default function Carousel() {
  return (
    <div>
      <h2 className="sr-only">Our Projects</h2>
      {/* <ul>
        {data.map((el, index) => (
          <li></li>
        ))}
      </ul> */}
      <div className="grid desktop:hidden bg-[url(/images/home/mobile/image-hero-paramour.jpg)] bg-neutral-600 bg-opacity-60 bg-blend-overlay bg-cover px-8 py-28 text-neutral-100">
        <h3 className="mb-3 font-bold text-5xl">Project Paramour</h3>
        <p className="mb-20 text-lg">
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
        <a
          href=""
          className="flex items-center gap-6 font-bold text-lg bg-neutral-600 px-8 py-6 justify-self-start"
        >
          See Our Portfolio
          <img
            src="/images/icons/icon-arrow.svg"
            alt=""
            className="filter brightness-0 invert w-6 h-5"
          />
        </a>
      </div>
    </div>
  );
}
