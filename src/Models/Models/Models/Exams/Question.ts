// @ts-nocheck
import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";
import { manager as context } from "../../../managers"



// import { AEntity   , AEntityCreator } from "Models/old_testhelper/ViewGeneratorBase/IEntity"

import { Section   , SectionCreator } from "./Section"
import { Analysis   , AnalysisCreator } from "./Analysis"
import { QuestionSample   , QuestionSampleCreator } from "./QuestionSample"
import { Response   , ResponseCreator } from "../Customer/Response"
// import { Content   , ContentCreator } from "Models/Models/Models/AiResponse/AiResponse"
import { IEntity3  } from "../IEntity"
import { QuestionTableOptions   , QuestionTableOptionsCreator } from "./QuestionOptions"
import { QuestionOptions   , QuestionOptionsCreator } from "./QuestionOptions"
// import stringParser from "ielts/services/stringParser";
import { AEntity } from "../IEntity";






	export enum ViewType {
		Normal = 1,

		Table = 2,

		DragAndDrop = 3,

	}

	export class Question   extends AEntity {

		name : string;

		content: string;

		optionsIsHorizontal: boolean;

		questionText : string;

		partOrder : number;

		mobileContent : string;

		computedMobileContent : string;

		mobileQuestionText : string;

		computedMobileQuestionText : string;

		files : List<string>;

		difficulty : number;

		

		timeToAnswer? : number;

		questionDirectionText : string;

		questionDirectionFiles : List<string>;

		mark : number;

		isOr0 : Boolean;

		correctAnswer : string;

		sectionId : Forg<Section,number>;

		inputsContainerHtml: string;
		
		async getSection():Promise<Section>{
			//this code must handle async and sync 2

			 return await context.SectionManager.get(this.sectionId);

		}

		createRes<T extends new (args: Response) => any>(class_: T, args: Response) {
			return new class_(args);
		}

		async getQuestionSamples():Promise<QuestionSample[]>{
			 var ar =await context.QuestionSampleManager.getSubTable("v1/generic/Models__Question/"+this.id+"/QuestionSamples")!;

			 return  ar;

		}

		constructor(args: { id: number, name: string, content: string, questionText: string, partOrder: number, mobileContent: string, computedMobileContent: string, mobileQuestionText: string, computedMobileQuestionText: string, files: List<string>, difficulty: number, timeToAnswer?: number, questionDirectionText: string, questionDirectionFiles: List<string>, mark: number, isOr0: Boolean, correctAnswer: string, sectionId: number; optionsIsHorizontal: boolean; inputsContainerHtml?: string }){
			super(args)

			this.name = args.name;

			this.content = args.content;

			this.questionText = args.questionText;

			this.partOrder = args.partOrder;

			this.mobileContent = args.mobileContent;

			this.computedMobileContent = args.computedMobileContent;

			this.mobileQuestionText = args.mobileQuestionText;

			this.computedMobileQuestionText = args.computedMobileQuestionText;

			this.files = args.files;

			this.difficulty = args.difficulty;

			this.optionsIsHorizontal = args.optionsIsHorizontal;

			this.inputsContainerHtml = args.inputsContainerHtml ||'';

			this.timeToAnswer = args.timeToAnswer;

			this.questionDirectionText = args.questionDirectionText;

			this.questionDirectionFiles = args.questionDirectionFiles;

			this.mark = args.mark;

			this.isOr0 = args.isOr0;

			this.correctAnswer = args.correctAnswer;

			this.sectionId = args.sectionId;

		}


		 toJson():Question{
			 //@ts-ignore

			 this["$type"]="Models.Question"

			 return this;

		}


	}

export const QuestionCreator = (args:any)=> {
	const types = {
		"Question": (args: any) => new Question(args),
		"Models.StringQuestion": (args: any) => new StringQuestion(args),
		"Models.MultimediaQuestion": (args: any) => new MultimediaQuestion(args),
		"Models.QuestionOptinal": (args: any) => new QuestionOptinal(args),
		"Models.QuestionTrueFalseOption": (args: any) => new QuestionTrueFalseOption(args),
		"Models.QuestionOptinalMulti": (args: any) => new QuestionOptinalMulti(args),
		"Models.QuestionOptinalSingle": (args: any) => new QuestionOptinalSingle(args),
		"Models.QuestionOptinalMultiOrdered": (args: any) => new QuestionOptinalMultiOrdered(args),
		"Models.BlankSpaceQuestion": (args: any) => new BlankSpaceQuestion(args),
		"Models.MultiOptionConstPoint": (args: any) => new MultiOptionConstPoint(args),
		"Models.TabledChoosed": (args: any) => new TabledChoosed(args),
		"Models.WordQuestion": (args: any) => new WordQuestion(args),
		"Models.QuantWhichIsGreaterQuestion": (args: any) => new QuantWhichIsGreaterQuestion(args),
	};
	return types[args["$type"]](args);
}

