const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#990984] to-[#DC4405] text-white py-16 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            você muito <span className="text-primary-foreground">+ digital</span>
          </h1>
          <p className="mt-4 text-lg">
            É hora de dizer adeus à telefonia tradicional. Diga Hello ao seu novo mundo.
          </p>
          <button className="mt-6 bg-secondary text-white font-semibold px-6 py-3 rounded">
            Ver Planos Controle
          </button>
        </div>

        <img src="/images/hero-image.png" alt="Casal feliz" className="w-full max-w-md mt-8 md:mt-0" />
      </div>
    </section>
  );
};

export default HeroSection;
