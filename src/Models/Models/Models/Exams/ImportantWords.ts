import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";
import { manager as context } from "../../../managers"
import { AEntity } from "../IEntity";



// import { AEntity   , AEntityCreator } from "Models/old_testhelper/ViewGeneratorBase/IEntity"
// import { SectionPart   , SectionPartCreator } from "Models/Models/Models/Exams/SectionPart"





	export class ImportantWords   extends AEntity {
		word : string;

		description : string;

		wordType : string;

		pronunciation : string;

		sentence : string;

		sectionPartId : Forg<any,number>;

		async getSectionPart():Promise<any>{
			//this code must handle async and sync 2

			 return await context.SectionPartManager.get(this.sectionPartId);

		}


		constructor(args:{ id:number,word:string,description:string,wordType:string,pronunciation:string,sentence:string,sectionPartId:number }){
			super(args)

			this.word = args.word;

			this.description = args.description;

			this.wordType = args.wordType;

			this.pronunciation = args.pronunciation;

			this.sentence = args.sentence;

			this.sectionPartId = args.sectionPartId;

		}


		 toJson():ImportantWords{
			 //@ts-ignore

			 this["$type"]="Models.ImportantWords"

			 return this;

		}


	}

export const ImportantWordsCreator = (args:any)=> new ImportantWords(args)
