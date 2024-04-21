const CTA = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 flex items-center justify-center gap-1 bg-white rounded-lg border border-primary-1550 shadow-table-cta text-sm text-primary-1600 font-medium"
    >
      {title}
    </button>
  );
};

export default CTA;
