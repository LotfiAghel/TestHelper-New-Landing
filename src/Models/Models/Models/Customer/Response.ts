// @ts-nocheck
import {
  Guid,
  Forg,
  httpGettr,
  List,
  Dictionary,
  ForeignKey,
  ForeignKey2,
  Rial,
} from "../../../base";

import { manager as context } from "../../../managers";

// import { ASyncableEntity2, ASyncableEntity2Creator } from ""
import { ExamPartType } from "../Exams/ExamPartType";
import { Exam, ExamCreator } from "../Exams/Exam";
// import { ExamPartType } from "Models/old_testhelper/Models/Models/Exams/ExamPartType"
import { Question, QuestionCreator } from "../Exams/Question";
// import { ApplicationUser, ApplicationUserCreator } from "../Management/ApplicationUser"
import {
  QuestionOptions,
  QuestionOptionsCreator,
} from "../Exams/QuestionOptions";
// import { AsyncableEntiryUser } from "./AsyncableEntiryUser";
import { TextHighLight } from "./Highlights";
import { ASyncableEntity2 } from "../IEntity";
import { uuid } from "zod";
class AsyncableEntiryUser { }

export enum State {
  JUST_CREATED = 1,

  ENDED = 2,

  PROCESSED = 3,

  WRONG_LOG = 4,

  Migrated_From_Old_Incurrect = 5,
}

export enum ExamMode {
  Exam = 1,

  Practice = 2,
}
class User { }

export class ExamSession extends AsyncableEntiryUser {
  startTime: Date;

  mode: ExamMode;

  examId: Forg<Exam, number>;

  async getExam(): Promise<Exam> {
    //this code must handle async and sync 2

    return await context.ExamManager.get(this.examId);
  }

  constructor(args: {
    customerId: Guid;
    customer: User;
    cid?: Guid;
    id: Guid;
    startTime: Date;
    mode: ExamMode;
    examId: number;
  }) {
    super();

    this.startTime = args.startTime;

    this.mode = args.mode;

    this.examId = args.examId;
  }

  toJson(): ExamSession {
    //@ts-ignore

    this["$type"] = "Models.ExamSession";

    return this;
  }
}

enum DataSource {
  None = 0,
  FromNewServer = 1,
  MigratedFromOldServer = 2,
  CreateForLastScore = 3,
}

export const ExamSessionCreator = (args: any) => new ExamSession(args);
export class ExamPartSession extends AsyncableEntiryUser {
  startTime: Date;
  stringDate: string;
  dataSource: DataSource;
  sectionType: ExamPartType;

  mode: ExamMode;

  score?: number;

  state: State;

  actions: List<ExamAction>;

  dataVersion: number;

  examId: Forg<Exam, number>;

  examSessionId?: Forg<ExamSession, Guid>;
  highlights: List<TextHighLight>;
  async getExam(): Promise<Exam> {
    //this code must handle async and sync 2

    return await context.ExamManager.get(this.examId);
  }

  constructor(args: {
    customerId: Guid;
    highlights: List<TextHighLight>;
    customer: User;
    cid?: Guid;
    id: Guid;
    startTime: string;
    sectionType: ExamPartType;
    mode: ExamMode;
    score?: number;
    state: State;
    actions: List<ExamAction>;
    dataVersion: number;
    examId: number;
    examSessionId?: Guid;
    dataSource: DataSource;
  }) {
    super();
    this.startTime = new Date(args.startTime + "Z");

    this.highlights = [];
    if (args.highlights != null) {
      args.highlights = args.highlights.filter((item) => item);
      for (var i in args.highlights)
        this.highlights.push(new TextHighLight(args.highlights[i]));
    }

    this.dataSource = args.dataSource;

    this.sectionType = args.sectionType;

    this.mode = args.mode;

    this.score = args.score;

    this.state = args.state;

    this.actions = args.actions;

    this.dataVersion = args.dataVersion;

    this.examId = args.examId;

    this.examSessionId = args.examSessionId;
  }

  toJson(): ExamPartSession {
    //@ts-ignore

    this["$type"] = "Models.ExamPartSession";

    return this;
  }
}

export const ExamPartSessionCreator = (args: any) => new ExamPartSession(args);
export class ExamAction {
  time: number;

  inExamRealTime: number;

  tabId: string;

