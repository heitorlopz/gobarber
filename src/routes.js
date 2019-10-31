/* aqui vamos importar o Router e não o express inteiro, pois é uma forma de
separar a parte de roteamento do express em outro arquivo */
import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// como o authmiddleware ta sendo definido depois das rotas post, ele so vai valer para as seguintes <-> middleware global
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

// toda operação que fazemos no banco de dados é assincrona, ou seja, não acontece em tempo real, então precisamos utilizar o async/await
/*  routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Heitor',
    email: 'fheitorlopes@gmail.com',
    password_hash: '232321321',
  });
  return res.json(user);
}); */

export default routes;
