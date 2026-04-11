import Button from "./Button";

function ProjectCard({ title, tags, codeUrl, demoUrl, demoLabel }) {
  return (
    <article className="group relative w-full rounded-xl border border-slate-700/70 bg-slate-900/85 p-4 h-[160px] flex flex-col justify-between shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-lg">
      <div className="pt-2">
        <h3 className="text-lg font-bold leading-tight text-white tracking-wide uppercase">
          {title}
        </h3>
        <p className="mt-2 text-xs text-secondary/80">{tags}</p>
      </div>

      <div className="flex gap-2 pt-3 opacity-95 transition-opacity duration-300 group-hover:opacity-100">
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">
              {demoLabel ?? (codeUrl ? "Demo" : "Site")}
            </Button>
          </a>
        )}
        {codeUrl && (
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Code</Button>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
