// export default () => {
//     return (<div> user pages hahaha！！！ </div>)
// }

import React, { useState } from 'react'
import { Table, Tag, Space, message } from 'antd';
import { connect, Dispatch } from 'umi';
import { UserModal } from '../users/components/UserModal'
import { UserPopconfirmModal } from './components/UserPopconfirmModal';


const index = ({ users, dispatch }) => {

    //传递进去一个初始值，返回来一个set之后的指，以及一个set的方法
    const [modalVisible, setModalVisible] = useState(false)
    const [record, setRecord] = useState(undefined)

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Create Time',
            dataIndex: 'create_time',
            key: 'create_time',
        },
        {
            title: 'Update Time',
            dataIndex: 'update_time',
            key: 'update_time',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={() => {
                        editModelHandle(record)
                    }}>Edit</a>
                    <UserPopconfirmModal onConfirm={confirmDelete} alink={deleteLink}></UserPopconfirmModal>
                </Space>
            ),
        },
    ];

    const editModelHandle = (record) => {
        setModalVisible(true)
        // console.log(`myrecord`, record)
        setRecord(record)
    };

    const updateDataToRemote = (values: any) => {
        console.log(`myUpdateRecord`, values);
        console.log(`record`, record.id)
        const id = record.id;
        dispatch({
            type: 'users/edit',
            paylaod: {
                id,
                values
            }
        })
    }

    const onFinish = (values: any) => {
        // console.log('Success:', values);
        updateDataToRemote(values)
    };

    const confirmDelete = (e) => {
        console.log(e);
        message.success('Click on Yes');
        
    }

    const deleteLink = <a onClick={() => {
        popconfirmModelHandle(record)
    }
    }>Delete</a>

    const popconfirmModelHandle = (record) => {
        console.log(`xxxrecord`, record)
    };

    return (
        <div className='list-table'>
            <Table columns={columns} dataSource={users.data} rowKey='id' />
            <UserModal handleCancel={() => setModalVisible(false)} visible={modalVisible} record={record} onFinish={onFinish}></UserModal>
        </div>
    );
};

const mapStateToProps = ({ users }) => {
    // console.log(`users`, users)
    return {
        users,
    };
}

export default connect(mapStateToProps)(index)
