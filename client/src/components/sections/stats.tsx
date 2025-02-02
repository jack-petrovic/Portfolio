import { Card, CardContent } from "@/components/ui/card";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

const stats = [
  { label: "Projects Completed", value: 150 },
  { label: "Happy Clients", value: 80 },
  { label: "Team Members", value: 25 },
  { label: "Awards Won", value: 15 },
];

export default function Stats() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-transparent border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">
                    <Counter from={0} to={stat.value} />+
                  </div>
                  <p className="text-primary-foreground/80">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
