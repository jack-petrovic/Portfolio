import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type SelectBlogPost } from "@db/schema";
import { format } from "date-fns";

interface BlogCardProps {
  post: SelectBlogPost & { author: { username: string } };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <div className="text-sm text-muted-foreground">
          by {post.author.username} on{" "}
          {format(new Date(post.createdAt), "MMM dd, yyyy")}
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">{post.content}</p>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-muted-foreground">
          {format(new Date(post.createdAt), "h:mm a")}
        </div>
      </CardFooter>
    </Card>
  );
}