interface IHavePartOrder {
	PartOrder: number;
}

export enum PapaenQUESTION_TYPE_MODE{
    NONE_KHODAM=0,
    FILL_IN_MULTIPLE_BLANKS_PARGRAPH = 321,
    FILL_IN_MULTIPLE_BLANKS_TABLE = 322,
    FILL_IN_MULTIPLE_BLANKS_SENTENCE = 323,
    FILL_IN_MULTIPLE_BLANKS_IMAGE = 324,
    MATCH_DRAG_TO_QUESTION = 341,
    MATCH_DRAG_TO_HEAD = 342,
    MATCH_DRAG_TO_PARAGRAPH = 361,
    MATCH_TABLE = 343,
    MATCH_CHOOSE = 344,
    MATCH_FILL_IN_BANK = 345,
};

export class QuestionPack extends AEntity implements IHavePartOrder {
	header: string;
	SectionId: number;
	section: Section;
	PartOrder: number;
	questions: List<ForeignKey2<Question, number>>;
	htmlContent: string;
	startQ: number;
	endQ: number;
	mtype: string;
	mode: PapaenQUESTION_TYPE_MODE;
	constructor(args:QuestionPack) {
		super(args);
		this.header = args.header;
		this.SectionId = args.SectionId;
		this.section = args.section;
		this.PartOrder = args.PartOrder;
		this.questions = args.questions;
		this.htmlContent = args.htmlContent || ''
		this.startQ = args.startQ;
		this.endQ = args.endQ;
		this.mtype = args.mtype;
		this.mode = args.mode;
	}

	toJson(): QuestionPack {
		//@ts-ignore

		this["$type"] = "Models.QuestionPack"

		return this;

	}
	static Creator(args) {
		return new QuestionPack(args);
	}

}

export class WritingAvatar implements IEntity3<number> {
	id: number;

	name: string;

	avatarPath: string;

	constructor(args: { id: number, name: string, avatarPath: string }) {
		this.id = args.id;

		this.name = args.name;

		this.avatarPath = args.avatarPath;

	}


	toJson(): WritingAvatar {
		//@ts-ignore

		this["$type"] = "Models.WritingAvatar"

		return this;

	}


}
export class QuantWhichIsGreaterQuestion extends Question {
	$type: string
	quantA: string
	quantB: string
	name: string
	content: string
	sectionId: number
	questionText: string
	leftContentInvisible: boolean
	partOrder: number
	mobileContent: any
	computedMobileContent: string
	mobileQuestionText: any
	computedMobileQuestionText: string
	files: any
	difficulty: number
	tags: any
	timeToAnswer: any
	questionDirectionText: any
	questionDirectionFiles: any
	hardWords: any
	mark: number
	correctAnswer: string
	id: number

	constructor(args: QuantWhichIsGreaterQuestion) {
		super(args);
		this.quantA = args.quantA
		this.quantB = args.quantB
		this.name = args.name
		this.content = args.content
		this.sectionId = args.sectionId
		this.questionText = args.questionText
		this.leftContentInvisible = args.leftContentInvisible
		this.partOrder = args.partOrder
		this.mobileContent = args.mobileContent
		this.computedMobileContent = args.computedMobileContent
		this.mobileQuestionText = args.mobileQuestionText
		this.computedMobileQuestionText = args.computedMobileQuestionText
		this.files = args.files
		this.difficulty = args.difficulty
		this.tags = args.tags
		this.timeToAnswer = args.timeToAnswer
		this.questionDirectionText = args.questionDirectionText
		this.questionDirectionFiles = args.questionDirectionFiles
		this.hardWords = args.hardWords
		this.mark = args.mark
		this.correctAnswer = args.correctAnswer
		this.id = args.id
	}

}

export const WritingAvatarCreator = (args:any)=> new WritingAvatar(args)
	export class WritingListItem   {
		constructor(args:{  }){
		}


		 toJson():WritingListItem{
			 //@ts-ignore

			 this["$type"]="Models.WritingListItem"

			 return this;

		}


	}

export const WritingListItemCreator = (args:any)=> new WritingListItem(args)
	export class StringQuestion   extends Question {
		leftList : List<WritingListItem>;

		rightList : List<WritingListItem>;

		constructor(args:{ name:string,content:string,sectionId:number,questionText:string,partOrder:number,correctAnswer:string,mobileContent:string,computedMobileContent:string,mobileQuestionText:string,computedMobileQuestionText:string,files:List<string>,difficulty:number,tag:string,timeToAnswer?:number,questionDirectionText:string,questionDirectionFiles:List<string>,section:Section,mark:number,isOr0:Boolean,id:number,leftList:List<WritingListItem>,rightList:List<WritingListItem> }){
			super(args)

			this.leftList = args.leftList;

			this.rightList = args.rightList;

		}


		 toJson():StringQuestion{
			 //@ts-ignore

			 this["$type"]="Models.StringQuestion"

			 return this;

		}


	}

