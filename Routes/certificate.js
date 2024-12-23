const express = require("express");
const PDFDocument = require("pdfkit");
const fs = require("fs");

const router = express.Router();

// Route to generate a certificate
router.post("/generate-certificate", async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    try {
        // Create a new PDF document
        const doc = new PDFDocument();

        // Define the output path
        const fileName = `certificate_${name.replace(/\s+/g, "_")}.pdf`;
        const filePath = `./certificates/${fileName}`;

        // Ensure the certificates directory exists
        if (!fs.existsSync("./certificates")) {
            fs.mkdirSync("./certificates");
        }

        // Pipe the PDF to a file
        const stream = fs.createWriteStream(filePath);
        doc.pipe(stream);

        // Add content to the certificate
        doc
            .fontSize(25)
            .text("Certificate of Volunteering", { align: "center" })
            .moveDown();

        doc
            .fontSize(20)
            .text(`This is to certify that, { align: "center" }`)
            .moveDown();

        doc
            .fontSize(30)
            .text(name, { align: "center", underline: true })
            .moveDown();

        doc
            .fontSize(20)
            .text(`has successfully contributed in the well being of people by the virtue of our NGO ., { align: "center" }`)
            .moveDown();

        doc
            .fontSize(15)
            .text(`Date: ${new Date().toLocaleDateString()}, { align: "right" }`);

        // Finalize the document
        doc.end();

        // Wait for the stream to finish
        stream.on("finish", () => {
            res.download(filePath, fileName, (err) => {
                if (err) {
                    console.error("Error in sending file:", err);
                    res.status(500).send("Error in generating certificate.");
                }
            });
        });
    } catch (error) {
        console.error("Error generating certificate:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

module.exports = router;