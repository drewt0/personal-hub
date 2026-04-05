'use client';
import { Sun, Cloud, CloudRain, CloudLightning, Wind } from 'lucide-react';

export default function WeatherIcon({ condition }: {condition: string }) {
    const weather = condition.toLowerCase();

    if (weather.includes('clear') || weather.includes('sun')) {
        return (
            <div className="relative flex items-center justify-center w-16 h-16">
                <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl animate-pulse" />
                <Sun size={48} className="text-yellow-400 animate-[spin_8s_linear_infinite]" />
            </div>
        );
    }

    if (weather.includes('cloud')) {
        return (
            <div className="relative w-16 h-16">
            <Cloud size={40} className="text-slate-400 absolute top-0 left-0 animate-[bounce_3s_ease-in-out_infinite]" />
            <Cloud size={32} className="text-slate-500 absolute bottom-2 right-0 animate-[bounce_4s_ease-in-out_infinite] opacity-60" />
            </div>
        );
    }

    if (weather.includes('rain')) {
        return <CloudRain size={48} className="text-blue-400 animate-bounce" />;
    }

    return <Wind size={48} className="text-slate-300" />;
}