export const StringQuestionCreator = (args:any)=> new StringQuestion(args)
	export class MultimediaQuestion   extends Question {
		constructor(args:{ name:string,content:string,sectionId:number,correctAnswer:string,questionText:string,partOrder:number,mobileContent:string,computedMobileContent:string,mobileQuestionText:string,computedMobileQuestionText:string,files:List<string>,difficulty:number,tag:string,timeToAnswer?:number,questionDirectionText:string,questionDirectionFiles:List<string>,section:Section,mark:number,isOr0:Boolean,id:number }){
			super(args)

		}


		 toJson():MultimediaQuestion{
			 //@ts-ignore

			 this["$type"]="Models.MultimediaQuestion"

			 return this;

		}


	}

export const MultimediaQuestionCreator = (args:any)=> new MultimediaQuestion(args)
	export class QuestionOptinal   extends Question {
		questionOptions : List<QuestionTableOptions>;

		row : List<QuestionCulmns>;

		correctAnswer : string;

		constructor(args:{ name:string,content:string,sectionId:number,questionText:string,partOrder:number,mobileContent:string,computedMobileContent:string,mobileQuestionText:string,computedMobileQuestionText:string,files:List<string>,difficulty:number,tag:string,timeToAnswer?:number,questionDirectionText:string,questionDirectionFiles:List<string>,section:Section,mark:number,isOr0:Boolean,id:number,questionOptions:List<QuestionTableOptions>,row:List<QuestionCulmns>,correctAnswer:string }){
			super(args)

			this.questionOptions = args.questionOptions;

			this.row = args.row;

			this.correctAnswer = args.correctAnswer;

		}


		 toJson():QuestionOptinal{
			 //@ts-ignore

			 this["$type"]="Models.QuestionOptinal"

			 return this;

		}


	}

export const QuestionOptinalCreator = (args:any)=> new QuestionOptinal(args)
	export class QuestionTrueFalseOption   extends Question {
		questionOptions : List<QuestionOptions>;
		
		correctAnswer : string;

		constructor(args:{ name:string,content:string,sectionId:number,questionText:string,partOrder:number,mobileContent:string,computedMobileContent:string,mobileQuestionText:string,computedMobileQuestionText:string,files:List<string>,difficulty:number,tag:string,timeToAnswer?:number,questionDirectionText:string,questionDirectionFiles:List<string>,section:Section,mark:number,isOr0:Boolean,id:number,questionOptions:List<QuestionOptions>,correctAnswer:string }){
			super(args)

			this.questionOptions = args.questionOptions;

			this.correctAnswer = args.correctAnswer;

		}


		 toJson():QuestionTrueFalseOption{
			 //@ts-ignore

			 this["$type"]="Models.QuestionTrueFalseOption"

			 return this;

		}


	}

export const QuestionTrueFalseOptionCreator = (args:any)=> new QuestionTrueFalseOption(args)
	export class QuestionCulmns   {
		title? : string;

		numberOfAvailable : number;

		constructor(args:{ title?:string,numberOfAvailable:number }){
			this.title = args.title;

			this.numberOfAvailable = args.numberOfAvailable;

		}


		 toJson():QuestionCulmns{
			 //@ts-ignore

			 this["$type"]="Models.QuestionCulmns"

			 return this;

		}


	}

export const QuestionCulmnsCreator = (args:any)=> new QuestionCulmns(args)
	export class QuestionOptinalMulti   extends QuestionOptinal {
		viewType : ViewType;

		constructor(args:{ questionOptions:List<QuestionTableOptions>,row:List<QuestionCulmns>,name:string,correctAnswer:string,content:string,sectionId:number,questionText:string,partOrder:number,mobileContent:string,computedMobileContent:string,mobileQuestionText:string,computedMobileQuestionText:string,files:List<string>,difficulty:number,tag:string,timeToAnswer?:number,questionDirectionText:string,questionDirectionFiles:List<string>,section:Section,mark:number,isOr0:Boolean,id:number,viewType:ViewType }){
			super(args)

			this.viewType = args.viewType;

		}


		 toJson():QuestionOptinalMulti{
			 //@ts-ignore

			 this["$type"]="Models.QuestionOptinalMulti"

			 return this;

		}


	}

