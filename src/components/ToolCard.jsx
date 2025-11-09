import React from "react";
import { Link } from "react-router-dom";

const ToolCard = ({ icon, title, description, path }) => {
  return (
    <Link to={path} className="block">
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center h-16 w-16 bg-red-100 rounded-full mx-auto">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-center mt-4">{title}</h3>
        <p className="text-gray-600 text-center mt-2">{description}</p>
      </div>
    </Link>
  );
};

export default ToolCard;
