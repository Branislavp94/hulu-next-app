import React from "react";

function HeaderItems({ title, Icon }) {
  return (
    <div className="flex flex-col w-12 sm:w-20 text-center  group items-center cursor-pointer  hover:text-white">
      <Icon className="h-5 mb-1 group-hover:animate-bounce"></Icon>
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderItems;
