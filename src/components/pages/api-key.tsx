"use client";

import { useState } from "react";
import { Form, Input, Button, DatePicker, Radio, Typography } from "antd";
import dayjs from "dayjs";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const { TextArea } = Input;
const { Title } = Typography;

const ApiKey = () => {
  // State để lưu thông tin của API Key
  const [apiKey, setApiKey] = useState("");
  const [option, setOption] = useState("apiKey");
  // Hàm để xử lý sự kiện khi nhấn nút tạo API KEY
  const handleGenerateApiKey = () => {
    // Giả lập API Key, bạn có thể thay bằng logic để gọi API
    const newApiKey = "eyJ4NXQiOiJOekI4Tk...bHRvUmV";
    setApiKey(newApiKey);
  };

  const handleGenerateToken = () => {
    // Logic để tạo token có thể thay thế tùy nhu cầu
    console.log("Token Created!");
  };

  return (
    <div style={{ padding: "40px", paddingRight: "200px", marginTop: "100px" }}>
      <Form.Item>
        <Radio.Group
          value={option}
          onChange={(e) => {
            setOption(e.target.value);
          }}
        >
          <Radio value="apiKey">API KEY</Radio>
          <Radio value="token">TOKEN</Radio>
        </Radio.Group>
      </Form.Item>
      {option == "apiKey" && (
        <Form
          layout="horizontal"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          labelAlign="left"
          initialValues={{
            expiryTime: dayjs(),
            domain: "hilo.vn",
            ip: "192.168.1.1",
          }}
        >
          {/* Radio Button: API KEY hoặc TOKEN */}

          {/* Expiry Time - Date Picker */}
          <Form.Item
            label="Expiry time"
            name="expiryTime"
            rules={[{ required: true, message: "Please select expiry time!" }]}
          >
            <DatePicker
              showTime
              style={{ width: "100%" }}
              format="DD/MM/YYYY HH:mm:ss"
            />
          </Form.Item>

          {/* Domain Input */}
          <Form.Item
            label="Domain"
            name="domain"
            rules={[{ required: true, message: "Please enter the domain!" }]}
          >
            <Input placeholder="hilo.vn" />
          </Form.Item>

          {/* IP Address Input */}
          <Form.Item
            label="IP"
            name="ip"
            rules={[
              { required: true, message: "Please enter the IP address!" },
            ]}
          >
            <Input placeholder="192.168.1.1" />
          </Form.Item>

          {/* Button to generate API KEY */}
          <Form.Item className="flex justify-center">
            <Button type="primary" onClick={handleGenerateApiKey}>
              TẠO API KEY
            </Button>
          </Form.Item>

          {/* Display API Key */}
          <Form.Item label="API KEY:">
            <TextArea
              value={apiKey}
              rows={5}
              readOnly
              style={{ backgroundColor: "#f5f5f5", resize: "none" }}
            />
          </Form.Item>
        </Form>
      )}

      {option == "token" && (
        <Form
          layout="horizontal"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          labelAlign="left"
        >
          {/* Consumer Key Input */}
          <Form.Item
            label="Consumer Key *"
            name="consumerKey"
            rules={[
              { required: true, message: "Please enter the Consumer Key!" },
            ]}
          >
            <Input placeholder="Consumer Key" />
          </Form.Item>

          {/* Consumer Secret Input with toggle visibility */}
          <Form.Item
            label="Consumer Secret *"
            name="consumerSecret"
            rules={[
              { required: true, message: "Please enter the Consumer Secret!" },
            ]}
          >
            <Input.Password
              placeholder="Consumer Secret"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          {/* Button to generate TOKEN */}
          <Form.Item className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleGenerateToken}
            >
              TẠO TOKEN
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default ApiKey;
