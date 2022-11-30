export class Question {
    constructor(public text: string, public image: string, public lifeTimeSeconds: number, public options: Map<string, string>) {}
}