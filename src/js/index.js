import 'core-js/modules/es6.array.from';
import mainStyles from '../css/main.css';
import loadFullImages from './loadImages';

window.addEventListener('load', function onWindowLoad() {
	loadFullImages();
});