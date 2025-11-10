import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";








	export class BooleanResponse   {
		done : Boolean;

		text : string;

		constructor(args:{ done:Boolean,text:string }){
			this.done = args.done;

			this.text = args.text;

		}


		 toJson():BooleanResponse{
			 //@ts-ignore

			 this["$type"]="ClientMsgs.BooleanResponse"

			 return this;

		}


	}

export var BooleanResponseCreator = (args:any)=> new BooleanResponse(args)
	export class GetIds<KEY>   {
		ids : List<KEY>;

		constructor(args:{ ids:List<KEY> }){
			this.ids = args.ids;

		}


		 toJson():GetIds<KEY>{
			 //@ts-ignore

			 this["$type"]="ClientMsgs.GetIds<KEY>"

			 return this;

		}


	}


	export class GetIdsResponse<T>   extends BooleanResponse {
		data : List<T>;

		constructor(args:{ done:Boolean,text:string,data:List<T> }){
			super(args)

			this.data = args.data;

		}


		 toJson():GetIdsResponse<T>{
			 //@ts-ignore

			 this["$type"]="ClientMsgs.GetIdsResponse<T>"

			 return this;

		}


	}
