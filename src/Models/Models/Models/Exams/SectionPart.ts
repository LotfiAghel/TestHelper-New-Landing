import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";
import { manager as context } from "../../../managers"



// import { AEntity   , AEntityCreator } from "Models/old_testhelper/ViewGeneratorBase/IEntity"
// import { Section   , SectionCreator } from "Models/Models/Models/Exams/Section"
// import { INewEntityWithFile  } from "Models/Models/Models/Exams/SectionDirection"
// import { Analysis   , AnalysisCreator } from "Models/Models/Models/Exams/Analysis"
// import { ImportantWords   , ImportantWordsCreator } from "Models/Models/Models/Exams/ImportantWords"
// import { SectionPartSubject   , SectionPartSubjectCreator } from "Models/Models/Models/Exams/SectionPartSubject"
import { AEntity } from "../IEntity";
import { ImportantWords } from "./ImportantWords";
import { Section } from "./Section";
import { INewEntityWithFile } from "./SectionDirection";






	export class SmallSectionPart   extends AEntity {
		name : string;

		examId : number;

		sectionId : Forg<Section,number>;
		section:Section;
		async getSection():Promise<Section>{
			//this code must handle async and sync 2

			 return await context.SectionManager.get(this.sectionId);

		}


		constructor(args:{ id:number,name:string,examId:number,sectionId:number }){
			super(args)

			this.name = args.name;

			this.examId = args.examId;

			this.sectionId = args.sectionId;

		}


		 toJson():SmallSectionPart{
			 //@ts-ignore

			 this["$type"]="Models.Exams.SmallSectionPart"

			 return this;

		}


	}

export const SmallSectionPartCreator = (args:any)=> new SmallSectionPart(args)
	export class SectionPart   extends SmallSectionPart implements INewEntityWithFile {
		onlyWeb : Boolean;

		content? : string;

		paragraphs : List<string>;

		files : List<string>;

		timeToRead? : number;

		subtitile : List<SubtitleRow>;

		partOrder? : number;
		imagesTiming: {
			start: number;
			text: string;
			end: number
		}[]


		async getImportantWords():Promise<ImportantWords[]>{
			 var ar =await context.ImportantWordsManager.getSubTable("v1/generic/Models__Exams__SectionPart/"+this.id+"/importantWords")!;

			 return  ar;

		}


		

		constructor(args: {
			name: string, sectionId: number, section: Section, examId: number, id: number, onlyWeb: Boolean, content?: string, paragraphs: List<string>, files: List<string>, timeToRead?: number, subtitile: List<SubtitleRow>, partOrder?: number, imagesTiming: {
				start: number;
				text: string;
				end: number
			}[]
}){
			super(args)
			this.imagesTiming = args.imagesTiming;
			this.onlyWeb = args.onlyWeb;

			this.content = args.content;

			this.paragraphs = args.paragraphs;

			this.files = args.files || [];

			this.timeToRead = args.timeToRead;

			this.subtitile = args.subtitile;

			this.partOrder = args.partOrder;

		}


		 toJson():SectionPart{
			 //@ts-ignore

			 this["$type"]="Models.Exams.SectionPart"

			 return this;

		}


	}

export const SectionPartCreator = (args:any)=> new SectionPart(args)
	export type SubtitleRow = {
		text : string;

		start : number;

		end : number;

	}

