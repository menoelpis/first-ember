import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //this.route('about', {path:'about'}); # can be shorter if path and route matches
  this.route('about');
  this.route('services');
  this.route('contact');

  this.route('posts', {path:'/posts'}, function() {
    this.route('new');
    this.route('post', {path:':post_id'});
  });
});

export default Router;
