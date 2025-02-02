import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { db } from "@db";
import { blogPosts } from "@db/schema";
import { eq } from "drizzle-orm";

export function registerRoutes(app: Express): Server {
  setupAuth(app);

  // Health check route to verify database connection
  app.get("/api/health", async (req, res) => {
    try {
      // Simple query to test database connection
      await db.select().from(blogPosts).limit(1);
      res.json({ status: "healthy", database: "connected" });
    } catch (error) {
      console.error("Database connection error:", error);
      res.status(500).json({ status: "error", message: "Database connection failed" });
    }
  });

  // Blog routes
  app.get("/api/blog", async (req, res) => {
    const posts = await db.query.blogPosts.findMany({
      with: {
        author: true,
      },
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
    res.json(posts);
  });

  app.post("/api/blog", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.sendStatus(403);
    }

    const post = await db
      .insert(blogPosts)
      .values({
        ...req.body,
        authorId: req.user.id,
      })
      .returning();

    res.status(201).json(post[0]);
  });

  const httpServer = createServer(app);
  return httpServer;
}