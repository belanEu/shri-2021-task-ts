import { backgroundColors, effects, fontColors, Reset } from './model';

function addColor(text: string, color: string, isBackground: boolean = false): string {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList: string[]): string {
    return effectList.map(effect => effects[effect]).join('');
}

export type TextOptions = {
    font?: string,
    effects?: string[],
    background?: string
}

export function color(text: string, options?: TextOptions): string {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
