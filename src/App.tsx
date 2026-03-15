import React, { useState, useEffect } from 'react';
import { 
  Youtube, 
  Facebook, 
  Send, 
  ChevronRight, 
  Heart, 
  Stethoscope, 
  Apple, 
  Wind, 
  Activity,
  Mail,
  Users,
  CheckCircle2,
  Moon,
  Sun,
  ExternalLink
} from 'lucide-react';

const TikTok = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tiktokUrl: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
}

interface Testimonial {
  id: string;
  name: string;
  comment: string;
  avatar: string;
}

// --- Mock Data ---
const VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Bí mật của lá gan',
    description: 'Tại sao bạn hay mệt mỏi vào buổi chiều? Có thể gan đang lên tiếng.',
    thumbnail: 'https://picsum.photos/seed/liver/400/600',
    tiktokUrl: 'https://www.tiktok.com/@chinam.health'
  },
  {
    id: '2',
    title: 'Thải độc đại tràng',
    description: '3 thói quen đơn giản giúp hệ tiêu hóa sạch khỏe mỗi ngày.',
    thumbnail: 'https://picsum.photos/seed/gut/400/600',
    tiktokUrl: 'https://www.tiktok.com/@chinam.health'
  },
  {
    id: '3',
    title: 'Dinh dưỡng cho não bộ',
    description: 'Ăn gì để tăng cường trí nhớ và sự tập trung?',
    thumbnail: 'https://picsum.photos/seed/brain/400/600',
    tiktokUrl: 'https://www.tiktok.com/@chinam.health'
  }
];

const CATEGORIES: Category[] = [
  { id: '1', title: 'Gan khỏe', icon: <Activity className="w-6 h-6" />, color: 'bg-emerald-100 text-emerald-600' },
  { id: '2', title: 'Tiêu hóa', icon: <Apple className="w-6 h-6" />, color: 'bg-orange-100 text-orange-600' },
  { id: '3', title: 'Thải độc', icon: <Wind className="w-6 h-6" />, color: 'bg-blue-100 text-blue-600' },
  { id: '4', title: 'Dinh dưỡng', icon: <Stethoscope className="w-6 h-6" />, color: 'bg-rose-100 text-rose-600' },
  { id: '5', title: 'Sống khỏe', icon: <Heart className="w-6 h-6" />, color: 'bg-purple-100 text-purple-600' },
];

const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Minh Anh', comment: 'Kiến thức rất dễ hiểu, mình đã áp dụng và thấy cơ thể nhẹ nhàng hơn hẳn.', avatar: 'https://i.pravatar.cc/150?u=ma' },
  { id: '2', name: 'Hoàng Nam', comment: 'Video hoạt hình sinh động, con mình cũng thích xem cùng bố.', avatar: 'https://i.pravatar.cc/150?u=hn' },
  { id: '3', name: 'Thu Trang', comment: 'Cảm ơn Chinam Health vì những mẹo nhỏ nhưng cực kỳ hữu ích.', avatar: 'https://i.pravatar.cc/150?u=tt' },
];

// --- Components ---