export const QuestionOptinalMultiCreator = (args:any)=> new QuestionOptinalMulti(args)
	export class QuestionOptinalSingle   extends QuestionTrueFalseOption {
		constructor(args:{ questionOptions:List<QuestionOptions>,name:string,content:string,correctAnswer:string,sectionId:number,questionText:string,partOrder:number,mobileContent:string,computedMobileContent:string,mobileQuestionText:string,computedMobileQuestionText:string,files:List<string>,difficulty:number,tag:string,timeToAnswer?:number,questionDirectionText:string,questionDirectionFiles:List<string>,section:Section,mark:number,isOr0:Boolean,id:number }){
			super(args)

		}


		 toJson():QuestionOptinalSingle{
			 //@ts-ignore

			 this["$type"]="Models.QuestionOptinalSingle"

			 return this;

		}


	}

export const QuestionOptinalSingleCreator = (args:any)=> new QuestionOptinalSingle(args)
	export class QuestionOptinalMultiOrdered   extends QuestionOptinal {
		correctAnswer : string;

		constructor(args:{ questionOptions:List<QuestionTableOptions>,row:List<QuestionCulmns>,name:string,content:string,sectionId:number,questionText:string,partOrder:number,mobileContent:string,computedMobileContent:string,mobileQuestionText:string,computedMobileQuestionText:string,files:List<string>,difficulty:number,tag:string,timeToAnswer?:number,questionDirectionText:string,questionDirectionFiles:List<string>,section:Section,mark:number,isOr0:Boolean,id:number,correctAnswer:string }){
			super(args)

			this.correctAnswer = args.correctAnswer;

		}


		 toJson():QuestionOptinalMultiOrdered{
			 //@ts-ignore

			 this["$type"]="Models.QuestionOptinalMultiOrdered"

			 return this;

		}


	}

export const QuestionOptinalMultiOrderedCreator = (args:any)=> new QuestionOptinalMultiOrdered(args)
	export class BlankSpaceQuestion   extends QuestionOptinalSingle {
		constructor(args:{ questionOptions:List<QuestionOptions>,correctAnswer:string,name:string,content:string,sectionId:number,questionText:string,partOrder:number,mobileContent:string,computedMobileContent:string,mobileQuestionText:string,computedMobileQuestionText:string,files:List<string>,difficulty:number,tag:string,timeToAnswer?:number,questionDirectionText:string,questionDirectionFiles:List<string>,section:Section,mark:number,isOr0:Boolean,id:number }){
			super(args)

		}


		 toJson():BlankSpaceQuestion{
			 //@ts-ignore

			 this["$type"]="Models.BlankSpaceQuestion"

			 return this;

		}


	}

export const BlankSpaceQuestionCreator = (args:any)=> new BlankSpaceQuestion(args)
	export class MultiOptionConstPoint   extends QuestionOptinal {
		constructor(args:{ questionOptions:List<QuestionTableOptions>,correctAnswer:string,row:List<QuestionCulmns>,name:string,content:string,sectionId:number,questionText:string,partOrder:number,mobileContent:string,computedMobileContent:string,mobileQuestionText:string,computedMobileQuestionText:string,files:List<string>,difficulty:number,tag:string,timeToAnswer?:number,questionDirectionText:string,questionDirectionFiles:List<string>,section:Section,mark:number,isOr0:Boolean,id:number }){
			super(args)

		}


		 toJson():MultiOptionConstPoint{
			 //@ts-ignore

			 this["$type"]="Models.MultiOptionConstPoint"

			 return this;

		}


	}

export const MultiOptionConstPointCreator = (args:any)=> new MultiOptionConstPoint(args)
	export class TabledChoosed   extends QuestionOptinalMulti {
		correctAnswer : string;

		constructor(args:{ viewType:ViewType,questionOptions:List<QuestionTableOptions>,row:List<QuestionCulmns>,name:string,content:string,sectionId:number,questionText:string,partOrder:number,mobileContent:string,computedMobileContent:string,mobileQuestionText:string,computedMobileQuestionText:string,files:List<string>,difficulty:number,tag:string,timeToAnswer?:number,questionDirectionText:string,questionDirectionFiles:List<string>,section:Section,mark:number,isOr0:Boolean,id:number,correctAnswer:string }){
			super(args)

			this.correctAnswer = args.correctAnswer;

		}


		 toJson():TabledChoosed{
			 //@ts-ignore

			 this["$type"]="Models.TabledChoosed"

			 return this;

		}


	}

export const TabledChoosedCreator = (args:any)=> new TabledChoosed(args)

export class WordQuestion extends StringQuestion {
	answerSheet?: string[];
	twoWordConnector?: string;
	constructor(args: WordQuestion) {
		super(args)
		this.answerSheet = args.answerSheet;
		this.twoWordConnector = args.twoWordConnector;
	}

}
