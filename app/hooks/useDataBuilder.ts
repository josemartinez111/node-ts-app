// FILE: hooks/useDataBuilder.ts
// _______________________________________________

import { scoredAndAllowedAdjuster } from "../utilities/utlities";
import { TeamBaseBallDataType, TeamData } from "../types/types.shared";
// _______________________________________________

export const useDataBuilder = (): { team1: TeamData; team2: TeamData } => {
	const pitcher1 = {
		era: .273, // has to be .000
		whip: 1.02, // has to be 0.00
	};
	
	const pitcher2 = {
		era: .558,  // has to be .000
		whip: 1.49, // has to be 0.00
	};
	
	const team1: TeamBaseBallDataType = {
		name: "SEA",
		scored: scoredAndAllowedAdjuster(438),
		allowed: scoredAndAllowedAdjuster(425),
		elo: 1600, // MONEYLINE/(+/-)
		headToHeadWins: 5,
		headToHeadLosses: 5,
		homeWins: 21,
		homeLosses: 17,
		awayWins: 14,
		awayLosses: 19,
		totalGamesPlayed: 162,
		era: Number(`1${ pitcher1.era }`),
		whip: Number(`1${ pitcher1.whip }`),
	};
	
	const team2: TeamBaseBallDataType = {
		name: "NYY",
		scored: scoredAndAllowedAdjuster(449),
		allowed: scoredAndAllowedAdjuster(410),
		elo: 1400,
		headToHeadWins: 5,
		headToHeadLosses: 5,
		homeWins: 22,
		homeLosses: 17,
		awayWins: 18,
		awayLosses: 16,
		totalGamesPlayed: 162,
		era: Number(`1${ pitcher2.era }`),
		whip: Number(`1${ pitcher2.whip }`),
	};
	return { team1, team2 };
};
// _______________________________________________










