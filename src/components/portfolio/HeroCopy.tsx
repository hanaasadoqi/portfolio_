export function HeroCopy() {
  return (
    <div className="space-y-6">
      {/* Greeting: small, secondary */}
      <p className="text-sm font-medium text-muted-foreground sm:text-base">
        Hi, I&apos;m Hanaa 👋
      </p>

      {/* Career timeline: smaller, tertiary level */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground sm:text-base">
        <span>Former mechanical engineer</span>
        <span className="opacity-50">•</span>
        <span>Current software engineer</span>
        <span className="opacity-50">•</span>
        <span>Future dystopian novelist</span>
      </div>

      {/* Philosophy: secondary level, emphasis */}
      <p className="text-base font-medium text-muted-foreground sm:text-lg">
        Mostly, I&apos;m just someone who likes figuring out how things fit together.
      </p>

      {/* Main headline: large, primary */}
      <h1
        id="hero-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.2] tracking-tight text-foreground"
      >
        I build software, ask too many questions, and occasionally turn the answers into products.
      </h1>
    </div>
  )
}
