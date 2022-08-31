class ClockComponents {
  constructor() {
    this.center = document.createElement("div");
    this.center.setAttribute("class", "clock-center");

    this.dotCenter = document.createElement("div");
    this.dotCenter.setAttribute("class", "dot-center");

    this.twelve = document.createElement("div");
    this.twelve.setAttribute("class", "clock-12");
    this.twelve.innerHTML = "12";

    this.nine = document.createElement("div");
    this.nine.setAttribute("class", "clock-9");
    this.nine.innerHTML = "9";

    this.three = document.createElement("div");
    this.three.setAttribute("class", "clock-3");
    this.three.innerHTML = "3";

    this.six = document.createElement("div");
    this.six.setAttribute("class", "clock-6");
    this.six.innerHTML = "6";
  }
}

class HoursHand {
  constructor() {
    this.hoursHand = document.createElement("div");
    this.hoursHand.setAttribute("class", "hours-hand");
  }
  get HoursHand() {
    return this.hoursHand;
  }
}

class MinutesHand {
  constructor() {
    this.minutesHand = document.createElement("div");
    this.minutesHand.setAttribute("class", "minutes-hand");
  }
  get MinutesHand() {
    return this.minutesHand;
  }
}

class SecondsHand {
  constructor() {
    this.secondsHand = document.createElement("div");
    this.secondsHand.setAttribute("class", "seconds-hand");
  }
  get SecondsHand() {
    return this.secondsHand;
  }
}

class Clock extends ClockComponents {
  constructor() {
    super();
    this.container = document.getElementById("container");
    this.clock = document.createElement("div");
    this.clock.setAttribute("class", "clock-container");

    this.hoursHand = new HoursHand().HoursHand;
    this.minutesHand = new MinutesHand().MinutesHand;
    this.secondsHand = new SecondsHand().SecondsHand;

    this.clock.appendChild(this.center);
    this.center.appendChild(this.dotCenter);
    this.clock.appendChild(this.twelve);
    this.clock.appendChild(this.nine);
    this.clock.appendChild(this.three);
    this.clock.appendChild(this.six);

    this.center.appendChild(this.hoursHand);
    this.center.appendChild(this.minutesHand);
    this.center.appendChild(this.secondsHand);

    this.container.appendChild(this.clock);

    setInterval(() => this.setClock(), 1000);
  }
  setClock() {
    this.currentDate = new Date();
    this.secondsRatio = this.currentDate.getSeconds() / 60;
    this.minutesRatio = (this.secondsRatio + this.currentDate.getMinutes()) / 60;
    this.hoursRatio = (this.minutesRatio + this.currentDate.getHours()) / 12;

    this.setRotation(this.hoursHand, this.hoursRatio);
    console.log(this.hoursRatio*360,"hours");
    this.setRotation(this.minutesHand, this.minutesRatio);
    console.log(this.minutesRatio*360, "minutes");
    
    this.setRotation(this.secondsHand, this.secondsRatio);
    console.log(this.secondsRatio*360, "seconds");
  }

  setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
  }
}

class RenderPage {
  constructor() {
    const clock = new Clock();
  }
}

const renderPage = new RenderPage();
