import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
	@tracked tweets = [
		{ id:1, userName:"Yvone", description:"hola"},
		{ id:2, userName:"Yvone", description:"hola"},
		{ id:3, userName:"Yvone", description:"hola"},
	];

	@action
	onSubmit (text) {
		let post = this.store.createRecord('draft_tweet', {
			avatar: "https://www.clipartmax.com/png/small/156-1564089_silence-icon-profile-icons.png",
			user_name: "Alain",
			description: text,
			created_at: "2019-04-17"
		});
		post.save();
	}
}