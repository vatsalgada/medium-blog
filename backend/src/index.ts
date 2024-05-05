import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

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



// middleware
app.use('/api/v1/blog/*', async (c, next) => {
  try {
    const jwt = c.req.header('Authorization');
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	const token = jwt.split(' ')[1];
	const payload = await verify(token, c.env.JWT_SECRET);
	if (!payload) {
		c.status(401);  
		return c.json({ error: "unauthorized" });
	}
	c.set('userId', payload.id);
  console.log(payload.id)
	await next()
  } catch (error) {
    console.log("error in middleware")
  }
	
})


app.route('/api/v1/user/', userRouter)
app.route('/api/v1/blog/', blogRouter)

export default app;