import { backgroundColors, effects, fontColors, Reset } from './model';

type BackgroundColors = typeof backgroundColors;
type Effects = typeof effects;
type FontColors = typeof fontColors;

type FontColorsKeysType = keyof FontColors;
type BackgroundColorsKeysType = keyof BackgroundColors;
type EffectsKeysType = keyof Effects;

function addColor(text: string, color: FontColorsKeysType | BackgroundColorsKeysType, isBackground: boolean = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}

function getEffects(effectList: EffectsKeysType[]) {
    return effectList.map(effect => effects[effect]).join('');
}

type ColorOptionsType = {
    font?: FontColorsKeysType,
    background?: BackgroundColorsKeysType,
    effects?: EffectsKeysType[]
};

type MarkdownOptionsType = {
    bold?: boolean,
    italic?: boolean,
    mono?: boolean,
    link?: string
};

export function color(text: string, options?: ColorOptionsType & MarkdownOptionsType) {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font && options.font in fontColors) {
            result = addColor(result, options.font);
        }
        if (options.background && options.background in backgroundColors) {
            result = addColor(result, options.background, true);
        }
        if (options.effects && options.effects.every(effect => effect in effects)) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
