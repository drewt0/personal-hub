import { GraduationCap, Code2, UserCircle, Bot } from 'lucide-react';

const links = [
  { name: 'WGU Portal', url: 'https://my.wgu.edu', icon: <GraduationCap size={24} /> },
  { name: 'GitHub', url: 'https://github.com', icon: <Code2 size={24} /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/andrew-talcott-a20b043bb/', icon: <UserCircle size={24} /> },
  { name: 'Gemini', url: 'https://gemini.google.com', icon: <Bot size={24} /> },
];

export default function QuickLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {links.map((link) => (
        <a 
          key={link.name} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
        >
          <div className="text-blue-400 group-hover:scale-110 transition-transform">
            {link.icon}
          </div>
          <span className="mt-3 text-sm font-medium text-slate-300">{link.name}</span>
        </a>
      ))}
    </div>
  );
}