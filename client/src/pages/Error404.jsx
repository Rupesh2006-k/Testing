import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Error404 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/user/auth/current-user");

        if (res.data?.user) {
          navigate("/main", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      } catch {
        navigate("/", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) return <div>Redirecting...</div>;

  return null;
};

export default Error404;
