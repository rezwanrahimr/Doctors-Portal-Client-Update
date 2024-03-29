import { useEffect, useState } from "react";

const useSaveUser = (name, email) => {
  const [status, setStatus] = useState({});
  const user = { name, email };
  useEffect(() => {
    fetch("https://doctors-portal-server-2023-ivory.vercel.app/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data);
      });
  }, [email]);
  return [status];
};

export default useSaveUser;
