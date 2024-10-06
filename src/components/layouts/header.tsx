"use client";

import React, { useEffect, useState } from "react";
import { Header as AntdHeader } from "antd/es/layout/layout";
import { Button, Dropdown, Space } from "antd";
import {
  BellOutlined,
  CloseOutlined,
  DownOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full z-10 h-[60px]">
      <AntdHeader
        className="white-header"
        style={{
          backgroundColor: "#FFFFFF",
          height: "100%",
          boxShadow: "0 4px 10px #0000001a",
        }}
      >
        <div className="px-0 h-full flex justify-between md:justify-normal">
          <div className="ml-56 w-36">
            {["/home/package-managerment"].includes(path) && (
              <b> QUẢN LÝ GÓI DỊCH VỤ</b>
            )}
            {["/home/api-key"].includes(path) && <b> QUẢN LÝ API/TOKEN </b>}
            {["/admin/package"].includes(path) && <b> QUẢN LÝ PACKAGE </b>}
            {["/admin/api-key"].includes(path) && <b> QUẢN LÝ API/TOKEN </b>}
            {["/admim/order"].includes(path) && <b> QUẢN LÝ ĐẶT HÀNG </b>}
          </div>
          <div className="hidden lg:flex items-center justify-end w-3/4">
            <div className="flex items-center justify-between gap-10">
              <Space size="middle">
                {" "}
                <img src="/icons/thietlap.svg" alt="" />
                <BellOutlined className="text-lg" />
              </Space>
              <Space>
                <div>Xin chào [Tên user]!</div>
                <DownOutlined />
              </Space>
            </div>
          </div>
          <div
            className={`${
              isOpen
                ? "flex flex-col justify-center items-center absolute top-16 left-0 w-full gap-10 bg-[#121419]"
                : "hidden"
            }`}
          >
            <Space size="middle">
              {" "}
              <img src="/icons/thietlap.svg" alt="" />
              <BellOutlined className="text-lg" />
            </Space>
            <Space>
              <div>Xin chào [Tên user]!</div>
              <DownOutlined />
            </Space>
          </div>
          {/* Menu icon for small screens */}
          <div className="lg:hidden flex items-center">
            {!isOpen ? (
              <MenuOutlined
                onClick={() => {
                  setIsOpen(true);
                }}
                style={{ fontSize: "24px", color: "white" }}
              />
            ) : (
              <CloseOutlined
                onClick={() => {
                  setIsOpen(false);
                }}
                style={{ fontSize: "24px", color: "white" }}
              />
            )}
          </div>
        </div>
      </AntdHeader>
    </div>
  );
};

export default Header;
