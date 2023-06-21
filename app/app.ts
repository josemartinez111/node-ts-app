// app.ts
// ____________________________________________________________________

import { Sport } from "./types/types.shared";
import { useDisplayData } from "./hooks/useDisplayData";
// ____________________________________________________________________

const main = () => {
	const dataSet = {
		sport: Sport.BASE_BALL,
		overUnderLine: 7,
		spread: 1.5, // change it if for the half (5-innings)
		homeTeam: "NYY",
		favoredTeam: "SEA",
	};
	
	/**
	 * ...default props
	 * sport: string,
	 * overUnderLine: number, // !!!! CHANGE THIS YOU IDIOT !!!!
	 * spread: number,
	 * homeTeam: string,
	 * favoredTeam: string,
	 * */
	useDisplayData(
		dataSet.sport,
		dataSet.overUnderLine,
		dataSet.spread,
		dataSet.homeTeam,
		dataSet.favoredTeam,
	);
};
// ____________________________________________________________________

main();
// ____________________________________________________________________


























