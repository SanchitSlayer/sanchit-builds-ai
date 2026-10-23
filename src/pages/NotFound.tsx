import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-start justify-center pt-16">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page does not exist.</h1>
      <p className="mt-3 text-muted">The link may be old. Everything is on the home page.</p>
      <Button className="mt-8" href="/">
        Back to home
      </Button>
    </Container>
  );
}
