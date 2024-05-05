import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
	Variables : {
		userId: string
	}
    
}>();


// middleware
blogRouter.use('/*', async (c, next) => {
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

blogRouter.post("/", async(c) => {
      try {
        const userId = c.get('userId');
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate());
        const body = await c.req.json();
                const post = prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
    
            }
          })

          return c.json({message: "post created succesfully", postId: (await post).id})
      } catch (error) {
        return c.json({error: "error while creating the post"})
      }
      

})

blogRouter.post("/update", async (c) => {
      try {
        const userId = c.get('userId');
        const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
        const body = await c.req.json();
        const postId =  await  body.postId
            const updatedPost = await prisma.post.update({
                where: {
                    id: postId,
                    authorId: userId
                }, 
                data: {
                    title: body.title,
                    content: body.content
                }
            }
            )

            return c.json({message: "Post succesfully updated", postId: postId})
      }catch{
        return c.json({error: "error while updating the post"})
      }
})

blogRouter.get('/:id', async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.post.findUnique({
		where: {
			id
		}
	});

	return c.json(post);
})

blogRouter.get('/', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL	,
        }).$extends(withAccelerate());
    
        const allPost = await prisma.post.findMany(
            {
                select: {
                    title: true, 
                    content: true,
                    id: true
                }
            }
        )

    return c.json(allPost)
    } catch (error) {
        return c.json({
            error: "error while fetching all posts"
        })
    }
   
})