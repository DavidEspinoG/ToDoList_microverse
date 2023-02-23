const stringToBool = (string) => {
  if (string === 'true') {
    return true;
  } if (string === 'false') {
    return false;
  }
  return null;
};

export default stringToBool;