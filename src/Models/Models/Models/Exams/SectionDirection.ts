import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";
import { manager as context } from "../../../managers"



// import { AEntity   , AEntityCreator } from "Models/old_testhelper/ViewGeneratorBase/IEntity"
// import { SectionType   , SectionTypeCreator } from "Models/Models/Models/Exams/SectionType"
import { AEntity } from "../IEntity";
import { SectionType } from "./SectionType";



class IEntity{}
	export interface INewEntityWithFile  extends IEntity {
	}

	export class SectionDirection   extends AEntity implements INewEntityWithFile {
		content : string;

		files : List<string>;

		sectionType : SectionType;

		sectionTypeId : number;

		constructor(args:{ id:number,content:string,files:List<string>,sectionType:SectionType,sectionTypeId:number }){
			super(args)

			this.content = args.content;

			this.files = args.files;

			this.sectionType = args.sectionType;

			this.sectionTypeId = args.sectionTypeId;

		}


		 toJson():SectionDirection{
			 //@ts-ignore

			 this["$type"]="Models.SectionDirection"

			 return this;

		}


	}

export const SectionDirectionCreator = (args:any)=> new SectionDirection(args)
