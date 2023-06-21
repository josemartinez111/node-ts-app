// FILE: utilities/utilities1.ts
// _______________________________________________

import { getValueOrDefault } from "../utilities/getValueOrDefault";
import {
	BaseballTeamData,
	Sport,
	TeamBaseBallDataType,
	TeamData,
} from "../types/types.shared";
// _______________________________________________

export const calculateWinPercentagePythagorean = (team: TeamBaseBallDataType): number => {
	const {
		scored,
		allowed,
		headToHeadWins = 0,
		headToHeadLosses = 0,
		homeWins = 0,
		homeLosses = 0,
		awayWins = 0,
		awayLosses = 0,
	} = team;
	
	const pythagoreanWinPercentage = scored ** 2 / (scored ** 2 + allowed ** 2);
	const overallWinPercentage =
		(headToHeadWins / (headToHeadWins + headToHeadLosses) +
			homeWins / (homeWins + homeLosses) +
			awayWins / (awayWins + awayLosses)) / 3;
	
	return 0.7 * pythagoreanWinPercentage + 0.3 * overallWinPercentage;
};
// ____________________________________________________________________

export const calculateEloRating = (
	team1: TeamData | BaseballTeamData,
	team2: TeamData | BaseballTeamData,
	kFactor: number,
): number => {
	const { elo: team1Elo = 1200 } = team1;
	const { elo: team2Elo = 1200 } = team2;
	const expectedWin = 1.0 / (1.0 + 10.0 ** ((team2Elo - team1Elo) / 400.0));
	return team1Elo + kFactor * (1.0 - expectedWin); // Assuming a win.
};
// ____________________________________________________________________

export const calculateSpreadFactor = (team: TeamData | BaseballTeamData, spread: number, sport: string): number => {
	const { homeWins = 0, homeLosses = 0, awayWins = 0, awayLosses = 0 } = team;
	let homeWinPercentage = homeWins / (homeWins + homeLosses);
	let awayWinPercentage = awayWins / (awayWins + awayLosses);
	
	if (sport.toLowerCase() === Sport.BASE_BALL) {
		const baseballTeam = team as BaseballTeamData;
		homeWinPercentage += getValueOrDefault(baseballTeam.whip, 0);
		awayWinPercentage += getValueOrDefault(baseballTeam.era, 0);
	}
	
	return 1 + ((homeWinPercentage - awayWinPercentage) * spread) - 0.5;
};
// _______________________________________________

export const scoredAndAllowedAdjuster = (num: number): number => (
	num * 1.5
);
// _______________________________________________