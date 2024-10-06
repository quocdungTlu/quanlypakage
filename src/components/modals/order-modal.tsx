import { CheckCircleOutlined } from "@ant-design/icons";
import {
  Modal,
  Button,
  Radio,
  Table,
  InputNumber,
  Form,
  Input,
  Space,
} from "antd";
import { useState } from "react";

const OrderModal = ({
  visible,
  onClose,
  data,
}: {
  visible: boolean;
  data: any;
  onClose: () => void;
}) => {
  const [version, setVersion] = useState("ứng dụng");
  const [quantity, setQuantity] = useState(1);
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("chuyển khoản");

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    setStep(3);
  };
  const columns = [
    {
      title: "TÊN API",
      dataIndex: "name",
      key: "name",
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

  const dataSource = [
    {
      key: "1",
      name: "API tích hợp hệ thống quản lý nhân sự",
      url: ".console-api/certification/profile",
      description: "-",
      policy: "-",
    },
    {
      key: "2",
      name: "API tích hợp với hệ thống ký số",
      url: ".console-api/certification/profile/create",
      description: "-",
      policy: "-",
    },
    {
      key: "3",
      name: "Xem chi tiết profile",
      url: ".console-api/certification/profile/create",
      description: "-",
      policy: "-",
    },
  ];

  return (
    <Modal
      title="ĐĂNG KÝ MUA HÀNG"
      open={visible}
      onCancel={onClose}
      footer={[
        step == 1 && (
          <Space>
            {" "}
            <Button key="cancel" onClick={onClose}>
              Hủy
            </Button>
            ,
            <Button
              key="submit"
              onClick={() => {
                setStep(2);
              }}
              type="primary"
            >
              Đặt hàng
            </Button>
          </Space>
        ),
      ]}
      width={800}
    >
      {step == 1 && (
        <div>
          <div className="mb-6 flex gap-4">
            <h4>Phiên bản:</h4>
            <Radio.Group
              onChange={(e) => setVersion(e.target.value)}
              value={version}
            >
              <Radio value="thử nghiệm">Thử nghiệm</Radio>
              <Radio value="ứng dụng">Ứng dụng</Radio>
            </Radio.Group>
          </div>

          <div className="mb-6">
            <h4>Tính giá chi tiết</h4>
            <Table
              columns={[
                {
                  title: "Gói sản phẩm/Dịch vụ",
                  dataIndex: "service",
                  key: "service",
                },
                {
                  title: "Đơn vị tính",
                  dataIndex: "unit",
                  key: "unit",
                },
                {
                  title: "Số lượng",
                  dataIndex: "quantity",
                  key: "quantity",
                  render: () => (
                    <InputNumber
                      min={1}
                      max={100}
                      value={quantity}
                      onChange={(value) => setQuantity(Number(value))}
                    />
                  ),
                },
                {
                  title: "Đơn giá (VNĐ)",
                  dataIndex: "price",
                  key: "price",
                },
                {
                  title: "Thành tiền",
                  dataIndex: "total",
                  key: "total",
                  //   render: () => `${6_450_000 * quantity} VNĐ`,
                },
              ]}
              dataSource={[
                {
                  key: "1",
                  service: "Gói nâng cao",
                  unit: "Năm",
                  quantity: 1,
                  price: data?.price,
                  total: `${
                    Number(data?.price?.replaceAll(".", "")) || 0 * quantity
                  } VNĐ`,
                },
              ]}
              pagination={false}
            />
          </div>

          <div className="mb-6">
            <h4>Thông tin tài nguyên</h4>
            <p>
              Ngày hết hạn: <strong>25/02/2024</strong>
            </p>
          </div>

          <Table columns={columns} dataSource={dataSource} pagination={false} />
        </div>
      )}

      {step == 2 && (
        <Form
          name="orderForm"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            username: "QuocDung",
            phone: "0965801265",
            paymentMethod: "chuyển khoản",
          }}
        >
          <Form.Item label="Tên đăng nhập" name="username">
            <Input />
          </Form.Item>

          <Form.Item label="Số điện thoại" name="phone">
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Vui lòng nhập email!" }]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            style={{ marginTop: "16px" }}
            label="Phương thức thanh toán"
            name="paymentMethod"
          >
            <Radio.Group
              onChange={(e) => setPaymentMethod(e.target.value)}
              value={paymentMethod}
              className="mt-16"
            >
              <Radio value="tiền mặt">Tiền mặt</Radio>
              <Radio value="chuyển khoản">Chuyển khoản</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <div className="flex justify-end">
              {" "}
              <Button
                type="default"
                htmlType="button"
                onClick={() => console.log("Back clicked")}
              >
                Quay lại
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginLeft: "10px" }}
              >
                Thanh toán
              </Button>
            </div>
          </Form.Item>
        </Form>
      )}

      {step === 3 && (
        <div style={{ textAlign: "center" }}>
          <CheckCircleOutlined style={{ fontSize: "48px", color: "#5DB075" }} />
          <h2 style={{ marginTop: "20px" }}>
            ANH/CHỊ ĐÃ ĐĂNG KÝ GÓI {data.title} THÀNH CÔNG
          </h2>
          <Button
            type="primary"
            onClick={() => {
              onClose();
              setStep(1);
              setQuantity(1);
            }}
            style={{ marginTop: "20px" }}
          >
            Đóng
          </Button>
        </div>
      )}
    </Modal>
  );
};

export default OrderModal;
