/* aqui vamos importar o Router e não o express inteiro, pois é uma forma de
separar a parte de roteamento do express em outro arquivo */
import { Router } from 'express';
import userController from './app/controllers/UserController';
import User from './app/models/User';

const routes = new Router();

routes.post('/users', userController.store);

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
