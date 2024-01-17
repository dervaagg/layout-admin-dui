import video from "../assets/video/wkvideo.mp4";

const Dashboard = () => {
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
    <div className="">
      <div className="">
        <video
          className="fixed bottom-1 top-0 left-0 w-full h-full object-cover z-[-1]"
          src={video}
          autoPlay
          loop
          muted
        />
        <div className="top-10 container mb-2 mt-[-1rem] p-6 max-w-[60rem]">
          <h2 className="text-neutral-300 font-sans subpixel-antialiased tracking-wide text-2xl font-semibold">
            HI, WELCOME!
          </h2>
          <h1 className="text-neutral-300 font-sans subpixel-antialiased tracking-wide text-4xl font-bold mb-2">
            ADMIN DASHBOARD{" "}
            <a className="underline underline-offset-8 decoration-red-900/45">
              CSIRT
            </a>{" "}
            <a className="underline underline-offset-8 decoration-red-900/45">
              WASKITA
            </a>
          </h1>
          <button className="mt-5 bg-neutral-300 hover:bg-neutral-700 hover:text-white border border-gray-600 hover:border-white font-bold py-2 px-4 rounded-lg">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
