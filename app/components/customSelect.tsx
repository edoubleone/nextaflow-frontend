import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from "@mui/material/Select";

interface SelectOption {
  value: string | number;
  label: string;
}

interface CustomSelectProps {
  label: string;
  value: string | number;
  options: SelectOption[];
  onChange: (value: string) => void;
  required?: boolean;
  name?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  options,
  onChange,
  required = false,
  name,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <Box sx={{ width: "100%", mb: 2 ,}}>
      <FormControl fullWidth required={required}>
        <InputLabel
          id={`select-label-${label}`}
          sx={{
            fontSize: "0.85rem",
            color: "#6b7280",
            "&.Mui-focused": {
              color: "#000",
            },
          }}
        >
          {label}
        </InputLabel>
        <Select
          labelId={`select-label-${label}`}
          id={`select-${label}`}
          value={value as string}
          label={label}
          name={name}
          onChange={handleChange}
          sx={{
            height: "46px",
            borderRadius: "6px",
            marginTop: "5px",
            fontSize: "0.875rem",
            color: "#1a1a1a",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#d8dadc",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#000",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#000",
              borderWidth: "2px",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ fontSize: "0.875rem" }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
