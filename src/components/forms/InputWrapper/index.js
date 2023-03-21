import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './InputWrapper.module.scss'

const InputWrapper = (props) => {
    const {name, ...rest} = props;
    return (
        <label className={styles.label}>
            <Field name={name} >{
                ({dield, form, meta}) => {
                    const classNames = cx(styles.input, {
                        [styles.valid]: meta.touched && !meta.error,
                        [styles.invalid]: meta.touched && meta.error,
                    });
                    return <input className={classNames} {...field} {...rest} />
                }
            } 
            </Field>
            <ErrorMessage name={name} component='span' className={styles.error} />
        </label>
    );
}

export default InputWrapper;
