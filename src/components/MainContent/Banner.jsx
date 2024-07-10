import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";

export function Banners() {
  return (
    <Banner>
      <div className="flex w-full justify-between bg-gray-500 text-white">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal">
            <MdAnnouncement className="mr-4 h-4 w-4" />
            <span className="[&_p]:inline">
            For demonstration purposes -&nbsp;
              <a
                className="inline font-medium text-zinc-950 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
              >
                https://api.github.com/users/yashthakare93
              </a>
            </span>
          </p>
        </div>
        <Banner.CollapseButton color="gray" className="border-0 bg-transparent">
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
}
