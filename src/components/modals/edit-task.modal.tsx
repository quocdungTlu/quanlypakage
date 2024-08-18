'use client';

import React, { useEffect, useState } from 'react';
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
import { createTask, editTask } from '@/services';
import dayjs from 'dayjs';

type FieldType = {
    name: string;
    description: string;
    worktime: dayjs.Dayjs;
    remainingtime: number;
};

export const EditTaskModal = ({
    open,
    handleOk,
    handleCancel,
    data,
}: {
    open: boolean;
    data: any;
    handleOk: () => void;
    handleCancel: () => void;
}) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        form.setFieldsValue({
            worktime: dayjs(data.worktime),
            name: data.name,
            description: data.description,
            remainingtime: data.remainingtime,
        });
    }, [data]);
    const onFinish: FormProps<FieldType>['onFinish'] = async values => {
        setLoading(true);
        await editTask(data?.id, {
            ...values,
            createdAt: new Date(),
            success: false,
        });
        setLoading(false);
        notification.success({ message: 'Cập nhật task thành công' });
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
                title="Sửa task"
                open={open}
                footer={<></>}
                onOk={handleOk}
                onCancel={() => {
                    handleCancel();
                }}
            >
                <div style={{ marginTop: '50px' }}>
                    <Form
                        name="basic"
                        form={form}
                        labelCol={{ span: 7 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600, marginTop: '100' }}
                        initialValues={{
                            ...data,
                        }}
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
                            <DatePicker
                                showTime
                                defaultValue={dayjs(data.worktime)}
                            />
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
                            <Button
                                loading={loading}
                                type="primary"
                                htmlType="submit"
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
};
