export const Delay = (n: number) => {
  // eslint-disable-next-line func-names
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
};
