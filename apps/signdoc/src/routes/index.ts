import { Router } from 'express';
const router = Router();
import { response } from '@signdoc/server';

router.get('/', (req, res) => {
  response(200, 'Server is running', {}, res);
});

export default router;
