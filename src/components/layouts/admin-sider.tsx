"use client";

import Sider from "antd/es/layout/Sider";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const AdminSider = () => {
  const path = usePathname();
  const router = useRouter();
  return (
    <Sider
      trigger={null}
      className="z-20 text-[#9E9E9E]"
      style={{ backgroundColor: "#0F0F0F" }}
      collapsible
      width="262px"
    >
      <div>
        <img className="py-5 pl-7" src="/icons/application.svg" alt="" />
      </div>
      <div
        className={`text-${
          ["/admin/package"].includes(path) ? "white" : "[#9E9E9E]"
        } text-left pl-12 mt-14 py-4 cursor-pointer`}
        onClick={() => {
          router.push("/admin/package");
        }}
      >
        QUẢN LÝ PACKAGE{" "}
      </div>
      <div
        className={`text-${
          ["/admin/api-key"].includes(path) ? "white" : "[#9E9E9E]"
        } text-left pl-12 py-4 cursor-pointer`}
        onClick={() => {
          router.push("/admin/api-key");
        }}
      >
        QUẢN LÝ API/TOKEN{" "}
      </div>
      <div
        className={`text-${
          ["/admin/order"].includes(path) ? "white" : "[#9E9E9E]"
        } text-left pl-12 py-4 cursor-pointer`}
        onClick={() => {
          router.push("/admin/order");
        }}
      >
        QUẢN LÝ ĐẶT HÀNG{" "}
      </div>
    </Sider>
  );
};

export default AdminSider;
