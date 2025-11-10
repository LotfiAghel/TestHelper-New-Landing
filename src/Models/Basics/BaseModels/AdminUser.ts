import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../base";




// import { IdMapper   , IdMapperCreator } from "Models/Basics/BaseModels/"
import { IdMapper } from "./Basics/Basics";





	export class BaseUser   extends IdMapper<Guid> {
		constructor(args:{ id:Guid,createdAt:Date,updatedAt?:Date,deletedAt?:Date }){
			super(args)

		}


		 toJson():BaseUser{
			 //@ts-ignore

			 this["$type"]="Models.BaseUser"

			 return this;

		}


	}

export var BaseUserCreator = (args:any)=> new BaseUser(args)
