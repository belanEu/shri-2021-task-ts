import { backgroundColors, effects, fontColors, Reset } from './model';

type RichColorUnion = keyof typeof fontColors;
type RichEffectUnion = keyof typeof effects;

function addColor(text: string, color: RichColorUnion, isBackground: boolean = false): string {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList: RichEffectUnion[]): string {
    return effectList.map(effect => effects[effect]).join('');
}

type FormTextOptions = {
    bold?: boolean,
    italic?: boolean,
    mono?: boolean,
    link?: string
}

type TextOptions = {
    font?: RichColorUnion,
    effects?: RichEffectUnion[],
    background?: RichColorUnion
};

type Intersection = FormTextOptions & TextOptions;

export function color(text: string, options?: Intersection): string {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font && fontColors[options.font]) {
            result = addColor(result, options.font);
        }
        if (options.background && backgroundColors[options.background]) {
            result = addColor(result, options.background, true);
        }
        if (options.effects && options.effects.every(effect => effects[effect])) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
