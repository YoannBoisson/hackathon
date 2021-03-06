import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { apiGetChartPlaylist } from "../api/apiChartPlaylist";
import Cards from "./Cards";

export default function CardPlaylist() {
  const dispatch = useDispatch();
  const chartPlaylist = useSelector((state) => state.chartPlaylist);

  React.useEffect(() => {
    dispatch(apiGetChartPlaylist());
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={1}
      sx={{ display: "flex", justifyContent: "center", pl: 5}}
    >
      {chartPlaylist.top.map((element) => (
        <Grid item xs={9} md={5} lg={5}>
          <Cards {...element} />
        </Grid>
      ))}
    </Grid>
  );
}
