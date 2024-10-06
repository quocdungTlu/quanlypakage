"use client";

import Sider from "antd/es/layout/Sider";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const MainSider = () => {
  const path = usePathname();
  const router = useRouter();
  return (
    <Sider
      trigger={null}
      className="z-20"
      style={{ backgroundColor: "#0F0F0F" }}
      collapsible
      width="262px"
    >
      <div>
        <img className="py-5 pl-7" src="/icons/application.svg" alt="" />
      </div>
      <div
        className={`text-${
          ["/home/package-managerment"].includes(path) ? "white" : "[#9E9E9E]"
        } text-left pl-12 mt-14 py-4 cursor-pointer`}
        onClick={() => {
          router.push("/home/package-managerment");
        }}
      >
        QUẢN LÝ GÓI DỊCH VỤ
      </div>
      <div
        className={`text-${
          ["/home/api-key"].includes(path) ? "white" : "[#9E9E9E]"
        } text-left pl-12 py-4 cursor-pointer`}
        onClick={() => {
          router.push("/home/api-key");
        }}
      >
        QUẢN LÝ API/TOKEN{" "}
      </div>
    </Sider>
  );
};

export default MainSider;
