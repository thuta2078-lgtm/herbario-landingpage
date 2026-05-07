import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Leaf, ShieldCheck, Star, ArrowRight, MessageCircle } from 'lucide-react';

const PremiumLandingPage = () => {
  return (
    <div className="bg-[#0f1a0f] text-[#f6f1e8] font-sans selection:bg-[#d4af37] selection:text-black">
      
      {/* 1. HERO SECTION - THE CINEMATIC EXPERIENCE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Background Layering */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#2d4d2d] rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#451a03] rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="container mx-auto z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <Sparkles size={16} className="text-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.2em]">The New Era of Vegan Haircare</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-6">
              Herbario <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f6f1e8] to-[#d4af37]">
                Essence
              </span>
            </h1>
            <p className="text-lg text-stone-400 max-w-md mb-10 leading-relaxed">
              Sự giao thoa giữa liệu pháp thảo mộc phương Đông và công nghệ chiết xuất chuẩn Châu Âu. Đánh thức nang tóc bằng sức mạnh thuần chay.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-8 py-4 bg-[#d4af37] text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                TRẢI NGHIỆM NGAY
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/5 transition-colors">
                KHÁM PHÁ THÀNH PHẦN
              </button>
            </div>
          </motion.div>

          {/* Floating Product Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-20 hover:rotate-2 transition-transform duration-700">
              <img 
                src="https://herbario.vn/uploads/products/dau-goi-buoi-bo-ket-herbario-2.png" 
                alt="Herbario Bottle" 
                className="w-full max-w-[450px] mx-auto drop-shadow-[0_35px_60px_rgba(0,0,0,0.8)]"
              />
            </div>
            {/* Soft Glow Behind Product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#d4af37] rounded-full blur-[100px] opacity-20 z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. BENTO GRID - THE INGREDIENTS (SOLUTION) */}
      <section className="py-24 px-6 bg-[#0a110a]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Tinh Túy Trong Từng Giọt Sánh</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl bg-stone-900 border border-white/5 group">
               <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt="Grapefruit" />
               <div className="absolute bottom-8 left-8">
                 <h3 className="text-2xl font-bold">Vỏ Bưởi Đậm Đặc</h3>
                 <p className="text-stone-300">Tinh dầu tinh khiết kích mọc tóc 300%</p>
               </div>
            </div>
            <div className="md:col-span-2 bg-[#1a2e1a] rounded-3xl p-8 border border-white/5 flex items-center justify-between group">
              <div>
                <h3 className="text-xl font-bold mb-2">Bồ Kết Tách Hạt</h3>
                <p className="text-sm text-stone-400">Làm sạch sâu mà không gây khô xơ.</p>
              </div>
              <Leaf className="text-[#d4af37] group-hover:rotate-12 transition-transform" size={40} />
            </div>
            <div className="bg-stone-900 rounded-3xl p-8 border border-white/5 text-center flex flex-col justify-center">
              <span className="text-4xl font-bold text-[#d4af37] mb-2">0%</span>
              <p className="text-xs uppercase tracking-tighter">Paraben & Sulfate</p>
            </div>
            <div className="bg-[#451a03]/30 rounded-3xl p-8 border border-white/5 flex flex-col justify-center items-center">
               <ShieldCheck className="text-amber-500 mb-2" />
               <p className="text-center text-sm font-medium">Bảo hành kích ứng</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF - MARQUEE & GLASS CARDS */}
      <section className="py-24 overflow-hidden bg-[#0f1a0f]">
        <div className="container mx-auto px-6 mb-12">
           <h2 className="text-3xl font-serif">Đánh giá từ giới mộ điệu</h2>
        </div>
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
           {[1,2,3,4,5].map((i) => (
             <div key={i} className="inline-block w-[350px] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
               <div className="flex gap-1 mb-4 text-[#d4af37]">
                 {[...Array(5)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
               </div>
               <p className="text-stone-300 italic whitespace-normal">
                 "Một trải nghiệm thực sự Luxury. Tóc mình bồng bềnh và có độ bóng tự nhiên rất sang."
               </p>
               <p className="mt-6 font-bold text-sm">— Beauty Blogger Thùy Tiên</p>
             </div>
           ))}
        </div>
      </section>

      {/* 4. PREMIUM FORM & STICKY CTA */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#1a2e1a] to-[#0a110a] rounded-[40px] p-12 border border-white/10 relative overflow-hidden">
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-serif mb-6">Trở thành phiên bản hoàn hảo nhất</h2>
            <p className="text-stone-400 mb-10">Để lại thông tin, Herbario sẽ thiết kế lộ trình chăm sóc tóc riêng cho bạn.</p>
            <form className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Danh xưng của bạn" className="bg-black/20 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#d4af37] transition-colors" />
              <input type="tel" placeholder="Số điện thoại" className="bg-black/20 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#d4af37] transition-colors" />
              <button className="md:col-span-2 py-4 bg-[#d4af37] text-black font-black rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all">
                NHẬN ƯU ĐÃI ĐẶC QUYỀN
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 5. MODERN AI CHATBOT BUBBLE */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#d4af37] text-black rounded-full flex items-center justify-center shadow-2xl relative"
        >
          <MessageCircle size={28} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0f1a0f]"></span>
        </motion.button>
      </div>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#0f1a0f]/80 backdrop-blur-lg border-t border-white/10 z-40">
        <button className="w-full py-4 bg-[#d4af37] text-black font-bold rounded-full">MUA NGAY - GIẢM 30%</button>
      </div>

    </div>
  );
};

export default PremiumLandingPage;
