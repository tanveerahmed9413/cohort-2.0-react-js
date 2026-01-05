import React from "react";

const Contact = () => {
  return (
    <div className="   py-10 grid grid-col-3 gap-4 h-fit ">
      <div
        className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-full max-w-sm  shadow-lg text-white">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Tanveer Ahmed</h3>
          <p className="text-sm text-white/70">📞 9413907627</p>
        </div>

        <button
          className="px-3 py-1.5 rounded-lg text-sm cursor-pointer bg-red-500 hover:bg-red-600 active:scale-95 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
