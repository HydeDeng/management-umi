import request from 'umi-request';
import { message } from 'antd';


export const getRemoteList = async params => {
    return request('http://public-api-v1.aspirantzhang.com/users', {
        method: 'get',
        // params: { id: 1 },
      })
        .then(function(response) {
            console.log('response', response.data);
            return response;
        })
        .catch(function(error) {
          console.log('error', error);
        });
};

export const updateRemoteData = async ({values, id}) => {
  return request(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
      method: 'put',
      data: values
      
    })
      .then(function(response) {
          console.log('response', response.data);
          message.success("Edit successfully")
          return response;
      })
      .catch(function(error) {
        console.log('error', error);
        message.error("Edit failed")
      });
};

export const deleteRemoteData = async ({id}) => {
  return request(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
      method: 'delete'      
    })
      .then(function(response) {
          console.log('response', response.data);
          message.success("Delete successfully")
          return response;
      })
      .catch(function(error) {
        console.log('error', error);
        message.error("Delete failed")

      });
};

export const addRemoteData = async ({values}) => {
  return request(`http://public-api-v1.aspirantzhang.com/users`, {
      method: 'post',
      data: values
      
    })
      .then(function(response) {
          console.log('response', response.data);
          message.success("Add successfully")
          return response;
      })
      .catch(function(error) {
        console.log('error', error);
        message.error("Add failed")
      });
};
