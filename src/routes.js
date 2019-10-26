/* aqui vamos importar o Router e não o express inteiro, pois é uma forma de
separar a parte de roteamento do express em outro arquivo */
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello Hello' }));

export default routes;
