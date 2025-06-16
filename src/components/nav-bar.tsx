"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [openInstitutional, setOpenInstitutional] = useState(false);
  const [openPlans, setOpenPlans] = useState(false);

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

        <ul className="hidden md:flex gap-6 text-lg font-medium text-gray-800 relative">
          {/* Home */}
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

          {/* Institucional */}
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

          {/* Nossos Planos */}
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

          {/* Outros Links */}
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

        <Button>
          Acessar minha conta
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
