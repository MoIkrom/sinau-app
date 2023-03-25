import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import logout from "../../assets/logout.png";
import "../../css/Navbar.css";
import { Logout } from "../../API/API";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const handleApi = () => {
    setLoading(true);
    Logout()
      .then((response) => {
        localStorage.clear();
        toast.success("Logout success", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        setTimeout(() => navigate("/login"), 1000);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Cannot Logout", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <nav className="navbar bg-body-tertiary p-0">
      <div className={"container-fluid d-flex justify-content-between"}>
        <div className={"d-flex justify-content-center align-items-center"}>
          <p className="navbar-brand mb-0 mx-0 h1">MARKETPLACE</p>
          <img src={logo} alt="Logo" className={"logo"} />
        </div>

        {token !== null ? (
          <div className="d-flex flex-column justify-content-center align-items-center cursor" onClick={handleApi}>
            {loading ? <Loader /> : <img src={logout} alt="Logo" className={"logout"} />}
            {loading ? <p className="mb-0 mx-0 h6 ">Loading . . .</p> : <p className="mb-0 mx-0 h6 ">LOGOUT</p>}
          </div>
        ) : (
          ""
        )}
      </div>
      <ToastContainer />
    </nav>
  );
}

export default Navbar;
