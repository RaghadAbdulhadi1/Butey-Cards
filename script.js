class ClockComponents {
  constructor() {
    this.center = document.createElement("div");
    this.center.setAttribute("class", "clock-center");

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
    this.clock.appendChild(this.twelve);
    this.clock.appendChild(this.nine);
    this.clock.appendChild(this.three);
    this.clock.appendChild(this.six);

    this.clock.appendChild(this.hoursHand);
    this.clock.appendChild(this.minutesHand);
    this.clock.appendChild(this.secondsHand);

    this.container.appendChild(this.clock);
    console.log(this.clock);
  }
}

class RenderPage {
  constructor() {
    const clock = new Clock();
  }
}

const renderPage = new RenderPage();
