import { info, list, lang } from './interface';
import { shellModel } from '@/electron/api/shell/interface';

import advancementPack from './advancement/package.json';
import advancementLang from './advancement/lang';

import cutscenePack from './cutscene/package.json';
import cutsceneLang from './cutscene/lang';
import cutsceneShell from './cutscene/shell';

import musicPack from './music/package.json';
import musicLang from './music/lang';

import recipePack from './recipe/package.json';
import recipeLang from './recipe/lang';

import triggerPack from './trigger/package.json';
import triggerLang from './trigger/lang';
import triggerShell from './trigger/shell';

import utilityPack from './utility/package.json';
import utilityLang from './utility/lang';

export const builtinList: list[] = [];
export const builtinLang: lang[] = [];
export const normName = (str: string): string => str.toLowerCase().normalize().replace(/[_*.\s]+/, '_');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addBuiltin = (d: info, lang: Record<string, any>, sh: shellModel | shellModel[] | undefined = undefined): void => {
	if (Array.isArray(sh))
		sh.forEach((e) => e.plugin = d.name);
	else if (sh)
		sh.plugin = d.name;
	builtinList.push({
		name: d.name,
		path: normName(d.name),
		icon: d.icon,
		description: d.description,
		author: d.author,
		keywords: d.keywords,
		shell: sh
	});
	builtinLang.push({
		pluginName: normName(d.name),
		data: lang
	});
};

export const getBuiltin = (name: string): list | undefined => {
	const i = builtinList.findIndex((v) => v.name === name);
	if (i !== -1)
		return builtinList[i];
	return undefined;
};

addBuiltin(advancementPack, advancementLang);
addBuiltin(cutscenePack, cutsceneLang, cutsceneShell);
addBuiltin(musicPack, musicLang);
addBuiltin(recipePack, recipeLang);
addBuiltin(triggerPack, triggerLang, triggerShell);
addBuiltin(utilityPack, utilityLang);
