export class Control {
    constructor(
        public field: string,
        public label: string,
        public type: string,
        public hidden: string,
        public mandatory?: boolean
    ) { }
}