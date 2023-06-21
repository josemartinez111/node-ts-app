// FILE: utilities/createGameData.ts
// _______________________________________________

import {
	BaseballGameData,
	BaseballTeamData,
	GameData, Sport, TeamBaseBallDataType,
} from "../types/types.shared";
// _______________________________________________

export const createGameData = (
	team1: TeamBaseBallDataType,
	team2: TeamBaseBallDataType,
	sport: string,
	kFactor: number,
	overUnderLine: number,
	spread: number,
	homeTeam: string,
	favoredTeam: string,
): GameData | BaseballGameData => (
	sport.toLowerCase() === Sport.BASE_BALL ? {
		team1: team1 as BaseballTeamData,
		team2: team2 as BaseballTeamData,
		sport,
		kFactor,
		overUnderLine,
		spread,
		homeTeam,
		favoredTeam,
	} as BaseballGameData : {
		team1,
		team2,
		sport,
		kFactor,
		overUnderLine,
		spread,
		homeTeam,
		favoredTeam,
	} as GameData
);
// _______________________________________________