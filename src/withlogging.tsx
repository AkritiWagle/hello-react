// src/withLogging.tsx
import React, { useEffect } from 'react';

const withLogging = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => {
  const WrappedComponent: React.FC<P> = (props) => {
    useEffect(() => {
      console.log(`Component ${Component.displayName || Component.name} mounted`);
    }, []);

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `WithLogging(${Component.displayName || Component.name})`;

  return WrappedComponent;
};

export default withLogging;
