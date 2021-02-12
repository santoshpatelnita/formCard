import React from 'react'
import { Form, Field, useForm } from "@leveluptuts/fresh";
import { useDispatch, useSelector } from 'react-redux';


export default function From() {
    const dispatch = useDispatch()
    
    // console.log(localdata)
    const Form_data = useSelector(state => state.form_data)
    const { data } = useForm()
    // const formData = []



    const onSubmit = () => {
        let formData = data.defaults
        Form_data.push(formData)
        dispatch({ type: 'FORM_DATA', payload: Form_data })
    }

    return (
        <div>
            <Form formId="defaults" onSubmit={onSubmit} cancelButton={false} >
                <Field>Name of the Dish</Field>
                <Field>Ingredient Name</Field>
                <Field>Ingredient Quantity</Field>
                <Field>Unit Ingredient QTY</Field>
                <Field>Steps to Cook</Field>
                <Field>Picture URL</Field>
            </Form>
        </div>
    )
}
