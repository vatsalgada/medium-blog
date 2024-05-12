import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors'

// Create the main Hono app
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
	Variables : {
		userId: string
	}
}>();

// app.post("/", async (c) => {
//   try {
//     console.log("simple route"); // Simple log to confirm it runs
//     return c.text("This is a simple route");
//   } catch (error) {
//     console.error("Error in simple route:", error); // Log any error
//     c.status(500);
//     return c.json({ error: "Internal Server Error traah" });
//   }
// });


app.use('/*', cors())

app.get('/', async (c) => {
  return c.text("Hello world, this is Vatsal. This app is the backend for a medium blog. To know more about the app take a look at my github profile: https://github.com/vatsalgada")
})


app.route('/api/v1/user/', userRouter)
app.route('/api/v1/blog/', blogRouter)

export default app;