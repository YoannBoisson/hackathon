import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector, useDispatch } from "react-redux";
import { apiGetChartPlaylist } from "../api/apiChartPlaylist";

import Cards from "./Cards";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardPlaylist() {
  const dispatch = useDispatch();
  const chartPlaylist = useSelector((state) => state.chartPlaylist);
  



  React.useEffect(() => {
      
    dispatch(apiGetChartPlaylist());
  }, [dispatch]);

//   console.log(chartPlaylist);
//   console.log(trackPlaylist.playlist.data);



  return (
    <Grid container sx={{ gap: 10 }}>
      {chartPlaylist.top.map((element) => (
        <Grid item xs={3}>
            <Cards {...element}  />
        </Grid>
      ))}
    </Grid>
  );
}
