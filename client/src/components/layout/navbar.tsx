import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useAuth } from "@/hooks/use-auth";

export default function Navbar() {
  const { user, logoutMutation } = useAuth();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 mx-auto items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <Button variant="link" className="font-bold text-xl">
                  TechCo
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/team">
                <Button variant="link">Our Team</Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <Button variant="link">Contact</Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/blog">
                <Button variant="link">Blog</Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Button
                variant="ghost"
                onClick={() => logoutMutation.mutate()}
              >
                Logout
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
