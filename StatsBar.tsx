import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export const StatsBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;

            const counter1 = { val: 0 };
            const counter2 = { val: 0 };
            const counter3 = { val: 0 };
            const counter4 = { val: 0 };

            const el1 = document.getElementById('stat-specialties');
            const el2 = document.getElementById('stat-patients');
            const el3 = document.getElementById('stat-exams');
            const el4 = document.getElementById('stat-satisfaction');

            if (el1) {
              animate(counter1, {
                val: 15,
                duration: 1800,
                ease: 'outExpo',
                onUpdate: () => {
                  el1.textContent = `+${Math.round(counter1.val)}`;
                },
              });
            }

            if (el2) {
              animate(counter2, {
                val: 30,
                duration: 2200,
                ease: 'outExpo',
                onUpdate: () => {
                  el2.textContent = `+${Math.round(counter2.val)} mil`;
                },
              });
            }

            if (el3) {
              animate(counter3, {
                val: 10,
                duration: 1600,
                ease: 'outExpo',
                onUpdate: () => {
                  el3.textContent = `+${Math.round(counter3.val)}`;
                },
              });
            }

            if (el4) {
              animate(counter4, {
                val: 98,
                duration: 2000,
                ease: 'outExpo',
                onUpdate: () => {
                  el4.textContent = `${Math.round(counter4.val)}%`;
                },
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 'stat-specialties',
      initial: '+15',
      label: 'Especialidades Médicas',
      description: 'Cuidado completo para todas as idades',
    },
    {
      id: 'stat-patients',
      initial: '+30 mil',
      label: 'Pacientes Atendidos',
      description: 'Histórico de dedicação e confiança',
    },
    {
      id: 'stat-exams',
      initial: '+10',
      label: 'Tipos de Exames no Local',
      description: 'Diagnósticos ágeis e resolutivos',
    },
    {
      id: 'stat-satisfaction',
      initial: '98%',
      label: 'Índice de Satisfação',
      description: 'Avaliações positivas constantes',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(4,75,37,0.08)] border border-emerald-100/90 p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-emerald-100">
          {stats.map((item, index) => (
            <div
              key={item.id}
              className={`text-center ${index > 0 ? 'pt-4 sm:pt-6 lg:pt-0' : ''} ${
                index > 0 ? 'lg:pl-6' : ''
              }`}
            >
              <div
                id={item.id}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#044B25] tracking-tight font-sans"
              >
                {item.initial}
              </div>
              <div className="mt-1 text-sm sm:text-base font-bold text-slate-800">
                {item.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