const Navbar = ({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-card px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">C</div>
      <span className="font-bold text-xl tracking-tight">Chinam Health</span>
    </div>
    <div className="flex items-center gap-4">
      <button 
        onClick={toggleDark}
        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
      <a 
        href="https://www.tiktok.com/@chinam.health" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Follow
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
        #1 Health Education on TikTok
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
        Chinam Health – Kiến thức sức khỏe <span className="text-primary">dễ hiểu</span> mỗi ngày
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
        Video ngắn giúp bạn hiểu rõ cơ thể và sống khỏe hơn qua những hình ảnh hoạt hình sinh động.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a href="https://www.tiktok.com/@chinam.health" className="flex items-center justify-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
          Follow TikTok
        </a>
        <a href="#videos" className="flex items-center justify-center gap-2 border-2 border-slate-200 dark:border-slate-800 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
          Xem video mới nhất
        </a>
      </div>
      
      <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 aspect-[9/16] max-w-[320px] mx-auto bg-slate-200 dark:bg-slate-800">
        <iframe 
          src="https://www.tiktok.com/embed/@chinam.health" 
          className="w-full h-full"
          allowFullScreen
          title="TikTok Profile"
        />
      </div>
    </motion.div>
  </section>
);

const FeaturedVideos = () => (
  <section id="videos" className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">Video nổi bật</h2>
          <p className="text-slate-500">Cập nhật những kiến thức mới nhất từ TikTok</p>
        </div>
        <a href="https://www.tiktok.com/@chinam.health" className="text-primary font-semibold flex items-center gap-1 hover:underline">
          Xem tất cả <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {VIDEOS.map((video, index) => (
          <motion.div 
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="relative aspect-[9/16] overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">{video.title}</h3>
                  <p className="text-sm text-white/80 line-clamp-2">{video.description}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <a 
                href={video.tiktokUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold hover:bg-primary hover:text-white transition-colors"
              >
                Watch on TikTok <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HealthTopics = () => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Chủ đề sức khỏe</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {CATEGORIES.map((cat, index) => (
          <motion.div
            key={cat.id}
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-3xl flex flex-col items-center text-center gap-4 cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center`}>
              {cat.icon}
            </div>
            <span className="font-bold text-sm">{cat.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-20 px-6 bg-primary-soft dark:bg-emerald-950/20">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="relative">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img src="https://picsum.photos/seed/chinam/300/300" alt="Chinam Health Avatar" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-lg flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="font-bold">500K+</div>
            <div className="text-xs text-slate-500">Followers</div>
          </div>
        </div>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-6">Về Chinam Health</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          Chinam Health là kênh chia sẻ kiến thức sức khỏe dưới dạng video hoạt hình ngắn giúp mọi người hiểu rõ cơ thể mình. Chúng tôi tin rằng kiến thức y khoa không cần phải khô khan, mà có thể trở nên gần gũi và dễ áp dụng.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            <CheckCircle2 className="w-5 h-5 text-primary" /> Kiến thức chuẩn y khoa
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            <CheckCircle2 className="w-5 h-5 text-primary" /> Hình ảnh minh họa sinh động
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-slate-900 dark:bg-primary rounded-[2.5rem] p-8 md:p-16 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nhận Ebook miễn phí</h2>
          <p className="text-white/80 mb-8 text-lg">
            10 thói quen đơn giản giúp cơ thể khỏe mạnh và tràn đầy năng lượng mỗi ngày.
          </p>
          
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 p-6 rounded-2xl inline-block"
              >
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Cảm ơn bạn đã đăng ký!</h3>
                <p className="text-white/70">Vui lòng kiểm tra email để nhận Ebook.</p>
              </motion.div>
            ) : (
              <motion.form 
                exit={{ opacity: 0, scale: 0.9 }}
                onSubmit={handleSubmit} 
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <input 
                  type="email" 
                  required
                  placeholder="Email của bạn..." 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-white/50"
                />
                <button 
                  disabled={status === 'loading'}
                  className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-colors disabled:opacity-50"
                >
                  {status === 'loading' ? 'Đang gửi...' : 'Đăng ký ngay'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Community = () => (
  <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Cộng đồng tin tưởng</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="glass-card p-8 rounded-3xl relative">
            <div className="flex items-center gap-4 mb-6">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
              <div>
                <div className="font-bold">{t.name}</div>
                <div className="text-xs text-slate-500">Follower</div>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 italic">"{t.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 px-6 border-t border-slate-100 dark:border-slate-800">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">C</div>
            <span className="font-bold text-xl tracking-tight">Chinam Health</span>
          </div>
          <p className="text-slate-500 max-w-sm mb-6">
            Kiến thức sức khỏe dễ hiểu mỗi ngày qua video ngắn. Đồng hành cùng bạn trên hành trình sống khỏe.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all"><TikTok className="w-5 h-5" /></a>
            <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all"><Send className="w-5 h-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Liên kết</h4>
          <ul className="space-y-4 text-slate-500">
            <li><a href="#" className="hover:text-primary transition-colors">Trang chủ</a></li>
            <li><a href="#videos" className="hover:text-primary transition-colors">Video</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Chính sách bảo mật</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Liên hệ</h4>
          <ul className="space-y-4 text-slate-500">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@chinamhealth.vn</li>
            <li>Hợp tác quảng cáo</li>
            <li>Tư vấn sức khỏe</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-sm text-slate-400">
        <p className="mb-4">© 2024 Chinam Health. All rights reserved.</p>
        <p className="max-w-2xl mx-auto italic">
          Disclaimer: Nội dung chỉ mang tính chất tham khảo sức khỏe. Vui lòng tham khảo ý kiến bác sĩ trước khi thực hiện bất kỳ thay đổi nào về chế độ ăn uống hoặc lối sống.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30">
      <Navbar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      
      <main>
        <Hero />
        <HealthTopics />
        <FeaturedVideos />
        <About />
        <LeadMagnet />
        <Community />
      </main>

      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <a 
          href="https://www.tiktok.com/@chinam.health" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <TikTok className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
