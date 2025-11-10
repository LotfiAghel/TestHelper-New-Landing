import  { Guid} from "../../base";
import { IIdMapper } from "./Basics";










	export interface IEntity3<TKEY>  extends IIdMapper<TKEY> {
	}

	export interface IEntity  extends IEntity3<number> {
	}

	export interface ISyncableEntity  extends IEntity3<Guid> {
	}

	export class AEntity   implements IEntity {
		id : number;

		constructor(args:{ id:number }){
			this.id = args.id;

		}


		 toJson():AEntity{
			 //@ts-ignore

			 this["$type"]="ViewGeneratorBase.AEntity"

			 return this;

		}


	}

export var AEntityCreator = (args:any)=> new AEntity(args)
	export class ASyncableEntity   implements ISyncableEntity {
		id : Guid;

		constructor(args:{ id:Guid }){
			this.id = args.id;

		}


		 toJson():ASyncableEntity{
			 //@ts-ignore

			 this["$type"]="ViewGeneratorBase.ASyncableEntity"

			 return this;

		}


	}

export var ASyncableEntityCreator = (args:any)=> new ASyncableEntity(args)
	export class ASyncableEntity2   extends ASyncableEntity {
		cid? : Guid;

		constructor(args:{ id:Guid,cid?:Guid }){
			super(args)

			this.cid = args.cid;

		}


		 toJson():ASyncableEntity2{
			 //@ts-ignore

			 this["$type"]="ViewGeneratorBase.ASyncableEntity2"

			 return this;

		}


	}

export var ASyncableEntity2Creator = (args:any)=> new ASyncableEntity2(args)
