import { Response } from 'express';
export function response(
  status: number,
  message: String,
  data: Object,
  res: Response
): Response {
  return res.status(status).json({
    status,
    message,
    data,
  });
}
