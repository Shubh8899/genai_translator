import { Bootstrap } from './core/bootstrap';

async function bootstrap() {
  const bootstrap = new Bootstrap();
  await bootstrap.initApp();
  bootstrap.enableCors();
  bootstrap.setupMiddleware();
  bootstrap.setupGlobalPipe();
  bootstrap.setupSwagger();
  await bootstrap.startApp();
}
bootstrap()
  .then(() => console.log('Application started!!!'))
  .catch((error) => console.error(error));
