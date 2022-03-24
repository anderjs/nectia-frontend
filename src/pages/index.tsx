import React from "react";
import {
  Button,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";

import {
  AccountCircle,
  RemoveRedEye,
  RemoveRedEyeSharp,
} from "@mui/icons-material";

// - Hooks
import useForm from "src/hooks/useForm";
import useToggle from "src/hooks/useToggle";

// - Assets
import settings from "src/assets/img/settings.png";
import data from "src/assets/img/data.png";
import Color from "src/assets/colors";

// - CSS Modules
import styles from "./styles.module.css";

const View: React.FunctionComponent = () => {
  const { form, handleChange } = useForm({
    username: "",
    password: "",
  });

  const mask = useToggle();

  const handleClickButton = () => {
    mask.handleSwitchStatus();
  };

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
                label="Username"
                name="username"
                placeholder="nectia@software.com..."
                onChange={handleChange}
                type="text"
                value={form.username}
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                placeholder="********"
                onChange={handleChange}
                type="password"
                value={form.password}
                inputProps={{
                  endAdornment: (
                    <Box component="div" onClick={handleClickButton}>
                      <InputAdornment position="end">
                        {mask.status ? <RemoveRedEye /> : <RemoveRedEyeSharp />}
                      </InputAdornment>
                    </Box>
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
              <Button className={styles.information} variant="outlined">
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
              color={Color.INFO}
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
        </Grid>
      </Grid>
    </div>
  );
};

export default View;
