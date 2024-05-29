function generatePDF(containerId) {
    const container = document.getElementById(containerId);

    // Download as PDF 
    const pdfOptions = {
        margin: 10,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // html2pdf()
    //     .from(container)
    //     .set(pdfOptions)
    //     .outputPdf()
    //     .then(function (pdf) {
    //         const pdfBlob = new Blob([pdf], { type: 'application/pdf' });
    //         const pdfUrl = URL.createObjectURL(pdfBlob);
    //         const pdfLink = document.createElement('a');
    //         pdfLink.href = pdfUrl;
    //         pdfLink.download = 'resume.pdf';
    //         pdfLink.click();
    //     });

    html2pdf()
        .from(container)
        .set(pdfOptions)
        .save()
        .then(() => {
            console.log('PDF generated and downloaded successfully.');
        })
        .catch(err => {
            console.error('Error generating PDF:', err);
        });

    console.log(container)
} 