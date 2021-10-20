import request from 'umi-request';

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
          return response;
      })
      .catch(function(error) {
        console.log('error', error);
      });
};
