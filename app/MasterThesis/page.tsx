import PdfRenderer
 from "@/components/ui/pdf-renderer"
export default function MasterThesisPage() {
    return(
        <div className="mt-10">
            <PdfRenderer pdfFile='/Abschlussarbeit_386360.pdf' pdfTitle="Multi-domain Sentiment Analysis with an Active Learning Mechanism"/>
        </div>
    )
}