  constructor(args: { time: number; inExamRealTime: number; tabId: string }) {
    this.time = args.time;

    this.inExamRealTime = args.inExamRealTime;

    this.tabId = args.tabId;
  }

  toJson(): ExamAction {
    //@ts-ignore

    this["$type"] = "Models.ExamAction";

    return this;
  }
}

export const ExamActionCreator = (args: any) => {
  const types = {
    ExamAction: (args: any) => new ExamAction(args),
    "Models.ChooseOption": (args: any) => new ChooseOption(args),
    "Models.ChangePart": (args: any) => new ChangePart(args),
    "Models.GoNext": (args: any) => new GoNext(args),
    "Models.GoBack": (args: any) => new GoBack(args),
    "Models.ShowAnswer": (args: any) => new ShowAnswer(args),
  };
  return types[args["$type"]](args);
};
export class ChooseOption extends ExamAction {
  questionId: ForeignKey2<Question, number>;

  option: number;

  constructor(args: {
    time: number;
    inExamRealTime: number;
    tabId: string;
    questionId: ForeignKey2<Question, number>;
    option: number;
  }) {
    super(args);

    this.questionId = args.questionId;

    this.option = args.option;
  }

  toJson(): ChooseOption {
    //@ts-ignore

    this["$type"] = "Models.ChooseOption";

    return this;
  }
}

export const ChooseOptionCreator = (args: any) => new ChooseOption(args);
export class ChangePart extends ExamAction {
  toPartId: number;

  constructor(args: {
    time: number;
    inExamRealTime: number;
    tabId: string;
    toPartId: number;
  }) {
    super(args);

    this.toPartId = args.toPartId;
  }

  toJson(): ChangePart {
    //@ts-ignore

    this["$type"] = "Models.ChangePart";

    return this;
  }
}

export const ChangePartCreator = (args: any) => new ChangePart(args);
export class GoNext extends ChangePart {
  constructor(args: {
    toPartId: number;
    time: number;
    inExamRealTime: number;
    tabId: string;
  }) {
    super(args);
  }

  toJson(): GoNext {
    //@ts-ignore

    this["$type"] = "Models.GoNext";

    return this;
  }
}

export const GoNextCreator = (args: any) => new GoNext(args);
export class GoBack extends ChangePart {
  constructor(args: {
    toPartId: number;
    time: number;
    inExamRealTime: number;
    tabId: string;
  }) {
    super(args);
  }

  toJson(): GoBack {
    //@ts-ignore

    this["$type"] = "Models.GoBack";

    return this;
  }
}

export const GoBackCreator = (args: any) => new GoBack(args);
export class ShowAnswer extends ExamAction {
  constructor(args: { time: number; inExamRealTime: number; tabId: string }) {
    super(args);
  }

  toJson(): ShowAnswer {
    //@ts-ignore

    this["$type"] = "Models.ShowAnswer";

    return this;
  }
}

export const ShowAnswerCreator = (args: any) => new ShowAnswer(args);

export enum responseStatus {
  create,
  synced,
  error,
}
export class Response extends ASyncableEntity2 {
  IsRemoved?: boolean;
  content: string;
  //answer: any;
  enterDate: Date;

  score?: number;

  scoredDateTime: Date;

  syncTime?: Date;

  examinerId?: Forg<ApplicationUser, Guid>;

  questionId: Forg<Question, number>;

  examPartSessionId: Forg<ExamPartSession, Guid>;
  status: responseStatus;
  adjusts: ResponseAdjust[];

  async getQuestion(): Promise<Question> {
    //this code must handle async and sync 2

    return await context.QuestionManager.get(this.questionId);
  }

  constructor(args: {
    cid?: Guid;
    id: Guid;
    content: string;
    enterDate: string;
    score?: number;
    scoredDateTime: Date;
    syncTime?: Date;
    examinerId?: Guid;
    questionId: number;
    examPartSessionId: Guid;
    status?: responseStatus;
    isRemoved?: boolean;
  }) {
    super(args);
    this.status = args.status;

    this.IsRemoved = args.isRemoved;

    this.content = args.content;

    this.enterDate = new Date(args.enterDate);

    this.score = args.score;

    this.scoredDateTime = args.scoredDateTime;

    this.syncTime = args.syncTime;

    this.examinerId = args.examinerId;

    this.questionId = args.questionId;

    this.examPartSessionId = args.examPartSessionId;
  }

