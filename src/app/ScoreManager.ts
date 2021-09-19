export interface Score {
  hits: number;
  points: number;
}

type Observer = (score: Score) => void;

export default class ScoreManager {
  private score: Score = {
    hits: 0,
    points: 0,
  };

  private _observers: Observer[] = [];

  public getScore(): Score {
    return { ...this.score };
  }

  public addHit() {
    this.score.hits++;
    this._notify();
  }

  public subscribe(observer: Observer) {
    this._observers.push(observer);
  }

  private _notify() {
    this._observers.forEach((_observer) => _observer(this.score));
  }

  public unsubscribe(observer: Observer) {
    this._observers = this._observers.filter((item) => item !== observer);
  }
}
