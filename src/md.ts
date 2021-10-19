import { color } from './colors';

type MarkdownOptionsType = {
    bold?: boolean,
    italic?: boolean,
    mono?: boolean,
    link?: string
};

export function markdown(text: string, options?: MarkdownOptionsType) {
    let result = text;
    if (options) {
        if (options.bold) {
            result = color(`**${result}**`, { font: 'yellow', effects: ['bright'] });
        }
        if (options.italic) {
            result = color(`_${result}_`, { font: 'magenta', effects: ['italic'] });
        }
        if (options.mono) {
            result = color(`\`${result}\``, { font: 'green' });
        }
        if (options.link) {
            result = `[${result}](${color(options.link, { font: 'blue', effects: ['underscore'] })})`;
        }
    }
    return result;
}
