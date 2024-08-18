'use client';

import React from 'react';
import { Modal } from 'antd';

export const ConfirmModal = ({
    open,
    handleOk,
    handleCancel,
    message,
}: {
    open: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    message: string;
}) => {
    return (
        <>
            <Modal
                title="Xác nhận"
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div style={{ marginTop: '50px' }}>{message}</div>
            </Modal>
        </>
    );
};
