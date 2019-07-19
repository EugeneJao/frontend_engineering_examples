import Tpl from './home.html';
import './home.less';
import Img from '@/assets/images/webpack.jpg';
import Csv from '@/assets/data/test.csv'
import Xml from '@/assets/data/test.xml'

let renderTpl = Tpl.replace('</div>', '');
renderTpl += '<img class="img img2" src="' + Img + '" /></div>'

export default {
  name: 'home',
  data() {
    return {
      csv: JSON.stringify(Csv, null, true),
      xml: JSON.stringify(Xml, null, true),
    };
  },
  template: renderTpl,
};
