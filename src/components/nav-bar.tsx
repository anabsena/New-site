"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
import { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [openInstitutional, setOpenInstitutional] = useState(false);
  const [openPlans, setOpenPlans] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileInstitutionalOpen, setMobileInstitutionalOpen] = useState(false);
  const [mobilePlansOpen, setMobilePlansOpen] = useState(false);

  const institutionalTimeout = useRef<NodeJS.Timeout | null>(null);
  const plansTimeout = useRef<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full bg-white shadow-md relative z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo-meu-hello.png"
            alt="Hello"
            width={144}
            height={57}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-lg font-medium text-gray-800 relative">
          <li>
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/") ? "text-primary font-bold" : "hover:text-primary"
              }`}
            >
              Home
            </Link>
          </li>

          <li className="relative group">
            <div
              onMouseEnter={() => {
                clearTimeout(institutionalTimeout.current!);
                setOpenInstitutional(true);
              }}
              onMouseLeave={() => {
                institutionalTimeout.current = setTimeout(() => {
                  setOpenInstitutional(false);
                }, 400);
              }}
            >
              <button
                className={`flex items-center gap-1 transition-colors cursor-pointer ${
                  openInstitutional || pathname.startsWith("/sobre") || pathname.startsWith("/missao")
                    ? "text-primary font-bold"
                    : "hover:text-primary"
                }`}
              >
                Institucional <ChevronDown className="w-4 h-4" />
              </button>

              {openInstitutional && (
                <ul className="absolute left-0 top-full w-max mt-1 bg-white border border-gray-200 shadow-lg rounded-lg py-4 px-4 space-y-2 z-50">
                  <li>
                    <Link
                      href="/sobre"
                      className={`block px-4 py-2 transition-colors ${
                        isActive("/sobre") ? "text-primary font-bold" : "hover:text-primary"
                      }`}
                    >
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/missao"
                      className={`block px-4 py-2 transition-colors ${
                        isActive("/missao") ? "text-primary font-bold" : "hover:text-primary"
                      }`}
                    >
                      Missão e Visão
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>

          <li className="relative group">
            <div
              onMouseEnter={() => {
                clearTimeout(plansTimeout.current!);
                setOpenPlans(true);
              }}
              onMouseLeave={() => {
                plansTimeout.current = setTimeout(() => {
                  setOpenPlans(false);
                }, 400);
              }}
            >
              <button
                className={`flex items-center gap-1 transition-colors cursor-pointer ${
                  openPlans || pathname.startsWith("/planos")
                    ? "text-primary font-bold"
                    : "hover:text-primary"
                }`}
              >
                Nossos Planos <ChevronDown className="w-4 h-4" />
              </button>

              {openPlans && (
                <ul className="absolute left-0 top-full mt-1 w-max bg-white border border-gray-200 shadow-lg rounded-lg py-4 px-4 space-y-2 z-50">
                  <li>
                    <Link
                      href="/planos/controle"
                      className={`block px-4 py-2 transition-colors ${
                        isActive("/planos/controle") ? "text-primary font-bold" : "hover:text-primary"
                      }`}
                    >
                      Planos Controle
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/planos/global"
                      className={`block px-4 py-2 transition-colors ${
                        isActive("/planos/global") ? "text-primary font-bold" : "hover:text-primary"
                      }`}
                    >
                      Mobilidade Global
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>

          <li>
            <Link
              href="/mobilidade"
              className={`transition-colors ${
                isActive("/mobilidade") ? "text-primary font-bold" : "hover:text-primary"
              }`}
            >
              Mobilidade Global
            </Link>
          </li>

          <li>
            <Link
              href="/faq"
              className={`transition-colors ${
                isActive("/faq") ? "text-primary font-bold" : "hover:text-primary"
              }`}
            >
              F.A.Q
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:block">
          <Button>
            Acessar minha conta
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-6">
          <ul className="flex flex-col gap-4 text-lg font-medium text-gray-800">
            <li>
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className={isActive("/") ? "text-primary font-bold" : ""}>
                Home
              </Link>
            </li>

            <li>
              <button
                className="flex items-center gap-2"
                onClick={() => setMobileInstitutionalOpen(!mobileInstitutionalOpen)}
              >
                Institucional <ChevronDown className="w-4 h-4" />
              </button>
              {mobileInstitutionalOpen && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <Link href="/sobre" onClick={() => setMobileMenuOpen(false)} className={isActive("/sobre") ? "text-primary font-bold" : ""}>
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link href="/missao" onClick={() => setMobileMenuOpen(false)} className={isActive("/missao") ? "text-primary font-bold" : ""}>
                      Missão e Visão
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                className="flex items-center gap-2"
                onClick={() => setMobilePlansOpen(!mobilePlansOpen)}
              >
                Nossos Planos <ChevronDown className="w-4 h-4" />
              </button>
              {mobilePlansOpen && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <Link href="/planos/controle" onClick={() => setMobileMenuOpen(false)} className={isActive("/planos/controle") ? "text-primary font-bold" : ""}>
                      Planos Controle
                    </Link>
                  </li>
                  <li>
                    <Link href="/planos/global" onClick={() => setMobileMenuOpen(false)} className={isActive("/planos/global") ? "text-primary font-bold" : ""}>
                      Mobilidade Global
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/mobilidade" onClick={() => setMobileMenuOpen(false)} className={isActive("/mobilidade") ? "text-primary font-bold" : ""}>
                Mobilidade Global
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className={isActive("/faq") ? "text-primary font-bold" : ""}>
                F.A.Q
              </Link>
            </li>
            <li>
              <Button className="w-full mt-2">Acessar minha conta</Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
