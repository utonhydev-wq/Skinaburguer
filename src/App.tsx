/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  UtensilsCrossed,
  MapPin,
  Instagram,
  ExternalLink,
  Flame,
  Share2,
  Check,
  ChevronRight,
  ShoppingBag,
} from 'lucide-react';

const LINKS = {
  brendiOrder:
    'https://pedido.brendi.com.br/skinaburguer?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAUxAMZleHRuA2FlbQIxMQBwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp2zX4hMpPt9aW7ZLB2BYaKZZ_3Gl68YFqFvkh7jJG87GVCNr104tl6zeCENt_aem_s3ZVMPpU32_chM1hgcaIHA&utm_id=97760_v0_s00_e0_tv3',
  instagram:
    'https://www.instagram.com/skinaburguer_?stkn=bjV5MWJyaDlvdm80',
  maps:
    'https://maps.app.goo.gl/8eHt1EqpoJeZLJem6?g_st=ac',
  ifood1:
    'https://www.ifood.com.br/delivery/jaboatao-dos-guararapes-pe/skina-burguer-guararapes/95a76c65-b708-4e59-9c5d-e2d8803d6ca9?UTM_Medium=share',
  ifood2:
    'https://www.ifood.com.br/delivery/jaboatao-dos-guararapes-pe/skina-hamburgueria-artesanal-guararapes/df2abcbc-5d5a-415e-a6af-2bfeb6d985f2?UTM_Medium=share',
};

