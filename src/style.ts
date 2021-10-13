import { color } from './colors';
import { markdown } from './md';

type colorFunctionType = typeof color;
type colorFunctionParams = Parameters<colorFunctionType>;
type TextOptions = Exclude<colorFunctionParams[1], undefined>;

type markdownFunctionType = typeof markdown;
type markdownFunctionParams = Parameters<markdownFunctionType>;
type FormTextOptions = Exclude<markdownFunctionParams[1], undefined>;

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
