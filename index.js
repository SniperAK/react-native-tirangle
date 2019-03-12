import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
  },
});

export default class Triangle extends Component {
  static propTypes = {
    direction: PropTypes.oneOf(['up', 'right', 'left', 'down', 'up-right', 'up-left', 'down-right', 'down-left']),
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
  }
  static defaultProps = {
    direction: 'up',
    width: 0,
    height: 0,
    color: 'white',
  }

  constructor( props ) {
    super(props);
  }

  shouldComponentUpdate( nextProps ){
    return (
      this.props.direction != nextProps.direction ||
      this.props.width != nextProps.width ||
      this.props.height != nextProps.height ||
      this.props.color != nextProps.color
    );
  }

  _borderStyles() {
    let {direction, width, height, color} = this.props;
    switch (direction) {
      case 'up' : return {
        borderRightWidth   : width/2.0,
        borderBottomWidth  : height,
        borderLeftWidth    : width/2.0,
        borderBottomColor  : color,
      };
      case 'right' : return {
        borderTopWidth     : height/2.0,
        borderBottomWidth  : height/2.0,
        borderLeftWidth    : width,
        borderLeftColor    : color,
      };
      case 'down' : return {
        borderTopWidth     : height,
        borderRightWidth   : width/2.0,
        borderLeftWidth    : width/2.0,
        borderTopColor     : color,
      };
      case 'left' : return {
        borderTopWidth     : height/2.0,
        borderRightWidth   : width,
        borderBottomWidth  : height/2.0,
        borderRightColor   : color,
      };
      case 'up-left' : return {
        borderTopWidth     : height,
        borderRightWidth   : width,
        borderTopColor     : color,
      };
      case 'up-right' : return {
        borderRightWidth   : width,
        borderBottomWidth  : height,
        borderRightColor   : color,
      };
      case 'down-left' : return {
        borderTopWidth     : height,
        borderLeftWidth    : width,
        borderLeftColor    : color,
      };
      case 'down-right' : return {
        borderBottomWidth  : height,
        borderLeftWidth    : width,
        borderBottomColor  : color,
      }
    }
    
    console.warn('Triangle.js wrong direction. ' + direction + ' is invalid. Must be one of: ' + ['up', 'right', 'down', 'left', 'up-right', 'up-left', 'down-right', 'down-left']);
   }

   render(){
     var borderStyles = Object.assign({
      borderTopWidth    : 0,
      borderRightWidth  : 0,
      borderBottomWidth : 0,
      borderLeftWidth   : 0,
      borderTopColor    : 'transparent',
      borderRightColor  : 'transparent',
      borderBottomColor : 'transparent',
      borderLeftColor   : 'transparent',
     }, this._borderStyles());
     return (
       <View style={[styles.triangle, borderStyles, this.props.style]}/>
     )
   }
}
