import WorkOut from './WorkOut.js';
export default class Running extends WorkOut {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calPace();
    this._setDescription();
  }

  calPace() {
    this.pace = this.duration / this.distance; // min/km
    return this.pace;
  }
}
