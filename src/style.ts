import { color } from './colors';
import { markdown } from './md';

type OptionsType = Exclude<Parameters<typeof color>[1], undefined>;

export function style(text: string, options: OptionsType) {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}
