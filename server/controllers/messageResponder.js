const responder = (res, code, status, key, message) => {
  res.status(code).json({
    status,
    key,
    message,
  });
};

export default responder;
