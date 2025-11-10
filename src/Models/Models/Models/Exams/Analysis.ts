import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";
import { manager as context } from "../../../managers"



// import { AEntity   , AEntityCreator } from "Models/old_testhelper/ViewGeneratorBase/IEntity"
// import { Question   , QuestionCreator } from "Models/Models/Models/Exams/Question"
// import { SectionPart   , SectionPartCreator } from "Models/Models/Models/Exams/SectionPart"
import { AEntity } from "../IEntity";
import { Question } from "./Question";
import { SectionPart } from "./SectionPart";




	export class Analysis   extends AEntity {
		name : string;

		content : string;

		files : List<string>;

		questionId? : Forg<Question,number>;

		sectionPartId? : Forg<SectionPart,number>;

		async getQuestion():Promise<Question>{
			//this code must handle async and sync 2

			 return await context.QuestionManager.get(this.questionId!);

		}


		async getSectionPart():Promise<SectionPart>{
			//this code must handle async and sync 2

			 return await context.SectionPartManager.get(this.sectionPartId!);

		}


		constructor(args:{ id:number,name:string,content:string,files:List<string>,questionId?:number,sectionPartId?:number }){
			super(args)

			this.name = args.name;

			this.content = args.content;

			this.files = args.files;

			this.questionId = args.questionId;

			this.sectionPartId = args.sectionPartId;

		}


		 toJson():Analysis{
			 //@ts-ignore

			 this["$type"]="Models.Analysis"

			 return this;

		}


	}

export const AnalysisCreator = (args:any)=> new Analysis(args)
