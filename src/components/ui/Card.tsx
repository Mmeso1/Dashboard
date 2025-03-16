import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> & { Content: React.FC<CardContentProps> } = ({
  children,
  className,
}) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className="mt-2 text-gray-600">{children}</div>;
};

// Export Card with sub-component
Card.Content = CardContent;

export default Card;
