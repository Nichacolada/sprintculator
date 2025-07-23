"use client";
import TaskTable from '../components/TaskTable';

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Sprintculator</h1>
        <p className="text-gray-600">Plan your sprints efficiently</p>
      </header>
      
      <main>
        <TaskTable />
      </main>
    </div>
  );
}
