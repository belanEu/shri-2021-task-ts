import { color, TextOptions } from './colors';
import { markdown, FormTextOptions } from './md';

type UnionTextOptions = TextOptions | FormTextOptions;

export function style(text: string, options: UnionTextOptions) {
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