  async getAdjust(): Promise<ResponseAdjust[]> {
    const result = httpGettr
      .Get(`v1/generic/Models__Response/${this.id}/adjusts`)
      .then((adjusts: ResponseAdjust[]) => {
        return adjusts.map((item) => new ResponseAdjust(item));
      });
    return result;
  }

  toJson(): Response {
    //@ts-ignore

    this["$type"] = "Models.Response";

    return this;
  }
}

export const ResponseCreator = (args: any) => {
  const types = {
    Response: (args: any) => new Response(args),
    "Models.QuestionTrueFalseOptionResponse": (args: any) =>
      new QuestionTrueFalseOptionResponse(args),
    "Models.SingleOptionResponse": (args: any) =>
      new SingleOptionResponse(args),
    "Models.QuestionOptinalResponse": (args: any) =>
      new QuestionOptinalResponse(args),
    "Models.QuestionOptinalOrderedResponse": (args: any) =>
      new QuestionOptinalOrderedResponse(args),
    "Models.SpeakingResponse": (args: any) => new SpeakingResponse(args),
    "Models.WritingResponse": (args: any) => new WritingResponse(args),
    "Models.WordResponse": (args: any) => new WordResponse(args),
    "Models.QuantWhichIsGreaterResponse": (args: any) =>
      new QuantWhichIsGreaterResponse(args),
  };
  return types[args["$type"]](args);
};
export class QuestionTrueFalseOptionResponse extends Response {
  answer: List<ForeignKey2<QuestionOptions, number>>;

  constructor(args: {
    content: string;
    enterDate: Date;
    score?: number;
    scoredDateTime: Date;
    syncTime?: Date;
    examinerId?: Guid;
    examiner: ApplicationUser;
    questionId: number;
    question: Question;
    examPartSessionId: Guid;
    examPartSession: ExamPartSession;
    cid?: Guid;
    id: Guid;
    answer: List<ForeignKey2<QuestionOptions, number>>;
  }) {
    super(args);

    this.answer = args.answer;
  }

  toJson(): QuestionTrueFalseOptionResponse {
    //@ts-ignore

    this["$type"] = "Models.QuestionTrueFalseOptionResponse";
    this.enterDate = new Date()
    return { ...this, id: uuid() };
  }
}

export const QuestionTrueFalseOptionResponseCreator = (args: any) =>
  new QuestionTrueFalseOptionResponse(args);
export class SingleOptionResponse extends QuestionTrueFalseOptionResponse {
  constructor(args: {
    answer: List<ForeignKey2<QuestionOptions, number>>;
    content: string;
    enterDate: Date;
    score?: number;
    scoredDateTime: Date;
    syncTime?: Date;
    examinerId?: Guid;
    examiner: ApplicationUser;
    questionId: number;
    question: Question;
    examPartSessionId: Guid;
    examPartSession: ExamPartSession;
    cid?: Guid;
    id: Guid;
  }) {
    super(args);
  }

  toJson(): SingleOptionResponse {
    //@ts-ignore

    this["$type"] = "Models.SingleOptionResponse";

    return this;
  }
}

export const SingleOptionResponseCreator = (args: any) =>
  new SingleOptionResponse(args);
export class QuestionOptinalResponse extends Response {
  columnsIndex: List<number>;

  constructor(args: {
    content: string;
    enterDate: Date;
    score?: number;
    scoredDateTime: Date;
    syncTime?: Date;
    examinerId?: Guid;
    examiner: ApplicationUser;
    questionId: number;
    question: Question;
    examPartSessionId: Guid;
    examPartSession: ExamPartSession;
    cid?: Guid;
    id: Guid;
    columnsIndex: List<number>;
  }) {
    super(args);

    this.columnsIndex = args.columnsIndex;
  }

  toJson(): QuestionOptinalResponse {
    //@ts-ignore

    this["$type"] = "Models.QuestionOptinalResponse";

    return this;
  }
}

export const QuestionOptinalResponseCreator = (args: any) =>
  new QuestionOptinalResponse(args);
export class QuestionOptinalOrderedResponse extends QuestionOptinalResponse {
  constructor(args: {
    columnsIndex: List<number>;
    content: string;
    enterDate: Date;
    score?: number;
    scoredDateTime: Date;
    syncTime?: Date;
    examinerId?: Guid;
    examiner: ApplicationUser;
    questionId: number;
    question: Question;
    examPartSessionId: Guid;
    examPartSession: ExamPartSession;
    cid?: Guid;
    id: Guid;
  }) {
    super(args);
  }

