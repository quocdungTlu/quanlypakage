import React from "react";
import { Footer as AntdFooter } from "antd/es/layout/layout";

const Footer = () => {
  return (
    <AntdFooter style={{ textAlign: "center", backgroundColor: "#fff" }}>
      Web shop Design ©{new Date().getFullYear()} Created by Quang
    </AntdFooter>
  );
};

export default Footer;
