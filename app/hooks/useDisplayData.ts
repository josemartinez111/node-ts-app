// FILE: hooks/useDisplayData.ts
// _______________________________________________

import { predictOutcome } from "../utilities/predictOutcome";
import { useDataBuilder } from "../hooks/useDataBuilder";
import { createGameData } from "../utilities/createGameData";
import { TeamData } from "../types/types.shared";
import { predictOverUnder } from "../utilities/predictOverUnder";
// _______________________________________________

const roundHelper = (num: number): number => {
	const result = Math.round(num * 100) / 100;
	console.log("Elo:", result);
	return result;
};
// _______________________________________________

export const useDisplayData = (
	sport: string,
	overUnderLine: number,
	spread: number,
	homeTeam: string,
	favoredTeam: string,
): void => {
	// ____________________________________________________________________
	
	// Example Data
	const { team1, team2 } = useDataBuilder();
	
	/**
	 * Creates a game data object.
	 *
	 * @param {TeamData | BaseballTeamData} team1 - The data for team 1.
	 * @param {TeamData | BaseballTeamData} team2 - The data for team 2.
	 * @param {string} sport - The type of sport being played.
	 * @param {number} kFactor - The k-factor used for ELO rating calculation.
	 * @param {number} overUnderLine - The over/under line for the game.
	 * @param {number} spread - The spread for the game.
	 * @param {string} homeTeam - The name of the home team.
	 * @param {string} favoredTeam - The name of the favored team.
	 * @returns {GameData | BaseballGameData} The created game data object.
	 */
	const gameData = createGameData(
			team1,
			team2,
			sport,
			roundHelper(team1.elo / team2.elo),
			overUnderLine, // !!!! CHANGE THIS YOU IDIOT !!!!
			spread,
			homeTeam,
			favoredTeam,
		);
	
	console.log(`=================== [ ${ gameData.sport } ] ====================`);
	predictOutcome(gameData);
	
	const overUnderPrediction = predictOverUnder(gameData);
	console.log(`Over/Under prediction: ${ overUnderPrediction }`);
};
// _______________________________________________