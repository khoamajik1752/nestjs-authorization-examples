/*
  This is theModule Augmentation of the Declare Merging feature in TS
  Please read the docs at "https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation"
  Basically we want to have type inference on role property of  request.headers of Request type from Express module 
  */
declare module 'express' {
  interface Request {
    headers: {
      role: string;
    };
  }
}
