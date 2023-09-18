import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header({ setModalStatus }: any) {
  const styles = {
    headerContainer:
      // "w-full h-12 bg-gray-100 flex flex-row text-center justify-between p-10",
      "w-full h-12 bg-gray-100 flex flex-row fixed text-center justify-between p-10 z-10",
  };

  const { headerContainer } = styles;

  return (
    <header className={`${headerContainer}`}>
      <div className="flex items-center">
        <Link className="object-contain" href="/">
          <Image
            className="object-contain"
            src="/vercel.svg"
            alt="image"
            height={150}
            width={150}
          />
        </Link>
      </div>
      <div className="flex items-center space-x-5">
        <div>
          <button
            className="p-3 cursor-pointer hover:bg-green-100 rounded-md"
            onClick={setModalStatus}
          >
            Create Blog
          </button>
        </div>
        <h3 className="">User </h3>
      </div>
    </header>
  );
}

export default Header;
