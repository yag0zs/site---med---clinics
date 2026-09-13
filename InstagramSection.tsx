import React from 'react';
import { 
  Heart, 
  MessageCircle, 
  ExternalLink 
} from 'lucide-react';
import { instagramPosts } from '../data/instagramPosts';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const InstagramSection: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/clinicamedclinics/";

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background shapes */}
      <div 
        className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Instagram Badge */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0B8745] text-xs font-bold uppercase tracking-wider mb-3">
            <InstagramIcon className="w-3.5 h-3.5 text-[#0B8745]" />
            <span>@clinicamedclinics</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#044B25] tracking-tight">
            Acompanhe a Med Clinics
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Dicas práticas de saúde, bastidores dos nossos atendimentos, novidades sobre médicos e campanhas de prevenção diretamente no nosso perfil do Instagram.
          </p>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FCFDFD] rounded-3xl overflow-hidden border border-emerald-100 shadow-[0_4px_16px_rgba(4,75,37,0.04)] hover:shadow-[0_16px_36px_rgba(11,135,69,0.12)] hover:border-emerald-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Instagram style */}
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <Heart className="w-5 h-5 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Top Corner Instagram Tag */}
                <div className="absolute top-3 left-3 bg-[#044B25]/85 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {post.tag}
                </div>
              </div>

              {/* Caption & Post Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-[#044B25] transition-colors mb-2 line-clamp-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{post.date}</span>
                  <span className="text-[#0B8745] font-semibold flex items-center gap-1 group-hover:underline">
                    <span>Ver no feed</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Follow CTA */}
        <div className="mt-14 text-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#0B8745] to-[#044B25] hover:from-[#0E9A50] hover:to-[#065A2E] shadow-[0_6px_20px_rgba(11,135,69,0.3)] hover:shadow-[0_10px_28px_rgba(11,135,69,0.4)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>Seguir no Instagram @clinicamedclinics</span>
          </a>
          <p className="text-xs text-slate-500 mt-3">
            Junte-se à nossa comunidade e fique por dentro das novidades em saúde em Manaus.
          </p>
        </div>

      </div>
    </section>
  );
};
