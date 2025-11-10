import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";




import { IdMapper   } from "../Basics/Basics"
// import { CUAT   } from "../Basics/Basics"






	export class Entity   extends IdMapper<number> {
		constructor(args:{ id:number,createdAt:Date,updatedAt?:Date,deletedAt?:Date }){
			super(args)

		}


		 toJson():Entity{
			 //@ts-ignore

			 this["$type"]="Models.Entity"

			 return this;

		}


	}

export var EntityCreator = (args:any)=> new Entity(args)
	export class Id4Entity   extends Entity {
		constructor(args:{ id:number,createdAt:Date,updatedAt?:Date,deletedAt?:Date }){
			super(args)

		}


		 toJson():Id4Entity{
			 //@ts-ignore

			 this["$type"]="Models.Id4Entity"

			 return this;

		}


	}

export var Id4EntityCreator = (args:any)=> new Id4Entity(args)
