import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider ,KeyboardDatePicker} from '@material-ui/pickers'
import React from 'react'

function Datepicker({ name, label, value, onChange }) {
    

    const convertToDefEventPar = (name, value) => ({
        target: {
          name,value
        }
      });
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline"
                inputVariant="outlined" label={label} format="dd/MM/yyyy"
                name={name} value={value}
                onChange={date => onChange(convertToDefEventPar(name, date))} />
        </MuiPickersUtilsProvider>
    )
}


export default Datepicker
