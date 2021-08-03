const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let totalBatteries = 0;
// for (const element of batteryBatches){
//     totalBatteries = reducer(totalBatteries, element);
//     console.log(totalBatteries);
// }

const totalBatteries = batteryBatches.reduce(function(accumulator, element){return element + accumulator}, 0);
console.log(totalBatteries)