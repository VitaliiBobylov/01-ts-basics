const getMessage = (): Promise<string> => {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve("Hello from TS"), 5000);
  });
};

getMessage().then((result) => console.log(result));
