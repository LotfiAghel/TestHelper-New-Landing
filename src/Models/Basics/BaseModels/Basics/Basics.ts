









	export interface ICUAT  {
		createdAt : Date;

		updatedAt? : Date;

		deletedAt? : Date;

	}

	export interface IIdMapper<T>   {
		id : T;

	}

	export class CUAT   implements ICUAT {
		createdAt : Date;

		updatedAt? : Date;

		deletedAt? : Date;

		constructor(args:{ createdAt:Date,updatedAt?:Date,deletedAt?:Date }){
			this.createdAt = args.createdAt;

			this.updatedAt = args.updatedAt;

			this.deletedAt = args.deletedAt;

		}


		 toJson():CUAT{
			 //@ts-ignore

			 this["$type"]="Models.CUAT"

			 return this;

		}


	}

export var CUATCreator = (args:any)=> new CUAT(args)
	export class IdMapper<T>   extends CUAT implements IIdMapper<T> {
		id : T;

		constructor(args:{ createdAt:Date,updatedAt?:Date,deletedAt?:Date,id:T }){
			super(args)

			this.id = args.id;

		}


		 toJson():IdMapper<T>{
			 //@ts-ignore

			 this["$type"]="Models.IdMapper<T>"

			 return this;

		}


	}
