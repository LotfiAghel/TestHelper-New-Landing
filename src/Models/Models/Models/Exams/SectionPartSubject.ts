import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";
import { manager as context } from "../../../managers"
import { SectionPart } from "./SectionPart";
import { Subject } from "./Subject";



// import { IIdMapper  } from "Models/Basics/BaseModels/Basics/Basics"
// import { SectionPart   , SectionPartCreator } from "Models/Models/Models/Exams/SectionPart"
// import { Subject   , SubjectCreator } from "Models/Models/Models/Exams/Subject"

class TwoKey<x,z>{}
class IIdMapper<T>{}


	export class SectionPartSubject   implements IIdMapper<string>,IIdMapper<TwoKey<number,number>> {
		sectionPartId : Forg<SectionPart,number>;

		subjectId : Forg<Subject,number>;

		async getSectionPart():Promise<SectionPart>{
			//this code must handle async and sync 2

			 return await context.SectionPartManager.get(this.sectionPartId);

		}


		async getSubject():Promise<Subject>{
			//this code must handle async and sync 2

			 return await context.SubjectManager.get(this.subjectId);

		}


		constructor(args:{ sectionPartId:number,subjectId:number }){
			this.sectionPartId = args.sectionPartId;

			this.subjectId = args.subjectId;

		}


		 toJson():SectionPartSubject{
			 //@ts-ignore

			 this["$type"]="Models.SectionPartSubject"

			 return this;

		}


	}

export const SectionPartSubjectCreator = (args:any)=> new SectionPartSubject(args)
