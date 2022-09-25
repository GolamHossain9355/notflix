import React, { useState } from "react";
import dummy from "./dummy.png";
import { useAuth } from "../../../contexts/AuthContext";

export default function NavProfile() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signOut } = useAuth();

  const handleClick = async () => {
    try {
      setError("");
      setLoading(true);
      await signOut();
    } catch {
      setError("Failed to sign out");
    }
    setLoading(false);
  };

  return (
    <div className="nav__profile--wrapper">
      <img src={dummy} className="nav__profile--img" />

      <div>{error}</div>
      <button onClick={handleClick} disabled={loading}>
        Sign Out
      </button>
    </div>
  );
}
