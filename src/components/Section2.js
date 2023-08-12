import React, { useState } from "react";

function Section() {
	let [error, setError] = useState("");
	let [msg, setMsg] = useState("");
	let [result, setResult] = useState("");

	let input1 = document.getElementsByClassName("num1")[0];
	let input2 = document.getElementsByClassName("num2")[0];

	function colors() {
		let err = document.getElementsByClassName("error")[0];
		if (error === "Error!") {
			console.log(error);
			err.style.color = "red";
		}
		if (error === "Success!") {
			console.log(error);
			err.style.color = "blue";
		}
	}

	function validate() {
		const trimmedInput1 = input1.value.trim();
		const trimmedInput2 = input2.value.trim();

		if (trimmedInput1 === "") {
			setError("Error!");
			setMsg("Num1 cannot be empty");
			setResult("");
			return false;
		} else if (trimmedInput2 === "") {
			setError("Error!");
			setMsg("Num2 cannot be empty");
			setResult("");
			return false;
		} else if (isNaN(trimmedInput1)) {
			setError("Error!");
			setMsg("num1 is not a number");
			setResult("");
			return false;
		} else if (isNaN(trimmedInput2)) {
			setError("Error!");
			setMsg("num2 is not a number");
			setResult("");
			return false;
		} else {
			setError("Success!");
			setMsg("");
			return true;
		}
	}

	// function add() {
	// 	if (validate()) {
	// 		const num1 = parseFloat(input1.value);
	// 		const num2 = parseFloat(input2.value);
	// 		setResult("Result:- " + (num1 + num2));
	// 		colors();
	// 	}
	// }

	// function subtract() {
	// 	if (validate()) {
	// 		const num1 = parseFloat(input1.value);
	// 		const num2 = parseFloat(input2.value);
	// 		setResult("Result:- " + (num1 - num2));
	// 		colors();
	// 	}
	// }

	// function multiply() {
	// 	if (validate()) {
	// 		const num1 = parseFloat(input1.value);
	// 		const num2 = parseFloat(input2.value);
	// 		setResult("Result:- " + num1 * num2);
	// 		colors();
	// 	}
	// }

	// function divide() {
	// 	if (validate()) {
	// 		const num1 = parseFloat(input1.value);
	// 		const num2 = parseFloat(input2.value);
	// 		setResult("Result:- " + num1 / num2);
	// 		colors();
	// 	}
	// }

	function calculate(operation) {
		if (validate()) {
			const num1 = parseFloat(input1.value);
			const num2 = parseFloat(input2.value);
			let calculateResult;

			switch (operation) {
				case "add":
					calculateResult = num1 + num2;
					break;
				case "subtract":
					calculateResult = num1 - num2;
					break;
				case "multiply":
					calculateResult = num1 * num2;
					break;
				case "divide":
					calculateResult = num1 / num2;
					break;
				default:
					break;
			}

			setResult("Result: " + calculateResult);
			colors();
		}
	}

	return (
		<div className="calculator-inner">
			<h2>React Calculator</h2>
			<input
				type="text"
				placeholder="NUM 1"
				className="num1"
				ref={(input) => (input1 = input)}
			/>
			<br />
			<br />
			<input
				type="text"
				placeholder="NUM 2"
				className="num2"
				ref={(input) => (input2 = input)}
			/>
			<br />
			<br />
			<div className="btns">
				{/* <button className="add" onClick={add}>
					+
				</button>
				<button className="subtract" onClick={subtract}>
					-
				</button>
				<button className="multiply" onClick={multiply}>
					*
				</button>
				<button className="divide" onClick={divide}>
					/
				</button> */}

				<button className="add" onClick={() => calculate("add")}>
					+
				</button>
				<button
					className="subtract"
					onClick={() => calculate("subtract")}
				>
					-
				</button>
				<button
					className="multiply"
					onClick={() => calculate("multiply")}
				>
					*
				</button>
				<button className="divide" onClick={() => calculate("divide")}>
					/
				</button>
			</div>

			<p className="error">{error}</p>
			<p className="msg">{msg}</p>
			<p className="result">{result}</p>
		</div>
	);
}

export default Section;
