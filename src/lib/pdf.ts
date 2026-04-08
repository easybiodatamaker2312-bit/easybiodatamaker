'use client';

export async function downloadBiodataAsPDF(elementId: string, filename: string = 'biodata.pdf') {
  const html2canvas = (await import('html2canvas')).default;
  const jsPDF = (await import('jspdf')).default;

  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found:', elementId);
    return;
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // If content fits on one page
    if (imgHeight <= pageHeight) {
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    } else {
      // Multi-page handling
      let position = 0;
      let remainingHeight = imgHeight;

      while (remainingHeight > 0) {
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        remainingHeight -= pageHeight;
        position -= pageHeight;
        if (remainingHeight > 0) {
          pdf.addPage();
        }
      }
    }

    // Add watermark for free tier
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Created with EasyBiodataMaker.com', pageWidth / 2, pageHeight - 5, {
      align: 'center',
    });

    pdf.save(filename);
  } catch (error) {
    console.error('PDF generation failed:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
}
