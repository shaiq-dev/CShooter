import ScoreManager, { Score } from './app/ScoreManager';
import './styles/styles.less';

const scoreEl = <HTMLInputElement>document.querySelector('[data-score-points]')!;

const updateScoreUi = (score: Score) => {
  scoreEl.innerHTML = `${score.hits}`;
};

const scoreManager = new ScoreManager();
scoreManager.subscribe(updateScoreUi);

scoreManager.addHit();
scoreManager.addHit();
scoreManager.addHit();
