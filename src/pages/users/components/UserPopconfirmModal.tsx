import React from 'react'
import { Popconfirm, message } from 'antd';



export const UserPopconfirmModal = (props) => {

    const cancelDelte = (e) => {
        console.log(e);
        message.error('Click on No');
    }

    return (
        <React.Fragment>
            <Popconfirm
                title="Are you sure to delete this record?"
                onConfirm={props.onConfirm}
                onCancel={cancelDelte}
                okText="Yes"
                cancelText="No"
            >
                {props.alink}
            </Popconfirm>
        </React.Fragment>
    );
};
