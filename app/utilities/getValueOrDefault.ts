// FILE: utilities/getValueOrDefault.ts
// _______________________________________________

export const getValueOrDefault = <Value>(
	value: Value | undefined, defaultValue: Value): Value => (
	value !== undefined
		? value
		: defaultValue
);
// _______________________________________________
