export default {
  mockResponse: () => {
    const res = {
      status: {},
      json: {}
    };
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    return res;
  }
}