import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Title = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h5"
        color={colors.grey[800]}
        fontWeight="bold"
        sx={{ m: "20px 0 5px 10px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Title;