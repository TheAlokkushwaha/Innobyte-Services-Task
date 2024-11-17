import React from "react";

const AccessRestricted = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className=" text-center rounded-lg p-6 shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Access Restricted</h2>
        <p className="text-sm mb-4">
          You can't access this website on a smaller screen. Please open this website on a laptop or desktop screen.
        </p>
        <p className="text-sm font-medium">
          We're working on making this site responsive and accessible on smartphones as well. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default AccessRestricted;
