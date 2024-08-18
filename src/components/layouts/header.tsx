import React from "react";
import { Header as AntdHeader } from "antd/es/layout/layout";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <AntdHeader
        className="white-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          boxShadow: "0 4px 10px #0000001a",
        }}
      >
        <div className="text-xl">Web Shop</div>

        <div className="hidden lg:flex gap-16 items-center">
          <a className="text-[#1d1e20] text-base" href="#">
            WordPress
          </a>
          <a className="text-[#1d1e20] text-base" href="#">
            Website Builder
          </a>
          <a className="text-[#1d1e20] text-base" href="#">
            Landing Page
          </a>
          <a className="text-[#1d1e20] text-base" href="#">
            Tên miền
          </a>
          <Button>Đăng nhập</Button>
        </div>

        {/* Menu icon for small screens */}
        <div className="lg:hidden">
          <MenuOutlined style={{ fontSize: "24px" }} />
        </div>
      </AntdHeader>
    </div>
  );
};

export default Header;
