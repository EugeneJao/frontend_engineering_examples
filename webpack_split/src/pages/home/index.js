import Tpl from './home.html';
import './home.less';
import Img from '@/assets/images/webpack.jpg';

let renderTpl = Tpl.replace('</div>', '');
renderTpl += '<img class="img img2" src="' + Img + '" /></div>'

export default {
  name: 'home',
  template: renderTpl,
};
