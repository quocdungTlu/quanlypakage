import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Modal, Form, Radio, Space, Select, Button, Input } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";

const CreatePackage = ({
  onClose,
  open,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const handleOk = () => {
    form.resetFields();

    onClose();
  };
  const [form] = Form.useForm();
  return (
    <Modal
      title="TẠO MỚI PACKAGE"
      onClose={onClose}
      open={open}
      footer={null} // Tùy chỉnh footer cho phù hợp
      width={700}
    >
      <div className="mt-10">
        <Form
          form={form}
          initialValues={{
            apis: [
              {
                apiName: "API tích hợp với hệ thống quản lý nhân sự",
                policy: "Vàng",
              },
            ],
          }}
          layout="horizontal"
          onFinish={handleOk}
        >
          {/* Tên package */}
          <Form.Item
            label="Tên package *"
            name="packageName"
            rules={[{ required: true, message: "Vui lòng nhập tên package!" }]}
          >
            <Input placeholder="Gói nâng cao" />
          </Form.Item>

          {/* Phiên bản */}
          <Form.Item
            label="Phiên bản *"
            name="version"
            rules={[{ required: true, message: "Vui lòng chọn phiên bản!" }]}
          >
            <Radio.Group>
              <Radio value="Thử nghiệm">Thử nghiệm</Radio>
              <Radio value="Ứng dụng">Ứng dụng</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Tên API và Policy */}
          <Form.List name="apis">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      label="Tên API"
                      name={[name, "apiName"]}
                      rules={[
                        { required: true, message: "Vui lòng chọn tên API!" },
                      ]}
                    >
                      <Select style={{ width: "350px" }}>
                        <Option value="API tích hợp với hệ thống quản lý nhân sự">
                          API tích hợp với hệ thống quản lý nhân sự
                        </Option>
                        <Option value="API tích hợp quản lý bán hàng">
                          API tích hợp quản lý bán hàng
                        </Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Policy"
                      {...restField}
                      name={[name, "policy"]}
                      rules={[
                        { required: true, message: "Vui lòng chọn policy!" },
                      ]}
                    >
                      <Select style={{ width: "100px" }} placeholder="Policy">
                        <Option value="Vàng">Vàng</Option>
                        <Option value="Bạc">Bạc</Option>
                        <Option value="Đồng">Đồng</Option>
                      </Select>
                    </Form.Item>
                    <PlusCircleOutlined
                      style={{ color: "blue" }}
                      onClick={() => add()}
                    />
                    {fields.length > 1 && (
                      <MinusCircleOutlined
                        style={{ color: "red" }}
                        onClick={() => remove(name)}
                      />
                    )}
                  </Space>
                ))}
              </>
            )}
          </Form.List>

          {/* Nút Hủy và Lưu */}
          <Form.Item style={{ textAlign: "right" }}>
            <Button
              onClick={() => {
                onClose();
                form.resetFields();
              }}
              style={{ marginRight: 8 }}
            >
              Hủy
            </Button>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default CreatePackage;
