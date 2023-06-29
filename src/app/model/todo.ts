export class Todo{
    constructor(
        public id:number=0,
        public title:string='',
        public content:string='',
        public complete:boolean=false
    ){}
}