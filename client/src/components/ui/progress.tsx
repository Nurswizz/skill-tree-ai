const Progress = ({ value, max = 100, className }: { value: number; max?: number; className?: string }) => {
  return (
    <div className={`relative w-full h-2 bg-gray-700 rounded ${className}`}>
      <div
        className="absolute top-0 left-0 h-full bg-gaming-purple rounded"
        style={{ width: `${(value / (max || 100)) * 100}%` }}
      />
    </div>
  );
};
export default Progress;