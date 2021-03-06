import { Deserializable } from './deserializable.model';
import { Tipser, Follower } from './user.model';

export class Session implements Deserializable {
    public id: string;
    public tipser: Tipser;
    public followers: Follower[];
    public level: number;
    public shortDescription: string;
    public description: string;
    public associatedPhoto: string;
    public associatedMedia: MediaDeviceKind;
    public maxFollowers: number;
    public minFollowers: number;
    public type: string;
    public date: string;
    public sessionEval: SessionEval;
    
    
    deserialize(input: any): this {
        this.tipser = new Tipser().deserialize(input.tipser);
        this.followers = input.followers.map(foll =>{
            return new Follower().deserialize(foll);
        })
        Object.assign(this, input);
        return this;
    }
}
export class SessionEval implements Deserializable {
    public id: string;
    public questionAnswers: QuestionAnswer[];

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
export class QuestionAnswer implements Deserializable {
    public id: string;
    public question: string;
    public answers: Answer[];

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
export class Answer implements Deserializable {
    public id: string;
    public answerType: string;
    public answerLabel: string;
    public answerScore: number;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}


export enum AnswerType {
    "goodOrBad",
    "scored"
}