  toJson(): QuestionOptinalOrderedResponse {
    //@ts-ignore

    this["$type"] = "Models.QuestionOptinalOrderedResponse";

    return this;
  }
}

export const QuestionOptinalOrderedResponseCreator = (args: any) =>
  new QuestionOptinalOrderedResponse(args);
export class SpeakingResponse extends Response {
  file: string;
  state?: "complete" | "upload";
  text: string;
  constructor(args: {
    content: string;
    enterDate: Date;
    score?: number;
    scoredDateTime: Date;
    syncTime?: Date;
    examinerId?: Guid;
    examiner: ApplicationUser;
    questionId: number;
    question: Question;
    examPartSessionId: Guid;
    examPartSession: ExamPartSession;
    cid?: Guid;
    id: Guid;
    file: string;
  }) {
    super(args);

    this.file = args.file;
  }
  getAdjust(): Promise<SpeakingResponseAdjust[]> {
    const result = httpGettr
      .Get(`v1/generic/Models__Response/${this.id}/adjusts`)
      .then((adjusts: SpeakingResponseAdjust[]) => {
        return adjusts.map((item) => new SpeakingResponseAdjust(item));
      });
    return result;
  }

  toJson(): SpeakingResponse {
    //@ts-ignore

    this["$type"] = "Models.SpeakingResponse";

    return this;
  }
}

export const SpeakingResponseCreator = (args: any) =>
  new SpeakingResponse(args);
export class WritingResponse extends Response {
  text: string;

  constructor(args: {
    content: string;
    enterDate: Date;
    score?: number;
    scoredDateTime: Date;
    syncTime?: Date;
    examinerId?: Guid;
    examiner: ApplicationUser;
    questionId: number;
    question: Question;
    examPartSessionId: Guid;
    examPartSession: ExamPartSession;
    cid?: Guid;
    id: Guid;
    text: string;
  }) {
    super(args);
    this.text = args.text;
  }

  toJson(): WritingResponse {
    //@ts-ignore

    this["$type"] = "Models.WritingResponse";

    return this;
  }
}
export class WordResponse extends Response {
  text: string;

  constructor(args: {
    content: string;
    enterDate: Date;
    score?: number;
    scoredDateTime: Date;
    syncTime?: Date;
    examinerId?: Guid;
    examiner: ApplicationUser;
    questionId: number;
    question: Question;
    examPartSessionId: Guid;
    examPartSession: ExamPartSession;
    cid?: Guid;
    id: Guid;
    text: string;
  }) {
    super(args);
    this.text = args.text;
  }

  toJson(): WordResponse {
    //@ts-ignore

    this["$type"] = "Models.WordResponse";

    return this;
  }
}

export const WordResponseCreator = (args: any) => new WordResponse(args);

export const WritingResponseCreator = (args: any) => new WritingResponse(args);

export enum AdjustingState {
  None = 0,
  Requested = 1,
  Adjusting = 2,
  Compelete = 3,
}

export class ResponseAdjust {
  "$type": string;
  id: Guid;
  responseId: Guid;
  response: Response;
  examinerId: Guid;
  examiner: User;
  title: string;
  createAt: string;
  items: List<ResponseAdjustItem>;
  adjustmentStatus: number;
  taskScore: number;
  organizationScore: number;
  coherenceScore: number;
  deliveryScore: number;
  developementScore: number;
  languageUseScore: number;
  languageUse: string;
  finalScore: number;
  essayOrganization: string;
  taskCompleteness: string;
  partColor: string;
  state: AdjustingState;
  text: string;
  fluencyScore: number;
  lexical: string;
  lexicalScore: number;
  grammatical: string;
  grammaticalScore: number;
  coherence: string;
  developmentScore: number;
  developmentSuggestions: string;
  static generator(args: ResponseAdjust) {
    return new ResponseAdjust(args);
  }
  constructor(args: ResponseAdjust) {
    this.id = args.id;
    this.responseId = args.responseId;
    this.response = args.response;
    this.examinerId = args.examinerId;
    this.examiner = args.examiner;
    this.title = args.title;
    this.createAt = args.createAt;
    this.items = args.items;
    this.adjustmentStatus = args.adjustmentStatus;
    this.taskScore = args.taskScore;
    this.organizationScore = args.organizationScore;
    this.coherenceScore = args.coherenceScore;
    this.languageUseScore = args.languageUseScore;
    this.finalScore = args.finalScore;
    this.essayOrganization = args.essayOrganization;
    this.taskCompleteness = args.taskCompleteness;
    this.partColor = args.partColor;
    this.state = args.state;
    this.text = args.text;
    this.deliveryScore = args.deliveryScore;
    this.fluencyScore = args.fluencyScore;
    this["$type"] = args["$type"] || "Models.ResponseAdjust";
    this.lexical = args.lexical;
    this.lexicalScore = args.lexicalScore;
    this.grammatical = args.grammatical;
    this.grammaticalScore = args.grammaticalScore;
    this.coherence = args.coherence;
    this.languageUse = args.languageUse;
    this.developmentScore = args.developmentScore;
    this.developmentSuggestions = args.developmentSuggestions;
  }
  getx() {
    return this.examiner;
  }
  async getExaminer() {
    const ar: { user: User } = await httpGettr.Get(
      `v1/user/getUser2/${this.examinerId}`,
    );
    this.examiner = ar.user;
    return this.examiner;
  }
}

