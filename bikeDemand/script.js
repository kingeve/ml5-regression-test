const urlParams = new URLSearchParams(window.location.search);
const rentalBikes = document.querySelector("#happiness");
//   //https://www.thetopsites.net/projects/tensorflowjs/
// /The main difference between them is that the output variable in regression is numerical (or continuous) while that for classification is categorical (or discrete).
const options = {
  type: "regression",
  debug: true
};

const modelDetails = {
  model: "model/model.json",
  metadata: "model/model_meta.json",
  weights: "model/model.weights.bin"
};

const neuralNetwork = ml5.neuralNetwork(options);

neuralNetwork.load(modelDetails, predict);

const inputs = {
  Hour: parseInt(urlParams.get('x1')),
  TemperatureC: parseFloat(urlParams.get('x2')),
  Humidity: parseInt(urlParams.get('x3')),
  WindSpeed: parseFloat(urlParams.get('x4')),
  Seasons:  parseInt(urlParams.get('x5')),
  Holiday:  parseInt(urlParams.get('x6')),
  FunctioningDay: parseInt(urlParams.get('x7'))
}

console.log(inputs);

function predict() {
  console.log("predicting");
  neuralNetwork.classify(inputs, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(results[0]);
    // if (results[0].label == 0){
    //   happiness.innerHTML += 'unhappy.';
    //   console.log("unhappy")
    // } else {
    //   console.log("happy")
    //   happiness.innerHTML += 'happy.';
    // }
    // loadDiv.classList.add("hidden");
    // if (targetActive > parseInt(urlParams.get('active'))){
    //   lowPulse.classList.remove("hidden");
    // } else {
    //   highPulse.classList.remove("hidden");
    // }
  });
}
//https://archive.ics.uci.edu/ml/datasets/Seoul+Bike+Sharing+Demand
// Hour - Hour of he day
// Temperature-Temperature in Celsius
// Humidity - %
// Windspeed - m/s
// Seasons - Winter, Spring, Summer, Autumn (1,2,3,4)
// Holiday - Holiday/No holiday (No: 0, Yes: 1)
// Functional Day - NoFunc(Non Functional Hours), Fun(Functional hours) (No: 0, Yes: 1)