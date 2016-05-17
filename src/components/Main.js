require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// 获取图片信息
//  var imageDatas = require('../data/imageDatas.json');

//  imageDatas = (function genImageURL(imageDatasArr){
//  	for(var i = 0,j = imageDatasArr.length; i < j; i++){
//  		var singleImageData = imageDatasArr[i];
//  		singleImageData.imageURL = require('../images/'+singleImageData.fileName);

//  		imageDataArr[i] = singleImageData;
//  	}
//  	return imageDatasArr;
//  })(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className = "stage">
      	<section className = "img-sec"></section>
      	<nav clasName = "controllr-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
