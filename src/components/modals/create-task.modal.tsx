'use client';

import React, { useState } from 'react';
import {
    Button,
    Checkbox,
    DatePicker,
    Form,
    FormProps,
    Input,
    Modal,
    notification,
} from 'antd';
import { createTask } from '@/services';

type FieldType = {
    name: string;
    description: string;
    worktime: Date;
    remainingtime: number;
};

export const CreateTaskModal = ({
    open,
    handleOk,
    handleCancel,
}: {
    open: boolean;
    handleOk: () => void;
    handleCancel: () => void;
}) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish: FormProps<FieldType>['onFinish'] = async values => {
        setLoading(true)
        await createTask({ ...values, createdAt: new Date(), success: false });
        setLoading(false)

        notification.success({ message: 'Tạo task thành công' });
        form.resetFields()
        handleOk();
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] =
        errorInfo => {
            console.log('Failed:', errorInfo);
            notification.error({ message: 'Tạo task thất bại' });
        };
    return (
        <>
            <Modal
                title="Tạo task"
                open={open}
                footer={<></>}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div style={{ marginTop: '50px' }}>
                    <Form
                        name="basic"
                        form={form}
                        labelCol={{ span: 7 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600, marginTop: '100' }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="Tên task"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Tên không được trống',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Mô tả"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Mô tả không được trống',
                                },
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                        
                        <Form.Item<FieldType>
                            label="Thời gian bắt đầu"
                            name="worktime"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Thời gian bắt đầu không được trống',
                                },
                            ]}
                        >
                            <DatePicker showTime />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Thời gian làm"
                            name="remainingtime"
                            rules={[
                                {
                                    required: true,
                                    message: 'Thời gian làm không được trống',
                                },
                            ]}
                        >
                            <Input type="number" />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button loading={loading} type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
};
