import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";
import { manager as context } from "../../../managers"



// import { AEntity   , AEntityCreator } from "Models/old_testhelper/ViewGeneratorBase/IEntity"
import { Company   , CompanyCreator } from "./Company"
import { Section   , SectionCreator } from "./Section"
import { ExamPartSession   , ExamPartSessionCreator } from "../Customer/Response"
import { ExamSession   , ExamSessionCreator } from "../Customer/Response"
import { AEntity } from "../IEntity";




	export class Exam   extends AEntity {
		name : string;

		partOrder : number;

		totalReadingMark : number;

		totalListeningMark : number;

		totalReadingQuestions : number;

		totalListeningQuestions : number;

		partOrderMagnitiude : number;

		companyId : Forg<Company,number>;

		difficulty?: number;
		quality?: number;
		repetition?: number;
		readingDifficulty?: number;
		listeningDifficulty?: number;
		readingRepetition?: number;
		listeningRepetition?: number;
		writingRepetition?: number;
		speakingRepetition?: number;
		listeningQuality?: number;
		speakingQuality?: number;
		name2:string;
		showInBoost:boolean; 


		async getSections():Promise<Section[]>{
			 var ar =await context.SectionManager.getSubTable("v1/generic/Models__Exam/"+this.id+"/Sections")!;

			 return  ar;

		}




		constructor(args: Exam) {
			super(args)

			this.name = args.name;

			this.partOrder = args.partOrder;

			this.totalReadingMark = args.totalReadingMark;

			this.totalListeningMark = args.totalListeningMark;

			this.totalReadingQuestions = args.totalReadingQuestions;

			this.totalListeningQuestions = args.totalListeningQuestions;

			this.partOrderMagnitiude = args.partOrderMagnitiude;
			this.companyId = args.companyId;
			this.difficulty = args.difficulty
			this.quality = args.quality
			this.repetition = args.repetition
			this.readingDifficulty = args.readingDifficulty
			this.listeningDifficulty = args.listeningDifficulty
			this.readingRepetition = args.readingRepetition
			this.listeningRepetition = args.listeningRepetition
			this.speakingRepetition = args.speakingRepetition
			this.listeningQuality = args.listeningQuality
			this.speakingQuality = args.speakingQuality
			this.writingRepetition = args.writingRepetition
			this.name2 = args.name2;
			this.showInBoost = args.showInBoost;
		}


		 toJson():Exam{
			 //@ts-ignore

			 this["$type"]="Models.Exam"

			 return this;

		}


	}

export const ExamCreator = (args:any)=> new Exam(args)
