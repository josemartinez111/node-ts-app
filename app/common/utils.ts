// ---------------------------------------------------------
//                     common/utils.ts
// ---------------------------------------------------------
// ---------------------------------------------------------

// noinspection JSUnusedGlobalSymbols
export const spacer = (char: string = "_", lengthOfChar: number = 55): string => {
	const result = char.repeat(lengthOfChar);
	console.log(result);
	return result;
};
// ---------------------------------------------------------