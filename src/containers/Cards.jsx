import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector, useDispatch } from "react-redux";
import { apiGetTrackPlaylist } from "../api/apiTrackPlaylist";
import Player from "../components/Player/Player";

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

export default function Cards(props) {
  const { id } = props;
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const trackPlaylist = useSelector((state) => state.trackPlaylist);

  React.useEffect(() => {
    dispatch(apiGetTrackPlaylist(id));
  }, [dispatch]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, minHeight: 400 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={props.picture}
            ></Avatar>
          }
          title={props.title}
          subheader={props.creation_date}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.picture_big}
          alt={props.id}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Nombre de titres : {props.nb_tracks}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Typography sx={{ textAlign: "right", width : "90%" }}>Lecteur audio</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            value={props.id}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Aperçu de la playlist</Typography>
            <Player playlist={id} />
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
