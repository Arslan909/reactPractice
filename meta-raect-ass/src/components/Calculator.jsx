import React from 'react'
import '../calculator.css'


export default function Calculator() {
	let [result, setResult] = React.useState("");

	const handleClick = (e) => {
		if (result.charAt(0) === '0') {
			result = result.slice(1, result.length)
		}
		setResult(result.concat(e.target.name));
	}

	const clear = () => {
		setResult("");
	}
	const backSpace = () => {
		setResult(result.slice(0, result.length - 1))
	}

	function calculate() {
		let calResult = eval(result).toString()
		if (calResult.includes('.')) {
			calResult = parseFloat(calResult).toFixed(5)
		}
		setResult(calResult);

	}
	return (
		<div className='body'>

			<div className='container'>
				{/* <h3>Calculator</h3> */}
				<form>
					<input type="text" className='calDisplay' value={result} />
				</form>

				<div className='keypad'>
					<button className="button clear color" onClick={clear} >AC</button>
					<button className="button backspace color" onClick={backSpace} >C</button>
					<button className="button color" name="/" onClick={handleClick}>/</button>
					<button className="button" name="7" onClick={handleClick}>7</button>
					<button className="button" name="8" onClick={handleClick}>8</button>
					<button className="button" name="9" onClick={handleClick}>9</button>
					<button className="button color" name="*" onClick={handleClick}>*</button>
					<button className="button" name="4" onClick={handleClick}>4</button>
					<button className="button" name="5" onClick={handleClick}>5</button>
					<button className="button" name="6" onClick={handleClick}>6</button>
					<button className="button color" name="-" onClick={handleClick}>-</button>
					<button className="button" name="1" onClick={handleClick}>1</button>
					<button className="button" name="2" onClick={handleClick}>2</button>
					<button className="button" name="3" onClick={handleClick}>3</button>
					<button className="button color" name="+" onClick={handleClick}>+</button>
					<button name="0" className="zero" onClick={handleClick}>0</button>
					<button className="button decimal" name="." onClick={handleClick}>.</button>
					<button onClick={calculate} className="button equal color">=</button>
				</div>
			</div>
		</div>
	)
}
