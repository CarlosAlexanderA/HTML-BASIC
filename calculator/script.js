const buttons = document.querySelectorAll("button");
const frame1 = document.getElementById("frameResult");
const frame2 = document.getElementById("framePrev");

let number1, number2, output, sign;

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{

        if (frame1.textContent[0] == "0") frame1.textContent = null
        

        switch (btn.textContent) {
            case "+":
            case "×":
            case "−":
            case "÷":
                if (frame2.textContent[0] == "0") {
                    frame2.textContent = null;
                    frame2.classList.remove("text-transparent")
                }
                number1 = Number(frame1.textContent);
                sign = frame2.textContent.slice(-1);
                if (number2 > 0) {
                    output = operate(number1,number2,sign);
                    console.log(number2)
                    frame2.textContent = output + btn.textContent; 

                }else{
                    frame2.textContent = number1 + btn.textContent; 
                }
                number2 = Number(frame2.textContent.slice(0,-1));
                frame1.textContent = 0;

                break;
            case "=":
                sign = frame2.textContent.slice(-1);
                number1 = Number(frame1.textContent);
                frame2.textContent += frame1.textContent + " =";
                frame1.textContent = operate(number1,number2,sign)
                break;
            case "DELETE":

                if (frame1.textContent != "" && frame1.textContent[0] != "0") {
                    frame1.textContent = frame1.textContent.slice(0,-1);                   
                } 
                if (frame1.textContent.length <= 0) {
                    frame1.textContent = "0";
                }
                

                break; 
            case "CLEAR":
                number1 = 0;
                number2 = 0;
                frame1.textContent = 0;
                frame2.textContent = 0;
                frame2.classList.add("text-transparent");
                break;
            default:
                frame1.textContent += btn.textContent;
                break;
        }

        // console.log(btn.textContent);
    })
})

const operate = (num1, num2, sign) =>{
    let result
    switch (sign) {
        case "+":
            result = num1 + num2; 
            break;
        case "−":
            result = num2 - num1; 
            break;
        case "×":
            result = num1 * num2; 
            break;
        case "÷":
            result = num2 / num1;
            result = result.toFixed(1); 
            console.log(result);
            break;
        default:
            break;
    }
    return result;
};