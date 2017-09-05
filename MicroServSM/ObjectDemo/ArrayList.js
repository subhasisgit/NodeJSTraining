Data=[];
Data.push(6666);
Data.push("Subh");
Data.push(true);
Data.push(11.11);
Data.push(new Date());

console.log(Data)

for (i=0;i<10;i++){

    Data.push(Math.random())
}

console.log("2nd", Data);

var result = Array.from("Hello Collections");
console.log("Array from", result);


function isBigEnough(value) {
    return value >= 10;

}

var filtered = [12, 5, 22, 130, 44].filter(isBigEnough)
console.log("Filter", filtered);

function testNumber(value) {
    console.log("typeof",typeof(value));
    return typeof(value) == 'number';
}
var filteredData=Data.filter(testNumber);
console.log("Filter Number", filteredData)

//enhanced for loop
console.log("enhanced loop");
for (pos in Data)
{
    if (pos<5)
    console.log(Data[pos])
}


//union operation
var loanSet = new Set([122,133,144,155,166]);
var fixedSet = new Set([122,133,444,555,666]);
var result = new Set([...loanSet, ...fixedSet])
console.log("Union", result);

var intresult = new Set ([...loanSet].filter(x => fixedSet.has(x)));
console.log("Intersection", intresult);



function restParam(...data) {
    if (typeof(data == 'object'))
    {
        for (pos in data) {
            for (pos1 in data[pos]) {
                var arr=data[pos][pos1];
                //console.log(arr.join());
            }
        }
    }
    console.log(data.join('--'));

}
restParam('TN',"KA", 'OD');
restParam(new Array('TN',"OD"));
restParam(new Array('TN'));
restParam();



customerMap=new Map([
    ["ID", 3333],
    ["Name", "Subh"]
]);
customerMap.set("address", "Blore")
console.log(customerMap);
console.log("DisName", customerMap.get("Name"));
for (var key of customerMap.keys()){
    console.log(key);
}

for (var key of customerMap.values()){
    console.log(key);
}

for (var [key, value] of customerMap.entries())  {
    console.log(key + "=" + value);
}