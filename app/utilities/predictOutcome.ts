// FILE: utilities/predictOutcome.ts
// _______________________________________________

import { getValueOrDefault } from "../utilities/getValueOrDefault";
import {
	BaseballGameData, GameBaseballType,
	Sport,
	TeamData,
} from "../types/types.shared";
import {
	calculateEloRating, calculateSpreadFactor,
	calculateWinPercentagePythagorean,
} from "../utilities/utlities";
// _______________________________________________

export const predictOutcome = (data: GameBaseballType): void => {
	const pythagoreanWinPercentage1 = calculateWinPercentagePythagorean(
		data.team1 as TeamData,
	);
	const pythagoreanWinPercentage2 = calculateWinPercentagePythagorean(
		data.team2 as TeamData,
	);
	const newEloRating1 = calculateEloRating(
		data.team1 as TeamData,
		data.team2 as TeamData,
		getValueOrDefault(data.kFactor, 20),
	);
	const newEloRating2 = calculateEloRating(
		data.team2 as TeamData,
		data.team1 as TeamData,
		getValueOrDefault(data.kFactor, 20),
	);
	const spreadFactor1 =
		data.spread && data.favoredTeam === data.team1.name
			? calculateSpreadFactor(data.team1 as TeamData, data.spread, Sport.BASE_BALL)
			: 1;
	const spreadFactor2 =
		data.spread && data.favoredTeam === data.team2.name
			? calculateSpreadFactor(data.team2 as TeamData, data.spread, Sport.BASE_BALL)
			: 1;
	
	let winProbability1 = (pythagoreanWinPercentage1 + newEloRating1 / 2400) / 2; // Simple average.
	winProbability1 *= spreadFactor1;
	let winProbability2 = (pythagoreanWinPercentage2 + newEloRating2 / 2400) / 2; // Simple average.
	winProbability2 *= spreadFactor2;
	
	if (data.sport.toLowerCase() === Sport.BASE_BALL) {
		const baseballData = data as BaseballGameData;
		const whipFactor1 = 1 / getValueOrDefault(baseballData.team1.whip, 1);
		const eraFactor1 = 1 / getValueOrDefault(baseballData.team1.era, 1);
		const whipFactor2 = 1 / getValueOrDefault(baseballData.team2.whip, 1);
		const eraFactor2 = 1 / getValueOrDefault(baseballData.team2.era, 1);
		winProbability1 *= whipFactor1 * eraFactor1;
		winProbability2 *= whipFactor2 * eraFactor2;
	}
	
	// Normalise the win probabilities
	let totalProbability = winProbability1 + winProbability2;
	winProbability1 = winProbability1 / totalProbability;
	winProbability2 = winProbability2 / totalProbability;
	
	console.log("_____________________________________________________");
	console.log(`Teams: ${ data.team1.name } vs ${ data.team2.name }`);
	if (data.homeTeam === data.team1.name) {
		console.log(`Home Team: ${ data.team1.name }`);
		console.log("_____________________________________________________");
	} else if (data.homeTeam === data.team2.name) {
		console.log(`Home Team: ${ data.team2.name }`);
		console.log("_____________________________________________________");
	}
	
	if (data.spread) console.log(`Spread: ${ data.spread }`);
	
	console.log("_____________________________________________________");
	
	console.log(
		`Team 1 (${ data.team1.name }) Win Probability: ${ (
			winProbability1 * 100
		).toFixed(2) }%`,
	);
	
	console.log(
		`Team 2 (${ data.team2.name }) Win Probability: ${ (
			winProbability2 * 100
		).toFixed(2) }%`,
	);
	
	console.log("_____________________________________________________");
	
	if (winProbability1 > winProbability2) {
		console.log(`Expected winner: ${ data.team1.name }`);
		console.log("_____________________________________________________");
	} else if (winProbability1 < winProbability2) {
		console.log(`Expected winner: ${ data.team2.name }`);
		console.log("");
	} else {
		console.log(`The game could go either way.`);
		console.log("");
	}
};
// _______________________________________________