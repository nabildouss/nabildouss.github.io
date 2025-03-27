
export default function PdfRenderer({
    pdfFile,
    pdfTitle,
  }: {
    pdfFile: string
    pdfTitle: string
  }) {
  return (
    <div>
      <h2 className='text-2xl text-center font-semibold mb-8'>{pdfTitle}</h2>
      <embed className="min-w-full h-screen" src={pdfFile} />
    </div>
  )
}
