/**
 * furnace: smelting
 * blast_furnace: blasting
 * campfire: campfire_cooking
 * smoker: smoking
 */
export type typeFurnace = 'minecraft:smelting' | 'minecraft:blasting' | 'minecraft:campfire_cooking' | 'minecraft:smoking';
export type typeCraft = 'minecraft:crafting_shapeless' | 'minecraft:crafting_shaped';
export type typeStoneCutter = 'minecraft:stonecutting';
export type typeSmithing = 'minecraft:smithing';

/**
 * shapeless, ingredients is using, and pattern & key is deleted
 * shape, ingredients is deleted, and pattern & key is using
 */
export interface crafting {
	type: typeCraft,
	group?: string,
	ingredients?: { item: string }[],
	pattern?: string[],
	key?: Record<string, { item: string }>,
	result: {
		item: string,
		count: number,
	},
	isPlayer: boolean,
	exactPosition: boolean
}

export interface furnace {
	type: typeFurnace,
	group?: string,
	ingredient: {
		item: string
	},
	result: string,
	experience: number,
	cookingtime: number
}

export interface stonecutter {
	type: typeStoneCutter,
	group?: string,
	ingredient: {
		item: string
	},
	result: string,
	count: number
}

export interface smithing {
	type: typeSmithing,
	group?: string,
	base: {
		item: string
	},
	addition: {
		item: string
	},
	result: {
		item: string
	}
}

export interface caseData {
	type: 'block' | 'item',
	id: string;
	path: string
}

export interface tableGen {
	recipes: string[],
	result: string,
	count: number,
	options: {
		shapeless: boolean,
		exactPosition: boolean,
		group: string | null,
		outputName: string | null
	}
}

export interface furnaceGen {
	type: typeFurnace,
	recipe: string,
	result: string,
	options: {
		experience: number,
		time: number,
		group: string | null,
		outputName: string | null
	}
}

export interface stonecutterGen {
	recipe: string,
	result: string,
	count: number,
	group?: string
	outputName?: string
}

export interface smithingGen {
	base: string,
	addition: string,
	result: string,
	group?: string
	outputName?: string
}

export type tabsName = 'player' | 'craft' | 'furnace' | 'blast' | 'campfire' | 'smoker' | 'stonecutter' | 'smithing';

export type texturesType = 'block' | 'item';

export interface listInterface {
	group: string,
	el: {
		name: string,
		type: tabsName,
		path: string
	}[]
}

// Read data interface
export interface resultTable {
	cases: caseData[],
	result: { item: caseData, count: number },
	options: {
		exact: boolean,
		group?: string,
		outputName?: string
	}
}

export interface furnaceTable {
	recipe: caseData,
	result: caseData,
	options: {
		experience: number,
		time: number,
		group?: string,
		outputName?: string
	}
}

export interface stonecutterTable {
	recipe: caseData,
	result: caseData,
	count: number,
	group?: string
	outputName?: string
}

export interface smithingTable {
	base: caseData,
	addition: caseData,
	result: caseData,
	group?: string
	outputName?: string
}
