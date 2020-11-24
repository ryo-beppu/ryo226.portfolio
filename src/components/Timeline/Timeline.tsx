import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { ReactSVG } from "react-svg";
import TimelineSVG from "../../images/Timeline.svg";
import TimelineItemUnderSVG from "../../images/TimelineItemUnder.svg";
import TimelineItemOverSVG from "../../images/TimelineItemOver.svg";
import "../../sass/timeline.scss";

const Timeline: React.FC = () => {
  return (
    <div id="timeline">
      <ReactSVG id="line" src={TimelineSVG} />
      <Grid container id="timelineItem" spacing={2} alignItems="center">
        <Grid item xs={1}>
          <Typography>TimeLine</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>2020-XX</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>2020-XX</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>2020-XX</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>2020-XX</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>2020-XX</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>2020-XX</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>2020-XX</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>2020-XX</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>2020-XX</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>2020-XX</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>2020-XX</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Timeline;
