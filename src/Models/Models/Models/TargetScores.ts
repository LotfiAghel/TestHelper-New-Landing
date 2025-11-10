// import { Guid, httpGettr } from "Models/base";
// import { IdMapper } from "Models/Basics/BaseModels/Basics/Basics";
// import { User } from "./Customer/Customer";

import { Guid } from "@/Models/base";
import { IdMapper } from "./Basics";

class AToeflScore extends IdMapper<Guid> {
    readingScore: number;
    listeningScore: number;
    speakingScore: number;
    writingScore: number;
    constructor(args) {
        super(args)
        this.readingScore = args.readingScore;
        this.listeningScore = args.listeningScore;
        this.speakingScore = args.speakingScore;
        this.writingScore = args.writingScore;

    }

}


export class RealScoreTarget extends AToeflScore {
    atThisTime: Date;
    CustomerId: Guid;
    Customer: any;
    constructor(args: Omit<RealScoreTarget, 'constructor' |'generator'>) {
        super(args);
        this.atThisTime = new Date(args.atThisTime+'z');
        this.CustomerId = args.CustomerId;
        this.Customer = args.Customer;
    }
    static generator(args: Omit<RealScoreTarget, 'constructor' |'generator'>){
        return new RealScoreTarget(args);
    }
}


export class MockScore extends RealScoreTarget {
    title: string;
    isRemoved:boolean;
    constructor(args) {
        super(args);
        this.title = args.title;
        this.isRemoved=args.isRemoved;
    }
    static generator(args: Omit<MockScore, 'constructor' |'generator'>){
        return new MockScore(args);
    }
}
