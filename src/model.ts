type ResetType = '\x1b[0m';
export const Reset: ResetType = '\x1b[0m';

interface StringDictionary<T> {
    [index: string]: T
}

interface Color<T> extends StringDictionary<T> {
    readonly black: T,
    readonly red: T,
    readonly green: T,
    readonly yellow: T,
    readonly blue: T,
    readonly magenta: T,
    readonly cyan: T,
    readonly white: T
}

interface Effect<T> extends StringDictionary<T> {
    readonly bright: T,
    readonly dim: T,
    readonly italic: T,
    readonly underscore: T,
    readonly blink: T
}

type Primitive = 'white' | 'black';

export type RichColor = Color<string>;
export type RichEffect = Effect<string>;
export type PrimitiveColor = Color<Primitive>;

export const effects: RichEffect = {
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
};
export const fontColors: RichColor = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};
export const backgroundColors: RichColor = {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
};

export const contrast: PrimitiveColor = {
    black: 'white',
    red: 'black',
    green: 'black',
    yellow: 'black',
    blue: 'black',
    magenta: 'black',
    cyan: 'black',
    white: 'black',
};
