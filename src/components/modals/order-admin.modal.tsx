import { Modal, Space, Button, Col, Row } from "antd";
import { Switch, Typography } from "antd";

import React from "react";
const Text = Typography.Text;
const OrderAdminModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const orderDetails = {
    username: "QuocNam",
    packageName: "Gói nâng cao",
    version: "Ứng dụng",
    activity: "Mua thêm",
    paymentMethod: "Tiền mặt",
    orderTime: "23/01/2023 | 15:00:00",
  };
  return (
    <Modal
      title="XỬ LÝ ĐẶT HÀNG"
      open={open}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <div
        style={{ marginBottom: "16px", marginTop: "60px", marginLeft: "30px" }}
      >
        <Row>
          <Col span={12}>
            {" "}
            <div style={{ marginBottom: "12px" }}>
              <Text strong>Tên đăng nhập: </Text> {orderDetails.username}
            </div>
          </Col>
          <Col span={12}>
            {" "}
            <div style={{ marginBottom: "12px" }}>
              <Text strong>Tên package: </Text> {orderDetails.packageName}
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            {" "}
            <div style={{ marginBottom: "12px" }}>
              <Text strong>Phiên bản: </Text> {orderDetails.version}
            </div>
          </Col>
          <Col span={12}>
            <div style={{ marginBottom: "12px" }}>
              <Text strong>Hình thức thanh toán: </Text>{" "}
              {orderDetails.paymentMethod}
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            {" "}
            <div style={{ marginBottom: "12px" }}>
              <Text strong>Hoạt động: </Text> {orderDetails.activity}
            </div>
          </Col>
          <Col span={12}>
            {" "}
            <div style={{ marginBottom: "12px" }}>
              <Text strong>Thời gian đặt hàng: </Text> {orderDetails.orderTime}
            </div>
          </Col>
        </Row>
      </div>

      {/* Các nút hành động */}
      <div className="flex justify-end">
        {" "}
        <Space size="middle" style={{ marginTop: "24px" }}>
          <Button type="primary" onClick={onClose}>
            Phê duyệt
          </Button>
          <Button type="primary" danger onClick={onClose}>
            Từ chối
          </Button>
          <Button onClick={onClose}>Hủy</Button>
        </Space>
      </div>
    </Modal>
  );
};

export default OrderAdminModal;
