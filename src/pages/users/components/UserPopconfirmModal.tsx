import React from 'react'
import { Popconfirm, message } from 'antd';
import { Dispatch } from 'umi';



export const UserPopconfirmModal = (props) => {

    const cancelDelte = (e) => {
        console.log("props is ",props);
        message.error('Click on No');
    }

    const confirmDelete = () => {
        const id = props.record.id;
        console.log("yes is ", props.record);
        message.success('Click on Yes');
        props.dispatch({
            type: 'users/delete',
            paylaod: {
                id
            }
        })

    }

    return (
        <React.Fragment>
            <Popconfirm
                title="Are you sure to delete this record?"
                onConfirm={confirmDelete}
                onCancel={cancelDelte}
                okText="Yes"
                cancelText="No"
            >
                {props.alink}
            </Popconfirm>
        </React.Fragment>
    );
};
