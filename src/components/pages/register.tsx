"use client";

import { Button, Checkbox, Divider, Form, FormProps, Input } from "antd";
import React from "react";

const Register = () => {
  type FieldType = {
    middleName?: string;
    name: string;
    username?: string;
    password?: string;
    email?: string;
    phoneNumber?: string;
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
          Đăng ký tài khoản{" "}
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, marginLeft: "102px" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Họ"
            name="middleName"
            labelAlign="left"
            rules={[{ required: true, message: "Vui lòng nhập đủ thông tin!" }]}
          >
            <Input style={{ height: 35 }} />
          </Form.Item>
          <Form.Item<FieldType>
            label="Tên"
            name="name"
            labelAlign="left"
            rules={[{ required: true, message: "Vui lòng nhập đủ thông tin!" }]}
          >
            <Input style={{ height: 35 }} />
          </Form.Item>
          <Form.Item<FieldType>
            label="Tên đăng nhập"
            name="username"
            labelAlign="left"
            rules={[
              {
                required: true,
                message:
                  "Vui lòng nhập đúng định dạng: Viết liền không  dấu, tối đa 25 ký tự.",
                max: 25,
              },
            ]}
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
          <Form.Item<FieldType>
            label="Email"
            name="email"
            labelAlign="left"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập đúng định dạng!",
                type: "email",
              },
            ]}
          >
            <Input style={{ height: 35 }} />
          </Form.Item>
          <Form.Item<FieldType>
            label="Số điện thoại"
            name="phoneNumber"
            labelAlign="left"
            rules={[{ required: true, message: "Vui lòng nhập đủ thông tin!" }]}
          >
            <Input style={{ height: 35 }} />
          </Form.Item>
          <div className="flex justify-center gap-4 pb-10 mt-10">
            <Button type="default">Quay lại </Button>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
