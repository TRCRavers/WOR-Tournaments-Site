import Vue from 'vue';
import Router from 'vue-router';
import Root from './root.vue';
import Routes from './routes.js';

Vue.use(Router);

const router = new Router({
	routes: Routes.routing
});

new Vue({
	router,
	el: '#container',
	render: function(t) {
		return t(Root);
	}
});