const LOGO_URL = 'https://i.postimg.cc/BvTVM8B0/IMG-20261005-WA0225.jpg';

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Skina Burguer | Hamburgueria Artesanal',
      text: 'Confira o cardápio e faça seu pedido na Skina Burguer em Jaboatão dos Guararapes!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Fallback to clipboard if share was cancelled or failed
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // Clipboard error fallback
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col items-center justify-start overflow-x-hidden selection:bg-amber-500 selection:text-black">
      {/* Ambient background glow effects */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-b from-amber-600/15 via-orange-600/10 to-transparent blur-3xl" />
        <div className="absolute top-[45%] -left-48 w-80 h-80 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute bottom-20 -right-48 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Main Container - Mobile Optimized Viewport */}
      <main className="relative z-10 w-full max-w-md mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
        {/* Top utility row */}
        <header className="w-full flex items-center justify-between pb-4 border-b border-neutral-800/80 mb-6">
          <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="tracking-wide">Jaboatão dos Guararapes – PE</span>
          </div>
          <button
            onClick={handleShare}
            aria-label="Compartilhar página"
            className="flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-400 hover:border-amber-500/40 active:scale-95 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copiado!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Compartilhar</span>
              </>
            )}
          </button>
        </header>

        {/* 1. TOPO / HERO */}
        <section className="w-full flex flex-col items-center text-center">
          {/* Logo Frame */}
          <div className="relative group mb-4">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-red-600 opacity-60 blur-md group-hover:opacity-90 transition duration-500" />
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-b from-amber-400 via-neutral-800 to-neutral-900 shadow-2xl">
              <img
                src={LOGO_URL}
                alt="Logo Skina Burguer - Hamburgueria Artesanal"
                className="w-full h-full object-cover rounded-full bg-neutral-950"
                loading="eager"
              />
            </div>
            {/* Flame Accent */}
            <div
              className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-neutral-950 shadow-lg border-2 border-[#0a0a0c]"
              title="Artesanal na brasa"
            >
              <Flame className="w-4 h-4 fill-current" />
            </div>
          </div>

          {/* Titles */}
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-white font-heading">
            SKINA BURGUER
          </h1>
          <p className="text-sm sm:text-base font-semibold text-amber-400 tracking-wider uppercase mt-0.5">
            Hamburgueria Artesanal
          </p>
          <p className="text-xs text-neutral-400 mt-1 font-medium flex items-center justify-center gap-1">
            <span>Jaboatão dos Guararapes – PE</span>
          </p>

          {/* Hero Copy */}
          <div className="mt-4 max-w-sm px-2">
            <p className="text-base sm:text-lg font-bold text-neutral-100 leading-snug">
              Seu hambúrguer artesanal favorito está aqui! 🍔🔥
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1.5 leading-relaxed font-normal">
              Sabor, qualidade e aquele hambúrguer caprichado para matar a fome.
            </p>
          </div>

          {/* BOTÃO PRINCIPAL EM DESTAQUE: 🍔 FAZER PEDIDO */}
          <div className="w-full mt-6">
            <a
              href={LINKS.brendiOrder}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fazer Pedido no Cardápio Oficial"
              className="group relative flex items-center justify-between w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-neutral-950 font-extrabold text-base sm:text-lg shadow-xl shadow-amber-600/25 animate-flame-pulse active:scale-[0.98] transition-transform duration-150 cursor-pointer overflow-hidden border border-amber-300/40"
            >
              <div className="flex items-center gap-3.5 text-left">
                <span className="text-2xl sm:text-3xl" role="img" aria-label="Hambúrguer">
                  🍔
                </span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="tracking-wide uppercase font-black font-heading text-neutral-950">
                      FAZER PEDIDO
                    </span>
                  </div>
                  <span className="block text-xs font-semibold text-neutral-900/80 tracking-normal">
                    Cardápio oficial & entrega rápida
                  </span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-neutral-950/20 flex items-center justify-center text-neutral-950 group-hover:translate-x-1 transition-transform">
                <ChevronRight className="w-5 h-5 stroke-[3]" />
              </div>
            </a>
          </div>
        </section>

        {/* 2. BOTÕES PRINCIPAIS */}
        <section className="w-full mt-6 space-y-3.5" aria-label="Links Principais">
          {/* Card 1: 🍔 CARDÁPIO E PEDIDOS */}
          <a
            href={LINKS.brendiOrder}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full p-4 rounded-2xl bg-[#141418] hover:bg-[#1a1a20] border border-neutral-800 hover:border-amber-500/50 shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-3.5 text-left min-w-0">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors shrink-0">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold text-white tracking-tight">
                    🍔 CARDÁPIO E PEDIDOS
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-0.5 truncate">
                  Confira nosso cardápio e faça seu pedido
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-400 shrink-0 ml-2 group-hover:text-amber-300">
              <span>PEDIR AGORA</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 2: 📱 INSTAGRAM */}
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full p-4 rounded-2xl bg-[#141418] hover:bg-[#1a1a20] border border-neutral-800 hover:border-pink-500/50 shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-3.5 text-left min-w-0">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/10 via-pink-500/10 to-purple-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-pink-500 group-hover:to-purple-600 group-hover:text-white transition-all shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="truncate">
                <span className="text-base font-bold text-white tracking-tight block">
                  📱 INSTAGRAM
                </span>
                <p className="text-xs text-neutral-400 mt-0.5 truncate">
                  Siga a gente no Instagram
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-pink-400 shrink-0 ml-2 group-hover:text-pink-300">
              <span>@SKINABURGUER_</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 3: 📍 COMO CHEGAR */}
          <a
            href={LINKS.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full p-4 rounded-2xl bg-[#141418] hover:bg-[#1a1a20] border border-neutral-800 hover:border-emerald-500/50 shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-3.5 text-left min-w-0">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-colors shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="truncate">
                <span className="text-base font-bold text-white tracking-tight block">
                  📍 COMO CHEGAR
                </span>
                <p className="text-xs text-neutral-400 mt-0.5 truncate">
                  Venha nos visitar
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-emerald-400 shrink-0 ml-2 group-hover:text-emerald-300">
              <span>VER LOCALIZAÇÃO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </section>

        {/* 3. SEÇÃO IFOOD */}
        <section className="w-full mt-8" aria-label="Pedidos pelo iFood">
          <div className="flex items-center gap-2 mb-1.5">
            <h2 className="text-lg sm:text-xl font-extrabold text-white font-heading tracking-wide">
              Peça também pelo iFood 🍔
            </h2>
          </div>
          <p className="text-xs text-neutral-400 mb-3.5">
            Escolha onde prefere fazer seu pedido.
          </p>

          <div className="space-y-3">
            {/* iFood — Skina Burguer */}
            <a
              href={LINKS.ifood1}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full p-4 rounded-2xl bg-[#141418] hover:bg-[#1a1a20] border border-neutral-800 hover:border-red-500/50 shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0 font-black text-sm">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-sm font-bold text-white truncate">
                    iFood — Skina Burguer
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Unidade Guararapes
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 ml-2 shadow-sm transition-colors">
                <span>PEDIR NO IFOOD</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* iFood — Skina Hamburgueria Artesanal */}
            <a
              href={LINKS.ifood2}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full p-4 rounded-2xl bg-[#141418] hover:bg-[#1a1a20] border border-neutral-800 hover:border-red-500/50 shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-600/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0 font-black text-sm">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-sm font-bold text-white truncate">
                    iFood — Skina Hamburgueria Artesanal
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Unidade Guararapes
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 ml-2 shadow-sm transition-colors">
                <span>PEDIR NO IFOOD</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </section>

        {/* 4. SEÇÃO DE DESTAQUE */}
        <section className="w-full mt-8">
          <div className="relative w-full rounded-2xl p-5 bg-gradient-to-br from-neutral-900 via-[#17171c] to-neutral-900 border border-amber-500/30 shadow-2xl overflow-hidden text-center">
            {/* Decorative flame glow inside card */}
            <div
              className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-amber-500/20 blur-2xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-red-600/15 blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-xl sm:text-2xl font-black text-white font-heading tracking-wide">
                🍔 BATEU AQUELA FOME?
              </h2>
              <p className="text-sm text-neutral-300 mt-1 font-medium">
                Então já sabe onde pedir.
              </p>

              <a
                href={LINKS.brendiOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-all duration-150 cursor-pointer"
              >
                <span>FAZER MEU PEDIDO</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </a>
            </div>
          </div>
        </section>

        {/* 5. RODAPÉ */}
        <footer className="w-full mt-10 pt-6 pb-4 border-t border-neutral-800/80 text-center flex flex-col items-center">
          <div className="font-heading font-extrabold text-lg uppercase tracking-wider text-white">
            SKINA BURGUER
          </div>
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mt-0.5">
            Hamburgueria Artesanal
          </p>

          <p className="text-xs text-neutral-400 mt-2 font-medium">
            Jaboatão dos Guararapes – PE
          </p>

          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-amber-400 font-medium mt-1.5 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>Instagram: @skinaburguer_</span>
          </a>

          <p className="text-xs text-neutral-500 mt-5 font-medium">
            Feito para quem ama um bom hambúrguer. 🍔
          </p>
        </footer>
      </main>
    </div>
  );
}
