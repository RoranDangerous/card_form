import { useState } from 'react';

const CardForm = ({ onSubmit }) => {
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: "",
		type: "",
		zip: "",
	});

	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div id="PaymentForm">
			<form action="" onSubmit={onSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Cardholder Name"
					onChange={handleInputChange}
					required
				/>
				<input
					type="text"
					name="number"
					placeholder="Card Number"
					onChange={handleInputChange}
					pattern="[0-9]{16}"
					autoComplete="cc-number"
					required
				/>
				<input
					type="number"
					name="cvc"
					placeholder="CVC"
					max="999"
					pattern="([0-9]|[0-9]|[0-9])"
					onChange={handleInputChange}
					required
				/>
				<input
					type="number"
					name="expiry"
					placeholder="MMYY"
					max="9999"
					onChange={handleInputChange}
					required
				/>
				<input
					type="text"
					name="zip"
					placeholder="Postal/Zip Code"
					onChange={handleInputChange}
					required
				/>
				<button type="submit">Validate</button>
			</form>
		</div>
	)
}

export default CardForm;