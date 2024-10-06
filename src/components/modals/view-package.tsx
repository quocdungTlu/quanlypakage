import { Modal, Button, Switch, Table, Space } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const ViewPackage = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const packageDetails = {
    packageName: "Gói miễn phí",
    version: "Ứng dụng",
    status: true, // true là "Đang hoạt động", false là "Ngừng hoạt động"
    apis: [
      {
        key: "1",
        apiName: "API tích hợp với hệ thống ký số",
        url: ".console-api/certification/profile/create",
        description: "-",
        policy: "Đồng",
      },
      {
        key: "2",
        apiName: "API tích hợp để lấy thông tin tài sản từ hệ thống kế toán",
        url: ".console-api/certification/profile/create",
        description: "-",
        policy: "Vàng",
      },
      {
        key: "3",
        apiName: "API tích hợp với hệ thống thông tin nhân sự",
        url: ".console-api/certification/profile/create",
        description: "-",
        policy: "Bạc",
      },
    ],
  };

  // Cột của bảng
  const columns = [
    {
      title: "TÊN API",
      dataIndex: "apiName",
      key: "apiName",
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "MÔ TẢ",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "POLICY",
      dataIndex: "policy",
      key: "policy",
    },
  ];
  return (
    <Modal
      title="XEM PACKAGE"
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Đóng
        </Button>,
      ]}
      width={1112}
    >
      {/* Thông tin cơ bản của Package */}
      <div
        className="flex items-center gap-32"
        style={{ marginBottom: "16px" }}
      >
        <Space>
          <Title level={5}>Tên package:</Title>{" "}
          <div>{packageDetails.packageName}</div>
        </Space>
        <Space style={{ marginTop: "8px" }}>
          <Switch
            checked={packageDetails.status}
            style={{ marginLeft: "8px" }}
          />
          Đang hoạt động
        </Space>
      </div>
      <Space style={{ marginTop: "16px" }}>
        <Title level={5}>Phiên bản:</Title> <div>{packageDetails.version}</div>
      </Space>

      {/* Bảng chi tiết các API */}
      <Table
        dataSource={packageDetails.apis}
        columns={columns}
        pagination={false}
      />
    </Modal>
  );
};

export default ViewPackage;
