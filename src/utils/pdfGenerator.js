import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

/**
 * Generates a professional PDF report.
 * @param {Object} options
 * @param {string} options.title - Report title
 * @param {Array} options.inputs - Array of { Eticheta: string, Valoare: string }
 * @param {Array} options.results - Array of { Eticheta: string, Valoare: string }
 * @param {string} options.filename - Name of the file to download
 */
export function generatePDF({ title, inputs, results, filename }) {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // --- Header ---
    doc.setFontSize(20);
    doc.setTextColor(26, 54, 93); // Dark Blue (#1a365d)
    doc.setFont("helvetica", "bold");
    doc.text("MANUALUL.RO", 14, 20);

    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139); // Slate-500
    doc.setFont("helvetica", "normal");
    const dateStr = new Date().toLocaleDateString('ro-RO');
    doc.text(`Data: ${dateStr}`, pageWidth - 14, 20, { align: "right" });

    // Divider line
    doc.setDrawColor(226, 232, 240); // Slate-200
    doc.line(14, 25, pageWidth - 14, 25);

    // --- Title ---
    doc.setFontSize(18);
    doc.setTextColor(15, 23, 42); // Slate-900
    doc.setFont("helvetica", "bold");
    doc.text(title, pageWidth / 2, 40, { align: "center" });

    // --- Table 1: Date Introduse ---
    autoTable(doc, {
        startY: 50,
        head: [['Parametru Introdus', 'Valoare']],
        body: inputs.map(i => [i.Eticheta, i.Valoare]),
        theme: 'striped',
        headStyles: {
            fillColor: [100, 116, 139], // Slate-500
            textColor: [255, 255, 255],
            fontStyle: 'bold'
        },
        styles: {
            fontSize: 10,
            cellPadding: 4
        },
        margin: { left: 14, right: 14 }
    });

    // --- Table 2: Rezultate & Analiză ---
    const finalY = doc.lastAutoTable.finalY || 50;

    // Section Header for Results
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42);
    doc.setFont("helvetica", "bold");
    doc.text("Rezultate & Analiză", 14, finalY + 15);

    autoTable(doc, {
        startY: finalY + 20,
        head: [['Indicator', 'Rezultat']],
        body: results.map(r => [r.Eticheta, r.Valoare]),
        theme: 'grid',
        headStyles: {
            fillColor: [37, 211, 102], // Emerald-500
            textColor: [255, 255, 255],
            fontStyle: 'bold'
        },
        styles: {
            fontSize: 10,
            cellPadding: 5
        },
        columnStyles: {
            1: { fontStyle: 'bold', textColor: [5, 150, 105] } // Emerald-700
        },
        margin: { left: 14, right: 14 }
    });

    // --- Footer ---
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(148, 163, 184); // Slate-400
        doc.setFont("helvetica", "italic");

        const footerTextLine1 = "Document generat gratuit pe Manualul.ro - Ghidul tău financiar.";
        const footerTextLine2 = "Acest document este o estimare informativă și nu are valoare contractuală.";

        doc.text(footerTextLine1, pageWidth / 2, pageHeight - 15, { align: "center" });
        doc.text(footerTextLine2, pageWidth / 2, pageHeight - 10, { align: "center" });

        // Page number
        doc.text(`Pagina ${i} din ${pageCount}`, pageWidth - 14, pageHeight - 10, { align: "right" });
    }

    doc.save(filename || 'raport-manualul.pdf');
}
