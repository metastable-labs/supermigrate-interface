const SMContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-8 xl:px-20 relative">
      {children}
    </div>
  );
};

export default SMContainer;
