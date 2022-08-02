const LegalFeedback = () => {
  return (
    <div className="mt-16 px-4 lg:px-10 py-5 lg:py-12 bg-white shadow-[-4px_4px_18px_rgba(34,82,155,0.1)] flex items-center justify-between max-w-[804px] mx-auto rounded-[15px] flex-col lg:flex-row gap-5">
      <p className="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#182A44] to-[#3C5271]">
        Was this article helpful?
      </p>
      <div className="flex items-center justify-center gap-5">
        <p className="hover:cursor-pointer hover:text-gray-700 transition-all duration-300 py-[10px] px-[15px] bg-[#F9FAFD] rounded-[10px] text-[#808D9E]">
          Yes
        </p>
        <p className="hover:cursor-pointer hover:text-gray-700 transition-all duration-300 py-[10px] px-[15px] bg-[#F9FAFD] rounded-[10px] text-[#808D9E]">
          No
        </p>
      </div>
    </div>
  );
};

export default LegalFeedback;
