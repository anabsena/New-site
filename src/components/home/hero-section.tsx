import Image from "next/image";
import Button from "../ui/button";

const HeroSection = () => {
  return (
    <section
      className="bg-[url('/bg-banner.svg')] bg-no-repeat bg-cover bg-center bg-primary"
    >
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between min-h-[685px] py-12">
        <div className="max-w-xl space-y-6">
          <Image
            src="/texto-banner.svg"
            alt="Você muito mais digital"
            width={504}
            height={290}
          />
          <Button variant="secondary">Ver Planos Controle</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
