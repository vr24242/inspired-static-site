export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-mystery-accent/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-mystery-glow/5 blur-3xl animate-float" style={{ animationDelay: '-1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-16 animate-fade-in">
          <h1 className="mb-8 leading-tight">
            This website is to verify that{' '}
            <span className="text-mystery-accent font-normal">
              Harshita
            </span>{' '}
            is indeed the
            <br className="hidden sm:block" />
            <span className="block mt-2 bg-gradient-to-r from-mystery-accent to-mystery-glow bg-clip-text text-transparent">
              beautiful woman in the whole universe
            </span>
          </h1>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-mystery-accent rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-mystery-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/6 w-px h-12 bg-gradient-to-b from-transparent via-mystery-border to-transparent" />
        <div className="absolute top-1/2 right-1/6 w-px h-12 bg-gradient-to-b from-transparent via-mystery-border to-transparent" />
      </div>
    </section>
  );
};