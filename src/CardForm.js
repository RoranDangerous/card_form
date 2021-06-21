const CardForm = ({ onSubmit }) => {
	const handleSubmit = e => {
		e.preventDefault();
		onSubmit();
	}

	return (
		<div id="PaymentForm">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Cardholder Name"
					required
				/>
				<select name="type" >
					<option value='visa'>Visa</option>
					<option value='mastercard'>Mastercard</option>
				</select>
				<input
					type="text"
					name="number"
					placeholder="Card Number"
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
					required
				/>
				<input
					type="number"
					name="expiry"
					placeholder="MMYY"
					max="9999"
					required
				/>
				<input
					type="text"
					name="zip"
					placeholder="Postal/Zip Code"
					required
				/>
				<button type="submit">Validate</button>
			</form>
		</div>
	)
}

export default CardForm;