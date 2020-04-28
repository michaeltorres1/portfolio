import React, { Component } from 'react';
import { Document, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Resume extends Component {
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
