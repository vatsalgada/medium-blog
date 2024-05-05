import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
	Variables : {
		userId: string
	}
    
}>();


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
        const postId =  body.postId
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

            return c.json({message: "Post succesfully updated"})
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