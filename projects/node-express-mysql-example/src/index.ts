import express from 'express';
import routes from './routes';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = 3000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'People API Documentation',
      version: '1.0.0',
    },
  },
  apis: ['docs/swagger.yml'],
};

const specs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
