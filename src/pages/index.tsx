import React from "react";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import {
  AccountCircle,
  RemoveRedEye,
  RemoveRedEyeSharp,
} from "@mui/icons-material";

// - Hooks
import useAuth from "src/hooks/useAuth";
import useForm from "src/hooks/useForm";
import useToggle from "src/hooks/useToggle";

// - Assets
import settings from "src/assets/img/settings.png";
import data from "src/assets/img/data.png";
import atom from "src/assets/img/atom.png";

import Color from "src/assets/colors";

// - CSS Modules
import styles from "./styles.module.css";

const View: React.FunctionComponent = () => {
  const { form, handleChange } = useForm({
    email: "",
    password: "",
  });

  const mask = useToggle();

  const { handleAuthenticate, user, loading } = useAuth();

  return (
    <div className={styles.layout}>
      <Grid container>
        <Grid item xs={12} md={2} />
        <Grid item xs={12} md={4}>
          <Grid p={1} direction="column" justifyContent="start" container>
            <Typography color={Color.PRIMARY} variant="overline">
              Connect to your account!
            </Typography>
            <Grid item xs={12}>
              <TextField
                autoComplete="new-password"
                variant="outlined"
                onChange={handleChange}
                value={form.email}
                type="email"
                placeholder="nectia@software.com..."
                label="Username"
                name="username"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="end">
                        <AccountCircle />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <TextField
                autoComplete="new-password"
                variant="outlined"
                onChange={handleChange}
                value={form.password}
                type={mask.status ? "text" : "password"}
                placeholder="********"
                label="Password"
                name="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="Password Mask"
                        onClick={() => mask.handleSwitchStatus()}
                      >
                        {mask.status ? <RemoveRedEye /> : <RemoveRedEyeSharp />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                className={styles.link}
                color={Color.SECONDARY}
                variant="overline"
              >
                Not a member? Create an account
              </Typography>
              <br />
              <Button
                color="primary"
                className={styles.information}
                variant="contained"
                onClick={() => handleAuthenticate(form.email, form.password)}
              >
                Login
              </Button>
            </Grid>
            <br />
            <img src={data} alt="settings" width={224} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography color={Color.PRIMARY} textAlign="center" variant="h5">
            System Management Builder
          </Typography>
          <div className={styles.information}>
            <Typography
              color={Color.PRIMARY}
              textAlign="center"
              variant="overline"
            >
              For your delivery system
            </Typography>
          </div>
          <div className={styles.information}>
            <img alt="settings" src={settings} />
          </div>
          <br />
          <Divider />
          <div className={styles.information}>
            <Typography
              color={Color.PRIMARY}
              textAlign="center"
              variant="overline"
            >
              The user management system is a system that helps to manage the
              users of a website or application. It is a system that helps to
              keep track of the users and their activity. It is a system that
              helps to make sure that the users are able to access the website
              or application.
            </Typography>
          </div>
          <Divider />
          <div className={styles.information}>
            <img alt="develop by" src={atom} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default View;
