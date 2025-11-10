import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";
import { manager as context } from "../../../managers"



import { AEntity   , AEntityCreator } from "../IEntity"
import { ExamPartType  } from "./ExamPartType"
// import { Exam   , ExamCreator } from "Models/Models/Models/Exams/Exam"
// import { SectionType   , SectionTypeCreator } from "Models/Models/Models/Exams/SectionType"
// import { Question   , QuestionCreator, QuestionPack } from "Models/Models/Models/Exams/Question"
// import { SectionUserProgress   , SectionUserProgressCreator } from "Models/Models/Models/Exams/SectionUserProgress"
// import { SectionPart   , SectionPartCreator } from "Models/Models/Models/Exams/SectionPart"
import { Exam } from "./Exam";
import { SectionType } from "./SectionType";
import { Question, QuestionPack } from "./Question";
import { SectionPart } from "./SectionPart";






	export class Section   extends AEntity {
		name : string;

		title : string;

		examPartType : ExamPartType;

		partOrder : number;

		partOrderMagnitiude : number;

		// level : SectionDificulty

		timeToAnswer : number;

		examId : Forg<Exam,number>;

		sectionTypeId? : Forg<SectionType,number>;

		difficulty?: number;
		quality?: number;
		repetition?: number;

		questionPacks:QuestionPack;        

		async getExam():Promise<Exam>{
			//this code must handle async and sync 2

			 return await context.ExamManager.get(this.examId);

		}


		async getSectionType():Promise<SectionType>{
			//this code must handle async and sync 2

			 return await context.SectionTypeManager.get(this.sectionTypeId!);

		}


		async getQuestions():Promise<Question[]>{
			 var ar =await context.QuestionManager.getSubTable("v1/generic/Models__Section/"+this.id+"/questions")!;

			 return  ar;

		}
		async getQuestionPacks():Promise<QuestionPack[]>{
			 var ar =await context.QuestionPackManager.getSubTable("v1/generic/Models__Section/"+this.id+"/questionPacks")!;

			 return  ar;

		}

		async getProgress():Promise<any[]>{
			 return await context.QuestionManager.getSubTable("v1/generic/Models__UserSectionData/"+this.id)!;

		}


		async getSectionParts():Promise<SectionPart[]>{
			 var ar =await context.SectionPartManager.getSubTable("v1/generic/Models__Section/"+this.id+"/SectionParts")!;

			 return  ar;

		}
		level:any

		constructor(args:{ id:number,name:string,title:string,examPartType:ExamPartType,partOrder:number,partOrderMagnitiude:number,level:any,timeToAnswer:number,examId:number,sectionTypeId?:number, difficulty?:number, quality?:number, repetition?:number,
		 }){
			super(args)

			this.name = args.name;

			this.title = args.title;

			this.examPartType = args.examPartType;

			this.partOrder = args.partOrder;

			this.partOrderMagnitiude = args.partOrderMagnitiude;

			this.level = args.level;

			this.timeToAnswer = args.timeToAnswer;

			this.examId = args.examId;

			this.sectionTypeId = args.sectionTypeId;

			this.difficulty = args.difficulty;

			this.quality = args.quality;

			this.repetition = args.repetition;

		}


		 toJson():Section{
			 //@ts-ignore

			 this["$type"]="Models.Section"

			 return this;

		}


	}

export const SectionCreator = (args:any)=> new Section(args)
