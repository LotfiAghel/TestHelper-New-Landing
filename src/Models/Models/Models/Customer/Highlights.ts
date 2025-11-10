
export interface StringSpan {
    data: any;
    field: string | number;
    index: number;
}

export interface ISelectorFunction {
    run: (o: any) => any;
}

export const createISelectorFunction = (args: any): ISelectorFunction => {
    const types = {
        "Models.TextTools.GP": (args: any) => new GP(args),
        "Models.TextTools.GI": (args: any) => new GI(args),
        "Models.TextTools.BracketEscaperIndex": (args: any) => new BracketEscaperIndex(args),
    };
    return types[args["$type"]](args);
}

export class GP implements ISelectorFunction {
    fn: string;
    $type = "Models.TextTools.GP"
    run(data: any): any {
        const result = data[this.fn];
        if (typeof result === "string") {
            return {
                data: data,
                field: this.fn,
                index: 0
            };
        }
        return result;
        //TODO HIGHLIGHTS 
    }

    constructor(args: { fn: string }) {
        this.fn = args.fn;
    }
}

export class GI implements ISelectorFunction {
    idx: number;
    $type = "Models.TextTools.GI"
    run(data: any): any {
        const result = data.find(item => item.id == this.idx) || data[this.idx];
        if (typeof result === "string") {
            return {
                data: data,
                field: this.idx,
                index: 0
            };
        }
        return result;
    }
    constructor(args: { idx: number }) {
        this.idx = args.idx;
    }
    toJson(): GI {
        //@ts-ignore

        this["$type"] = "Models.TextTools.GI"

        return this;

    }
}

export class TagFinder implements ISelectorFunction {
    tag: string;

    run(o: any): any {
        const s = o as [string, number];
        const idx = s[0].indexOf(this.tag, s[1]);
        return [s[0], idx] as [string, number];
    }
}

export class HtmlEscaperIndex implements ISelectorFunction {
    idx: number;

    run(o: StringSpan): StringSpan {
        // escape <> < /> </> [] 
        throw new Error("NotImplementedException");
    }
    constructor(idx: number) {
        this.idx = idx;
    }
}
export function bracketSkaper(data: StringSpan, idx: number): StringSpan {
    let idx2 = 0;
    let braketOpen = 0;
    var str = (data.data[data.field] as string);
    var i = data.index;
    for (; i < str.length; ++i) {
        if (idx2 == idx)
            break;

        if (str[i] == '[') {
            braketOpen++;
            continue;
        }
        if (str[i] == ']' && braketOpen != 0) {
            braketOpen--;
            continue;
        }

        if (braketOpen == 0)
            idx2++;


    }
    return {
        data: data.data,
        field: data.field,
        index: i
    };

}
export class BracketEscaperIndex implements ISelectorFunction {
    idx: number;
    $type = "Models.TextTools.BracketEscaperIndex";
    run(data: StringSpan): StringSpan {
        // escape [] 
        return bracketSkaper(data, this.idx);
    }
    constructor(args: { idx: number }) {
        this.idx = args.idx;
    }
}



export class TextIndexPosition {
    modelName: string;
    modelId: string | number;
    fieldPath: ISelectorFunction[];
    nextChar: number;

    run(o: any, tagData: string): void {
        for (const x of this.fieldPath) {
            o = x.run(o);
            if (typeof o === 'string') {
                o = [o, 0] as [string, number];
            }
        }

        const o2 = o as [string, number];
        //TODO [ ] escape from nextchar if string is "01[23]45789" and nextchar is 4 index go to "01[23]45[{tagData}]789"
        o2[0] = o2[0].slice(0, o2[1] + this.nextChar) + `[${tagData}]` + o2[0].slice(o2[1] + this.nextChar);
    }

    constructor(args: {
        modelName: string;
        modelId: string | number;
        fieldPath: ISelectorFunction[];
        nextChar: number;
    }) {

        this.modelName = args.modelName;
        this.modelId = args.modelId;
        this.fieldPath = [];
        for (var i in args.fieldPath)
            this.fieldPath.push(createISelectorFunction(args.fieldPath[i]));
        this.nextChar = args.nextChar;

    }
}

export class TextHighLight {
    id: string;
    start: TextIndexPosition;
    end: TextIndexPosition;
    note?: string;
    color?: string;
    header: string;
    constructor(args: {
        id?: string;
        start: TextIndexPosition;
        end: TextIndexPosition;
        note?: string;
        color?: string;
        header?: string;
    }) {

        this.id = args.id;
        this.start = new TextIndexPosition(args.start);
        this.end = new TextIndexPosition(args.end);
        this.note = args.note;
        this.color = args.color;
        this.header = args.header;

    }
    static generator(args) {
        return new TextHighLight(args);
    }
}

