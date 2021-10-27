import React, { useEffect } from 'react';
import { Modal, Button, Form, Input, } from 'antd';
import { useStore } from 'react-redux';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 17 },
};

export const UserModal = (props) => {
    // console.log(`props.record`, props.record)
    const { onFinish } = props
    const [form] = Form.useForm();
    //这里用异步的方式更新表单数据，防止页面报错，因为数据是在生命周期的componentDidmount里面更新
    //下面的函数的意思是，一旦数组里面的值发生改变props.visible， 那就执行第一个函数
    useEffect(() => {
        console.log(`userEffect props.record `, props.record)
        if (props.record) {
            form.setFieldsValue(props.record);
        } else {
            form.resetFields()
        }
    }, [props.visible]);

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onOK = () => {
        form.submit()
    }


    return (
        <React.Fragment>
            <Modal
                title="RNG modal"
                visible={props.visible}
                onOk={onOK}
                onCancel={props.handleCancel}
                forceRender
            >
                <div>
                    {/* {JSON.stringify(props.record)} */}
                    <Form {...layout} form={form} name="rng" onFinish={onFinish} onFinishFailed={onFinishFailed} >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'pls input your name' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Create Time"
                            name="create_time">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Status"
                            name="status">
                            <Input />
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </React.Fragment>
    );
};

