document.addEventListener("DOMContentLoaded", () => {
    const updateTemperature = () => {
        document.querySelector('#temperature').innerText = thermostat.temperature;
    }
    const thermostat = new Thermostat();
    updateTemperature();

    document.querySelector('#temperature-up').addEventListener('click', () => {
        thermostat.up();
        updateTemperature();
    })

    document.querySelector('#temperature-down').addEventListener('click', () => {
        thermostat.down();
        updateTemperature();
    })

    document.querySelector('#temperature-reset').addEventListener('click', () => {
        thermostat.resetTemperature();
        updateTemperature();
    })

    document.querySelector('#powersaving-on').addEventListener('click', () => {
        thermostat.switchPowerSavingModeOn();
        updateTemperature();
    })

    document.querySelector('#powersaving-off').addEventListener('click', () => {
        thermostat.switchPowerSavingModeOff();
        updateTemperature();
    })
})