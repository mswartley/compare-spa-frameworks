import React from 'react';
import {useForm} from 'react-hook-form';
import Button from './Button';

const Form = () => {
    const {
        register,
        watch,
        reset,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            checkbox: false,
            checkedNames: [],
            selectedOne: '',
        }
    });
    const onSubmit = data => console.log('Submitted', JSON.stringify(data));
    const checkbox = watch('checkbox');
    const oneOfThree = watch('oneOfThree');
    const checkedNames = watch('checkedNames');

    return (
        <div>
            <h3 className="text-xl font-normal">This is a Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
                    <label htmlFor="firstName" className="text-md">First Name</label>
                    <input className="col-span-2 px-2 py-1 shadow-sm border text-md border-gray-300 rounded-md" {...register('firstName', {required: 'First Name is required.'})}/>
                    <div className="col-span-2 lg:text-base text-sm text-red-500">
                        { errors?.firstName?.message }
                    </div>
                </div>
                <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
                    <label htmlFor="lastName" className="text-md">Last Name</label>
                    <input className="col-span-2 px-2 py-1 shadow-sm border text-md border-gray-300 rounded-md" {...register('lastName', {required: 'Last Name is required.', minLength: { value: 4, message: 'Last Name should be at least 4 characters long.'}})}/>
                    <div className="col-span-2 lg:text-base text-sm text-red-500">
                        { errors?.lastName?.message }
                    </div>
                </div>
                <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
                    <label htmlFor="checkbox">Checkbox</label>
                    <div>
                        <input type="checkbox" {...register('checkbox')}/>
                        <label className="ml-2" htmlFor="jack">Yes?</label><br/>
                    </div>
                    <div className="col-span-3 text-gray-500">
                        {checkbox ? "Yes!" : "Sadly, no."}
                    </div>
                </div>
                <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
                    <label htmlFor="checkedNames">Checkboxes</label>
                    <div>
                        <input type="checkbox" id="jack" value="Jack" {...register('checkedNames')} />
                        <label className="ml-2" htmlFor="jack">Jack</label><br/>
                        <input type="checkbox" id="john" value="John" {...register('checkedNames')} />
                        <label className="ml-2" htmlFor="john">John</label><br/>
                        <input type="checkbox" id="mike" value="Mike" {...register('checkedNames')} />
                        <label className="ml-2" htmlFor="mike">Mike</label><br/>
                    </div>
                    <div className="col-span-3">
                        Checked names: <span className="text-gray-500">{checkedNames.length === 0 ? 'None' : checkedNames.join(', ')}</span>
                    </div>
                </div>
                <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
                    <label htmlFor="oneOfThree">Radio Buttons</label>
                    <div>
                        <div>
                            <input id="one" type="radio" value="One" {...register('oneOfThree')}/>
                            <label className="ml-2" htmlFor="one">One</label>
                        </div>
                        <div>
                            <input id="two" type="radio" value="Two" {...register('oneOfThree')}/>
                            <label className="ml-2" htmlFor="two">Two</label>
                        </div>
                        <div>
                            <input id="three" type="radio" value="Three" {...register('oneOfThree')}/>
                            <label className="ml-2" htmlFor="three">Three</label>
                        </div>
                    </div>
                    <div className="col-span-3">
                        Picked: <span className="text-gray-500">{oneOfThree || 'None'}</span>
                    </div>
                </div>
                <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
                    <label htmlFor="selectedOne">Select One</label>
                    <select className="col-span-2 px-2 py-1.5 shadow-sm border text-md border-gray-300 rounded-md" {...register('selectedOne', {required: 'Please select something.'})}>
                        <option value=""/>
                        <option value="A">Letter A</option>
                        <option value="B">Letter B</option>
                        <option value="C">Letter C</option>
                    </select>
                    <div className="col-span-2 lg:text-base text-sm text-red-500">
                        { errors?.selectedOne?.message }
                    </div>
                </div>
                <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
                    <div className="col-start-2 col-span-4">
                        <Button type="submit" disabled={!isValid}>Submit</Button>
                        <Button onClick={() => reset()}>Clear</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
