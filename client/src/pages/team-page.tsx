import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const team = [
  {
    name: "Jack Petrovic",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
  },
  {
    name: "Tomson Ewan",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
  },
  {
    name: "Austin Ryder",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-[calc(100vh-3.5rem)] py-24">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-muted-foreground">
            We're a diverse group of passionate individuals working together to create amazing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <Card key={member.name} className="text-center">
              <CardHeader>
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Workspace</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174"
              alt="Office space"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
              alt="Meeting room"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
