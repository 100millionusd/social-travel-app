export function ActivityFilter({ selected, onChange }) {
  const activities = ['golf', 'cinema', 'hiking', 'drinks', 'museums'];

  const toggle = (act) => {
    const newSelected = selected.includes(act)
      ? selected.filter(a => a !== act)
      : [...selected, act];
    onChange(newSelected);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {activities.map((act) => (
        <button
          key={act}
          className={`px-4 py-2 rounded ${selected.includes(act) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => toggle(act)}
        >
          {act}
        </button>
      ))}
    </div>
  );
}