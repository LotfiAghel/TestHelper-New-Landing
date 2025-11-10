import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";
import { manager as context } from "../../../managers"

import { AEntity } from "../IEntity";
import { Exam } from "./Exam";
import { SectionType } from "./SectionType";
import { Subject } from "./Subject";




	export class Company   extends AEntity {
		name : string;

		async getExams():Promise<Exam[]>{
			 var ar =await context.ExamManager.getSubTable("v1/generic/Models__Company/"+this.id+"/exams")!;

			 return  ar;

		}


		async getSubjects():Promise<Subject[]>{
			 var ar =await context.SubjectManager.getSubTable("v1/generic/Models__Company/"+this.id+"/Subjects")!;

			 return  ar;

		}


		async getSectionTypes():Promise<SectionType[]>{
			 var ar =await context.SectionTypeManager.getSubTable("v1/generic/Models__Company/"+this.id+"/SectionTypes")!;

			 return  ar;

		}


		constructor(args:{ id:number,name:string }){
			super(args)

			this.name = args.name;

		}


		 toJson():Company{
			 //@ts-ignore

			 this["$type"]="Models.Company"

			 return this;

		}


	}

export const CompanyCreator = (args:any)=> new Company(args)
