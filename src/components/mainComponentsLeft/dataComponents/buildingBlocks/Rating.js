import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import DeleteIcon from "@material-ui/icons/Delete";

class RatingField extends Component {
  render() {
    return (
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ alignItems: "center", justifyContent: "center" }}
        spacing={2}
      >
        <Grid item>
          <TextField
            label="Skill"
            variant="standard"
            placeholder="Are you good at... React?"
            value={this.props.skill}
            onChange={this.props.handleSkillsChangeSkill}
          />
        </Grid>
        <Grid item>
          <Rating
            id={this.props.key}
            defaultValue={0}
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            controlled
            value={this.props.star}
            onChange={this.props.handleSkillsChangeStar}
          />
        </Grid>
        <Grid item>
          <ButtonGroup variant="contained">
            <Button color="secondary" onClick={this.props.onClick}>
              <DeleteIcon />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }
}
export default RatingField;
