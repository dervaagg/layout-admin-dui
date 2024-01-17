// import { useState, useEffect } from "react";
// import axios from "axios";
// import jwtDecoded from "jwt-decode";

const LandingPage = () => {
  // const [name, setName] = useState("");
  // const [token, setToken] = useState("");
  // const [expireToken, setExpireToken] = useState("")

  // useEffect(() => {
  //     refreshToken();
  // }, []);

  // const refreshToken = async () => {
  //     try {
  //         const response = await axios.get("http://localhost:4001/token");
  //         setToken(response.data.accessToken);
  //         const decoded = jwtDecoded(response.data.accessToken, { header: true });
  //         setName(decoded.name);
  //         setExpireToken(decoded.exp);
  //     } catch (error) {
  //         if (error.response) {
  //             window.location.href = "/";
  //         }
  //     }
  // };

  // const axiosJWT = axios.create();

  // axiosJWT.interceptors.request.use(
  //     async (config) => {
  //         const currentDate = new Date();
  //         if (expireToken * 1000 < currentDate.getTime()) {
  //             const response = await axios.get("http://localhost:4001/token");
  //             config.headers.Authorization = `Bearer ${response.data.accessToken}`;
  //             setToken(response.data.accessToken);
  //             setToken(response.data.accessToken);
  //             const decoded = jwtDecoded(response.data.accessToken);
  //             setName(decoded.name);
  //             setExpireToken(decoded.exp);
  //         }
  //         return config;
  //     },
  //     (error) => {
  //         return Promise.reject(error);
  //     }
  // );

  // const getUsers = async () => {
  //     const response = await axiosJWT.get("http://localhost:4001/users", {
  //         headers: {
  //             Authorization: `Bearer ${token}`,
  //         },
  //     });
  //     console.log(response.data);
  // };

  return (
    <div>
      <h1>Hi, Have A Nice Day!</h1>
      {/* <button onClick={getUsers} className="button is-info">
                Get Users
            </button> */}
    </div>
  );
};

export default LandingPage;
