import { MouseEvent, useState } from 'react';
import { useDatePicker } from '@rehookify/datepicker';
import Header from './header';
const DatePickerTwo = () => {
    const [selectedDates, onDatesChange] = useState<Date[]>([]);
    const {
        data: { weekDays, calendars },
        propGetters: { dayButton, previousMonthButton, nextMonthButton },
    } = useDatePicker({
        selectedDates,
        onDatesChange,
    });

    // calendars[0] is always present, this is an initial calendar
    const { year, month, days } = calendars[0];

    const onDayClick = (evt: MouseEvent<HTMLElement>, date: Date) => {
        // In case you need any action with evt
        evt.stopPropagation();

        // In case you need any additional action with date
        console.log(date);
        console.log(days);
    };

    // selectedDates is an array of dates
    // formatted with date.toLocaleDateString(locale, options)
    return (
        <section>
            <header>
                <div>
                    <button {...previousMonthButton()}>&lt;</button>
                    <p>
                        {month} {year}
                    </p>
                    <button {...nextMonthButton()}>&gt;</button>
                </div>
                <ul>
                    {weekDays.map((day) => (
                        <li key={`${month}-${day}`}>{day}</li>
                    ))}
                </ul>
            </header>

            <Header
                nextMonthButton={nextMonthButton}
                previousMonthButton={previousMonthButton}
                month={`${month}-${year}`}
            />

            <ul>
                {days.map((dpDay) => (
                    <li key={`${year}-${month}-${dpDay.day}`}>
                        <button {...dayButton(dpDay, { onClick: onDayClick })}>
                            {`${year}-${dpDay.month}-${dpDay.day}`}
                            {console.log(dpDay)}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default DatePickerTwo;
