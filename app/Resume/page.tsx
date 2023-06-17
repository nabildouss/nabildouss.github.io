import PdfRenderer
 from "@/components/ui/pdf-renderer"
export default function ResumePage() {
    return(
        <div className="mt-10">
            <PdfRenderer pdfFile='/Nabil_Douss_Resume.pdf' pdfTitle="Curriculum Vitae"/>
        </div>
    )
}