export default function TechOverviews() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Tech Used
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="col-span-1 lg:col-span-1">
              <img
                alt="React"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                width={158}
                height={48}
                className="mx-auto max-h-12 w-full object-contain"
              />
            </div>
            <div className="col-span-1 lg:col-span-1">
              <img
                alt="Tailwind CSS"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                width={158}
                height={48}
                className="mx-auto max-h-12 w-full object-contain"
              />
            </div>
            <div className="col-span-1 lg:col-span-1">
              <img
                alt="Flowbite"
                src="https://flowbite.com/images/logo.svg"
                width={158}
                height={48}
                className="mx-auto max-h-12 w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  