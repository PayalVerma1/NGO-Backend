const express = require("express");
const PDFDocument = require("pdfkit");
const router = express.Router();
router.post("/generate-certificate", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  try {
    const doc = new PDFDocument();
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=certificate_${name.replace(/\s+/g, "_")}.pdf`
    );
    res.setHeader("Content-Type", "application/pdf");
    doc.pipe(res);
    doc
      .fontSize(25)
      .text("Certificate of Volunteering", { align: "center" })
      .moveDown();

    doc
      .fontSize(20)
      .text("This is to certify that,", { align: "center" })
      .moveDown();

    doc
      .fontSize(30)
      .text(name, { align: "center", underline: true })
      .moveDown();

    doc
      .fontSize(20)
      .text(
        "has successfully contributed to the well-being of people through our NGO.",
        { align: "center" }
      )
      .moveDown();

    doc
      .fontSize(15)
      .text(`Date: ${new Date().toLocaleDateString()}`, { align: "right" });
    doc.end();
  } catch (error) {
    console.error("Error generating certificate:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = router;
