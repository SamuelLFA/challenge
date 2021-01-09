export default {
  mockResponse: () => {
    const res = {
      status: {},
      json: {}
    };
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    return res;
  },

  httpMock: (data: any) => {
    const http = {
      get: {}
    }
    http.get = jest.fn().mockReturnValue(Promise.resolve(data));
  
    return http;
  }
}