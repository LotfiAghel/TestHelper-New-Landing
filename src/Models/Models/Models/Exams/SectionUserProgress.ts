import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";
import { manager as context } from "../../../managers"
import { IIdMapper } from "../Basics";
import { Section } from "./Section";



// import { IIdMapper  } from "Models/Basics/BaseModels/Basics/Basics"
// import { User   , UserCreator } from "Models/Models/Models/Customer/Customer"
// import { Section   , SectionCreator } from "Models/Models/Models/Exams/Section"




class User{}

	export class SectionUserProgress   implements IIdMapper<string> {
		id : string;

		progress : number;

		userId : Forg<User,Guid>;

		sectionId : Forg<Section,number>;




		async getSection():Promise<Section>{
			//this code must handle async and sync 2

			 return await context.SectionManager.get(this.sectionId);

		}


		constructor(args:{ id:string,progress:number,userId:Guid,sectionId:number }){
			this.id = args.id;

			this.progress = args.progress;

			this.userId = args.userId;

			this.sectionId = args.sectionId;

		}


		 toJson():SectionUserProgress{
			 //@ts-ignore

			 this["$type"]="Models.SectionUserProgress"

			 return this;

		}


	}

export const SectionUserProgressCreator = (args:any)=> new SectionUserProgress(args)
