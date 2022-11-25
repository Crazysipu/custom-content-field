import { Combobox, ComboboxOption } from '@strapi/design-system/Combobox';
import { Field, FieldLabel } from '@strapi/design-system/Field';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Stack } from '@strapi/design-system/Stack';
import { useIntl } from 'react-intl';
const SelectDropdown = ({
    value,
    onChange,
    name,
    intlLabel,
    labelAction,
    required,
    attribute,
    description,
    placeholder,
    disabled,
    error,
}
) => {
    //const [value1, setValue1]= useState('')
    const { formatMessage, messages } = useIntl()
    //const [getCountry, setCountry] = useState([]);
    const getCountry= ['Andorra', 'United Arab Emirates', 'Afghanistan', 'Antigua and Barbuda', 'Anguilla', 'Albania', 'Armenia', 'Angola', 'Argentina', 'American Samoa', 'Austria', 'Australia', 'Aruba', 'Aland Islands', 'Azerbaijan', 'Bosnia and Herzegovina', 'Barbados', 'Bangladesh', 'Belgium', 'Burkina Faso', 'Bulgaria', 'Bahrain', 'Burundi', 'Benin', 'Saint Barthelemy', 'Bermuda', 'Brunei', 'Bolivia', 'Bonaire, Saint Eustatius and Saba', 'Brazil', 'Bahamas', 'Bhutan', 'Botswana', 'Belarus', 'Belize', 'Canada', 'Cocos Islands', 'Democratic Republic of the Congo', 'Central African Republic', 'Republic of the Congo']
    // useEffect(() => {
    //     axios
    //         .get(
    //             "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
    //         )
    //         .then((response) => {
    //             const country = [...new Set(response.data.map((item) => item.country))];
    //             console.log(country,"country data");
    //             console.log(response,"responseee");
    //             setData(response.data);
    //             setCountry(country)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);
    // useEffect(()=>{
    // value 
    // },[value ])
    // useEffect(()=>{
    //     console.log(stateValue, "statevalue")
    //     },[stateValue ])
    //     const handleCountry = ( value) => {
    //         let states = data.filter((state) => state.country === value);
    //         states = [...new Set(states.map((item) => item.subcountry))];
    //         states.sort();
    //         console.log("handlecountry")
    //         setState(states); 
    //     };

    return (
        <Field
            name={name}
            id={name}
            error={error}
            hint={description && formatMessage(description)}
        >
            <Stack spacing={1}>
                <FieldLabel action={labelAction} required={required}>
                    {formatMessage(intlLabel)}
                </FieldLabel>
                <Combobox
                    //placeholder={placeholder && formatMessage(placeholder)}
                    //aria-label={formatMessage(intlLabel)}
                    aria-disabled={disabled}
                    aria-label="Food"
                    disabled={disabled}
                    value={value}
                    onChange={country=> {onChange({ target: { name,value: country, type: attribute.type} })
                    //setValue1(value)
                    console.log(country,"country data")
                }}
                 >
                {getCountry.map((country) =>
                    <ComboboxOption key={country} value={country}>{country}</ComboboxOption>)}
            </Combobox>  
        </Stack>
        </Field >  
    );{/* <Combobox label="State" value={stateValue} onChange={setStateValue}>
    {getState.map((item) => <ComboboxOption value={item}>{item}</ComboboxOption>)}
</Combobox> */}
}
SelectDropdown.defaultProps = {
    description: null,
    disabled: false,
    error: null,
    labelAction: null,
    required: false,
    value: '',
};

SelectDropdown.propTypes = {
    intlLabel: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    attribute: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.object,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    labelAction: PropTypes.object,
    required: PropTypes.bool,
    value: PropTypes.string,
};
export default SelectDropdown