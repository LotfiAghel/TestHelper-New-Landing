import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";
import { manager as context } from "../../../managers"




import { AEntity   , AEntityCreator } from "../IEntity"
import { INewEntityWithFile  } from "./SectionDirection"
import { Question   , QuestionCreator } from "./Question"






	export class QuestionSample   extends AEntity implements INewEntityWithFile {
		name : string;

		content : string;

		files : List<string>;

		questionId? : Forg<Question,number>;

		async getQuestion():Promise<Question>{
			//this code must handle async and sync 2

			 return await context.QuestionManager.get(this.questionId!);

		}


		constructor(args:{ id:number,name:string,content:string,files:List<string>,questionId?:number }){
			super(args)

			this.name = args.name;

			this.content = args.content;

			this.files = args.files;

			this.questionId = args.questionId;

		}


		 toJson():QuestionSample{
			 //@ts-ignore

			 this["$type"]="Models.QuestionSample"

			 return this;

		}


	}

export const QuestionSampleCreator = (args:any)=> new QuestionSample(args)
