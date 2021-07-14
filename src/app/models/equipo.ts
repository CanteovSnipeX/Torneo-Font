
export class Equipo {
    constructor(
        public _id: string,
        public name: string,
        public nintegrantes: string,
        public goles: [number],
        public image: string,
    ){}
}