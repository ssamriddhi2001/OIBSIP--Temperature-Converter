const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celtoFah = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }
    const fehtoCel = (feh) => {
        let celcius = Math.round((feh - 32) * 5 / 9);
        return celcius;
    }

    let result;

    if (valueTemp == 'cel') {
        result = celtoFah(numberTemp);
        document.getElementById('result').innerHTML = ` ${result} ° Fahrenheit`;
        document.getElementById('result').style.width = "80%";
        document.getElementById('result').style.padding = "5px";

    }
    else {
        result = fehtoCel(numberTemp);
        document.getElementById('result').innerHTML = ` ${result} ° Celsius`
        document.getElementById('result').style.width = "80%";
        document.getElementById('result').style.padding = "5px";
    }
}