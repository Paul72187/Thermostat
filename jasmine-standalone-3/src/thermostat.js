class Thermostat {

    'use strict';

    constructor() {
        this.DEFAULT_TEMPERATURE = 20;
        this.MINIMUM_TEMPERATURE = 10;
        this.temperature = this.DEFAULT_TEMPERATURE;
        this.MAX_LIMIT_PSM_0N = 25;
        this.MAX_LIMIT_PSM_OFF = 32;
        this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
        this.HIGH_ENERGY_USAGE_LIMIT = 25;
        this.powerSavingMode = true;
    }
    getCurrentTemperature() {
        return this.temperature;
    }
    isMinimumTemperature() {
        return this.temperature === this.MINIMUM_TEMPERATURE;
    }
    isMaximumTemperature() {
        if (this.isPowerSavingModeOn() === false) {
            return this.temperature === this.MAX_LIMIT_PSM_OFF;
        }
        return this.temperature === this.MAX_LIMIT_PSM_ON;
    }
    isPowerSavingModeOn() {
        return this.powerSavingMode === true;
    }
    up() {
        if (this.isMaximumTemperature()) {
            return;
        }
        this.temperature += 1
    }
    down() {
        if (this.isMinimumTemperature()) {
            return;
        }
        this.temperature -= 1
    }
    switchPowerSavingModeOff() {
        this.powerSavingMode = false;
    }
    switchPowerSavingModeOn() {
        this.powerSavingMode = true;
    }
    resetTemperature() {
        this.temperature = this.DEFAULT_TEMPERATURE;
    }
    energyUsage() {
        if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
            return 'low-usage';
        }
        if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
            return 'medium-usage';
        }
        return 'high-usage';
    }
}