import MainLayout from "../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <img
        src="/images/about/mobile/image-hero.jpg"
        alt=""
        className="w-full object-cover filter brightness-[60%] -z-10 relative"
      />
      <div className="grid gap-20 pl-8 mr-8 bg-neutral-100 -mt-[2.8125rem] pt-[4.0625rem] text-neutral-600">
        <div className="grid gap-5">
          <h2 className="text-5xl font-bold">Your team of professionals</h2>
          <p className="text-neutral-500 text-lg">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
        <div className="w-full max-w-16 border-t border-t-neutral-300"></div>
        <div className="grid gap-5">
          <h2 className="text-5xl font-bold">Our Heritage</h2>
          <p className="text-neutral-500 text-lg">
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </p>
          <p>
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.{" "}
          </p>
          <p>
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </div>
        <div className="grid gap-14">
          <h2 className="text-5xl font-bold">The Leaders</h2>
          <ul className="grid gap-20">
            <li>
              <img
                src="/images/about/desktop/avatar-jake.jpg"
                alt=""
                className="w-full"
              />
              <h3 className="text-neutral-600 text-3xl font-bold mt-4 leading-none">
                Jake Richards
              </h3>
              <p className="text-neutral-600 text-lg leading-none">
                Chief Architect
              </p>
            </li>
            <li>
              <img
                src="/images/about/desktop/avatar-thompson.jpg"
                alt=""
                className="w-full"
              />
              <h3 className="text-neutral-600 text-3xl font-bold mt-4 leading-none">
                Thompson Smith
              </h3>
              <p className="text-neutral-600 text-lg leading-none">
                Head of Finance
              </p>
            </li>
            <li>
              <img
                src="/images/about/desktop/avatar-jackson.jpg"
                alt=""
                className="w-full"
              />
              <h3 className="text-neutral-600 text-3xl font-bold mt-4 leading-none">
                Jackson Rourke
              </h3>
              <p className="text-neutral-600 text-lg leading-none">
                Lead Designer
              </p>
            </li>
            <li>
              <img
                src="/images/about/desktop/avatar-maria.jpg"
                alt=""
                className="w-full"
              />
              <h3 className="text-neutral-600 text-3xl font-bold mt-4 leading-none">
                Maria Simpson
              </h3>
              <p className="text-neutral-600 text-lg leading-none">
                Senior Architect
              </p>
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
