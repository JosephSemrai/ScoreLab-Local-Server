// tslint:disable-next-line:no-any
const info = (...params: any[]) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(...params);
  }
};

// tslint:disable-next-line:no-any
const error = (...error: any[]) => {
  console.error(...error);
};

export { info, error };
