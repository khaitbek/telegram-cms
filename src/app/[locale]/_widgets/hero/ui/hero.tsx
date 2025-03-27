import { Button } from "@/shared/ui/button";

export function Hero() {
  return (
    <div className="bg-background py-20 md:py-32 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span
              className="text-primary block mb-2"
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ delay: 0.2, duration: 0.8 }}
            >
              Simplify Your Workflow
            </span>
            <span
              className="text-foreground"
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ delay: 0.4, duration: 0.8 }}
            >
              with StreamLine
            </span>
          </h1>
          <p
            className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ delay: 0.6, duration: 0.8 }}
          >
            Boost productivity and streamline your business processes with our
            powerful SaaS platform. Designed for teams of all sizes.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button size="lg" className="w-full sm:w-auto">
              Get started
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
