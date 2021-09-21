import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { upload } from "../actions/upload";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Red Handed
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");

  const style = {
    display: "inline-block",
    fontSize: 20,
  };
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const onTopicChange = (event) => {
    const e = event.target.value;
    setTopic(e);
  };
  const onSubjectChange = (event) => {
    const e = event.target.value;
    setSubject(e);
  };
  const onFileUpload = (e) => {
    e.preventDefault();
    console.log(file)
  
    upload(topic, subject, file);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AttachFileIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Upload your Test
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="topic"
              label="topic"
              name="topic"
              autoComplete="topic"
              onChange={onTopicChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="subject"
              label="subject"
              type="subject"
              id="subject"
              onChange={onSubjectChange}
            />

            <input type="file" style={style} onChange={onFileChange} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onFileUpload}
            >
              Proceed to Uploading
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  <Typography>Red Handed</Typography>
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
