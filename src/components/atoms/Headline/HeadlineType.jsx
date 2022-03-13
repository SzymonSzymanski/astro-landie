export const HeadlineType = ({ type, className, children }) => {
  switch (type) {
    case 'h1':
      return <h1 className={className && className}>{children}</h1>;
    case 'h2':
      return <h2 className={className && className}>{children}</h2>;
    case 'h3':
      return <h3 className={className && className}>{children}</h3>;
  }
};
