// import { Guid } from "Models/base";
// import { AsyncableEntiryUser } from "./Customer/AsyncableEntiryUser";
class Guid{}
class AsyncableEntiryUser{}
class TaskObject {

}

class ManualTaskObject extends TaskObject {
    description: string
}


class StudentTask extends AsyncableEntiryUser {
    endTime: Date;
    startTime: Date;

    toJson(): StudentTask {
        //@ts-ignore

        this["$type"] = "ViewGeneratorBase.JsonBase64File"

        return this;

    }
    taskObject: TaskObject
}

export class StudentTaskHistory extends AsyncableEntiryUser {
    endTime: Date;
    startTime?: Date;
    studentTask: StudentTask
    studentTaskId: Guid
    done: boolean;
    title: string;
    constructor(args) {
        super();
        this.endTime = args.endTime;
        this.startTime = args.startTime;
        this.studentTask = args.studentTask;
        this.studentTaskId = args.studentTaskId;
        this.done = args.done;
        this.title = args.title;
    }

    static generator(args) {
        return new StudentTaskHistory(args);
    }

}

