'use client';
import { useState } from 'react';
import { CheckCircle2, Plus, Trash2 } from 'lucide-react';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Install Floor Insulation', completed: false },
    { id: 2, text: 'Mount Solar Panels', completed: false }
  ]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
      <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Van Conversion Tasks</h3>
      
      <div className="flex gap-2 mb-6">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task..."
          className="bg-black/20 border border-white/10 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:border-blue-500"
        />
        <button onClick={addTask} className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg transition-colors">
          <Plus size={20} />
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg group">
            <span className="text-slate-300">{task.text}</span>
            <button 
              onClick={() => setTasks(tasks.filter(t => t.id !== task.id))}
              className="text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}