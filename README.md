## In-Flight Documentation

[Mon, Oct 11](day://2021.10.11)

**Setup**


	- Create project with [vite](craftdocs://open?blockId=03D64DD9-B8DA-491F-8186-DDF153987D06&spaceId=35b7910a-02c9-b6ae-7bc0-106a5eab9e46)
		- `react-hook-form-yup` 
	- Added to Github


	- Added dependencies

    ```javascript
    npm install react-hook-form @hookform/resolvers yup
    ```

		- See [@hookform/resolvers](craftdocs://open?blockId=EEBC38A4-3322-48FB-BD62-AFCD2BFBF8F8&spaceId=35b7910a-02c9-b6ae-7bc0-106a5eab9e46), [Yup](craftdocs://open?blockId=52ADA131-E902-4A81-A854-276F4A1A5411&spaceId=35b7910a-02c9-b6ae-7bc0-106a5eab9e46)

**Create **Simple Form**** 


	- Created simple form and destructured values from **`[useForm](craftdocs://open?blockId=FCDE87F5-1FCB-4491-8DEB-CFA650A59847&spaceId=35b7910a-02c9-b6ae-7bc0-106a5eab9e46)`**

	**re: `[register](craftdocs://open?blockId=C66FE3CD-3361-4D8B-86DC-7313E696C8CD&spaceId=35b7910a-02c9-b6ae-7bc0-106a5eab9e46)`** 

	One of the differences between this demo and the usual application in [AndGo](craftdocs://open?blockId=A63E5507-0DC4-4BD7-B97E-9C171B7B1A97&spaceId=35b7910a-02c9-b6ae-7bc0-106a5eab9e46) is the use of the `register` method for binding form elements to `React Hook Form` . `register` is used to bind default `<form>` elements (<`input />` ) . This cannot be used to bind custom components or components from a UI library <`<Input />` ) . An application using non-standard or custom form elements should bind them using the **`[Controller](craftdocs://open?blockId=E5CA90AA-B57A-4B85-9E01-51CC161AB294&spaceId=35b7910a-02c9-b6ae-7bc0-106a5eab9e46)`** wrapper. 

**Create Simple Schema**


	- Defined a simple schema using `Yup` syntax

	See [Promises in Yup](craftdocs://open?blockId=B9B1ADEE-243B-4D47-8E16-9904646165F7&spaceId=35b7910a-02c9-b6ae-7bc0-106a5eab9e46), [Factory Methods in Yup](craftdocs://open?blockId=34CFD649-09B3-4CEE-96E8-D47196595B7E&spaceId=35b7910a-02c9-b6ae-7bc0-106a5eab9e46)

**Create Event Handler**


	- Defined `onSubmitHandler` to print submission data and clear form on submission

**Register `<input>` elements** 


	- Spread in `register` props for each `<input>` 

    ```javascript
    <input 
    	{…register('email')}
    	placeholder="email"
    	type="email"
    	required
    />
    ```


**Added Error Messages to `<input>` elements** 


	- Adds conditionally rendered error messages
