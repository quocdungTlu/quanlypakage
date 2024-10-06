"use client";

import React, { useState } from "react";
import { Table, Input, Button, DatePicker, Tag, Space } from "antd";
import { FilterOutlined, VerticalAlignTopOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

const PackageManagerment = () => {
  // Dữ liệu cho bảng
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      packageName: "Gói miễn phí",
      purchaseDate: "15/02/2023",
      startDate: "20/02/2023",
      endDate: "20/02/2024",
      status: "Hết hạn",
    },
    {
      key: "2",
      packageName: "Gói nâng cao",
      purchaseDate: "23/08/2023",
      startDate: "27/08/2023",
      endDate: "27/08/2026",
      status: "Đang hoạt động",
    },
  ]);

  // Cột của bảng
  const columns = [
    {
      title: "TÊN PACKAGE",
      dataIndex: "packageName",
      key: "packageName",
    },
    {
      title: "NGÀY MUA",
      dataIndex: "purchaseDate",
      key: "purchaseDate",
    },
    {
      title: "NGÀY BẮT ĐẦU DỊCH VỤ",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "NGÀY HẾT HẠN",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "TRẠNG THÁI",
      dataIndex: "status",
      key: "status",
      render: (status: any) => (
        <Tag color={status === "Đang hoạt động" ? "blue" : "gray"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button icon={<VerticalAlignTopOutlined />} />
          <Button icon={<FilterOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px", marginTop: "100px" }}>
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "end",
          gap: "20px",
        }}
      >
        {/* Các trường Date Picker */}
        <DatePicker />
        <DatePicker />
        <DatePicker />
        <Input.Search
          placeholder="Tìm kiếm theo tên package"
          style={{ maxWidth: 300 }}
          enterButton
        />
      </div>

      {/* Bảng */}
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default PackageManagerment;
