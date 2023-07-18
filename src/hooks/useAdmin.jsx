import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://doctors-portal-server-2023-ivory.vercel.app/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data?.isAdmin);
          setIsLoading(false);
        });
    }
  }, [email]);
  return { isAdmin, isLoading };
};

export default useAdmin;
