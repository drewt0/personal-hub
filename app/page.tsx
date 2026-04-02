import QuickLinks from '../components/QuickLinks';
import Weather from '../components/Weather';
import TaskList from '../components/TaskList';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-blue-500">Personal Hub</h1>
          <p className="text-slate-400 mt-2 italic">Redding, CT</p>
        </header>

        <section className="mb-8">
          <h2 className="text-xs font-semibold mb-6 text-slate-400 uppercase tracking-widest">
            Quick Access
          </h2>
          <QuickLinks />
        </section>

        <section className="mb-8">
           <Weather />
        </section>

        <section className="mb-8">
          <TaskList />
        </section>
        
      </div>
    </main>
  );
}