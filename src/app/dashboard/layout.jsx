import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r-2">
        <Link
          href={"/"}
          className="py-2 px-4 block w-full bg-linear-to-r from-sky-50 to-sky-200 text-black rounded"
        >
          ☯️ Dev-story
        </Link>
        <div className="flex flex-col gap-3 mt-10">
          <Link
            className="py-2 px-4 w-full bg-gray-600 rounded"
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-600 rounded"
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-600 rounded"
            href={"/dashboard/settings"}
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
