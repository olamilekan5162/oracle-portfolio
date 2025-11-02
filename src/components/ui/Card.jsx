const Card = ({ title, children, className = "" }) => {
  return (
    <div
      className={`bg-card text-card-foreground rounded-lg border shadow-sm p-6 ${className}`}
    >
      <h1 className="text-card-foreground text-2xl leading-none font-semibold tracking-tight mb-4">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default Card;
