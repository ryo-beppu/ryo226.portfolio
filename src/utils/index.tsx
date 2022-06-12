export const Delay = (n: number) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
};
