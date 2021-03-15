import * as express from 'express';
import { helloWorldEndpoint, helloWorldEndpoint2 } from './test-endpoint';

const app = express();

app.get('/test', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send(helloWorldEndpoint());
});

app.listen(3001, () => console.log('Started'));