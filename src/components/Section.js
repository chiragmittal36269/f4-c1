// import React, { useState } from "react";

// function Section() {
// 	let [error, setError] = useState("");
// 	let [msg, setMsg] = useState("");

// 	let input1 = document.getElementsByClassName("num1")[0];
// 	let input2 = document.getElementsByClassName("num2")[0];

// 	// function validate() {
// 	//     if(input1.value === "" || input1.value === undefined || input1.value)
// 	// }

// 	function validate() {
// 		const trimmedInput1 = input1.value.trim();
// 		const trimmedInput2 = input2.value.trim();

// 		if (trimmedInput1 === "") {
// 			setError("error");
// 			setMsg("Num1 cannot be empty");
// 		} else if (trimmedInput2 === "") {
// 			setError("error");
// 			setMsg("Num2 cannot be empty");
// 		} else if (isNaN(trimmedInput1)) {
// 			setError("error");
// 			setMsg("num1 is not a number please enter valid number");
// 		} else if (isNaN(trimmedInput2)) {
// 			setError("error");
// 			setMsg("num2 is not a number please enter valid number");
// 		} else {
// 			setError("Successfully Solved");
// 		}
// 	}

// 	function add() {}

// 	function subtract() {}

// 	function multiply() {}

// 	function divide() {}

// 	return (
// 		<div>
// 			<h2>React Calculator</h2>
// 			<input type="text" placeholder="NUM 1" className="num1" />
// 			<br />
// 			<br />
// 			<input type="text" placeholder="NUM 2" className="num2" />
// 			<br />
// 			<br />
// 			<button className="validate, add" onClick={add}>
// 				Addition
// 			</button>
// 			<button className="subtract" onClick={subtract}>
// 				Subtraction
// 			</button>
// 			<button className="multiply" onClick={multiply}>
// 				Multiplication
// 			</button>
// 			<button className="divide" onClick={divide}>
// 				Division
// 			</button>

// 			<p className="error">{error}</p>
// 			<p className="msg"></p>
// 		</div>
// 	);
// }

// export default Section;


















































