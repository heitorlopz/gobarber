import Queue from './lib/Queue';

// foi criado esse arquivo pois a fila nao vai rodar no mesmo core da aplicação para nao influenciar nela
Queue.processQueue();
