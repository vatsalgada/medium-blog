import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt'
import { signupInput  } from "@vatsalgada/medium-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
	Variables : {
		userId: string
	}
}>();

// middleware
// userRouter.use('/', async (c, next) => {
//     try {
//       const jwt = c.req.header('Authorization');
//       if (!jwt) {
//           c.status(401);
//           return c.json({ error: "unauthorized" });
//       }
//       const token = jwt.split(' ')[1];
//       const payload = await verify(token, c.env.JWT_SECRET);
//       if (!payload) {
//           c.status(401);  
//           return c.json({ error: "unauthorized" });
//           await next();
//       }
//       c.set('userId', payload.id);
//     console.log(payload.id)
//       await next()
//     } catch (error) {
//       console.log("error in middleware")
//       await next()
//     }
      
//   })




userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);

    if(!success){
        console.log("411 should be the code")
        c.status(411);
        return c.json({message: "Incorrect inputs"})
    }
    else{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
   
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
  
    const token = await sign({ id: user.id }, c.env.JWT_SECRET)
  
    return c.json({
      jwt: token
    })

}
})
  
userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
    //@ts-ignore
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
    password: body.password
        }
    });

    if (!user) {
        c.status(403);
        return c.json({ error: "user not found" });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
})


userRouter.get("/", async (c) => {
    console.log("works")
    return c.text("example route")
})