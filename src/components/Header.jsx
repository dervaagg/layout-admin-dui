import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../styles/theme";

const Header = ({ title, subtitle }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box mb="30px">
            <Box mb="30px">
                <Typography
                    variant="h1"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "0 0 5px 0", textShadow: "2px 2px 2px 	#505050" }}
                >
                    {title}
                </Typography>

                <Typography
                    variant="h3"
                    color={colors.greenAccent[400]}
                    sx={{ textShadow: "1px 1px 1px 	#505050" }}
                >
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    );
};

export default Header;