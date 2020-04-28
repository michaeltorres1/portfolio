import React, { Component } from 'react';
import { Document, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  render() {
    return (
      <div>
        <Document
          file='michael-torres-resume.pdf'
          onLoadSuccess={this.onDocumentLoadSuccess}
        ></Document>
      </div>
    );
  }
}

export default Resume;
