import Categories from '../constants/categories';
import FrequencyUnit from '../constants/frequencyUnit';

export default class Challenge {
    title;
    category;
    rule;
    schedule;
    maxMemberCount;
    members;

    constructor(object) {
        this.title = object.title;
        this.category = object.category;
        this.rule = object.rule;
        this.schedule = object.schedule;
        this.maxMemberCount = object.maxMemberCount
        this.members = object.members;
    }
}