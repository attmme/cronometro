class Chronometer {
    constructor() {
        this.currentMillis = 0;
        this.currentSeconds = 0;
        this.intervalId = 0;
    }

    startClick() {
        this.intervalId = setInterval(() => {
            this.currentMillis++;
            this.setTime();
            printTime(this.minutes, this.seconds, this.millis);
        }, 1);
    }

    setMinutes() {
        return Math.floor((this.currentSeconds / 60));
    }

    setSeconds() {
        return Math.floor((this.currentSeconds % 60));
    }

    setMilliseconds() {
        this.currentSeconds = (this.currentMillis / 1000);
        //console.log("seconds: ", this.currentSeconds );
        return this.currentMillis;
    }

    twoDigitsNumber(number) {
        return '0'.concat(number.toString()).slice(-2);
    }

    setTime() {
        this.minutes = this.twoDigitsNumber(this.setMinutes());
        this.seconds = this.twoDigitsNumber(this.setSeconds());
        this.millis = this.twoDigitsNumber(this.setMilliseconds());
    }

    stopClick() {
        clearInterval(this.intervalId);
    }

    resetClick() {
        this.currentMillis = 0;
    }

    splitClick() {

    }
}

// let crono = new Chronometer;
//crono.startClick();