type transcript = {
  language: string;
  segments: {
    avg_logprob: number;
    compression_ratio: number;
    end: number;
    id: number;
    no_speech_prob: number;
    seek: number;
    start: number;
    temperature: number;
    text: string;
    tokens: number[];
    words: string[];
  }[];
};

export class SpeakingResponseAdjust extends ResponseAdjust {
  developement: string;
  developementScore: number;
  delivery?: number;
  deliveryScore: number;
  fluencyScore: number;
  languageUseScore: number;
  finalScore: number;
  id: string;
  responseId: string;
  examinerId: string;
  title: string;
  state: AdjustingState;
  createAt: string;
  transcript: transcript;
  pronunciationScore: number;
  constructor(args: SpeakingResponseAdjust) {
    super(args);
    this.transcript = args.transcript;
    this.pronunciationScore = args.pronunciationScore;
    this.developementScore = args.developementScore;
  }
}
class ResponseAdjustItem {
  $type: string;
}

export enum CorrectingType {
  Unknown = 0,
  Typo = 1,
  Grammer = 2,
}

export class CorrectingPart {
  before: string;
  range: { start: number; end: number };
  after: string;
  reason: string;
  correctingType: CorrectingType;
  files?: string[];
}

export class CorectingAdjustItem extends ResponseAdjustItem {
  before: string;
  after: string;
  items: List<CorrectingPart>;
  title: string;
  partColor: string;
  constructor(args: Omit<CorectingAdjustItem, "$type">) {
    super();
    this.before = args.before;
    this.after = args.after;
    this.items = args.items;
    this.title = args.title;
    this.partColor = args.partColor;
    this["$type"] = "Models.CorectingAdjustItem";
  }
}
export class PronunciationReportPart {
  score: number;
  end: string;
  start: string;
  text: string;
  files: string[];
  reason: string;
  constructor(args: Omit<PronunciationReportPart, "$type">) {
    this.score = args.score;
    this.end = parseFloat(args.end);
    this.start = parseFloat(args.start);
    this.text = args.text;
    this.files = args.files;
    this.reason = args.reason;
    // this['$type']='Models.PronunciationReportPart';
  }
}
class PronunciationReportPartInSpeaking {
  pronunciationReports: PronunciationReportPart[];
  constructor(args: PronunciationReportPart[]) {
    this.pronunciationReports = args;
  }
}

export class SpeakingAdjust extends ResponseAdjustItem {
  pronunciationReports: PronunciationReportPart[];
  constructor(args: PronunciationReportPart[]) {
    super();
    this.pronunciationReports = args;
    this["$type"] = "Models.PronunciationReportPart";
  }
}

export enum ABGreaterType {
  AIsGreater = 1,
  BbIGreater = 2,
  equal = 3,
  notKnown = 4,
}

export class QuantWhichIsGreaterResponse extends Response {
  response: ABGreaterType;
  constructor(args: QuantWhichIsGreaterResponse) {
    super(args);
    this.response = args.response;
  }
  toJson(): QuantWhichIsGreaterResponse {
    this["$type"] = "Models.QuantWhichIsGreaterResponse";
    return this;
  }
}
