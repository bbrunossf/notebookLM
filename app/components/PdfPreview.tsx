// // src/app/components/PdfPreview.tsx
// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// interface PdfPreviewProps {
//     pdf: string | null; // O caminho para o PDF selecionado
// }

// const PdfPreview: React.FC<PdfPreviewProps> = ({ pdf }) => {
//     if (!pdf) {
//         return <div>Selecione um PDF para visualizar.</div>; // Mensagem quando não há PDF selecionado
//     }

//     return (
//         <div className="pdf-preview p-4 border border-gray-200 rounded-md">
//             <h2 className="text-lg font-semibold mb-2">Visualização do PDF</h2>
//             <Document file={`/pdfs/${pdf}`} className="border border-gray-300 rounded">
//                 <Page pageNumber={1} />
//             </Document>
//         </div>
//     );
// };

// export default PdfPreview;


// app/components/PdfViewer.tsx
//Visualizador usando iframe nativo do browser, sem necessidade de bibliotecas externas
// import React, { useState } from 'react';

// const PdfViewer: React.FC = () => {
//   const [pdfUrl, setPdfUrl] = useState<string | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setPdfUrl(url);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept="application/pdf" onChange={handleFileChange} />
//       {pdfUrl && (
//         <iframe
//           src={pdfUrl}
//           width="100%"
//           height="600px"
//           style={{ border: 'none' }}
//           title="PDF Preview"
//         />
//       )}
//     </div>
//   );
// };

// export default PdfViewer;


import React from 'react';

interface PdfPreviewProps {
    pdf: string | null; // O caminho para o PDF selecionado
}

const PdfPreview: React.FC<PdfPreviewProps> = ({ pdf }) => {
    if (!pdf) {
        return <div>Selecione um PDF para visualizar.</div>;
    }

    return (
        <div className="pdf-preview p-4 border border-gray-200 rounded-md">
            <h2 className="text-lg font-semibold mb-2">Visualização do PDF</h2>
            <iframe
                src={`/pdfs/${pdf}`} // Incluindo o caminho onde o PDF está armazenado
                width="100%"
                height="600px"
                style={{ border: 'none' }}
                title="PDF Preview"
            />
        </div>
    );
};

export default PdfPreview;