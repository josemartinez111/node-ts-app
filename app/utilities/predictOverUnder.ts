// FILE: utilities/predictOverUnder.ts
// _______________________________________________

import { getValueOrDefault } from "../utilities/getValueOrDefault";
import { BaseballGameData, GameBaseballType, Sport } from "../types/types.shared";
// _______________________________________________

export const predictOverUnder = (data: GameBaseballType): string => {
	let totalScored = data.team1.scored + data.team2.scored;
	let totalAllowed = data.team1.allowed + data.team2.allowed;
	
	if (data.sport.toLowerCase() === Sport.BASE_BALL) {
		const baseballData = data as BaseballGameData;
		totalScored += getValueOrDefault(baseballData.team1.whip, 0);
		totalAllowed += getValueOrDefault(baseballData.team1.era, 0);
	}
	
	const avgAdjuster = 0.07; // !!!ADJUST THE OVER/UNDER RATIO!!!
	const totalGamesPlayed =
		getValueOrDefault(data.team1.totalGamesPlayed, 0) + getValueOrDefault(data.team2.totalGamesPlayed, 0);
	
	const averageScorePerGame = (totalScored + totalAllowed) / totalGamesPlayed;
	const revisedAvgScorePerGame: number = Number((averageScorePerGame + avgAdjuster).toFixed(2));
	const revisedOverUnderLine = getValueOrDefault(data.overUnderLine, 0);
	
	console.log("_____________________________________________________");
	console.log(`Over/Under Line: ${ revisedOverUnderLine }`);
	console.log(`Average Score Per Game: ${ revisedAvgScorePerGame }`);
	console.log("_____________________________________________________");
	
	return revisedAvgScorePerGame > revisedOverUnderLine ? "Over\n" : "Under\n";
};
// ____________________________________________________________________
