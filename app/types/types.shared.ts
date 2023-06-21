// FILE: types/types.shared.ts
// _______________________________________________

export interface TeamData {
	name: string;
	scored: number;
	allowed: number;
	elo: number;
	headToHeadWins?: number;
	headToHeadLosses?: number;
	homeWins?: number;
	homeLosses?: number;
	awayWins?: number;
	awayLosses?: number;
	totalGamesPlayed?: number;
}

export interface BaseballTeamData extends TeamData {
	whip: number;
	era: number;
}

export interface GameData {
	team1: TeamData;
	team2: TeamData;
	sport: string;
	kFactor?: number;
	overUnderLine?: number;
	spread?: number;
	homeTeam: string;
	favoredTeam: string;
}

export interface BaseballGameData extends GameData {
	team1: BaseballTeamData;
	team2: BaseballTeamData;
}
// _______________________________________________

export type GameBaseballType = GameData | BaseballGameData
export type TeamBaseBallDataType = TeamData | BaseballTeamData
// _______________________________________________

export const Sport = {
	BASE_BALL: "Baseball".toLowerCase(),
	FOOT_BALL: "Football".toLowerCase(),
	BASKET_BALL: "Basketball".toLowerCase(),
	SOCCER: "Soccer".toLowerCase(),
};
// _______________________________________________











