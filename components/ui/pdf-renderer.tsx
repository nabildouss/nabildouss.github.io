
export default function PdfRenderer({
    pdfFile,
    pdfTitle,
  }: {
    pdfFile: string
    pdfTitle: string
  }) {
  return (
    <div>
      <h2 className='text-3xl text-center font-semibold mb-8'>{pdfTitle}</h2>
      <iframe className="min-w-full h-screen" src={pdfFile} />
    </div>
  )
}
