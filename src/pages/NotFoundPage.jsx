import PageTransition from "../components/layout/PageTransition";
import Button from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <PageTransition className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-[color:var(--accent-strong)]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-5xl">
          This page does not exist.
        </h1>
        <p className="mt-5 text-base leading-7 text-[color:var(--text-secondary)]">
          The route may have changed, or the link may not be valid anymore.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/">Go home</Button>
          <Button to="/projects" variant="secondary">
            Browse projects
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
