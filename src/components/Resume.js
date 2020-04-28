import React, { Component } from 'react';
import { Document } from 'react-pdf';

export default class App extends Component {
  render() {
    return (
      <div>
        <div style={{ width: 600 }}>
          <Document
            file='michael-torres-resume.pdf'
            onLoadSuccess={this.onDocumentLoadSuccess}
          ></Document>
        </div>
      </div>
    );
  }
}
