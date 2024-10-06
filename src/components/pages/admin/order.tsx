"use client";

import { useState } from "react";
import {
  Table,
  Button,
  Input,
  Tag,
  Space,
  Typography,
  DatePicker,
  Checkbox,
  Pagination,
} from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import OrderModal from "../../modals/order-admin.modal";
import OrderAdminModal from "../../modals/order-admin.modal";
import RestoreAdminModal from "../../modals/restore.modal";

const Order = () => {
  // Dữ liệu cho bảng
  const [openOderModal, setOpenOderModal] = useState(false);
  const [openRestoreModal, setOpenRestoreModal] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      packageName: "Gói Miễn phí",
      username: "QuocDung",
      activity: "Mua mới",
      orderTime: "25/01/2023 | 11:00:20",
      startTime: "30/01/2023 | 11:00:20",
      endTime: "29/01/2026 | 11:00:20",
      version: "Thử nghiệm",
      status: "Đang hoạt động",
    },
    {
      key: "2",
      packageName: "Gói cơ bản",
      username: "PhuongNam",
      activity: "Mua mới",
      orderTime: "24/01/2023 | 10:25:10",
      startTime: "26/01/2023 | 12:00:20",
      endTime: "25/01/2026 | 11:00:20",
      version: "Ứng dụng",
      status: "Ngừng hoạt động",
    },
    {
      key: "3",
      packageName: "Gói nâng cao",
      username: "QuocNam",
      activity: "Mua thêm",
      orderTime: "23/01/2023 | 15:00:00",
      startTime: "-",
      endTime: "-",
      version: "Ứng dụng",
      status: "Chờ phê duyệt",
    },
  ]);

  // Cấu hình cột của bảng
  const columns = [
    {
      render: (text: string) => <Checkbox />,
    },
    {
      title: "TÊN PACKAGE",
      dataIndex: "packageName",
      key: "packageName",
      render: (text: string) => <div>{text}</div>,
    },
    {
      title: "TÊN ĐĂNG NHẬP",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "HOẠT ĐỘNG",
      dataIndex: "activity",
      key: "activity",
    },
    {
      title: "THỜI GIAN ĐẶT HÀNG",
      dataIndex: "orderTime",
      key: "orderTime",
    },
    {
      title: "THỜI GIAN BẮT ĐẦU",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "THỜI GIAN HẾT HẠN",
      dataIndex: "endTime",
      key: "endTime",
    },
    {
      title: "PHIÊN BẢN",
      dataIndex: "version",
      key: "version",
    },
    {
      title: "TRẠNG THÁI",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color;
        if (status === "Đang hoạt động") color = "blue";
        else if (status === "Ngừng hoạt động") color = "gray";
        else if (status === "Chờ phê duyệt") color = "gold";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "THAO TÁC",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button
            onClick={() => {
              setOpenRestoreModal(true);
            }}
            icon={<img src="/icons/restore.svg" />}
          />
          <Button
            onClick={() => {
              setOpenOderModal(true);
            }}
            icon={<img src="/icons/tap.svg" />}
          />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "1px", marginTop: "100px" }}>
      <OrderAdminModal
        open={openOderModal}
        onClose={() => {
          setOpenOderModal(false);
        }}
      />
      <RestoreAdminModal
        open={openRestoreModal}
        onClose={() => {
          setOpenRestoreModal(false);
        }}
      />
      {/* Thanh công cụ tìm kiếm và lọc */}
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          gap: "16px",
          justifyContent: "end",
        }}
      >
        <DatePicker />
        <DatePicker />
        <DatePicker />
        <Input.Search
          placeholder="Tìm kiếm theo tên đăng nhập, tên package"
          enterButton
          style={{ maxWidth: 300 }}
        />
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          total: 110,
          showTotal: (total, range) =>
            `Hiển thị ${range[0]}-${range[1]} trên ${total} kết quả`,
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
      />
    </div>
  );
};

export default Order;
