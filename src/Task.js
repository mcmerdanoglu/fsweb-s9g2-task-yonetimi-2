import React from "react";

const Task = ({ taskObj, onComplete }) => {
  return (
    <div className="p-6 bg-white rounded-md leading-relaxed mt-4 shadow-md">
      <h3 className="text-base text-orange-500">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim:{" "}
        <span className="inline-block px-2 py-1 rounded-md">
          {taskObj.deadline}
        </span>
      </div>
      <p className="pt-2 pb-3 text-sm text-gray-700">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block px-3 py-1 text-sm border border-gray-300 rounded-full mr-1 mb-2"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block px-3 py-2 ml-auto bg-orange-300 shadow-sm rounded-md border-none cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
