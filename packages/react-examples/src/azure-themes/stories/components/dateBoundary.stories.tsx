import * as React from 'react';
import { DatePicker, DayOfWeek, IDatePickerStrings } from '@fluentui/react/lib/DatePicker';
import { addMonths, addYears } from '@fluentui/date-time-utilities';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';

const today: Date = new Date(Date.now());
const minDate: Date = addMonths(today, -1);
const maxDate: Date = addYears(today, 1);

const DayPickerStrings: IDatePickerStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',
  isRequiredErrorMessage: 'Field is required.',
  invalidInputErrorMessage: 'Invalid date format.',
  isOutOfBoundsErrorMessage: `Date must be between ${minDate.toLocaleDateString()}-${maxDate.toLocaleDateString()}`,
};

const controlClass = mergeStyleSets({
  control: {
    margin: '0 0 15px 0',
    maxWidth: '300px',
  },
});

const firstDayOfWeek = DayOfWeek.Sunday;

export const DatePickerBoundedExample: React.FC = () => (
  <div>
    <DatePicker
      className={controlClass.control}
      isRequired={false}
      firstDayOfWeek={firstDayOfWeek}
      strings={DayPickerStrings}
      placeholder="Select a date..."
      ariaLabel="Select a date"
      minDate={minDate}
      maxDate={maxDate}
      allowTextInput={true}
      value={today}
    />
    <DatePicker
      className={controlClass.control}
      firstDayOfWeek={firstDayOfWeek}
      strings={DayPickerStrings}
      placeholder="Select a date..."
      ariaLabel="Select a date"
      disabled={true}
    />
    <DatePicker
      className={controlClass.control}
      label="Disabled (with label)"
      firstDayOfWeek={firstDayOfWeek}
      strings={DayPickerStrings}
      placeholder="Select a date..."
      ariaLabel="Select a date"
      disabled={true}
      value={today}
    />
    <DatePicker
      className={controlClass.control}
      isRequired={false}
      firstDayOfWeek={firstDayOfWeek}
      strings={DayPickerStrings}
      placeholder="Select a date..."
      ariaLabel="Select a date"
      minDate={minDate}
      maxDate={maxDate}
      allowTextInput={true}
    />
  </div>
);