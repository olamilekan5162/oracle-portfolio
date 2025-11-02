const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-card text-card-foreground rounded-lg border shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h1 className="text-card-foreground text-2xl leading-none font-semibold tracking-tight mb-4">
      {children}
    </h1>
  );
};

export { Card, CardTitle };
