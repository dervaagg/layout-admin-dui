import { Header } from "../components";
import { Box } from "@mui/material";
import video from "../assets/vid/wkvideo.mp4";

const Dashboard = () => {
  return (
    <div>
      <Box m="20px">
        {/* HEADER */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        />
        <Header
          title="HI, ADMIN!"
          subtitle="WELCOME TO CSIRT WASKITA ADMIN'S DASHBOARD"
        />
          <video
            className="fixed bottom-1 top-0 left-0 w-full h-full object-cover z-[-1]"
            src={video}
            autoPlay
            loop
            muted
          />
      </Box>
    </div>
  );
};

export default Dashboard;
