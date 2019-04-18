import DS from 'ember-data';
const { Model, attr } = DS;

export default class TweetModel extends Model {
	@attr('string') description;
	@attr('string') createdAt;
	@attr('string') userName;
}
