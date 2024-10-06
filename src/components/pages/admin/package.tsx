"use client";

import { useState } from "react";
import {
  Table,
  Button,
  Input,
  Tag,
  Space,
  Pagination,
  Typography,
  DatePicker,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import CreatePackage from "../../modals/create-package";
import ViewPackage from "../../modals/view-package";

const { Title } = Typography;

const Package = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      packageName: "Gói Miễn phí",
      api: "3 API",
      timeCreated: "23/01/2023 | 15:00:00",
      version: "Thử nghiệm",
      status: "Đang hoạt động",
    },
    {
      key: "2",
      packageName: "Gói cơ bản",
      api: "10 API",
      timeCreated: "24/01/2023 | 10:25:10",
      version: "Ứng dụng",
      status: "Ngừng hoạt động",
    },
    {
      key: "3",
      packageName: "Gói nâng cao",
      api: "20 API",
      timeCreated: "25/01/2023 | 11:00:20",
      version: "Ứng dụng",
      status: "Đang hoạt động",
    },
  ]);

  const columns = [
    {
      title: "TÊN PACKAGE",
      dataIndex: "packageName",
      key: "packageName",
    },
    {
      title: "API",
      dataIndex: "api",
      key: "api",
    },
    {
      title: "THỜI GIAN TẠO/CẬP NHẬT",
      dataIndex: "timeCreated",
      key: "timeCreated",
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
      render: (status: string) => (
        <Tag color={status === "Đang hoạt động" ? "blue" : "gray"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} />
          <Button icon={<DeleteOutlined />} danger />
          <Button
            icon={<EyeOutlined />}
            onClick={() => {
              setOpenViewModal(true);
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px", marginTop: "100px" }}>
      <CreatePackage
        open={openCreateModal}
        onClose={() => {
          setOpenCreateModal(false);
        }}
      />
      <ViewPackage
        open={openViewModal}
        onClose={() => {
          setOpenViewModal(false);
        }}
      />

      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            setOpenCreateModal(true);
          }}
          icon={<PlusOutlined />}
        >
          Tạo package
        </Button>
        <Space size="large">
          <DatePicker />
          <Input.Search
            placeholder="Tìm kiếm theo tên API, tên package"
            enterButton
            style={{ maxWidth: 400 }}
          />
        </Space>
      </div>

      {/* Bảng hiển thị danh sách package */}
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          total: 110,
          showTotal: (total, range) => (
            <div>{`Hiển thị ${range[0]}-${range[1]} trên ${total} kết quả`}</div>
          ),
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
      />
    </div>
  );
};

export default Package;
