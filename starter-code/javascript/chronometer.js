class Chronometer {
    constructor() {
        this.currentMillis = 0;
        this.intervalId = 0;
    }

    startClick() {
        this.intervalId = setInterval(() => {
            this.currentMillis++;
            this.setTime();
            printTime(this.minutes, this.seconds, this.millis);
        }, 1)
    }

    setMinutes() {
        return Math.floor((this.currentMillis / 60));
    }

    setSeconds() {
        return Math.floor((this.currentMillis % 60));
    }

    twoDigitsNumber(number) {
        return '0'.concat(number.toString()).slice(-2);
    }

    setTime() {
        this.minutes = this.twoDigitsNumber(this.setMinutes());
        this.seconds = this.twoDigitsNumber(this.setSeconds());
        this.millis = this.twoDigitsNumber(this.setMilliseconds());
    }

    setMilliseconds() {
        let n = Math.floor(this.currentMillis / 100);
        console.log(n);
        return n;
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

