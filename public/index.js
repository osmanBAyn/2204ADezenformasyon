input = document.querySelector("#haber_input");
button = document.querySelector("#haber_send")  
const sonuc = document.querySelector("#sonuc span")
async function getPrediction(text){
    let dataToSend = {
        text
    };
    dataToSend = JSON.stringify(dataToSend);
    console.log(dataToSend)
    let res = await fetch("http://localhost:8080/predict", {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: dataToSend
    });
    let data = await res.json();
    return data;
}
button.addEventListener("click",async ()=>{
    let prediction = await getPrediction(input.value);
    console.log(prediction);
    sonuc.innerHTML = prediction.prediction[0].label
})