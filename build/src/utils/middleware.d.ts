import { Request, Response, NextFunction } from 'express';
declare const logRequest: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response, next: NextFunction) => void;
declare const unknownEndpoint: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => void;
export { logRequest, unknownEndpoint };
