/**
 *
 * project: react-jest
 * fileName: jest.setup
 * date: 2019-09-08 10:37
 * author: cengfucheng
 * ide: WebStorm
 * about: jest启动文件
 *
 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter(),
});
