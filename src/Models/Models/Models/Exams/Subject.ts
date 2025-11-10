import { manager as context } from "../../../managers"



// import { AEntity   , AEntityCreator } from "Models/old_testhelper/ViewGeneratorBase/IEntity"
// import { Company   , CompanyCreator } from "Models/Models/Models/Exams/Company"
// import { SectionPartSubject   , SectionPartSubjectCreator } from "Models/Models/Models/Exams/SectionPartSubject"
import { SectionPart, SmallSectionPart } from "./SectionPart";
import { Section } from "./Section";
import { AEntity } from "../IEntity";
import { Company } from "./Company";






	export class Subject   extends AEntity {

		id:number;
		isRemoved:boolean;
		listeningSectionsNumber:number;
		name:string;
		neoListeningSectionsNumber:number;
		neoReadingSectionsNumber:number;
		neoSpeakingSectionsNumber:number;
		neoWritingSectionsNumber:number;
		partOrder:number;
		readingSectionsNumber:number;
		subjectType:number;
		tpoListeningSectionsNumber:number;
		tpoReadingSectionsNumber:number;
		tpoSpeakingSectionsNumber:number;
		tpoWritingSectionsNumber:number;
		zhentiListeningSectionsNumber:number;
		zhentiReadingSectionsNumber:number;
		zhentiSpeakingSectionsNumber:number;
		zhentiWritingSectionsNumber:number;

		async getSmallSectionParts():Promise<SmallSectionPart[]>{
			var ar =await context.SmallSectionPartManager.getSubTable("v1/generic/Models__Subject/"+this.id+"/smallSectionParts")!;

			return ar;

		}
		async getSections(): Promise<Section[]> {
			var ar = await context.SectionManager.getSubTable("v1/generic/Models__Subject/" + this.id + "/sections")!;

			return ar;

		}

		async getSections2(companyId: number): Promise<Section[]> {

			var ar = await context.SectionManager.getSubTable("v1/generic/Models__Subject/" + this.id + "/sections2" + `/${companyId}`,false)!;

			return ar;

		}


		async getSectionParts():Promise<SectionPart[]>{
			 var ar =await context.SectionPartManager.getSubTable("v1/generic/Models__Subject/"+this.id+"/sectionParts")!;

			 return  ar;

		}


		constructor(args: Subject){
			super(args)
			this.id=args.id
			this.isRemoved=args.isRemoved
			this.listeningSectionsNumber=args.listeningSectionsNumber
			this.name=args.name
			this.neoListeningSectionsNumber=args.neoListeningSectionsNumber
			this.neoReadingSectionsNumber=args.neoReadingSectionsNumber
			this.neoSpeakingSectionsNumber=args.neoSpeakingSectionsNumber
			this.neoWritingSectionsNumber=args.neoWritingSectionsNumber
			this.partOrder=args.partOrder
			this.readingSectionsNumber=args.readingSectionsNumber
			this.subjectType=args.subjectType
			this.tpoListeningSectionsNumber=args.tpoListeningSectionsNumber
			this.tpoReadingSectionsNumber=args.tpoReadingSectionsNumber
			this.tpoSpeakingSectionsNumber=args.tpoSpeakingSectionsNumber
			this.tpoWritingSectionsNumber=args.tpoWritingSectionsNumber
			this.zhentiListeningSectionsNumber=args.zhentiListeningSectionsNumber
			this.zhentiReadingSectionsNumber=args.zhentiReadingSectionsNumber
			this.zhentiSpeakingSectionsNumber=args.zhentiSpeakingSectionsNumber
			this.zhentiWritingSectionsNumber=args.zhentiWritingSectionsNumber
		}


		 toJson():Subject{
			 //@ts-ignore

			 this["$type"]="Models.Subject"

			 return this;

		}


	}

export const SubjectCreator = (args:any)=> new Subject(args)
