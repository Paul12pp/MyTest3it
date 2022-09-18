import 'react-native';
import React from 'react';
import {Typography} from '../../../src/components/Typography';
import renderer from 'react-test-renderer';
import styles from '../../../src/components/Typography/style';
import {fontFamily} from '../../../src/constants/fontSizes';
import {lineHeight} from '../../../src/constants/lineHeight';
import {letterSpacing} from '../../../src/constants/letterSpacing';

describe('The Typography component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Typography />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with children', () => {
    const tree = renderer
      .create(<Typography>Hello World!</Typography>)
      .toJSON();
    expect(tree.children[0]).toBe('Hello World!');
    expect(tree).toMatchSnapshot();
  });

  it('should change fontSize when variant is small', () => {
    const tree = renderer
      .create(<Typography variant={{type: 'small'}} />)
      .toJSON();
    expect(tree.props.style.fontSize).toBe(styles.small.fontSize);
  });

  it('should change fontSize when variant is large', () => {
    const tree = renderer
      .create(<Typography variant={{type: 'large'}} />)
      .toJSON();
    expect(tree.props.style.fontSize).toBe(styles.large.fontSize);
  });

  it('should change the type when variant is body1', () => {
    const tree = renderer
      .create(<Typography variant={{type: 'body1'}} />)
      .toJSON();
    expect(tree.props.style.lineHeight).toBe(lineHeight.body.body1);
    expect(tree.props.style.letterSpacing).toBe(letterSpacing.body.body1);
  });

  it('should change the type when variant is body2', () => {
    const tree = renderer
      .create(<Typography variant={{type: 'body2'}} />)
      .toJSON();
    expect(tree.props.style.lineHeight).toBe(lineHeight.body.body2);
    expect(tree.props.style.letterSpacing).toBe(letterSpacing.body.body2);
  });

  it('should change the type when variant is h5', () => {
    const tree = renderer
      .create(<Typography variant={{type: 'h5'}} />)
      .toJSON();
    expect(tree.props.style.lineHeight).toBe(lineHeight.h5);
    expect(tree.props.style.letterSpacing).toBe(letterSpacing.h5);
  });

  it('should change the type when variant is h4', () => {
    const tree = renderer
      .create(<Typography variant={{type: 'h4'}} />)
      .toJSON();
    expect(tree.props.style.lineHeight).toBe(lineHeight.h4);
    expect(tree.props.style.letterSpacing).toBe(letterSpacing.h4);
  });

  it('should change the type when variant is overline', () => {
    const tree = renderer
      .create(<Typography variant={{type: 'overline'}} />)
      .toJSON();
    expect(tree.props.style.letterSpacing).toBe(letterSpacing.overline);
  });

  it('should accept custom styles', () => {
    const tree = renderer
      .create(<Typography style={{color: 'red'}} />)
      .toJSON();
    expect(tree.props.style.color).toBe('red');
  });
});
