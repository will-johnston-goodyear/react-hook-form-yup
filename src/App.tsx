import React from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

type Inputs = {
	email: string,
	password: string,
}

/* 
	Yup Schema Instance 

	Yup uses `factory methods` for generating new instances and properties for schema validation. 

		e.g.: `yup.string().email.required()`
	
	This methods (string(), required()) allow for new Yup objects to be instantiated without using the `new` keyword.
*/
const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(8).max(32).required(),
});

const App = () => {

	const {
		/** Allows registering an element with the form and applying the appropriate validation rules */
		register,
		/** Will only receive form data if validation is successful */
		handleSubmit,
		/** `formState` returns multiple values from the form, including the `errors` object */
		formState: { errors },
		/** Clears the form / resets registered elements to default state */
		reset
	} = useForm<Inputs>({
		/** the `resolver` property in the config object accepts either externally validated schema or user-defined validation */
		resolver: yupResolver(schema),
	});

	const onSubmitHandler = (data : Inputs) => {
		console.log({ data });
		reset();
	}

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Lets sign you in.</h2>
      <br />

			<input
				// Spreads in props associated with `register` method 
				{...register('email')}
				placeholder="email"
				type="email"
				required
			/>
			{/* Conditionally displays error messages */}
			<p>{ errors.email?.message }</p>
      <br />

			<input
				{...register('password')}
        placeholder="password"
        type="password"
        required
      />
			<p>{ errors.password?.message }</p>
      <br />

      <button type="submit">Sign in</button>
    </form>
  );
};

export default App;