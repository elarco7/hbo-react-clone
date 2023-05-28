import { useEffect, useState } from "react";

export const UseMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return { hasMounted };
};
