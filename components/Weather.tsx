'use client';

import { useState, useEffect, } from 'react';
import { CloudSun, Thermometer } from 'lucide-react';
import WeatherIcon from './WeatherIcon';

export default function Weather() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [previewCondition, setPreviewCondition] = useState<string | null>(null);
    const activeCondition = previewCondition || (data?.weather?.[0]?.main || 'Clear');

    useEffect(() => {
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
        const lat = 41.30;
        const lon = -73.38;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <div className="p-6 bg-white/5 rounded-2xl animate-pulse text-slate-500">Loading weather...</div>;

  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
      <div className="absolute top-4 right-4">
      <select 
        className="bg-black/60 border border-white/20 rounded px-2 py-1 text-xs text-white font-medium focus:outline-none focus:border-blue-500 cursor-pointer appearance-none"
        onChange={(e) => setPreviewCondition(e.target.value || null)}
      >
        <option value="" className="bg-[#1a1a1a] text-white">Live: Redding</option>
        <option value="Clear" className="bg-[#1a1a1a] text-white">Clear (Sun)</option>
        <option value="Clouds" className="bg-[#1a1a1a] text-white">Clouds</option>
        <option value="Rain" className="bg-[#1a1a1a] text-white">Rain</option>
        <option value="Thunderstorm" className="bg-[#1a1a1a] text-white">Storm</option>
      </select>
    </div>
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1 text-blue-400">Current Weather</p>
        <h3>{data?.main?.temp ? Math.round(data.main.temp) : '--'}°F</h3>
        <p className="text-slate-400 capitalize">
          {data?.weather?.[0]?.description || 'No description available'};
        </p>
      </div>
      <WeatherIcon condition={activeCondition} />
    </div>
  );
};