const inputNumPoint = (value) => {
    if (value == undefined) return;
    return value
      .replace(/[^\d.]/g, "")
      .replace(/\.{2,}/g, ".")
      .replace(".", "$#$")
      .replace(/\./g, "")
      .replace("$#$", ".")
      .replace(/^\./g, "");
  };

  export default inputNumPoint;