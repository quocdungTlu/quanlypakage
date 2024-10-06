"use client";

import { useState } from "react";
import { Form, Select, Button, Input, Typography } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;

const ApiKey = () => {
  const [form] = Form.useForm();
  const [apiData, setApiData] = useState<any>(null);
  const [selectedUser, setSelectedUser] = useState("");

  // Dữ liệu giả lập cho tên người dùng và API Key
  const userOptions = [
    {
      value: "user1",
      label: "QUOCDUNG",
      apiData: {
        expiryTime: "23/02/2023 | 15:20:00",
        domain: "hilo.vn",
        ip: "192.168.1.1",
        apiKey: "eyJ4NXQiOiJOekI4Tk...bHRvUmV",
      },
    },
    {
      value: "user2",
      label: "PHUONGNAM",
      apiData: {
        expiryTime: "24/02/2023 | 12:30:00",
        domain: "example.com",
        ip: "192.168.1.2",
        apiKey: "ey123NXQiOiJOekI4Tk...bHRvUmV",
      },
    },
  ];

  // Hàm xử lý khi nhấn nút "Xem"
  const handleView = () => {
    if (selectedUser) {
      const user: any = userOptions.find((user) => user.value === selectedUser);
      console.log(user);
      setApiData(user.apiData);
    }
  };

  // Hàm xử lý khi nhấn nút "Thu hồi"
  const handleRevoke = () => {
    console.log("Thu hồi API Key:", apiData);
    // Thêm logic thu hồi API key tại đây
  };

  return (
    <div style={{ padding: "0 80px", margin: "100px auto" }}>
      <div className="flex justify-center gap-8 items-center mb-6">
        <div>Tên đăng nhập</div>
        <Select
          onChange={(e) => {
            setSelectedUser(e);
          }}
          style={{ width: "300px" }}
          placeholder="Chọn người dùng"
        >
          {userOptions.map((user) => (
            <Option key={user.value} value={user.value}>
              {user.label}
            </Option>
          ))}
        </Select>
      </div>
      <Form
        form={form}
        layout="horizontal"
        labelAlign="left"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        {/* Tên đăng nhập */}

        {/* Nút "Xem" */}
        <Form.Item className="flex justify-center">
          <Button type="primary" onClick={handleView}>
            Xem
          </Button>
        </Form.Item>

        {apiData && (
          <div>
            {/* Expiry Time */}
            <Form.Item label="Expiry time">
              <Input value={apiData.expiryTime} readOnly />
            </Form.Item>

            {/* Domain */}
            <Form.Item label="Domain">
              <Input value={apiData.domain} readOnly />
            </Form.Item>

            {/* IP */}
            <Form.Item label="IP">
              <Input value={apiData.ip} readOnly />
            </Form.Item>

            {/* API Key */}
            <Form.Item label="API Key">
              <TextArea value={apiData.apiKey} readOnly rows={5} />
            </Form.Item>

            <Form.Item label="Consumer Key:">
              <Input value={"Ul2KRe2_Z5BqxvfmB_NQ6opq9Boa"} readOnly />
            </Form.Item>

            <Form.Item label="Consumer Secret:">
              <Input.Password
                value={"***************************"}
                readOnly
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            {/* Nút "Thu hồi" */}
            <Form.Item className="flex justify-center">
              <Button type="primary" className="mt-28" onClick={handleRevoke}>
                Thu hồi
              </Button>
            </Form.Item>
          </div>
        )}
      </Form>
    </div>
  );
};

export default ApiKey;
