import { manager as context } from "../../../managers"


// import { AEntity   , AEntityCreator } from "Models/old_testhelper/ViewGeneratorBase/IEntity"
// import { ExamPartType  } from "Models/old_testhelper/Models/Models/Exams/ExamPartType"
// import { Company   , CompanyCreator } from "Models/Models/Models/Exams/Company"
// import { Section   , SectionCreator } from "Models/Models/Models/Exams/Section"
// import { SectionDirection   , SectionDirectionCreator } from "Models/Models/Models/Exams/SectionDirection"
import { AEntity } from "../IEntity"
import { Company } from "./Company";
import { ExamPartType } from "./ExamPartType";
import { Section } from "./Section";
import { SectionDirection } from "./SectionDirection";






	export class SectionType   extends AEntity {
		name : string;

		examPartType : ExamPartType;

		companyId : number;

		company : Company;

		async getSections():Promise<Section[]>{
			 var ar =await context.SectionManager.getSubTable("v1/generic/Models__SectionType/"+this.id+"/Sections")!;

			 return  ar;

		}


		async getSectionDirection():Promise<SectionDirection[]>{
			 var ar =await context.SectionDirectionManager.getSubTable("v1/generic/Models__SectionType/"+this.id+"/SectionDirection")!;

			 return  ar;

		}


		constructor(args:{ id:number,name:string,examPartType:ExamPartType,companyId:number,company:Company }){
			super(args)

			this.name = args.name;

			this.examPartType = args.examPartType;

			this.companyId = args.companyId;

			this.company = args.company;

		}


		 toJson():SectionType{
			 //@ts-ignore

			 this["$type"]="Models.SectionType"

			 return this;

		}


	}

export const SectionTypeCreator = (args:any)=> new SectionType(args)
