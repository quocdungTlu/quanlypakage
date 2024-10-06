"use client";

import { Button, Checkbox, Divider, Form, FormProps, Input } from "antd";
import React from "react";

const Login = () => {
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="pt-[43px]">
      <div className="bg-white pt-[76px] w-[801px] ml-[253px]">
        <div className="text-center text-xl font-semibold mb-14">
          {" "}
          Đăng nhập
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, marginLeft: "102px" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Tên đăng nhập"
            name="username"
            labelAlign="left"
            rules={[{ required: true, message: "Vui lòng nhập đủ thông tin!" }]}
          >
            <Input style={{ height: 35 }} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Mật khẩu"
            labelAlign="left"
            name="password"
            style={{ marginTop: "40px" }}
            className="mt-10"
            rules={[{ required: true, message: "Vui lòng nhập đủ thông tin!" }]}
          >
            <Input.Password style={{ height: 35 }} />
          </Form.Item>

          <div className="flex justify-end pb-10 mt-10">
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
