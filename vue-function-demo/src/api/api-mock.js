export default item => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        backShow: true,
        item
      });
    }, Math.random() * 100);
  });
};
