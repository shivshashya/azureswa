import React, { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/.auth/me")
      .then((res) => res.json())
      .then((data) => setUser(data.clientPrincipal));
  }, []);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Welcome, {user.userDetails}</h1>
      <p>Logged in via: {user.identityProvider}</p>
      <a href="/.auth/logout">Logout</a>
    </div>
  );
}

export default Dashboard;
