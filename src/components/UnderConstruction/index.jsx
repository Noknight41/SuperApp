import React from "react";
import { useNavigate } from "react-router-dom";

function UnderConstruction() {
  const navigate = useNavigate();

  return (
    <div className="relative p-8 text-center border border-gray-200 rounded-lg max-w-2xl">
      <h2 className="text-2xl font-medium">This Page is Under Construction</h2>

      <p className="mt-4 text-sm text-gray-500">
        Await this feature in the future
      </p>

      <button
        type="button"
        className="inline-flex items-center px-5 py-3 mt-8 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500"
        onClick={() => navigate("/")}
      >
        Go back to Home Page
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="flex-shrink-0 w-4 h-4 ml-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
}

export default UnderConstruction;
