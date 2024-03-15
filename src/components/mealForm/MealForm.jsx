import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const MealForm = ({ mealForm, setMealForm, totalMealsAvailable, errors }) => {
  const handleChange = (e) => {
    setMealForm({ ...mealForm, [e.target.name]: e.target.value });
  };

  const handleDateChange = (name, value) => {
    setMealForm({ ...mealForm, [name]: value });
  };

  return (
    <div className="w-[350px] lg:w-[400px] xl:w-[500px] flex justify-center">
      <form
        action="submit"
        className="w-full flex flex-col justify-evenly h-96 rounded-lg shadow-md py-4 px-8"
      >
        <Box>
          <FormControl fullWidth error={Boolean(errors.mealType)}>
            <InputLabel id="meal" size="small">
              Meal type
            </InputLabel>
            <Select
              id="meal"
              label="Meal type"
              value={mealForm.mealType}
              onChange={handleChange}
              name="mealType"
              size="small"
            >
              <MenuItem value={'Breakfast'}>Breakfast</MenuItem>
              <MenuItem value={'Lunch'}>Lunch</MenuItem>
              <MenuItem value={'Snack'}>Snack</MenuItem>
              <MenuItem value={'Supper'}>Supper</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {errors.mealType && (
          <span className="text-xs ml-3 text-red-600">{errors.mealType}</span>
        )}

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['TimePicker']}>
            <TimePicker
              label="Delivery time"
              value={mealForm.deliveryTime}
              onChange={(newValue) =>
                handleDateChange('deliveryTime', newValue)
              }
              slotProps={{
                textField: {
                  size: 'small',
                  error: Boolean(errors.deliveryTime),
                  fullWidth: true,
                },
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
        {errors.deliveryTime && (
          <span className="text-xs ml-3 text-red-600">
            {errors.deliveryTime}
          </span>
        )}

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Date"
              value={mealForm.date}
              onChange={(newValue) => handleDateChange('date', newValue)}
              slotProps={{
                textField: {
                  size: 'small',
                  error: Boolean(errors.date),
                  fullWidth: true,
                },
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
        {errors.date && (
          <span className="text-xs ml-3 text-red-600">{errors.date}</span>
        )}

        <div className="w-full mt-2">
          <TextField
            type="number"
            label="Meals Received/Prepared"
            variant="outlined"
            value={mealForm.mealsReceived}
            onChange={handleChange}
            error={Boolean(errors.mealsReceived)}
            name="mealsReceived"
            size="small"
            fullWidth
          />
        </div>
        {errors.mealsReceived && (
          <span className="text-xs ml-3 text-red-600">
            {errors.mealsReceived}
          </span>
        )}

        <div className="w-full mt-2">
          <TextField
            type="number"
            label="Meals from previous days"
            variant="outlined"
            value={mealForm.mealsFromPreviousDays}
            onChange={handleChange}
            error={Boolean(errors.mealsFromPreviousDays)}
            name="mealsFromPreviousDays"
            size="small"
            fullWidth
          />
        </div>
        {errors.mealsFromPreviousDays && (
          <span className="text-xs ml-3 text-red-600">
            {errors.mealsFromPreviousDays}
          </span>
        )}

        <div className="w-full flex justify-between items-center">
          <span className="text-lg font-medium text-center border border-stone-500 bg-stone-100 rounded-lg px-4 py-1">
            {totalMealsAvailable}
          </span>
          <span className="font-medium text-gray-900">
            Total Meals Available
          </span>
        </div>
      </form>
    </div>
  );
};

export default MealForm;
