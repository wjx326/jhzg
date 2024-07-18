const inputNum = (value) => {
    if (value == undefined) return;
    return value.replace(/[^\d]/g, '')
  };

  export default inputNum;