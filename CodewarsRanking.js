// https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/javascript
// COMPLETED💪

const ranksArray = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];

const _calcProgressToAdd = (diff) => {
	if (diff <= -2) return 0;
	if (diff === -1) return 1;
	if (diff === 0) return 3;

	return 10 * diff * diff;
};

class User {
	constructor() {
		this._rankIdx = 0;
		this.progress = 0;
	}

	get rank() {
		return ranksArray[this._rankIdx];
	}

	set rank(rank) {
		this._rankIdx = ranksArray.findIndex((e) => e === Number(rank));
	}

	incProgress(activityRank) {
		const lastRankIdx = ranksArray.length - 1;
		if (this._rankIdx === lastRankIdx) return;

		const activityIdx = ranksArray.findIndex(
			(e) => e === Number(activityRank)
		);
		if (activityIdx === -1) return;

		const diff = activityIdx - this._rankIdx;

		const progressToAdd = _calcProgressToAdd(diff);

		const progressSum = progressToAdd + this.progress;

		const ranksFromProgress = Math.floor(progressSum / 100);

		const ranksSum = this._rankIdx + ranksFromProgress;

		if (ranksSum > lastRankIdx) {
			this._rankIdx = lastRankIdx;
			this.progress = 0;
			return;
		}

		this._rankIdx = ranksSum;

		const progressLeft = progressSum % 100;

		this.progress = progressLeft;
	}
}
