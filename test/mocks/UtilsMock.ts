export default {
  mockResponse: (json: any) => {
    const res = {
      status: {},
      json: {}
    };
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(json);

    return res;
  }
}