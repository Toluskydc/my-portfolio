import { useLayoutEffect } from "react";
import { useParams, Link, Navigate } from "react-router";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/components/sections/caseStudyData";
import ShaderBackground from "@/components/ShaderBackground";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ShaderBackground />

      <main className="relative z-10">
        {/* Back navigation */}
        <div className="px-6 sm:px-8 md:px-16 lg:px-24 pt-8 pb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground/60 hover:text-muted-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            back to portfolio
          </Link>
        </div>

        <article className="px-6 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={item} className="mb-12">
              <span className="font-mono text-xs text-primary/70 tracking-wide">
                {project.id}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground mt-2 leading-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground/80 mt-3 leading-relaxed">
                {project.subtitle}
              </p>
              <div className="flex items-center gap-3 mt-5">
                {project.github && (
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground/60 hover:text-foreground transition-colors border border-border/40 rounded-lg px-3 py-1.5 hover:border-border/60"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground/60 hover:text-foreground transition-colors border border-border/40 rounded-lg px-3 py-1.5 hover:border-border/60"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live
                  </a>
                )}
              </div>
            </motion.div>

            {/* Role */}
            <motion.div variants={item} className="mb-10">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/40 block mb-2">
                Role
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.role}
              </p>
            </motion.div>

            {/* Outcomes */}
            <motion.div variants={item} className="mb-10">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/40 block mb-3">
                Outcomes
              </span>
              <div className="grid grid-cols-3 gap-4 py-5 px-5 rounded-xl border border-border/40 bg-card/30">
                {project.outcomes.map((o, i) => (
                  <div key={i}>
                    <div className="text-lg sm:text-xl font-semibold text-foreground font-mono tabular-nums">
                      {o.value}
                    </div>
                    <div className="text-xs text-muted-foreground/60 mt-1">
                      {o.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stack */}
            <motion.div variants={item} className="mb-10">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/40 block mb-3">
                Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-xs font-mono rounded-md bg-secondary/60 text-secondary-foreground/80 border border-border/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Architecture */}
            <motion.div variants={item} className="mb-10">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/40 block mb-3">
                Architecture
              </span>
              <div className="font-mono text-xs leading-relaxed text-muted-foreground/70 bg-card/40 border border-border/30 rounded-xl p-5 overflow-x-auto">
                {project.architecture}
              </div>
            </motion.div>

            {/* Problem */}
            <motion.div variants={item} className="mb-10">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/40 block mb-3">
                Problem
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            {/* Key Decisions */}
            <motion.div variants={item} className="mb-10">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/40 block mb-3">
                Key Technical Decisions
              </span>
              <ul className="space-y-3">
                {project.decisions.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground/80 leading-relaxed"
                  >
                    <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-primary/50" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Deep Dive */}
            <motion.div variants={item} className="mb-10">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/40 block mb-4">
                Deep Dive
              </span>
              <div className="space-y-5">
                {project.deepDive.map((para, i) => (
                  <p
                    key={i}
                    className="text-sm text-muted-foreground/80 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Bottom nav */}
            <motion.div variants={item} className="pt-10 border-t border-border/30">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                back to portfolio
              </Link>
            </motion.div>
          </motion.div>
        </article>
      </main>
    </div>
  );
}
