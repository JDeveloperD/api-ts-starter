import app from './app';
import config from './config';

app.listen(config.SERVER.PORT, () => {
  console.log(`[server]: Server is running at http${config.SERVER.HTTPS_ACTIVE ? 's' : ''}://localhost:${config.SERVER.PORT}`);
});
