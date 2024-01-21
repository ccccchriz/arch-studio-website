import MainLayout from "../layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <img
        src="/images/contact/mobile/image-hero.jpg"
        alt=""
        className="w-full object-cover filter brightness-[60%] -z-10 relative"
      />
      <div className="grid gap-20 pl-8 mr-8 bg-neutral-100 -mt-[2.8125rem] pt-[4.0625rem] text-neutral-600">
        <div className="grid gap-5">
          <h2 className="text-5xl font-bold">Tell us about your project</h2>
          <p className="text-neutral-500 text-lg">
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
        <div className="w-full max-w-16 border-t border-t-neutral-300"></div>
        <div className="grid gap-5">
          <h2 className="text-5xl font-bold">Contact Details</h2>
          <ul className="text-lg grid gap-10 text-neutral-500">
            <li>
              <h3 className="font-bold">Main Office</h3>
              <ul className="mt-4 mb-10">
                <li>Mail : archone@mail.com</li>
                <li>Address : 1892 Chenoweth Drive TN</li>
                <li>Phone : 123-456-3451</li>
              </ul>
              <a
                href=""
                className="text-neutral-600 font-bold flex items-center gap-6"
              >
                View on Map
                <img
                  src="/images/icons/icon-arrow.svg"
                  alt=""
                  className="w-6 h-5"
                />
              </a>
            </li>
            <li>
              <h3 className="font-bold">Office II</h3>
              <ul className="mt-4 mb-10">
                <li>Mail : archtwo@mail.com</li>
                <li>Address : 3399 Wines Lane TX</li>
                <li>Phone : 832-123-4321</li>
              </ul>
              <a
                href=""
                className="text-neutral-600 font-bold flex items-center gap-6"
              >
                View on Map
                <img
                  src="/images/icons/icon-arrow.svg"
                  alt=""
                  className="w-6 h-5"
                />
              </a>
            </li>
          </ul>
        </div>
        <form action="" noValidate className="grid gap-4">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="NAME"
            className="w-full border-b border-b-neutral-600 py-5 px-8 text-xl"
          />
          <div id="name-error"></div>

          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="EMAIL"
            className="w-full border-b border-b-neutral-600 py-5 px-8 text-xl"
          />
          <div id="email-error"></div>

          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={2}
            placeholder="MESSAGE"
            className="w-full border-b border-b-neutral-600 py-5 px-8 text-xl"
          ></textarea>
          <div id="message-error"></div>
          <div id="aria-live" aria-live="assertive"></div>
          <button
            type="submit"
            className="flex bg-neutral-600 text-lg px-8 py-6 text-neutral-100 font-bold justify-center items-center gap-6"
          >
            Send message
            <img
              src="/images/icons/icon-arrow.svg"
              alt=""
              className="filter brightness-0 invert w-6 h-5"
            />
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
