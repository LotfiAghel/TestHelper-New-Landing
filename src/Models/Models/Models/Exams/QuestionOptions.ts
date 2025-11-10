import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";
import { manager as context } from "../../../managers"
import { AEntity } from "../IEntity";
import { Question } from "./Question";






	export enum OptionTitle {
		A = 1,

		B = 2,

		C = 3,

		D = 4,

		E = 5,

		F = 6,

		G = 7,

		H = 8,

		I = 9,

		J = 10,

		K = 11,

		L = 12,

		M = 13,

		N = 14,

		O = 15,

		P = 16,

		Q = 17,

		R = 19,

		S = 20,

		T = 21,

		U = 22,

		V = 23,

		W = 24,

		X = 25,

		Y = 25,

		Z = 26,

	}

	export class QuestionOptionsBase   extends AEntity {
		title : OptionTitle;

		content : string;

		questionId : Forg<Question,number>;

		async getQuestion():Promise<Question>{
			//this code must handle async and sync 2

			 return await context.QuestionManager.get(this.questionId);

		}


		constructor(args:{ id:number,title:OptionTitle,content:string,questionId:number }){
			super(args)

			this.title = args.title;

			this.content = args.content;

			this.questionId = args.questionId;

		}


		 toJson():QuestionOptionsBase{
			 //@ts-ignore

			 this["$type"]="Models.QuestionOptionsBase"

			 return this;

		}


	}

export const QuestionOptionsBaseCreator = (args:any)=> new QuestionOptionsBase(args)
	export class QuestionOptions   extends QuestionOptionsBase {
		isCorrect : Boolean;

		constructor(args:{ title:OptionTitle,content:string,questionId:number,question:Question,id:number,isCorrect:Boolean }){
			super(args)

			this.isCorrect = args.isCorrect;

		}


		 toJson():QuestionOptions{
			 //@ts-ignore

			 this["$type"]="Models.QuestionOptions"

			 return this;

		}


	}

export const QuestionOptionsCreator = (args:any)=> new QuestionOptions(args)
	export class QuestionTableOptions   extends QuestionOptionsBase {
		correctColomn : number;

		constructor(args:{ title:OptionTitle,content:string,questionId:number,question:Question,id:number,correctColomn:number }){
			super(args)

			this.correctColomn = args.correctColomn;

		}


		 toJson():QuestionTableOptions{
			 //@ts-ignore

			 this["$type"]="Models.QuestionTableOptions"

			 return this;

		}


	}

export const QuestionTableOptionsCreator = (args:any)=> new QuestionTableOptions(args)
