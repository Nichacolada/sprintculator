import { useState } from 'react';

type TeamMember = {
  id: string;
  name: string;
  role: 'pm' | 'designer' | 'fe' | 'be' | 'ai' | 'infra' | 'qa';
};

type Task = {
  id: string;
  name: string;
  pm: TeamMember | null;
  designers: TeamMember[];
  engineers: {
    fe: TeamMember | null;
    be: TeamMember | null;
    ai: TeamMember | null;
    infra: TeamMember | null;
  };
  qa: TeamMember | null;
};

export default function TaskTable() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState('');

  const addTask = () => {
    if (!newTaskName.trim()) return;
    
    const newTask: Task = {
      id: Date.now().toString(),
      name: newTaskName,
      pm: null,
      designers: [],
      engineers: {
        fe: null,
        be: null,
        ai: null,
        infra: null,
      },
      qa: null,
    };
    
    setTasks([...tasks, newTask]);
    setNewTaskName('');
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex">
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Enter task name"
          className="flex-1 p-2 border rounded-l text-gray-800"
        />
        <button 
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      {tasks.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border text-gray-800">Task</th>
                <th className="py-2 px-4 border text-gray-800">PM</th>
                <th className="py-2 px-4 border text-gray-800">Designer(s)</th>
                <th className="py-2 px-4 border text-gray-800">FE Engineer</th>
                <th className="py-2 px-4 border text-gray-800">BE Engineer</th>
                <th className="py-2 px-4 border text-gray-800">AI Engineer</th>
                <th className="py-2 px-4 border text-gray-800">Infra Engineer</th>
                <th className="py-2 px-4 border text-gray-800">QA Tester</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border text-gray-800">{task.name}</td>
                  <td className="py-2 px-4 border text-gray-800">{task.pm?.name || '-'}</td>
                  <td className="py-2 px-4 border text-gray-800">
                    {task.designers.length > 0 
                      ? task.designers.map(d => d.name).join(', ') 
                      : '-'}
                  </td>
                  <td className="py-2 px-4 border text-gray-800">{task.engineers.fe?.name || '-'}</td>
                  <td className="py-2 px-4 border text-gray-800">{task.engineers.be?.name || '-'}</td>
                  <td className="py-2 px-4 border text-gray-800">{task.engineers.ai?.name || '-'}</td>
                  <td className="py-2 px-4 border text-gray-800">{task.engineers.infra?.name || '-'}</td>
                  <td className="py-2 px-4 border text-gray-800">{task.qa?.name || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No tasks added yet. Add your first task above.</p>
      )}
    </div>
  );
} 