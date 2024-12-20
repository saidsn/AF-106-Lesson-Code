import { Button, FilledInput, Input, InputLabel } from "@mui/material";
import React from "react";
import Person3Icon from "@mui/icons-material/Person3";

import Radio from "@mui/material/Radio";

import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { AccountCircle } from "@mui/icons-material";
import PasswordInput from "../input/PasswordInput";

const MaterualUI = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  return (
    <div>
      <PasswordInput color={"error"} />
      <PasswordInput color={"success"} />
      {/* <TextField
        label="Outlined"
        slotProps={{
          input: {
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          },
        }}
      /> */}

      {/* <TextField
        color="success"
        variant="filled"
        label="Name"
        position="start"
      />
      <TextField
        color="warning"
        variant="standard"
        label="Name"
        position="end"
      /> */}
      {/* <Radio
        style={style}
        className="radio"
        checked={selectedValue === "a"}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
      />
      <Radio
        checked={selectedValue === "b"}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ "aria-label": "B" }}
        color="success"
      />
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
      <Button disabled variant="outlined" color="error" size="small">
        Ckick me
      </Button>
      <Button
        startIcon={<Person3Icon />}
        color="success"
        variant="contained"
        size="medium"
      >
        Ckick me
      </Button>
      <Button
        endIcon={<Person3Icon />}
        variant="outlined"
        color="error"
        size="large"
      >
        Ckick me
      </Button> */}
    </div>
  );
};

export default MaterualUI;
